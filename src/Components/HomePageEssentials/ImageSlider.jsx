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

                         {/* <Carousel>  
                         <Carousel.Item style={{'height':"300px"}} >  

                         <img style={{'height':"300px"}}  

                         className="d-block w-100"  

                        src={banner1}  />  
                                 </Carousel.Item>  

                                 <Carousel.Item style={{'height':"300px"}}>  

                                 <img style={{'height':"300px"}}  

                                   className="d-block w-100"  

                                    src={banner2} ></img>  

                                         </Carousel.Item>  

                                         <Carousel.Item style={{'height':"300px"}}>  

                                 <img style={{'height':"300px"}}  

                                   className="d-block w-100"  

                                    src={banner3} ></img>  

                                         </Carousel.Item>  

                                         <Carousel.Item style={{'height':"300px"}}>  

                                 <img style={{'height':"300px"}}  

                                   className="d-block w-100"  

                                    src={banner4} ></img>  

                                         </Carousel.Item>  



</Carousel> */}
<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>

    </div>
    </>
    );
}


export default ImageSlider;