import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
      return (
          <div className="Header">
            <a className="left-options">¿Quiénes somos?</a>
            <a className="left-options">Contacto</a>
            <a><img id="logo" src={require('./../../images/nombre-largo.png')} ></img>
            </a>
            <a className="right-options">Puntos de venta</a>
            <a className="right-options">SALE</a>
          </div>
      );
  }
}

export default Header;