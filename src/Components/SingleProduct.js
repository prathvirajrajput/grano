import React from 'react'
import { useState,useEffect } from 'react';

function SingleProduct() {

  const[data,setData]=useState();

  
  useEffect(() => {
    let ProData = localStorage.getItem("ProductData");
    let myObject = JSON.parse(ProData);
    setData(myObject);
    console.log(data);
    
    
  }, [data]);
  
  let ImgPath= `http://103.104.74.215:3008/uploads/${data?.images  [1]}`;

  return (
    <div>
     <section>
  <div className="container" style={{paddingTop:"10%"}}>
    <div className="row mb-n7">
      <div className="col-md-5 mb-7">
        <div className="modal-gallery-slider">
          <div className="gallery position-relative">
            <span className="badge bg-success product-badge">{data?.text}</span>
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide gallery-item">
                    <img src={ImgPath} alt="image_not_found" />
                </div>
                <div className="swiper-slide gallery-item">
                  <img src="assets/images/products/product-6-xl.jpg" alt="image_not_found" />
                </div>
                <div className="swiper-slide gallery-item">
                  <img src="assets/images/products/product-15-xl.jpg" alt="image_not_found" />
                </div>
                <div className="swiper-slide gallery-item">
                  <img src="./assets/images/products/product-1-xl.jpg" alt="image_not_found" />
                </div>
              </div>
            </div>
          </div>
          <div className="gallery-thumbs">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide gallery-thumbs-item">
                  <a href="#?">
                  <img src="assets/images/products/product-6-1-xl.jpg" alt="image_not_found" />
                  </a>
                </div>
                <div className="swiper-slide gallery-thumbs-item">
                  <a href="#?"> <img src="assets/images/products/product-6.jpg" alt="image_not_found" /></a>
                </div>
                <div className="swiper-slide gallery-thumbs-item">
                  <a href="#?"> <img src="assets/images/products/product-15.jpg" alt="image_not_found" /></a>
                </div>
                <div className="swiper-slide gallery-thumbs-item">
                  <a href="#?"> <img src="assets/images/products/product-6.1.jpg" alt="image_not_found" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-7 mb-7">
        <div className="modal-product-des">
          <h3 className="modal-product-title">{data?.product_name}</h3>
          <h3 className="modal-product-sub-title">{data?.type_of_finish}</h3>
          <div className="reviews">
            <span className="las la-star" />
            <span className="las la-star" />
            <span className="las la-star" />
            <span className="las la-star" />
            <span className="las la-star" />
          </div>
          <div className="product-price-wrapp-lg">
            <span className="product-regular-price-lg">{data?.price}</span>
            <span className="product-price-on-sale-lg">{data?.discount_price}</span>
            <span className="badge badge-lg bg-dark">{data?.offer}</span>
          </div>
          <div className="product-description-short pb-7 mb-7">
            
              <li>
                <h5>Rent Price : ₹ {data?.rent_discount_price} </h5>
              </li>
              <li>
                Product Id : {data?._id}
              </li>
              <li>
              Dimensions : {data?.dimensions}
              </li>
              <li>
                {data?.description}
              </li>
            
          </div>
          <div className="product-variants mb-7">
            <div className="product-variants-item">
              <span className="control-label">size</span>
              <select className="form-control form-control-select">
                <option value={1} title="S" selected="selected">{data?.size[0]}</option>
                <option value={2} title="M">{data?.size[1]}</option>
                <option value={3} title="L">{data?.size[2]}</option>
                <option value={4} title="XL">{data?.size[3]}</option>
                <option value={4} title="XL">{data?.size[4]}</option>
              </select>
            </div>
            <div className="product-variants-item">
              <span className="control-label">color</span>
              <ul>
                <li className="input-container">
                  <label>
                    <input className="input-color" type="checkbox" />
                    <span className="color">{data?.color[0]}</span>
                  </label>
                </li>
                <li className="input-container">
                  <label>
                    <input className="input-color" type="checkbox" defaultChecked="checked" />
                    <span className="color" />
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="product-add-to-cart">
            <span className="control-label" style={{paddingTop:"5%"}}>Quantity</span>
            <div className="product-count style d-flex my-7">
              <div className="count d-flex">
                <input type="number" min={1} max={100} step={1} defaultValue={1} />
                <div className="button-group">
                  <button className="count-btn increment">
                    <span className="las la-angle-up" />
                  </button>
                  <button className="count-btn decrement">
                    <span className="las la-angle-down" />
                  </button>
                </div>
              </div>
              <div>
                <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="modal-add-to-cart-btn">
                  Add to cart
                </button>
              </div>
            </div>
            <div className="product-add-to-card">
              <a className="product-add-to-card-item" href="#"><i className="lar la-heart" /> Add to wishlist</a>
              <a className="product-add-to-card-item" href="#"><i className="las la-sync" /> My wishlist</a>
            </div>
            <div className="product-social-sharing mt-7">
              <span>Share</span>
              <ul>
                <li className="facebook"><a href="#" target="_blank"><i className="lab la-facebook-f" /></a></li>
                <li className="twitter"><a href="#" target="_blank"><i className="lab la-twitter" /></a></li>
                <li className="pinterest"><a href="#" target="_blank"><i className="lab la-pinterest" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<section className="section-mb section-mt">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <ul className="nav nav-tabs single-product-tab justify-content-center" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <a className="nav-link" data-bs-toggle="tab" href="#description" role="tab">Description</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" data-bs-toggle="tab" href="#productdetails" role="tab" aria-selected="false">Product Details</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link active" data-bs-toggle="tab" href="#reviews" role="tab" aria-selected="true">Reviews</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="tab-content" id="myTabContent">
      <div className="tab-pane fade" id="description" role="tabpanel">
        <div className="row">
          <div className="col-12">
            <div className="single-product-desc">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commo consequat. Duis
                aute irure dolor in reprehend in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="productdetails" role="tabpanel">
        <div className="row">
          <div className="col-12">
            <div className="single-product-desc">
              <div className="product-anotherinfo-wrapper">
                <ul>
                  <li><span>Weight</span> 400 g</li>
                  <li><span>Dimensions</span>10 x 10 x 15 cm</li>
                  <li><span>Materials</span> 60% cotton, 40% polyester</li>
                  <li>
                    <span>Other Info</span> American heirloom jean shorts
                    pug seitan letterpress
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-pane fade active show" id="reviews" role="tabpanel">
        <div className="single-product-desc">
          <div className="row">
            <div className="col-lg-7">
              <div className="review-wrapper">
                <div className="single-review">
                  <div className="review-img">
                    <img src="assets/images/testimonial/1.png" alt />
                  </div>
                  <div className="review-content">
                    <div className="review-top-wrap">
                      <div className="review-left">
                        <div className="review-name">
                          <h4>White Lewis</h4>
                        </div>
                        <div className="rating-product">
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                        </div>
                      </div>
                      <div className="review-left">
                        <a href="#">Reply</a>
                      </div>
                    </div>
                    <div className="review-bottom">
                      <p>
                        Vestibulum ante ipsum primis aucibus orci
                        luctustrices posuere cubilia Curae Suspendisse
                        viverra ed viverra. Mauris ullarper euismod
                        vehicula. Phasellus quam nisi, congue id nulla.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="single-review child-review">
                  <div className="review-img">
                    <img src="assets/images/testimonial/2.png" alt />
                  </div>
                  <div className="review-content">
                    <div className="review-top-wrap">
                      <div className="review-left">
                        <div className="review-name">
                          <h4>White Lewis</h4>
                        </div>
                        <div className="rating-product">
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                          <i className="ion-android-star" />
                        </div>
                      </div>
                      <div className="review-left">
                        <a href="#">Reply</a>
                      </div>
                    </div>
                    <div className="review-bottom">
                      <p>
                        Vestibulum ante ipsum primis aucibus orci
                        luctustrices posuere cubilia Curae Sus pen disse
                        viverra ed viverra. Mauris ullarper euismod
                        vehicula.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="ratting-form-wrapper">
                <h3>Add a Review</h3>
                <div className="ratting-form">
                  <form action="#">
                    <div className="star-box">
                      <span>Your rating:</span>
                      <div className="rating-product">
                        <i className="ion-android-star" />
                        <i className="ion-android-star" />
                        <i className="ion-android-star" />
                        <i className="ion-android-star" />
                        <i className="ion-android-star" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="rating-form-style mb-10">
                          <input placeholder="Name" type="text" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="rating-form-style mb-10">
                          <input placeholder="Email" type="email" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="rating-form-style form-submit">
                          <textarea name="Your Review" placeholder="Message" defaultValue={""} />
                          <button type="submit" className="btn btn-dark">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* <!-- new arrival carousel section start --> */}


{/* <!-- featured carousel section start --> */}





      
    </div>
  )
}

export default SingleProduct;

