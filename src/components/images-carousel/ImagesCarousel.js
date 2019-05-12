import React, { Component } from 'react';
import Carousel from 'nuka-carousel';


class ImagesCarousel extends Component {

  render() {
    return (
      <Carousel autoplay={true} 
                withoutControls={true}  
                wrapAround={true} 
                heightMode="first">
        <img style={{ width: '100%',
                      height: '500px',
                      objectFit: 'cover'}} src={require('./../../images/slide2.jpg')}/>
        <img style={{ width: '100%',
                      height: '500px',
                      objectFit: 'cover'}} src={require('./../../images/slide3.jpg')}/>
        <img style={{ width: '100%',
                      height: '500px',
                      objectFit: 'cover'}} src={require('./../../images/slide4.jpg')}/>
      </Carousel>
    );
  }
}

export default ImagesCarousel;
