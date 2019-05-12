import React, { Component } from 'react';
import './Inicio.css';
import ImagesCarousel from '../images-carousel/ImagesCarousel';

class Inicio extends Component {
  render() {
      return (
          <div className="Inicio">
              <div className="header">
                    <img src={require('./../../images/nombre-largo.png')} style={{ width: '100px',
                      height: '100px'}}></img>
              </div>

              <ImagesCarousel></ImagesCarousel>

              <div style={{backgroundColor:'#ffebee', height:'500px', marginTop:'500px' }}>
                
              </div>
          </div>
      );
  }
}

export default Inicio;
