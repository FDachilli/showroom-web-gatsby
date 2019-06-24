import React, { Component } from 'react';
import './Header.css';
import Link from '../header/link/Link'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <span>
            <Link value={'¿Quiénes somos?'}/>
        </span>
        <span>
          <Link value={'Contacto'}/>
        </span>
        <span>
          <a>
            <img id="logo" src={require('./../../images/nombre-largo.png')} ></img>
          </a>
        </span>
        <span>
            <Link value={'Puntos de venta'}/>
        </span>
        <span>
            <Link value={'SALE'}/>
        </span>
      </div>
    );
  }
}

export default Header;