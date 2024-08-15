import React from 'react';
import Slider from 'react-slick';
import './Projects.preview.css'



function ProjectPreview({imagearr=[]}) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {imagearr.map((image, index)=>(
            <div key={index}>
                <img src={image} className='slider-image' />
            </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProjectPreview;
