import React from 'react';
import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';
import { TrustedBranches } from '../../Components/TrustedBranches/TrustedBranches';
import { GreenStripe } from '../../Components/GreenStripe/GreenStripe';

export const HomepageCategory = () => {
  return (
    <>
      <Header />
      <GreenStripe />
      <TrustedBranches />
      <Footer />
    </>
  );
};
