import React from 'react';
import './GreenStripe.css';

export const GreenStripe = () => {
  return (
    <div className='green-stripe'>
      <div className='green-container'>
        <div>
          <p>Breadcrumbs</p>
        </div>
        <div>
          <img src={require('../../assets/img/find_out_icon.png')} alt='' />
        </div>
        <div>
          <p>Breadcrumbs</p>
        </div>
        <div>
          <img src={require('../../assets/img/find_out_icon.png')} alt='' />
        </div>
        <div>
          <p>Breadcrumbs</p>
        </div>
        <div>
          <img src={require('../../assets/img/find_out_icon.png')} alt='' />
        </div>
        <div>
          <p>Breadcrumbs</p>
        </div>
      </div>
    </div>
  );
};
