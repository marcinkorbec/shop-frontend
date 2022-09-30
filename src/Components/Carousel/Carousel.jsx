import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

/* eslint @typescript-eslint/no-var-requires: "off" */
const SliderButton = require('../../assets/img/Button-nowosci.svg').default;

export const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={require('../../assets/img/image63.png')}
          alt='First slide'
        />
        <Carousel.Caption className='caption'>
          <h1>Odkryj swoją łazienkę na nowo</h1>
          <h3>Sprawdź najnowsze produkty w naszej ofercie.</h3>
          <a href='/'>
            <img className='slider-button' src={SliderButton} alt='' />
          </a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className='d-block w-100'
          src={require('../../assets/img/image63.png')}
          alt='Second slide'
        />
        <Carousel.Caption className='caption'>
          <h1>Odkryj swoją łazienkę na nowo</h1>
          <h3>
            Sprawdź najnowsze produkty w <br /> naszej ofercie.
          </h3>
          <a href='/'>
            <img className='slider-button' src={SliderButton} alt='' />
          </a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className='d-block w-100'
          src={require('../../assets/img/image63.png')}
          alt='Third slide'
        />
        <Carousel.Caption className='caption'>
          <h1>Odkryj swoją łazienkę na nowo</h1>
          <h3>Sprawdź najnowsze produkty w naszej ofercie.</h3>
          <a href='/'>
            <img className='slider-button' src={SliderButton} alt='' />
          </a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className='d-block w-100'
          src={require('../../assets/img/image63.png')}
          alt='Third slide'
        />
        <Carousel.Caption className='caption'>
          <h1>Odkryj swoją łazienkę na nowo</h1>
          <h3>Sprawdź najnowsze produkty w naszej ofercie.</h3>
          <a href='/'>
            <img className='slider-button' src={SliderButton} alt='' />
          </a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className='d-block w-100'
          src={require('../../assets/img/image63.png')}
          alt='Third slide'
        />
        <Carousel.Caption className='caption'>
          <h1>Odkryj swoją łazienkę na nowo</h1>
          <h3>Sprawdź najnowsze produkty w naszej ofercie.</h3>
          <a href='/'>
            <img className='slider-button' src={SliderButton} alt='' />
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
