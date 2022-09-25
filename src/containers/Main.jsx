import React from 'react';
import Header from '../components/Main/Header.jsx';
import TopSection from '../components/Main/TopSection.jsx';
import '../assets/styles/Main/Main.css';
import background from '../assets/images/background.png';

function Main({ updateData, changeFilterState, isFilterActive }) {
  return (
    <div className="main" style={{ backgroundImage: `url(${background})` }}>
      <div className="main-container col-s-12">
        <Header />
        <TopSection
          updateData={updateData}
          changeFilterState={changeFilterState}
          isFilterActive={isFilterActive}
        />
      </div>
    </div>
  );
}

export default Main;
