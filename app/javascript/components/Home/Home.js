import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Jumbotron } from './Jumbotron';
import { Table } from './Table/Table';
import { object } from 'prop-types';

export const Home = () => {
  const [project_modules, setProjectModules] = useState([]);

  useEffect(() => {
    axios
      .get('/projects.json')
      .then((response) => {
        // console.log(response);
        let result = [];
        response.data.data.forEach((item) => {
          result.push({
            id: item.id,
            title: item.title,
            description: item.description,
            url: item.url,
            active: false,
          });
        });
        setProjectModules(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleVideoChange = (item, event) => {
    event.preventDefault();
    // console.log('In handleVideoChange');
    console.log(item.active);
    let _project_modules = [
      ...project_modules.map((object) => {
        return { ...object };
      }),
    ];
    // console.log(_project_modules);
    _project_modules.forEach((data) => {
      data.active = false;
    });
    console.log(item.active);
    item.active = !item.active;
    // console.log(item.active);

    _project_modules[item.id - 1] = item;
    setProjectModules(_project_modules);
  };

  return (
    <div>
      <Jumbotron />
      <Table
        handleVideoChange={handleVideoChange}
        project_modules={project_modules}
      />
    </div>
  );
};
