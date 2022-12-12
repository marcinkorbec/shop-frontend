import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Homepage } from './Views/HomePageView/Homepage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { HomepageCategory } from './Views/HomepageCategory/HomepageCategory';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/1' element={<HomepageCategory />} />
      </Routes>
    </div>
  );
};

export default App;
