import React from 'react';

function ListItem({ name }) {
  return (
    <li className="elem">
      <a className="link" href="">
        {name}
      </a>
    </li>
  );
}

export default ListItem;
