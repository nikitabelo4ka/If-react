import React from 'react';
import '../../assets/styles/HomesGuestsLoves/Title.css';

function Title({ title }) {
  return (
    <div className="label">
      <h2 className="label-name">{title}</h2>
    </div>
  );
}

export default Title;
