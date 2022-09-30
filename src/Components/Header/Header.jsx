import React from 'react';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Header.css';

export const Header = () => {
  return (
    <header>
      <div className='logo'>
        <Image className='fluid' src={require('../../assets/img/Frame74.png')} />
      </div>
      <div className='navigation'>
        <form className='form-inline my-2 my-lg-0'>
          <input
            id='search'
            className='form-control mr-sm-2'
            type='search'
            placeholder='Szukaj w ofercie produktów'
            aria-label='Search'
          />
          <select name='products' id='categories' className='form-select'>
            <option value='Wszystkie kategorie'>Wszystkie kategorie</option>
            <option value='krany'>krany</option>
            <option value='umywalki'>umywalki</option>
            <option value='muszle klozetowe'>muszle klozetowe</option>
            <option value='bidety'>bidety</option>
          </select>
          <button id='categories' className='btn btn-success categories-submit' type='submit'>
            <i className='bi bi-search' />
          </button>
        </form>
      </div>
      <Navbar bg='light' expand='lg'>
        <Container>
          {/*<Navbar.Toggle aria-controls='basic-navbar-nav' />*/}
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <NavDropdown title='Kabiny i brodziki' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.4'>Something else</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title='Wanny' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.4'>Something else</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title='Ceramika' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.4'>Something else</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title='Meble' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.4'>Something else</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title='Pozostałe produkty' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.4'>Something else</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='user-account-buttons'>
        <button id='categories' className='btn btn-success categories-submit' type='submit'>
          <i className='bi bi-person' />
        </button>
        <button id='categories' className='btn btn-success categories-submit' type='submit'>
          <i className='bi bi-chat-left-dots' />
        </button>
        <button id='categories' className='btn btn-success categories-submit' type='submit'>
          <i className='bi bi-cart' />
        </button>
      </div>
    </header>
  );
};
