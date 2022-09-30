import React from 'react';
import './ProjectStudio.css';

export const ProjectStudio = () => {
  return (
    <div className='project-studio'>
      <img src={require('../../assets/img/Promo_studio_projektowe.png')} alt='' />
      <div className='text'>
        <h1>Sprawdź nasze studio Projektowe</h1>
      </div>
      <div className='text'>
        <h3>Pomożemy Ci zaprojektować łazienkę Twoich marzeń</h3>
      </div>
      <button className='btn btn-success find-out-more' type='button'>
        Dowiedz się więcej
        <img src={require('../../assets/img/find_out_icon.png')} alt='' />
      </button>
    </div>
  );
};
