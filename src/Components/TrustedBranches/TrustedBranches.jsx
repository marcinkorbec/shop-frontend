import React from 'react';
import { TrustCategory } from '../TrustCategory/TrustCategory';

export const TrustedBranches = () => {
  return (
    <div className='most-popular-wrapper'>
      <div className='head-the-most-popular'>
        <div>
          <img src={require('../../assets/img/Ikona sekcji.png')} alt='' />
        </div>
        <h1>Zaufane marki</h1>
      </div>
      <div className='body-most-popular'>
        <TrustCategory width='20rem' />
        <TrustCategory width='20rem' />
        <TrustCategory width='20rem' />
        <TrustCategory width='20rem' />
        <TrustCategory width='20rem' />
        <TrustCategory width='20rem' />
      </div>
    </div>
  );
};
