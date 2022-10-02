import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Layout.jsx';
import MainPageContent from './MainPageContent.jsx';
import HotelPage from './Main/HotelPage.jsx';

function App() {
  const [isFilterActive, setIsFilterActive] = useState(false);

  return (
    <div onClick={() => setIsFilterActive(false)}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <MainPageContent
                  changeFilterState={(value) => setIsFilterActive(value)}
                  isFilterActive={isFilterActive}
                />
              }
            />
            <Route path="hotels/:id" element={<HotelPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
