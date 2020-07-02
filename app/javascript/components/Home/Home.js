import React, { useState } from 'react';
import { Jumbotron } from './Jumbotron';
import { Table } from './Table/Table';

export const Home = () => {
  const project_modules = useState([
    {
      id: 1,
      title: 'Diversify Computer Science',
      description: 'lorem ipsum',
      active: true,
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
  return (
    <div>
      <Jumbotron />
      <Table project_modules={project_modules} />
    </div>
  );
};
