import React from 'react';
import './FeaturedCategories.css';

export const FeaturedCategories = () => {
  return (
    <div className='featured-wrapper'>
      <div className='head-featured-popular'>
        <div>
          <img src={require('../../assets/img/tag-01.png')} alt='' />
        </div>
        <h1>Polecane kategorie</h1>
        <h5>Sprawdź wszystkie kategorie</h5>
        <img
          id='check-next-catergory'
          src={require('../../assets/img/polecane-kategorie.png')}
          alt=''
        />
      </div>
      <div className='img-wrapper'>
        <div className='body-featured-popular'>
          <div>
            <div className='card-img-container'>
              <img src={require('../../assets/img/image-lazienka.png')} alt='' />
            </div>
            <div>
              <button type='button'>
                Kategoria 1&nbsp;&nbsp;
                <img src={require('../../assets/img/polecane-kategorie.png')} alt='' />
              </button>
            </div>
          </div>
        </div>
        <div className='body-featured-popular'>
          <div>
            <div className='card-img-container'>
              <img src={require('../../assets/img/image-lazienka.png')} alt='' />
            </div>
            <div>
              <button type='button'>
                Kategoria 1&nbsp;&nbsp;
                <img src={require('../../assets/img/polecane-kategorie.png')} alt='' />
              </button>
            </div>
          </div>
        </div>
        <div className='body-featured-popular'>
          <div>
            <div className='card-img-container'>
              <img src={require('../../assets/img/image-lazienka.png')} alt='' />
            </div>
            <div>
              <button type='button'>
                Kategoria 1&nbsp;&nbsp;
                <img src={require('../../assets/img/polecane-kategorie.png')} alt='' />
              </button>
            </div>
          </div>
        </div>
        <div className='body-featured-popular'>
          <div>
            <div className='card-img-container'>
              <img src={require('../../assets/img/image-lazienka.png')} alt='' />
            </div>
            <div>
              <button type='button'>
                Kategoria 1&nbsp;&nbsp;
                <img src={require('../../assets/img/polecane-kategorie.png')} alt='' />
              </button>
            </div>
          </div>
        </div>
        <div className='body-featured-popular'>
          <div>
            <div className='card-img-container'>
              <img src={require('../../assets/img/image-lazienka.png')} alt='' />
            </div>
            <div>
              <button type='button'>
                Kategoria 1&nbsp;&nbsp;
                <img src={require('../../assets/img/polecane-kategorie.png')} alt='' />
              </button>
            </div>
          </div>
        </div>
        <div className='body-featured-popular'>
          <div>
            <div className='card-img-container'>
              <img src={require('../../assets/img/image-lazienka.png')} alt='' />
            </div>
            <div>
              <button type='button'>
                Kategoria 1&nbsp;&nbsp;
                <img src={require('../../assets/img/polecane-kategorie.png')} alt='' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
