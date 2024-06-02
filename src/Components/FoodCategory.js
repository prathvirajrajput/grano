import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FoodCategory() {
  const [slider2, setSlider2] = useState([]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  useEffect(() => {
    axios
      .get(`http://103.104.74.215:3033/website/category_list`)
      .then((res) => {
        // console.log(res);
        setSlider2(res.data.data);
      });
  }, []);

  return (
    <>
      <section className="food-category-section m-5">
    
        <div className="container">
        {/* <div className="swiper-button-prev" style={{color:"green"}}>
              <i className="las la-angle-left" />
            </div> */}
          <Slider {...settings}>
            {slider2?.map((items) => {
              return (
                <div className="row" key={items}>
                  <div className="col-12">
                    <a href="#" className="food-catery-thumb">
                      <img
                        width={"100vw"}
                        height={"100vw"}
                        src={`http://103.104.74.215:3008/uploads/${items.image}`}
                      />
                    </a>
                
                  </div>
                      
                </div>
              );
            })}
            
          </Slider>
          {/* <div className="swiper-button-next">
              <i className="las la-angle-right" />
            </div> */}
          
        </div>
     
        
      </section>
     
          
    </>
  );
}

export default FoodCategory;
