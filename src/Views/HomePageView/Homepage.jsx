import React from 'react';
import { Header } from '../../Components/Header/Header';
import { CarouselComponent } from '../../Components/Carousel/Carousel';
import { OcassionHomepage } from '../../Components/Ocassion/Ocassion';
import { Footer } from '../../Components/Footer/Footer';
import { ProjectStudio } from '../../Components/ProjectStudio/ProjectStudio';
import { TheMostPopular } from '../../Components/TheMostPopular/TheMostPopular';
import { FeaturedCategories } from '../../Components/FeaturedCategories/FeaturedCategories';
import { OurInspirations } from '../../Components/OurInspirations/OurInspirations';
import { TrustedBranches } from '../../Components/TrustedBranches/TrustedBranches';

export const Homepage = () => {
  const icon = require('../../assets/img/award-02.png');
  const icon2 = require('../../assets/img/sale-03.png');

  return (
    <>
      <Header />
      <CarouselComponent />
      <OcassionHomepage />
      <FeaturedCategories />
      <TheMostPopular
        icon={icon}
        title='Najpopularniejsze'
        subtitle='Sprawdź wszystkie kategorie'
      />
      <OurInspirations />
      <TheMostPopular
        icon={icon2}
        title='W najlepszych cenach'
        subtitle='Sprawdź wszystkie kategorie'
      />
      <ProjectStudio />
      <TrustedBranches icon={icon2} title='Zaufane marki' />
      <Footer />
    </>
  );
};
