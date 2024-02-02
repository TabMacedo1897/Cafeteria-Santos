import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './AppNavBar.css';


const AppNavBar = () => {
  return (
    <Navbar variant='dark' bg='dark'>
      <Container>
        <Nav className='me-auto'>
          <div id='container-img'> 
            <img src='/imagens/logoSemFundo.png' alt='Logo principal' />
            <h1>Café Santos</h1>
          </div>

          <Nav.Link href="#bebidas"containerImgs>Bebidas</Nav.Link>
          <Nav.Link href="#doces">Doces</Nav.Link>
          <Nav.Link href="#contato">Contato</Nav.Link>
    
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AppNavBar;
