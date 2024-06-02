import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FreshVeg() {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://103.104.74.215:3033/website/product_list`).then((res) => {
      console.log(res.data)
      setData(res.data.data);
      console.log(data);
    });
  }, []);

  const handleClick = (item) => {
    // console.log(item)
    localStorage.setItem("ProductData", JSON.stringify(item));
    navigate("/SingleProduct");
  };

  const settings = {
    // dots: true,
    infinite: true,
    speed: 800,
    rows: 2,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div>
      <section className="product-carousel section-mt">
        <div className="container position-relative">
          <div className="row">
            <div className="section-title">
              <h2 className="title">Products On Sale</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="custom-container"
               >
                <div className="custom-col-left">
                  <aside className="sidebar-widgets">
                    <div className="widget">
                      <div className="product-box">
                        <a
                          href="shop-grid-4-column.html"
                          className="banner-box-animation"
                        >
                          <img
                            src="assets/images/banner/sidebar3.jpg"
                            alt="images_not_found"
                          />
                        </a>
                        <ul className="sidebar-menu">
                          <li className="sidebar-menu-item">
                            <a className="sidebar-menu-nav-link" href="#">
                              household items
                            </a>
                          </li>
                          <li className="sidebar-menu-item">
                            <a className="sidebar-menu-nav-link" href="#">
                              health and wellness
                            </a>
                          </li>
                          <li className="sidebar-menu-item">
                            <a className="sidebar-menu-nav-link" href="#">
                              furniture and decor
                            </a>
                          </li>
                          <li className="sidebar-menu-item">
                            <a className="sidebar-menu-nav-link" href="#">
                              food and beverage
                            </a>
                          </li>
                          <li className="sidebar-menu-item">
                            <a className="sidebar-menu-nav-link" href="#">
                              cosmetics and body care
                            </a>
                          </li>
                          <li className="sidebar-menu-item">
                            <a className="sidebar-menu-nav-link" href="#">
                              office equipment
                            </a>
                          </li>
                          <li className="sidebar-menu-item">
                            <a className="sidebar-menu-nav-link" href="#">
                              Electronics
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </aside>
                </div>

                <div className="custom-col-right">
                  <div
                    className="food-carousel-five-items row "
                    style={{ paddingTop: "2%"}}
                  >
                    <Slider {...settings}>
                      {data.map((item, index) => {
                        return (
                          <div className="product-card" key={item._id}>
                            <span className="badge bg-success product-badge">
                              {item.text}
                            </span>
                            <div className="product-thumb-nail">
                              <a href="single-product.html">
                                <img
                                  className="product-image"
                                  src={data?.images}
                                  alt="image_not_found"
                                />
                                {/* <img className="product-image-hover-style" src="assets/images/products/product-12.1.jpg" alt="image_not_found" /> */}
                              </a>
                              <ul className="actions">
                                <li className="action whish-list">
                                  <button
                                    data-bs-toggle="modal"
                                    data-bs-target="#product-modal-wishlist"
                                  >
                                    <i className="lar la-heart" />
                                  </button>
                                </li>
                                <li className="action compare">
                                  <button
                                    data-bs-toggle="modal"
                                    data-bs-target="#product-modal-compare"
                                  >
                                    <i className="las la-sync" />
                                  </button>
                                </li>
                                <li className="action quick-view">
                                  <button
                                    // data-bs-toggle="modal"
                                    // data-bs-target="#product-modal"
                                  >
                                    <i
                                      className="las la-eye"
                                      onClick={() => {
                                        handleClick(item);
                                      }}
                                    />
                                  </button>
                                </li>
                              </ul>
                            </div>
                            <div className="product-content">
                              <h4 className="product-sub-title">
                                <a href="#">{item.product_type}</a>
                              </h4>
                              <h3 className="product-title">
                                <a href="single-product.html">
                                  {item.product_name}
                                </a>
                              </h3>
                              <div className="product-price-wrapp">
                                <span className="product-regular-price">
                                  {item.price}
                                </span>
                                <span className="product-price-on-sale">
                                  {item.discount_price}
                                </span>
                                <span className="badge bg-danger">
                                  {item.offer} Off
                                </span>
                              </div>
                              <div className="product-cart-btn-wrap">
                                <button
                                  data-bs-toggle="modal"
                                  data-bs-target="#addto-cart-modal"
                                  className="btn btn-dark add-to-cart-btn"
                                >
                                  Add to cart
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </Slider>
                    {/* swiper navigation */}
                    <div className="mb-1">
                      <div className="swiper-button-prev common-swiper-button-prev ">
                        <i className="las la-angle-left" />
                      </div>
                      <div className="swiper-button-next common-swiper-button-next">
                        <i className="las la-angle-right" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FreshVeg;
