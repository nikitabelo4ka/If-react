import React, { useState, useEffect } from 'react';
import Header from '../components/Main/Header.jsx';
import TopSection from '../components/Main/TopSection.jsx';
import '../styles/Main/Main.css';
import background from '../images/background.png';

function Main(props) {
  const [foundHotels, setFoundHotels] = useState([]);

  function updateData(value) {
    setFoundHotels(value);
  }

  useEffect(() => {
    props.updateData(foundHotels);
  }, [foundHotels]);

  return (
    <div className="main" style={{ backgroundImage: `url(${background})` }}>
      <div className="main-container col-s-12">
        <Header />
        <TopSection updateData={updateData} />
      </div>
    </div>
  );
}

export default Main;
