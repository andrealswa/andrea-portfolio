import React from 'react';
import { Item } from './Item';
import { ActiveItem } from './ActiveItem';

export const Table = (props) => {
  const items = props.project_modules.map((data, key) => {
    console.log(data, key);
    if (data.active === true) {
      return (
        <ActiveItem
          item={data}
          handleVideoChange={props.handleVideoChange}
          key={key}
          title={data.title}
          description={data.description}
          url={data.url}
          github_link={data.github_link}
        />
      );
    } else {
      return (
        <Item
          item={data}
          handleVideoChange={props.handleVideoChange}
          key={key}
          title={data.title}
          description={data.description}
          url={data.url}
          github_link={data.github_link}
        />
      );
    }
  });
  items.forEach((data) => {
    console.log(data);
  });
  return (
    <div className="pt-5 pb-5">
      <div className="container">
        <div className="text-center">
          <h2 className="pt-4 pb-4">View my Projects</h2>
        </div>
        {items}
      </div>
    </div>
  );
};
