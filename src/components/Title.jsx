import React from 'react';
import '../styles/Title.css';

function Title(props) {
  return (
    <div className="label">
      <h2 className="label-name">{props.title}</h2>
    </div>
  );
}

export default Title;
