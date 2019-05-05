import React, { Component } from 'react';
import Carousel from 'nuka-carousel';


class ImagesCarousel extends Component {

  render() {
    return (
      <Carousel style={{height: '500px'}}>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
        <img src="https://www.cariverplate.com.ar/imagenes/contenidos/2019-04/14774-golesriverpalestino.jpg"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>
      </Carousel>
    );
  }
}

export default ImagesCarousel;
