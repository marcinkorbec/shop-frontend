import React from 'react';
import './SectionCathegory.css';
import { ProductCard } from '../ProductCardHomepage/ProductCard';

export const SectionCathegory = () => {
  return (
    <>
      <div className='contain'>
        <div className='sort'>
          <select id='option-category-default'>
            <option value='Domyślnie'>Domyślnie</option>
            <option value='saab'>Saab</option>
            <option value='opel'>Opel</option>
            <option value='audi'>Audi</option>
          </select>
        </div>
      </div>
      <div className='contain'>
        <div className='row'>
          <div className='col-sm-3'>
            <h3>Producent</h3>
            <div>
              <input type='checkbox' id='vehicle1' name='vehicle1' value='Bike' />
              <label htmlFor='vehicle1'>Producent (ilość prod.)</label>
              <br />
              <input type='checkbox' id='vehicle2' name='vehicle2' value='Car' />
              <label htmlFor='vehicle2'>Producent (ilość prod.)</label>
              <br />
              <input type='checkbox' id='vehicle3' name='vehicle3' value='Boat' />
              <label htmlFor='vehicle3'>Producent (ilość prod.)</label>
              <br />
              <input type='checkbox' id='vehicle3' name='vehicle3' value='Boat' />
              <label htmlFor='vehicle3'>Producent (ilość prod.)</label>
              <br />
              <input type='checkbox' id='vehicle3' name='vehicle3' value='Boat' />
              <label htmlFor='vehicle3'>Producent (ilość prod.)</label>
              <br />
              <input type='checkbox' id='vehicle3' name='vehicle3' value='Boat' />
              <label htmlFor='vehicle3'>Producent (ilość prod.)</label>
              <br />
            </div>
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
