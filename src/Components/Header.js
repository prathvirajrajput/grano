// import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
function Header() {

  // const [UserId,setUserId]= useState('');


  // useEffect( ()=>{
  //   const idFromLocalStorage = localStorage.getItem("userId");
  //   if (idFromLocalStorage) {
  //     setUserId(idFromLocalStorage);
   
  //     // console.log(UserId)
  //   }

  //   let data ={
  //     "userId" : UserId
  //   };

  //   axios.post(`http://103.104.74.215:3008/website/user_details`,data).then((res)=>{
  //           console.log(res)
  //   })
  // },[])






  return (
    <div>
      <div id="active-sticky2" className="header-space header-middle-two bg-success">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6 col-sm-4 col-md-3 col-xl-2">
            <a className="logo" href="/"><img src="assets/images/logo/logo-white.png" alt="image_not_found" /></a>
          </div>
          <div className="col-6 col-sm-8 col-md-9 col-xl-10">
            <div className="d-flex justify-content-end">
              <div className="flex-grow-1 d-none d-lg-block">
                <form className="search-form position-relative" action="#">
                  <div className="input-group">
                    <input className="form-control" type="text" placeholder="Enter your search key ... " />
                    <div className="input-group-text">
                      <button className="search-btn btn-dark">
                        <i className="ion-ios-search-strong" />
                      </button>
                    </div>
                  </div>
                  <select className="form-select d-none d-xl-block" id="autoSizingSelect">
                    <option value={"0"}>All categories</option>
                    <option value={"04"}>Fresh Food</option>
                    <option value={"83"}>- - Fresh Fruit</option>
                    <option value={"87"}>- - - - Bananas</option>
                    <option value={"88"}>- - - - Apples &amp; Pears</option>
                    <option value={"89"}>- - - - Berries &amp; Cherries</option>
                    <option value={"90"}>- - - - Oranges &amp; Citrus Fruit</option>
                    <option value={"91"}>- - - - Grapes</option>
                    <option value={"84"}>- - Fresh Vegetables</option>
                    <option value={"92"}>
                      - - - - Potatoes &amp; Sweet Potatoes
                    </option>
                    <option value={"93"}>- - - - Onions &amp; Leeks</option>
                    <option value={"94"}>
                      - - - - Carrots &amp; Root Vegetables
                    </option>
                    <option value={"95"}>- - - - Broccoli &amp; Cauliflower</option>
                    <option value={"96"}>- - - - Cabbages &amp; Greens</option>
                    <option value={"85"}>- - Fresh Salad &amp; Dips</option>
                    <option value={"97"}>- - - - Lettuce &amp; Salad bags</option>
                    <option value={"98"}>- - - - Tomatoes</option>
                    <option value={"99"}>- - - - Cucumber</option>
                    <option value={"00"}>- - - - Celery</option>
                    <option value={"01"}>- - - - Peppers</option>
                    <option value={"86"}>- - Milk, Butter &amp; Eggs</option>
                    <option value={"02"}>- - - - Milk</option>
                    <option value={"03"}>- - - - Spreads &amp; Margarine</option>
                    <option value={"04"}>- - - - Fresh Cream &amp; Custard</option>
                    <option value={"05"}>- - - - Eggs</option>
                    <option value={"06"}>- - - - Baking &amp; Cooking</option>
                  </select>
                </form>
              </div>
              <ul className="quick-links">
                {/* quick-link-item */}
                <li className="quick-link-item d-none d-md-inline-flex">
                  <span className="quick-link-icon flex-shrink-0">
                    <a href="#" className="quick-link">
                      <i className="las la-user-circle" />
                    </a>
                  </span>
                  <span className="flex-grow-1">
                    <Link to="/MyAccount" className="my-account">My account</Link>
                    <a href="login.html" className="sign-in">Sign out</a>
                  </span>
                </li>
                {/* quick-link-item end */}
              
                {/* quick-link-item */}
                <li className="quick-link-item d-none d-sm-flex">
                  <a href="cart.html" className="quick-link">
                    <span className="quick-link-icon flex-shrink-0">
                      <i className="lar la-heart" />
                      <span className="badge rounded-pill bg-white">3</span>
                    </span>
                  </a>
                </li>
                {/* quick-link-item end */}
                {/* quick-link-item */}
                <li className="quick-link-item">
                  <a href="#" className="quick-link">
                    <span className="quick-link-icon flex-shrink-0">
                      <i className="las la-shopping-bag" />
                      <span className="badge rounded-pill bg-white">4</span>
                    </span>
                    <span className="usd-curency d-none d-sm-flex flex-grow-1">₹0.00</span>
                  </a>
                  <div className="checkout-cart">
                    <ul className="checkout-scroll">
                      <li className="checkout-cart-list">
                        <div className="checkout-img">
                          <img className="product-image" src="assets/images/mini-cart/1.jpg" alt="img" />
                          <span className="product-quantity">1x</span>
                        </div>
                        <div className="checkout-block">
                          <a className="product-name" href="#">Warburtons 9 Crumpets</a>
                          <span className="product-price">₹24.33</span>
                          <a className="remove-cart" href="#">
                            <i className="las la-times" />
                          </a>
                          <div className="product-size">
                            <span>Size: S</span>
                          </div>
                        </div>
                      </li>
                      <li className="checkout-cart-list">
                        <div className="checkout-img">
                          <img className="product-image" src="assets/images/mini-cart/2.jpg" alt="img" />
                          <span className="product-quantity">1x</span>
                        </div>
                        <div className="checkout-block">
                          <a href="#" className="product-name">Snacking Essentials Cashew</a>
                          <span className="product-price">₹23.33</span>
                          <a className="remove-cart" href="#">
                            <i className="las la-times" />
                          </a>
                          <div className="product-size">
                            <span>Size: S</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <ul className="list-group checkout-sub-total">
                      <li className="list-group-item">
                        <span>Subtotal</span>
                        <span>₹146.00</span>
                      </li>
                      <li className="list-group-item">
                        <span>shipping</span>
                        <span>₹7.00</span>
                      </li>
                      <li className="list-group-item">
                        <strong>Total</strong>
                        <strong>₹58.71</strong>
                      </li>
                    </ul>
                    {/* checkout-action button start */}
                    <div className="checkout-action">
                      <a href="checkout.html" className="btn btn-lg btn-dark d-block">Checkout</a>
                    </div>
                    {/* checkout-action button end */}
                  </div>
                </li>
                {/* quick-link-item end */}
                <li className="quick-link-item d-lg-none">
                  <button className="toggle-menu" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i className="las la-bars" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Header;
