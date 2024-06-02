import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {


  const  ScrollToTop = () => {
  
    window.scrollTo(0, 0);
  };
  return (
    <div>
          <footer className="footer">
    <div className="container">
      <div className="row  mt-5 mb-n7">
        <div className="col-lg-4 col-sm-6 mb-7">
          <div className="footer-widget">
            <a className="footer-brand pt-3" href="index.html">
              <img src="data:image/png;base64,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" alt="images_not_found" />
            </a>
            
                <h5>ADDRESS</h5>
            <h6>2nd floor ,388 opposite of eye retina Hospital, Scheme 54 PU4 Indore</h6>
            <h6>Madhya Pradesh </h6>
            <br></br>
            
            <ul className="footer-des">
              <li className="footer-des-list"><i className="las la-map-marked" /> <span>Indore , Madhya Pradesh 452010</span>
              </li>
              <li className="footer-des-list"><i className="las la-envelope-open" /> <a href="info@logicalsofttech.com">info@logicalsofttech.com</a>
              </li>
              <li className="footer-des-list"><i className="las la-envelope-open" /> <a href="anjusinghdx51@gmail.com">anjusinghdx51@gmail.com</a>
              </li>
              <li className="footer-des-list"><i className="las la-phone-volume" /> <a href="tel:+11238889999">+91-8269829729</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-7">
         
        </div>
      
        <div className="col-lg-2 col-sm-6 mb-7">
          <div className="footer-widget">
            <h4 className="title">Information</h4>
            <ul className="footer-menu">
            <li className="footer-menu-items"> <Link to="/SingleProduct" className="footer-menu-link"onClick={ScrollToTop}>About us</Link></li>
            <li className="footer-menu-items"> <Link to="/Contact" className="footer-menu-link" onClick={ScrollToTop}>Contact us </Link></li>
              <li className="footer-menu-items"> <Link to="/Login" className="footer-menu-link " onClick={ScrollToTop}>Login</Link></li>
        
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-sm-6 mb-7">
          <div className="footer-widget">
            <h4 className="title">Information</h4>
            <div className="social-links social-links-dark">
              <a className="social-link facebook" href="#"><i className="lab la-facebook" /></a>
              <a className="social-link twitter" href="#"><i className="lab la-twitter" /></a>
              <a className="social-link youtube" href="#"><i className="lab la-youtube" /></a>
              <a className="social-link instagram" href="#"><i className="lab la-instagram" /></a>
            </div>
            <a className="footer-payment" href="#">
              <img src="assets/images/payment/payment.png" alt="images_not_found" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="copy-right bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p>© <span id="currentYear" /> Made With <i className="las la-heart" /> By <a href="https://logicalsofttech.com/">logicalsofttech</a> All Rights
              Reserved </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
      
    </div>
  )
}

export default Footer
