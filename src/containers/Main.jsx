import React, { useState, useEffect } from 'react';
import Header from '../components/Main/Header.jsx';
import TopSection from '../components/Main/TopSection.jsx';
import '../assets/styles/Main/Main.css';
import background from '../assets/images/background.png';

function Main(props) {
  const [foundHotels, setFoundHotels] = useState([]);
  const [isAvailableHotelsActive, setIsAvailableHotelsActive] = useState(false);

  useEffect(() => {
    props.updateData(foundHotels, isAvailableHotelsActive);
  }, [foundHotels, isAvailableHotelsActive]);

  return (
    <div className="main" style={{ backgroundImage: `url(${background})` }}>
      <div className="main-container col-s-12">
        <Header />
        <TopSection updateData={(value, isActive) => { setFoundHotels(value); setIsAvailableHotelsActive(isActive); }} />
      </div>
    </div>
  );
}

export default Main;
