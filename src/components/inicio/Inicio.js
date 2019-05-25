import React, { Component } from 'react';
import './Inicio.css';
import ImagesCarousel from '../images-carousel/ImagesCarousel';
import Header from '../header/Header';

class Inicio extends Component {
  render() {
      return (
          <div className="Inicio">
              <div className="sticky">
                <Header></Header>
              </div>
              <div className="content">
                <ImagesCarousel></ImagesCarousel>
                <div style={{backgroundColor:'#ffebee', height:'500px', marginTop:'500px' }}>
              </div>
                
              </div>
          </div>
      );
  }
}

export default Inicio;
