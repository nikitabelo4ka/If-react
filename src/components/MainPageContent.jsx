import React, { useState } from 'react';
import Main from '../containers/Main.jsx';
import AvailableHotels from '../containers/AvailableHotels.jsx';
import HomesGuestsLoves from '../containers/HomesGuestsLoves.jsx';

function MainPageContent({ changeFilterState, isFilterActive }) {
  const [foundHotels, setFoundHotels] = useState([]);

  return (
    <div>
      <Main
        updateData={(value) => setFoundHotels(value)}
        changeFilterState={changeFilterState}
        isFilterActive={isFilterActive}
      />
      <AvailableHotels foundHotels={foundHotels} />
      <HomesGuestsLoves />
    </div>
  );
}

export default MainPageContent;
