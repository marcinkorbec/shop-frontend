import React from 'react';
import './CategoryName.css';

export const CategoryName = () => {
  return (
    <div className='category-wrapper'>
      <div className='cathegory-name'>
        <div>
          <h1>Nazwa kategorii</h1>
        </div>
        <div>
          <p>(185 wyników)</p>
        </div>
      </div>
      <div>
        <div className='subcathegory-wrapper'>
          <div className='subcathegory-name'>
            <p>Nazwa podkategorii</p>
          </div>
          <div className='subcathegory-name'>
            <p>Nazwa podkategorii</p>
          </div>
          <div className='subcathegory-name'>
            <p>Nazwa podkategorii</p>
          </div>
          <div className='subcathegory-name'>
            <p>Nazwa podkategorii</p>
          </div>
          <div className='subcathegory-name'>
            <p>Nazwa podkategorii</p>
          </div>
        </div>
      </div>
    </div>
  );
};
