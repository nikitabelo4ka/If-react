import React from 'react';
import '../../assets/styles/Main/FiltersWrap.css';
import Filter from './Filter.jsx';

function FiltersWrap() {
  return (
    <div id="filtres" className="filtres unactive">
      <Filter for="adults" value="1" min="1" max="30" />
      <Filter for="children" value="0" min="0" max="10" />
      <Filter for="rooms" value="1" min="1" max="30" />
    </div>
  );
}

export default FiltersWrap;
