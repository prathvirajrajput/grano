import React,{useEffect, useState} from 'react'
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MainSlider() {
  const [slider1,setSlider1] = useState([])
  const settings = {
    // dots: true,
    infinite: true,
    fade: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  
  };

  useEffect(()=>{
    axios.get(`http://103.104.74.215:3033/website/banner_list`).then((res)=>{
    // console.log(res);
    setSlider1(res.data.data)
  })
  },[])
    
  // console.log(slider1)
 



  return (
  
   <Slider {...settings} >
   { slider1?.map ((items) =>{
    return(
  <div lassName="carousel slide" data-ride="carousel" key={items}>
  <div className="carousel-inner">
    <div  className="carousel-item active">
    <img
                  
                  width={"100%"}
                  src={`http://103.104.74.215:3033/website/${items.image}`}
                />
       
    </div>
    
  </div>
</div>
    )
})}

    
</Slider>
  
   
  )
}

export default MainSlider;
