import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Homepage } from './Views/HomePageView/Homepage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ProductPromotion } from './Components/ProductPromotion/ProductPromotion';
import { OcassionHomepage } from './Components/Ocassion/Ocassion';
import { Footer } from './Components/Footer/Footer';
import { ProjectStudio } from './Components/ProjectStudio/ProjectStudio';
import { HomepageCategory } from './Views/HomepageCategory/HomepageCategory';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/1' element={<HomepageCategory />} />
        <Route path='/2' element={<ProjectStudio />} />
        <Route path='/3' element={<ProductPromotion />} />
        <Route path='/4' element={<OcassionHomepage />} />
      </Routes>
    </div>
  );
};

export default App;
