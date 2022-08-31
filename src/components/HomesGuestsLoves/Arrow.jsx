import React from 'react';
import '../../styles/HomesGuestsLoves/Arrow.css';
import IconsSVG from '../../images/sprite.svg';

function Arrow() {
  return (
    <svg className="arrow">
      <use xlinkHref={`${IconsSVG}#arrow`} />
    </svg>
  );
}

export default Arrow;
