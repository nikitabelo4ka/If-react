import React, { useState } from 'react';
import HomesGuestsLoves from '../containers/HomesGuestsLoves.jsx';
import Main from '../containers/Main.jsx';
import AvailableHotels from '../containers/AvailableHotels.jsx';

function App() {
  const [foundHotels, setFoundHotels] = useState([]);
  const [isFilterActive, setIsFilterActive] = useState(false);

  return (
    <div onClick={() => setIsFilterActive(false)}>
      <Main
        updateData={(value) => setFoundHotels(value)}
        changeFilterState={(value) => setIsFilterActive(value)}
        isFilterActive={isFilterActive}
      />
      <AvailableHotels foundHotels={foundHotels} />
      <HomesGuestsLoves />
    </div>
  );
}

export default App;
