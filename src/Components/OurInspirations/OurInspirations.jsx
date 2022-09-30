import React from 'react';
import './OurInspirations.css';

export const OurInspirations = () => {
  return (
    <div className='inspirations-wrapper'>
      <div className='img-wrapper'>
        <div className='check-wrapper'>
          <a href='/'>
            <img src={require('../../assets/img/Promo - sprawdź nasze inspiracje.png')} alt='' />
          </a>
        </div>
        <div className='body-inspirations-popular'>
          <div>
            <div className='card-img-container'>
              <img src={require('../../assets/img/inspiration-image.png')} alt='' />
            </div>
            <div>
              <button type='button'>
                Inspriracja 2&nbsp;&nbsp;
                <img src={require('../../assets/img/polecane-kategorie.png')} alt='' />
              </button>
            </div>
          </div>
        </div>
        <div className='body-inspirations-popular'>
          <div>
            <div className='card-img-container'>
              <img src={require('../../assets/img/inspiration-image.png')} alt='' />
            </div>
            <div>
              <button type='button'>
                Inspriracja 2&nbsp;&nbsp;
                <img src={require('../../assets/img/polecane-kategorie.png')} alt='' />
              </button>
            </div>
          </div>
        </div>
        <div className='body-inspirations-popular'>
          <div>
            <div className='card-img-container'>
              <img src={require('../../assets/img/inspiration-image.png')} alt='' />
            </div>
            <div>
              <button type='button'>
                Inspriracja 2&nbsp;&nbsp;
                <img src={require('../../assets/img/polecane-kategorie.png')} alt='' />
              </button>
            </div>
          </div>
        </div>
        <div className='body-inspirations-popular'>
          <div>
            <div className='card-img-container'>
              <img src={require('../../assets/img/inspiration-image.png')} alt='' />
            </div>
            <div>
              <button type='button'>
                Inspriracja 2&nbsp;&nbsp;
                <img src={require('../../assets/img/polecane-kategorie.png')} alt='' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
