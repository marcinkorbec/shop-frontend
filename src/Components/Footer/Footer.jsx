import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <>
      <footer>
        <div className='footer-wrapper'>
          <div className='footer-about'>
            <h5>P.K. APiS Sp. z o.o.</h5>
            <p>
              Tu znajduję się przykładowy opis firmy APiS np. Jesteśmy stabilną, efektywną i
              atrakcyjną organizacją, tworzoną przez zaangażowanych, kompetentnych i czerpiących
              satysfakcję z pracy ludzi, którzy każdego dnia z szacunkiem i atencją budują zaufanie
              Klientów i współpracowników
            </p>
            <p>123456789</p>
            <p>sklep@apis.biz.pl</p>
          </div>
          <div className='your-account'>
            <h5>Twoje konto</h5>
            <br />
            <a href='/'>
              <p>Twoje zamówienia</p>
            </a>
            <a href='/'>
              <p>Rejestracja</p>
            </a>
            <a href='/'>
              <p>Zwroty</p>
            </a>
            <a href='/'>
              <p>Reklamacje</p>
            </a>
          </div>
          <div className='your-order'>
            <h5>Zamówienie</h5>
            <br />
            <a href='/'>
              <p>Czas realizacji zamówień</p>
            </a>
            <a href='/'>
              <p>Sposoby płatności</p>
            </a>
            <a href='/'>
              <p>Koszty dostawy</p>
            </a>
            <a href='/'>
              <p>Page</p>
            </a>
          </div>
          <div className='your-rules'>
            <h5>Regulamin</h5>
            <br />
            <a href='/'>
              <p>Regulamin sklepu</p>
            </a>
            <a href='/'>
              <p>Polityka prywatności</p>
            </a>
            <a href='/'>
              <p>Bezpieczeństwo zakupów</p>
            </a>
            <a href='/'>
              <p>Page</p>
            </a>
          </div>
          <div className='company-contact'>
            <h5>O firmie</h5>
            <br />
            <a href='/'>
              <p>Kontakt</p>
            </a>
            <a href='/'>
              <p>Wyróżnienia</p>
            </a>
            <a href='/'>
              <p>Kariera</p>
            </a>
            <a href='/'>
              <p>Page</p>
            </a>
          </div>
        </div>
      </footer>
      <div className='copyright'>
        <div>
          <p>Copyright © 2022 P.K. APiS Sp. z o.o</p>
        </div>
      </div>
    </>
  );
};
