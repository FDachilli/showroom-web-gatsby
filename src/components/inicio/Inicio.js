import React, { Component } from 'react';
import './Inicio.css';
import ImagesCarousel from '../images-carousel/ImagesCarousel';

class Inicio extends Component {
  render() {
      return (
          <div className="Inicio">
              <div style={{backgroundColor:'white', height:'100px', textAlign:'center' }}>
                    <img src={require('./../../images/corona1.png')} style={{ width: '100px',
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
