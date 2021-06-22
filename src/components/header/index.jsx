import React from 'react';
import { Container } from './styles';

function Header() {
  return  (
  <Container>
    <a href="/"> Discord </a>
    <nav>
      <ul>
        <li>
          <a href="/ "> Baixar </a>
          <a href="/">  Nitro </a>
          <a href="/">  Segurança </a>
          <a href="/">  Suporte </a>
        </li>
      </ul>
    </nav>
    <a href="/" className="abrir" > Abrir Discord </a>
  </Container> 
    )
}

export default Header;