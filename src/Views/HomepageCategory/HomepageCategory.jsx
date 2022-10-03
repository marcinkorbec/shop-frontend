import React from 'react';
import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';
import { TrustedBranches } from '../../Components/TrustedBranches/TrustedBranches';
import { GreenStripe } from '../../Components/GreenStripe/GreenStripe';
import { CategoryName } from '../../Components/CategoryName/CategoryName';
import { SectionCathegory } from '../../Components/SectionCathegory/SectionCathegory';

export const HomepageCategory = () => {
  return (
    <>
      <Header />
      <GreenStripe />
      <CategoryName />
      <hr />
      <SectionCathegory />
      <TrustedBranches />
      <Footer />
    </>
  );
};
