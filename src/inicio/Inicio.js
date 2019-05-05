import React from 'react';
import './Inicio.css';
import ImagesCarousel from './images-carousel/ImagesCarousel';

function Inicio() {
  return (
    <div className="Inicio">
        <div style={{backgroundColor:'#f7ded6', height:'100px' }}>

        </div>

        <ImagesCarousel></ImagesCarousel>

        <div style={{backgroundColor:'#ffebee', height:'500px', marginTop:'500px' }}>
          
        </div>
  </div>
  );
}

export default Inicio;
