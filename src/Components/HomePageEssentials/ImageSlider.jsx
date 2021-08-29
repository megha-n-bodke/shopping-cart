import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import banner1 from '../../Assets/Images/banner_1.jpeg'
import banner2 from '../../Assets/Images/banner_2.jpeg'
import banner3 from '../../Assets/Images/banner_3.jpeg'
import banner4 from '../../Assets/Images/banner_4.jpeg'
import './imageSlider.css'

const ImageSlider = () => {
  return (
    <>
      <div className='container-fluid' >
        <Carousel>
          <Carousel.Item style={{ 'height': "400px" }} >
            <img style={{ 'height': "400px" }}
              className="d-block w-100"
              src={banner1} />
          </Carousel.Item>

          <Carousel.Item style={{ 'height': "400px" }}>
            <img style={{ 'height': "400px" }}
              className="d-block w-100"
              src={banner2} ></img>
          </Carousel.Item>

          <Carousel.Item style={{ 'height': "400px" }}>
            <img style={{ 'height': "400px" }}
              className="d-block w-100"
              src={banner3} ></img>
          </Carousel.Item>

          <Carousel.Item style={{ 'height': "400px" }}>
            <img style={{ 'height': "400px" }}
              className="d-block w-100"
              src={banner4} ></img>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}


export default ImageSlider;