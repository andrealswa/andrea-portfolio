import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Jumbotron } from './Jumbotron';
import { Table } from './Table/Table';

export const Home = () => {
  const [project_modules, setProjectModules] = useState([
    {
      id: 1,
      title: 'Diversify Computer Science',
      description: 'lorem ipsum',
      active: false,
    },
    {
      id: 2,
      title: 'Cannoli Windsor',
      description: 'lorem ipsum',
      active: false,
    },
    { id: 3, title: 'UWinMaps', description: 'lorem ipsum', active: false },
    { id: 4, title: 'CafeKove', description: 'lorem ipsum', active: false },
  ]);

  useEffect(() => {
    axios
      .get('/projects.json')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleVideoChange = (item, event) => {
    event.preventDefault();
    // console.log('In handleVideoChange');
    // console.log(item.title);
    let _project_modules = [...project_modules];
    // console.log(_project_modules);
    _project_modules.map((data) => {
      data.active = false;
    });
    item.active = !item.active;

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
