import React from 'react'

export default function Shop() {
  return (
   <div>
      <div className="shop-product-tab section-mb">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 order-lg-first">
        <div className="widgets" style={{paddingTop:"50%"}}>
          {/* <div className="widget-card">
            <h3 className="title"><span>Categories</span></h3>
            <div className="search-filter">
              <form action="#">
                <div className="widget-inner">
                  <div className="widget-check-box">
                    <input type="checkbox" id={20824} />
                    <label htmlFor={20824}> Fresh Fruit (17)</label>
                  </div>
                  <div className="widget-check-box">
                    <input type="checkbox" id={20825} />
                    <label htmlFor={20825}>Fresh Salad &amp; Dips (17)</label>
                  </div>
                  <div className="widget-check-box">
                    <input type="checkbox" id={41} />
                    <label htmlFor={41}> Fresh Vegetables (17)</label>
                  </div>
                  <div className="widget-check-box">
                    <input type="checkbox" id={42} />
                    <label htmlFor={42}>Milk, Butter &amp; Eggs (17) </label>
                  </div>
                </div>
                <h3 className="title"><span>Price</span></h3>
                <div className="price-filter mb-7">
                  <div className="price-slider-amount">
                    <input type="text" id="amount" name="price" readOnly placeholder="Add Your Price" />
                  </div>
                  <div id="slider-range" />
                </div>
                <h3 className="title"><span>Size</span></h3>
                <div className="widget-inner">
                  <div className="widget-check-box">
                    <input type="checkbox" id="test9" />
                    <label htmlFor="test9">s <span>(2)</span></label>
                  </div>
                  <div className="widget-check-box">
                    <input type="checkbox" id="test10" />
                    <label htmlFor="test10">m <span>(2)</span></label>
                  </div>
                  <div className="widget-check-box">
                    <input type="checkbox" id="test11" />
                    <label htmlFor="test11">l <span>(2)</span></label>
                  </div>
                  <div className="widget-check-box">
                    <input type="checkbox" id="test12" />
                    <label htmlFor="test12">xl <span>(2)</span></label>
                  </div>
                </div>
                <h3 className="title"><span>Color</span></h3>
                <div className="widget-inner">
                  <div className="widget-check-box color-white">
                    <input type="checkbox" id={20827} />
                    <label htmlFor={20827}>white <span>(3)</span></label>
                  </div>
                  <div className="widget-check-box color-black">
                    <input type="checkbox" id={20828} />
                    <label htmlFor={20828}>black <span>(6)</span></label>
                  </div>
                </div>
                <h3 className="title"><span>Brand</span></h3>
                <div className="widget-inner">
                  <div className="widget-check-box">
                    <input type="checkbox" id={20820} />
                    <label htmlFor={20820}>Fresh Fruit (7)</label>
                  </div>
                  <div className="widget-check-box">
                    <input type="checkbox" id={20821} />
                    <label htmlFor={20821}>Fresh Vegetables (10) </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="widget-card">
            <h3 className="title"><span>Tags</span></h3>
            <div className="widget-tags">
              <a className="widget-tag-link" href="JavaScript:Void(0);">Fresh Fruit</a>
              <a className="widget-tag-link" href="JavaScript:Void(0);"> Fresh Vegetables</a>
              <a className="widget-tag-link" href="JavaScript:Void(0);"> Fresh Salad</a>
              <a className="widget-tag-link" href="JavaScript:Void(0);"> Butter &amp; Eggs</a>
            </div>
          </div> */}
          <div className="widget-card">
            <a href="shop-grid-4-column.html" className="banner-box-animation">
              <img src="assets/images/banner/sidebar2.jpg" alt="images_not_found" /></a>
          </div>
        </div>
      </div>
      <div className="col-lg-9">
        <div className="grid-nav-wraper bg-lighten2 mb-30">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <nav className="shop-grid-nav">
                <ul className="nav nav-tabs align-items-center" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab">
                      <i className="ion-grid" /></a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab"><i className="ion-android-menu" /></a>
                  </li>
                  <li>
                    <span className="total-products text-capitalize">There are 16 products.</span>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-12 col-md-6 position-relative">
              <div className="shop-grid-button d-flex align-items-center">
                <span className="sort-by">Sort by:</span>
                <span className="chevron-arrow-down ion-android-arrow-dropdown" />
                <select className="form-select" aria-label="Default select example">
                  <option selected value={1}>Relevance</option>
                  <option value={2}>Name, A to Z</option>
                  <option value={3}>Name, Z to A</option>
                  <option value={4}>Price, low to high</option>
                  <option value={5}>Price, low to low</option>
                  <option value={6}>Relevance</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="home" role="tabpanel">
            <div className="row grid-view mb-n7">
              <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-7">
                {/* product-card start */}
                <div className="product-card">
                  <span className="badge bg-success product-badge">new</span>
                  <div className="product-thumb-nail">
                    <a href="single-product.html">
                      <img className="product-image" src="assets/images/products/product-1.jpg" alt="image_not_found" />
                    </a>
                    <ul className="actions">
                      <li className="action whish-list">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                      </li>
                      <li className="action compare">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                      </li>
                      <li className="action quick-view">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                    <h3 className="product-title"><a href="single-product.html">Warburtons 9 Crumpets</a></h3>
                    <div className="product-price-wrapp">
                      <span className="product-regular-price">€43.80</span>
                      <span className="product-price-on-sale">€39.42</span>
                      <span className="badge bg-success">-20%</span>
                    </div>
                    <div className="product-cart-btn-wrap">
                      <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                    </div>
                  </div>
                </div>
                {/* product-card end */}
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-7">
                {/* product-card start */}
                <div className="product-card">
                  <span className="badge bg-success product-badge">new</span>
                  <div className="product-thumb-nail">
                    <a href="single-product.html">
                      <img className="product-image" src="assets/images/products/product-6.jpg" alt="image_not_found" />
                      <img className="product-image-hover-style" src="assets/images/products/product-6.1.jpg" alt="image_not_found" />
                    </a>
                    <ul className="actions">
                      <li className="action whish-list">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                      </li>
                      <li className="action compare">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                      </li>
                      <li className="action quick-view">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h4 className="product-sub-title"><a href="#">Fresh Fruits</a></h4>
                    <h3 className="product-title"><a href="single-product.html">Walkers Meaty Variety Crisps</a></h3>
                    <div className="product-price-wrapp">
                      <span className="product-regular-price">€43.80</span>
                      <span className="product-price-on-sale">€39.42</span>
                      <span className="badge bg-danger">-20%</span>
                    </div>
                    <div className="product-cart-btn-wrap">
                      <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                    </div>
                  </div>
                </div>
                {/* product-card end */}
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-7">
                {/* product-card start */}
                <div className="product-card">
                  <span className="badge bg-success product-badge">new</span>
                  <div className="product-thumb-nail">
                    <a href="single-product.html">
                      <img className="product-image" src="assets/images/products/product-2.jpg" alt="image_not_found" />
                      <img className="product-image-hover-style" src="assets/images/products/product-2.1.jpg" alt="image_not_found" />
                    </a>
                    <ul className="actions">
                      <li className="action whish-list">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                      </li>
                      <li className="action compare">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                      </li>
                      <li className="action quick-view">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h4 className="product-sub-title"><a href="#">Fresh Fruits</a></h4>
                    <h3 className="product-title"><a href="single-product.html">Walkers Meaty Variety Crisps</a></h3>
                    <div className="product-price-wrapp">
                      <span className="product-regular-price">€43.80</span>
                      <span className="product-price-on-sale">€39.42</span>
                      <span className="badge bg-danger">-20%</span>
                    </div>
                    <div className="product-cart-btn-wrap">
                      <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                    </div>
                  </div>
                </div>
                {/* product-card end */}
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-7">
                {/* product-card start */}
                <div className="product-card">
                  <span className="badge bg-success product-badge">new</span>
                  <div className="product-thumb-nail">
                    <a href="single-product.html">
                      <img className="product-image" src="assets/images/products/product-7.jpg" alt="image_not_found" />
                      <img className="product-image-hover-style" src="assets/images/products/product-7.1.jpg" alt="image_not_found" />
                    </a>
                    <ul className="actions">
                      <li className="action whish-list">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                      </li>
                      <li className="action compare">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                      </li>
                      <li className="action quick-view">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h4 className="product-sub-title"><a href="#">Fresh Fruits</a></h4>
                    <h3 className="product-title"><a href="single-product.html">Snacking Essentials Walnuts</a></h3>
                    <div className="product-price-wrapp">
                      <span className="product-price-on-sale">€39.42</span>
                    </div>
                    <div className="product-cart-btn-wrap">
                      <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                    </div>
                  </div>
                </div>
                {/* product-card end */}
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-7">
                {/* product-card start */}
                <div className="product-card">
                  <span className="badge bg-success product-badge">new</span>
                  <div className="product-thumb-nail">
                    <a href="single-product.html">
                      <img className="product-image" src="assets/images/products/product-3.jpg" alt="image_not_found" />
                    </a>
                    <ul className="actions">
                      <li className="action whish-list">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                      </li>
                      <li className="action compare">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                      </li>
                      <li className="action quick-view">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                    <h3 className="product-title"><a href="single-product.html">Snacking Essentials Cashew</a></h3>
                    <div className="product-price-wrapp">
                      <span className="product-regular-price">€43.80</span>
                      <span className="product-price-on-sale">€39.42</span>
                      <span className="badge bg-success">-20%</span>
                    </div>
                    <div className="product-cart-btn-wrap">
                      <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                    </div>
                  </div>
                </div>
                {/* product-card end */}
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-7">
                {/* product-card start */}
                <div className="product-card">
                  <span className="badge bg-success product-badge">new</span>
                  <div className="product-thumb-nail">
                    <a href="single-product.html">
                      <img className="product-image" src="assets/images/products/product-8.jpg" alt="image_not_found" />
                      <img className="product-image-hover-style" src="assets/images/products/product-8.1.jpg" alt="image_not_found" />
                    </a>
                    <ul className="actions">
                      <li className="action whish-list">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                      </li>
                      <li className="action compare">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                      </li>
                      <li className="action quick-view">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h4 className="product-sub-title"><a href="#">Fresh Fruits</a></h4>
                    <h3 className="product-title"><a href="single-product.html">Skips Prawn Cocktail Flavour</a></h3>
                    <div className="product-price-wrapp">
                      <span className="product-price-on-sale">€39.42</span>
                    </div>
                    <div className="product-cart-btn-wrap">
                      <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                    </div>
                  </div>
                </div>
                {/* product-card end */}
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-7">
                {/* product-card start */}
                <div className="product-card">
                  <span className="badge bg-success product-badge">new</span>
                  <div className="product-thumb-nail">
                    <a href="single-product.html">
                      <img className="product-image" src="assets/images/products/product-4.jpg" alt="image_not_found" />
                      <img className="product-image-hover-style" src="assets/images/products/product-4.1.jpg" alt="image_not_found" />
                    </a>
                    <ul className="actions">
                      <li className="action whish-list">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                      </li>
                      <li className="action compare">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                      </li>
                      <li className="action quick-view">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                    <h3 className="product-title"><a href="single-product.html">Salad Selection Pack</a></h3>
                    <div className="product-price-wrapp">
                      <span className="product-regular-price">€43.80</span>
                      <span className="product-price-on-sale">€39.42</span>
                      <span className="badge bg-success">-20%</span>
                    </div>
                    <div className="product-cart-btn-wrap">
                      <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                    </div>
                  </div>
                </div>
                {/* product-card end */}
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-7">
                {/* product-card start */}
                <div className="product-card">
                  <span className="badge bg-success product-badge">new</span>
                  <div className="product-thumb-nail">
                    <a href="single-product.html">
                      <img className="product-image" src="assets/images/products/product-9.jpg" alt="image_not_found" />
                      <img className="product-image-hover-style" src="assets/images/products/product-9.1.jpg" alt="image_not_found" />
                    </a>
                    <ul className="actions">
                      <li className="action whish-list">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                      </li>
                      <li className="action compare">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                      </li>
                      <li className="action quick-view">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h4 className="product-sub-title"><a href="#">Fresh Fruits</a></h4>
                    <h3 className="product-title"><a href="single-product.html">Red Seedless Grapes</a></h3>
                    <div className="product-price-wrapp">
                      <span className="product-regular-price">€43.80</span>
                      <span className="product-price-on-sale">€39.42</span>
                    </div>
                    <div className="product-cart-btn-wrap">
                      <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                    </div>
                  </div>
                </div>
                {/* product-card end */}
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-7">
                {/* product-card start */}
                <div className="product-card">
                  <span className="badge bg-success product-badge">new</span>
                  <div className="product-thumb-nail">
                    <a href="single-product.html">
                      <img className="product-image" src="assets/images/products/product-5.jpg" alt="image_not_found" />
                      <img className="product-image-hover-style" src="assets/images/products/product-5.1.jpg" alt="image_not_found" />
                    </a>
                    <ul className="actions">
                      <li className="action whish-list">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                      </li>
                      <li className="action compare">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                      </li>
                      <li className="action quick-view">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                    <h3 className="product-title"><a href="single-product.html">Pink Lady Apples 4 Pack</a></h3>
                    <div className="product-price-wrapp">
                      <span className="product-regular-price">€43.80</span>
                      <span className="product-price-on-sale">€39.42</span>
                      <span className="badge bg-success">-20%</span>
                    </div>
                    <div className="product-cart-btn-wrap">
                      <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                    </div>
                  </div>
                </div>
                {/* product-card end */}
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-7">
                {/* product-card start */}
                <div className="product-card">
                  <span className="badge bg-success product-badge">new</span>
                  <div className="product-thumb-nail">
                    <a href="single-product.html">
                      <img className="product-image" src="assets/images/products/product-10.jpg" alt="image_not_found" />
                    </a>
                    <ul className="actions">
                      <li className="action whish-list">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                      </li>
                      <li className="action compare">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                      </li>
                      <li className="action quick-view">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h4 className="product-sub-title"><a href="#">Fresh Fruits</a></h4>
                    <h3 className="product-title"><a href="single-product.html">Mini Corn Cobs 625g</a></h3>
                    <div className="product-price-wrapp">
                      <span className="product-price-on-sale">€39.42</span>
                    </div>
                    <div className="product-cart-btn-wrap">
                      <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                    </div>
                  </div>
                </div>
                {/* product-card end */}
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-7">
                {/* product-card start */}
                <div className="product-card">
                  <span className="badge bg-success product-badge">new</span>
                  <div className="product-thumb-nail">
                    <a href="single-product.html">
                      <img className="product-image" src="assets/images/products/product-11.jpg" alt="image_not_found" />
                      <img className="product-image-hover-style" src="assets/images/products/product-11.1.jpg" alt="image_not_found" />
                    </a>
                    <ul className="actions">
                      <li className="action whish-list">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                      </li>
                      <li className="action compare">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                      </li>
                      <li className="action quick-view">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                    <h3 className="product-title"><a href="single-product.html">lorette Sweet &amp; Crunchy</a></h3>
                    <div className="product-price-wrapp">
                      <span className="product-price-on-sale">€39.42</span>
                    </div>
                    <div className="product-cart-btn-wrap">
                      <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                    </div>
                  </div>
                </div>
                {/* product-card end */}
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-7">
                {/* product-card start */}
                <div className="product-card">
                  <span className="badge bg-success product-badge">new</span>
                  <div className="product-thumb-nail">
                    <a href="single-product.html">
                      <img className="product-image" src="assets/images/products/product-12.jpg" alt="image_not_found" />
                      <img className="product-image-hover-style" src="assets/images/products/product-12.1.jpg" alt="image_not_found" />
                    </a>
                    <ul className="actions">
                      <li className="action whish-list">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                      </li>
                      <li className="action compare">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                      </li>
                      <li className="action quick-view">
                        <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h4 className="product-sub-title"><a href="#">Fresh Fruits</a></h4>
                    <h3 className="product-title"><a href="single-product.html">Gilfresh Soup Vegetables</a></h3>
                    <div className="product-price-wrapp">
                      <span className="product-regular-price">€43.80</span>
                      <span className="product-price-on-sale">€39.42</span>
                      <span className="badge bg-danger">-20%</span>
                    </div>
                    <div className="product-cart-btn-wrap">
                      <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                    </div>
                  </div>
                </div>
                {/* product-card end */}
              </div>
              <div className="col-12 mt-7 mb-7">
                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-center">
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        <span className="ion-ios-arrow-left" />
                      </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <span className="ion-ios-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="profile" role="tabpanel">
            <div className="row grid-view-list overflow-hidden">
              <div className="row grid-view-list mb-n7">
                <div className="col-12 mb-7">
                  {/* product-card start */}
                  <div className="product-card">
                    <span className="badge bg-success product-badge">new</span>
                    <div className="product-thumb-nail">
                      <a href="single-product.html">
                        <img className="product-image" src="assets/images/products/product-1.jpg" alt="image_not_found" />
                      </a>
                      <ul className="actions">
                        <li className="action whish-list">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                        </li>
                        <li className="action compare">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                        </li>
                        <li className="action quick-view">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                        </li>
                      </ul>
                    </div>
                    <div className="product-content">
                      <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                      <h3 className="product-title"><a href="single-product.html">Warburtons 9 Crumpets</a></h3>
                      <div className="product-price-wrapp">
                        <span className="product-regular-price">€43.80</span>
                        <span className="product-price-on-sale">€39.42</span>
                        <span className="badge bg-success">-20%</span>
                      </div>
                      <p> Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.
                        Comfortable cotton-blend fabrication.
                        Classic varsity jacket features brand details throughout.
                        Flat knit collar.</p>
                      <div className="product-cart-btn-wrap">
                        <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                      </div>
                    </div>
                  </div>
                  {/* product-card end */}
                </div>
                <div className="col-12 mb-7">
                  {/* product-card start */}
                  <div className="product-card">
                    <span className="badge bg-success product-badge">new</span>
                    <div className="product-thumb-nail">
                      <a href="single-product.html">
                        <img className="product-image" src="assets/images/products/product-6.jpg" alt="image_not_found" />
                        <img className="product-image-hover-style" src="assets/images/products/product-6.1.jpg" alt="image_not_found" />
                      </a>
                      <ul className="actions">
                        <li className="action whish-list">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                        </li>
                        <li className="action compare">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                        </li>
                        <li className="action quick-view">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                        </li>
                      </ul>
                    </div>
                    <div className="product-content">
                      <h4 className="product-sub-title"><a href="#">Fresh Fruits</a></h4>
                      <h3 className="product-title"><a href="single-product.html">Walkers Meaty Variety Crisps</a></h3>
                      <div className="product-price-wrapp">
                        <span className="product-regular-price">€43.80</span>
                        <span className="product-price-on-sale">€39.42</span>
                        <span className="badge bg-danger">-20%</span>
                      </div>
                      <p> Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.
                        Comfortable cotton-blend fabrication.
                        Classic varsity jacket features brand details throughout.
                        Flat knit collar.</p>
                      <div className="product-cart-btn-wrap">
                        <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                      </div>
                    </div>
                  </div>
                  {/* product-card end */}
                </div>
                <div className="col-12 mb-7">
                  {/* product-card start */}
                  <div className="product-card">
                    <span className="badge bg-success product-badge">new</span>
                    <div className="product-thumb-nail">
                      <a href="single-product.html">
                        <img className="product-image" src="assets/images/products/product-2.jpg" alt="image_not_found" />
                        <img className="product-image-hover-style" src="assets/images/products/product-2.1.jpg" alt="image_not_found" />
                      </a>
                      <ul className="actions">
                        <li className="action whish-list">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                        </li>
                        <li className="action compare">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                        </li>
                        <li className="action quick-view">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                        </li>
                      </ul>
                    </div>
                    <div className="product-content">
                      <h4 className="product-sub-title"><a href="#">Fresh Fruits</a></h4>
                      <h3 className="product-title"><a href="single-product.html">Walkers Meaty Variety Crisps</a></h3>
                      <div className="product-price-wrapp">
                        <span className="product-regular-price">€43.80</span>
                        <span className="product-price-on-sale">€39.42</span>
                        <span className="badge bg-danger">-20%</span>
                      </div>
                      <p> Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.
                        Comfortable cotton-blend fabrication.
                        Classic varsity jacket features brand details throughout.
                        Flat knit collar.</p>
                      <div className="product-cart-btn-wrap">
                        <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                      </div>
                    </div>
                  </div>
                  {/* product-card end */}
                </div>
                <div className="col-12 mb-7">
                  {/* product-card start */}
                  <div className="product-card">
                    <span className="badge bg-success product-badge">new</span>
                    <div className="product-thumb-nail">
                      <a href="single-product.html">
                        <img className="product-image" src="assets/images/products/product-7.jpg" alt="image_not_found" />
                        <img className="product-image-hover-style" src="assets/images/products/product-7.1.jpg" alt="image_not_found" />
                      </a>
                      <ul className="actions">
                        <li className="action whish-list">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                        </li>
                        <li className="action compare">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                        </li>
                        <li className="action quick-view">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                        </li>
                      </ul>
                    </div>
                    <div className="product-content">
                      <h4 className="product-sub-title"><a href="#">Fresh Fruits</a></h4>
                      <h3 className="product-title"><a href="single-product.html">Snacking Essentials Walnuts</a></h3>
                      <div className="product-price-wrapp">
                        <span className="product-price-on-sale">€39.42</span>
                      </div>
                      <p> Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.
                        Comfortable cotton-blend fabrication.
                        Classic varsity jacket features brand details throughout.
                        Flat knit collar.</p>
                      <div className="product-cart-btn-wrap">
                        <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                      </div>
                    </div>
                  </div>
                  {/* product-card end */}
                </div>
                <div className="col-12 mb-7">
                  {/* product-card start */}
                  <div className="product-card">
                    <span className="badge bg-success product-badge">new</span>
                    <div className="product-thumb-nail">
                      <a href="single-product.html">
                        <img className="product-image" src="assets/images/products/product-3.jpg" alt="image_not_found" />
                      </a>
                      <ul className="actions">
                        <li className="action whish-list">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                        </li>
                        <li className="action compare">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                        </li>
                        <li className="action quick-view">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                        </li>
                      </ul>
                    </div>
                    <div className="product-content">
                      <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                      <h3 className="product-title"><a href="single-product.html">Snacking Essentials Cashew</a></h3>
                      <div className="product-price-wrapp">
                        <span className="product-regular-price">€43.80</span>
                        <span className="product-price-on-sale">€39.42</span>
                        <span className="badge bg-success">-20%</span>
                      </div>
                      <p> Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.
                        Comfortable cotton-blend fabrication.
                        Classic varsity jacket features brand details throughout.
                        Flat knit collar.</p>
                      <div className="product-cart-btn-wrap">
                        <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                      </div>
                    </div>
                  </div>
                  {/* product-card end */}
                </div>
                <div className="col-12 mb-7">
                  {/* product-card start */}
                  <div className="product-card">
                    <span className="badge bg-success product-badge">new</span>
                    <div className="product-thumb-nail">
                      <a href="single-product.html">
                        <img className="product-image" src="assets/images/products/product-8.jpg" alt="image_not_found" />
                        <img className="product-image-hover-style" src="assets/images/products/product-8.1.jpg" alt="image_not_found" />
                      </a>
                      <ul className="actions">
                        <li className="action whish-list">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                        </li>
                        <li className="action compare">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                        </li>
                        <li className="action quick-view">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                        </li>
                      </ul>
                    </div>
                    <div className="product-content">
                      <h4 className="product-sub-title"><a href="#">Fresh Fruits</a></h4>
                      <h3 className="product-title"><a href="single-product.html">Skips Prawn Cocktail Flavour</a></h3>
                      <div className="product-price-wrapp">
                        <span className="product-price-on-sale">€39.42</span>
                      </div>
                      <p> Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.
                        Comfortable cotton-blend fabrication.
                        Classic varsity jacket features brand details throughout.
                        Flat knit collar.</p>
                      <div className="product-cart-btn-wrap">
                        <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                      </div>
                    </div>
                  </div>
                  {/* product-card end */}
                </div>
                <div className="col-12 mb-7">
                  {/* product-card start */}
                  <div className="product-card">
                    <span className="badge bg-success product-badge">new</span>
                    <div className="product-thumb-nail">
                      <a href="single-product.html">
                        <img className="product-image" src="assets/images/products/product-4.jpg" alt="image_not_found" />
                        <img className="product-image-hover-style" src="assets/images/products/product-4.1.jpg" alt="image_not_found" />
                      </a>
                      <ul className="actions">
                        <li className="action whish-list">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                        </li>
                        <li className="action compare">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                        </li>
                        <li className="action quick-view">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                        </li>
                      </ul>
                    </div>
                    <div className="product-content">
                      <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                      <h3 className="product-title"><a href="single-product.html">Salad Selection Pack</a></h3>
                      <div className="product-price-wrapp">
                        <span className="product-regular-price">€43.80</span>
                        <span className="product-price-on-sale">€39.42</span>
                        <span className="badge bg-success">-20%</span>
                      </div>
                      <p> Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.
                        Comfortable cotton-blend fabrication.
                        Classic varsity jacket features brand details throughout.
                        Flat knit collar.</p>
                      <div className="product-cart-btn-wrap">
                        <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                      </div>
                    </div>
                  </div>
                  {/* product-card end */}
                </div>
                <div className="col-12 mb-7">
                  {/* product-card start */}
                  <div className="product-card">
                    <span className="badge bg-success product-badge">new</span>
                    <div className="product-thumb-nail">
                      <a href="single-product.html">
                        <img className="product-image" src="assets/images/products/product-9.jpg" alt="image_not_found" />
                        <img className="product-image-hover-style" src="assets/images/products/product-9.1.jpg" alt="image_not_found" />
                      </a>
                      <ul className="actions">
                        <li className="action whish-list">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                        </li>
                        <li className="action compare">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                        </li>
                        <li className="action quick-view">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                        </li>
                      </ul>
                    </div>
                    <div className="product-content">
                      <h4 className="product-sub-title"><a href="#">Fresh Fruits</a></h4>
                      <h3 className="product-title"><a href="single-product.html">Red Seedless Grapes</a></h3>
                      <div className="product-price-wrapp">
                        <span className="product-regular-price">€43.80</span>
                        <span className="product-price-on-sale">€39.42</span>
                      </div>
                      <p> Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.
                        Comfortable cotton-blend fabrication.
                        Classic varsity jacket features brand details throughout.
                        Flat knit collar.</p>
                      <div className="product-cart-btn-wrap">
                        <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                      </div>
                    </div>
                  </div>
                  {/* product-card end */}
                </div>
                <div className="col-12 mb-7">
                  {/* product-card start */}
                  <div className="product-card">
                    <span className="badge bg-success product-badge">new</span>
                    <div className="product-thumb-nail">
                      <a href="single-product.html">
                        <img className="product-image" src="assets/images/products/product-5.jpg" alt="image_not_found" />
                        <img className="product-image-hover-style" src="assets/images/products/product-5.1.jpg" alt="image_not_found" />
                      </a>
                      <ul className="actions">
                        <li className="action whish-list">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                        </li>
                        <li className="action compare">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                        </li>
                        <li className="action quick-view">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                        </li>
                      </ul>
                    </div>
                    <div className="product-content">
                      <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                      <h3 className="product-title"><a href="single-product.html">Pink Lady Apples 4 Pack</a></h3>
                      <div className="product-price-wrapp">
                        <span className="product-regular-price">€43.80</span>
                        <span className="product-price-on-sale">€39.42</span>
                        <span className="badge bg-success">-20%</span>
                      </div>
                      <p> Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.
                        Comfortable cotton-blend fabrication.
                        Classic varsity jacket features brand details throughout.
                        Flat knit collar.</p>
                      <div className="product-cart-btn-wrap">
                        <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                      </div>
                    </div>
                  </div>
                  {/* product-card end */}
                </div>
                <div className="col-12 mb-7">
                  {/* product-card start */}
                  <div className="product-card">
                    <span className="badge bg-success product-badge">new</span>
                    <div className="product-thumb-nail">
                      <a href="single-product.html">
                        <img className="product-image" src="assets/images/products/product-10.jpg" alt="image_not_found" />
                      </a>
                      <ul className="actions">
                        <li className="action whish-list">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                        </li>
                        <li className="action compare">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                        </li>
                        <li className="action quick-view">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                        </li>
                      </ul>
                    </div>
                    <div className="product-content">
                      <h4 className="product-sub-title"><a href="#">Fresh Fruits</a></h4>
                      <h3 className="product-title"><a href="single-product.html">Mini Corn Cobs 625g</a></h3>
                      <div className="product-price-wrapp">
                        <span className="product-price-on-sale">€39.42</span>
                      </div>
                      <p> Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.
                        Comfortable cotton-blend fabrication.
                        Classic varsity jacket features brand details throughout.
                        Flat knit collar.</p>
                      <div className="product-cart-btn-wrap">
                        <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                      </div>
                    </div>
                  </div>
                  {/* product-card end */}
                </div>
                <div className="col-12 mb-7">
                  {/* product-card start */}
                  <div className="product-card">
                    <span className="badge bg-success product-badge">new</span>
                    <div className="product-thumb-nail">
                      <a href="single-product.html">
                        <img className="product-image" src="assets/images/products/product-11.jpg" alt="image_not_found" />
                        <img className="product-image-hover-style" src="assets/images/products/product-11.1.jpg" alt="image_not_found" />
                      </a>
                      <ul className="actions">
                        <li className="action whish-list">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                        </li>
                        <li className="action compare">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                        </li>
                        <li className="action quick-view">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                        </li>
                      </ul>
                    </div>
                    <div className="product-content">
                      <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                      <h3 className="product-title"><a href="single-product.html">lorette Sweet &amp; Crunchy</a></h3>
                      <div className="product-price-wrapp">
                        <span className="product-price-on-sale">€39.42</span>
                      </div>
                      <p> Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.
                        Comfortable cotton-blend fabrication.
                        Classic varsity jacket features brand details throughout.
                        Flat knit collar.</p>
                      <div className="product-cart-btn-wrap">
                        <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                      </div>
                    </div>
                  </div>
                  {/* product-card end */}
                </div>
                <div className="col-12 mb-7">
                  {/* product-card start */}
                  <div className="product-card">
                    <span className="badge bg-success product-badge">new</span>
                    <div className="product-thumb-nail">
                      <a href="single-product.html">
                        <img className="product-image" src="assets/images/products/product-12.jpg" alt="image_not_found" />
                        <img className="product-image-hover-style" src="assets/images/products/product-12.1.jpg" alt="image_not_found" />
                      </a>
                      <ul className="actions">
                        <li className="action whish-list">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                        </li>
                        <li className="action compare">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                        </li>
                        <li className="action quick-view">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                        </li>
                      </ul>
                    </div>
                    <div className="product-content">
                      <h4 className="product-sub-title"><a href="#">Fresh Fruits</a></h4>
                      <h3 className="product-title"><a href="single-product.html">Gilfresh Soup Vegetables</a></h3>
                      <div className="product-price-wrapp">
                        <span className="product-regular-price">€43.80</span>
                        <span className="product-price-on-sale">€39.42</span>
                        <span className="badge bg-danger">-20%</span>
                      </div>
                      <p> Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.
                        Comfortable cotton-blend fabrication.
                        Classic varsity jacket features brand details throughout.
                        Flat knit collar.</p>
                      <div className="product-cart-btn-wrap">
                        <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                      </div>
                    </div>
                  </div>
                  {/* product-card end */}
                </div>
                <div className="col-12 mb-7">
                  {/* product-card start */}
                  <div className="product-card">
                    <span className="badge bg-success product-badge">new</span>
                    <div className="product-thumb-nail">
                      <a href="single-product.html">
                        <img className="product-image" src="assets/images/products/product-4.jpg" alt="image_not_found" />
                        <img className="product-image-hover-style" src="assets/images/products/product-4.1.jpg" alt="image_not_found" />
                      </a>
                      <ul className="actions">
                        <li className="action whish-list">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                        </li>
                        <li className="action compare">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                        </li>
                        <li className="action quick-view">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                        </li>
                      </ul>
                    </div>
                    <div className="product-content">
                      <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                      <h3 className="product-title"><a href="single-product.html">Salad Selection Pack</a></h3>
                      <div className="product-price-wrapp">
                        <span className="product-regular-price">€43.80</span>
                        <span className="product-price-on-sale">€39.42</span>
                        <span className="badge bg-success">-20%</span>
                      </div>
                      <p> Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.
                        Comfortable cotton-blend fabrication.
                        Classic varsity jacket features brand details throughout.
                        Flat knit collar.</p>
                      <div className="product-cart-btn-wrap">
                        <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                      </div>
                    </div>
                  </div>
                  {/* product-card end */}
                </div>
                <div className="col-12 mb-7">
                  {/* product-card start */}
                  <div className="product-card">
                    <span className="badge bg-success product-badge">new</span>
                    <div className="product-thumb-nail">
                      <a href="single-product.html">
                        <img className="product-image" src="assets/images/products/product-9.jpg" alt="image_not_found" />
                        <img className="product-image-hover-style" src="assets/images/products/product-9.1.jpg" alt="image_not_found" />
                      </a>
                      <ul className="actions">
                        <li className="action whish-list">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                        </li>
                        <li className="action compare">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                        </li>
                        <li className="action quick-view">
                          <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                        </li>
                      </ul>
                    </div>
                    <div className="product-content">
                      <h4 className="product-sub-title"><a href="#">Fresh Fruits</a></h4>
                      <h3 className="product-title"><a href="single-product.html">Red Seedless Grapes</a></h3>
                      <div className="product-price-wrapp">
                        <span className="product-regular-price">€43.80</span>
                        <span className="product-price-on-sale">€39.42</span>
                      </div>
                      <p> Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.
                        Comfortable cotton-blend fabrication.
                        Classic varsity jacket features brand details throughout.
                        Flat knit collar.</p>
                      <div className="product-cart-btn-wrap">
                        <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                      </div>
                    </div>
                  </div>
                  {/* product-card end */}
                </div>
                <div className="col-12 mb-7" >
                  <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center" style={{paddingTop:"55px"}}>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          <span className="ion-ios-arrow-left" />
                        </a>
                      </li>
                      <li className="page-item"><a className="page-link" href="#">1</a></li>
                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          <span className="ion-ios-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>

     
  )
}