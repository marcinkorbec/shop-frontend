import React from 'react';
import './SectionCathegory.css';
import { ProductCard } from '../ProductCardHomepage/ProductCard';

export const SectionCathegory = () => {
  return (
    <>
      <div className='contain'>
        <select id='option-category-default'>
          <option value='Domyślnie'>Domyślnie</option>
          <option value='saab'>Saab</option>
          <option value='opel'>Opel</option>
          <option value='audi'>Audi</option>
        </select>
      </div>
      <div className='contain'>
        <div className='row'>
          <div className='col-sm-3'>
            <p>test</p>
          </div>
          <div className='col-sm-9'>
            <div className='row'>
              <div className='col-sm-4'>
                <ProductCard width='100' />
              </div>
              <div className='col-sm-4'>
                <ProductCard width='100' />
              </div>
              <div className='col-sm-4'>
                <ProductCard width='100' />
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-4'>
                <ProductCard width='100' />
              </div>
              <div className='col-sm-4'>
                <ProductCard width='100' />
              </div>
              <div className='col-sm-4'>
                <ProductCard width='100' />
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-4'>
                <ProductCard width='100' />
              </div>
              <div className='col-sm-4'>
                <ProductCard width='100' />
              </div>
              <div className='col-sm-4'>
                <ProductCard width='100' />
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-4'>
                <ProductCard width='100' />
              </div>
              <div className='col-sm-4'>
                <ProductCard width='100' />
              </div>
              <div className='col-sm-4'>
                <ProductCard width='100' />
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-4'>
                <ProductCard width='100' />
              </div>
              <div className='col-sm-4'>
                <ProductCard width='100' />
              </div>
              <div className='col-sm-4'>
                <ProductCard width='100' />
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-4'>
                <ProductCard width='100' />
              </div>
              <div className='col-sm-4'>
                <ProductCard width='100' />
              </div>
              <div className='col-sm-4'>
                <ProductCard width='100' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
