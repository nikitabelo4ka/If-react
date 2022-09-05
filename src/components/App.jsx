import React, { useState } from 'react';
import HomesGuestsLoves from '../containers/HomesGuestsLoves.jsx';
import Main from '../containers/Main.jsx';
import AvailableHotels from '../containers/AvailableHotels.jsx';

function App() {
  const [foundHotels, setFoundHotels] = useState([]);
  const [isAvailableHotelsActive, setIsAvailableHotelsActive] = useState(false);

  return (
    <div>
      <Main updateData={(value, isActive) => { setFoundHotels(value); setIsAvailableHotelsActive(isActive); }} />
      <AvailableHotels foundHotels={foundHotels} isActive={isAvailableHotelsActive} />
      <HomesGuestsLoves />
    </div>
  );
}

export default App;
