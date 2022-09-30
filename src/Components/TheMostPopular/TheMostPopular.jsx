import React from 'react';
import './TheMostPopular.css';
import { ProductCard } from '../ProductCardHomepage/ProductCard';

export const TheMostPopular = (props) => {
  console.log(props.icon);
  return (
    <div className='most-popular-wrapper'>
      <div className='head-the-most-popular'>
        <div>
          <img src={props.icon} alt='' />
        </div>
        <h1>{props.title}</h1>
        <h5>{props.subtitle}</h5>
        <img id='check-next-catergory' src={require('../../assets/img/Component 8.png')} alt='' />
      </div>
      <div className='body-most-popular'>
        <ProductCard width='20rem' />
        <ProductCard width='20rem' />
        <ProductCard width='20rem' />
        <ProductCard width='20rem' />
        <ProductCard width='20rem' />
        <ProductCard width='20rem' />
        <div className='arrow-right'>
          <a href='/'>
            <img src={require('../../assets/img/Slider - strzałki3.png')} alt='' />
          </a>
        </div>
      </div>
    </div>
  );
};
