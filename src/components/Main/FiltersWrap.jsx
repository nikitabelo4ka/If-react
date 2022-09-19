import React, { useState } from 'react';
import '../../assets/styles/Main/FiltersWrap.css';
import Filter from './Filter.jsx';
import AgeSelectArea from './AgeSelectArea.jsx';

function FiltersWrap({
  isFilterActive,
  changeFilterState,
  updateLabelAdults,
  updateLabelChildren,
  updateLabelRooms,
}) {
  const [numberOfChildren, setNumberOfChildren] = useState(0);

  return (
    <div
      id="filtres"
      className={isFilterActive ? 'filtres' : 'filtres unactive'}
      onClick={(event) => {
        event.stopPropagation();
        changeFilterState(true);
      }}
    >
      <Filter id="adults" value="1" min="1" max="30" updateLabel={updateLabelAdults} />
      <Filter
        id="children"
        value="0"
        min="0"
        max="10"
        updateLabel={updateLabelChildren}
        updateData={(value) => setNumberOfChildren(value)}
      />
      <Filter id="rooms" value="1" min="1" max="30" updateLabel={updateLabelRooms} />
      <AgeSelectArea numberOfChildren={numberOfChildren} />
    </div>
  );
}

export default FiltersWrap;
