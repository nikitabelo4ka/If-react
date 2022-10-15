import React, { useState } from 'react';
import AvailableHotels from '../containers/AvailableHotels.jsx';
import HomesGuestsLoves from '../containers/HomesGuestsLoves.jsx';
import TopSection from './Main/TopSection.jsx';

function MainPageContent({ changeFilterState, isFilterActive }) {
  const [foundHotels, setFoundHotels] = useState([]);

  const isSignIn = localStorage.getItem('isSignIn');

  if (!isSignIn || isSignIn === 'false') {
    window.location.replace('/sign_in');
  }

  return (
    <div>
      <TopSection
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
