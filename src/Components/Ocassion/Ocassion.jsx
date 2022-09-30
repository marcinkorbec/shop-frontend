import React from 'react';
import './Ocassion.css';

import { ProductPromotion } from '../ProductPromotion/ProductPromotion';
import { ProductCard } from '../ProductCardHomepage/ProductCard';

export const OcassionHomepage = () => {
  return (
    <div className='ner'>
      <div className='promotion'>
        <ProductPromotion />
      </div>
      <div>
        <div className='promotion-cards'>
          <ProductCard width='15rem' />
          <ProductCard width='15rem' />
          <ProductCard width='15rem' />
          <ProductCard width='15rem' />
          <ProductCard width='15rem' />
          <ProductCard width='15rem' />
          <ProductCard width='15rem' />
          <ProductCard width='15rem' />
        </div>
      </div>
    </div>
  );
};
