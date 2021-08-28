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



</Carousel> 
</div>
{/* <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    
  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>

    </div> */}
    </>
    );
}


export default ImageSlider;