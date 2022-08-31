import React, { useState } from 'react';
import HomesGuestsLoves from '../containers/HomesGuestsLoves.jsx';
import Main from '../containers/Main.jsx';
import AvailableHotels from '../containers/AvailableHotels.jsx';

function App() {
  const [foundHotels, setFoundHotels] = useState([]);

  function updateData(value) {
    setFoundHotels(value);
  }

  return (
    <div>
      <Main updateData={updateData} />
      <AvailableHotels foundHotels={foundHotels} />
      <HomesGuestsLoves />
    </div>
  );
}

export default App;
