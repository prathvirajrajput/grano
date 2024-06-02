import React from 'react'

function About() {
  return (
    <div>
      <div className="txt_info" ><h1 style={{textAlign:"center", marginTop:"50px", color:"green"}}>About Us</h1></div>
      <section className="about-section section-mt section-mb">
  <div className="container">
    <div className="row mb-n7 align-items-center">
      <div className="col-xl-6 mb-7">
        <div className="about-content text-center">
          <div className="about-left-image">
            <img src="assets/images/products/large-1.jpg" alt="img" className="img-responsive" style={{borderRadius:"6px"}} />
          </div>
        </div>
      </div>
      <div className="col-xl-6 mb-7" style={{ paddingLeft:"15px"}}>
        <div className="about-content">
          <h2 className="title mb-7">
            We are a digital agency focused on delivering content and utility
            user-experiences.
          </h2>
          <p className="mb-7">
            Adipiscing lacus ut elementum, nec duis, tempor litora turpis
            dapibus. Imperdiet cursus odio tortor in elementum. Egestas nunc
            eleifend feugiat lectus laoreet, vel nunc taciti integer cras. Hac
            pede dis, praesent nibh ac dui mauris sit. Pellentesque mi,
            facilisi mauris, elit sociis leo sodales accumsan. Iaculis ac
            fringilla torquent lorem consectetuer, sociosqu phasellus risus
            urna aliquam, ornare.
          </p>
          <img src="assets/images/products/signature.png" alt="img" />
        </div>
      </div>
    </div>
  </div>
</section>
<section className="static-info-section"style={{paddingTop:"35px"}}>
  <div className="container">
    <div className="static_info">
      <div className="row">
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="box_info">
            <span className="icon_info las la-shipping-fast" />
            <div className="txt_info">
              <h2 className="title">Free Shipping</h2>
              <h6>On all orders over $75.00</h6>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="box_info">
            <span className="icon_info las la-globe-americas" />
            <div className="txt_info">
              <h2 className="title">Free Returns</h2>
              <h6>Returns are free within 9 days</h6>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="box_info">
            <span className="icon_info las la-money-bill-wave" />
            <div className="txt_info">
              <h2 className="title">100% Payment Secure</h2>
              <h6>Your payment are safe with us.</h6>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="box_info">
            <span className="icon_info las la-headset" />
            <div className="txt_info">
              <h2 className="title">Support 24/7</h2>
              <h6>Contact us 24 hours a day</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="service-section section-mb">
  <div className="container">
    <div className="row mb-n7">
      <div className="col-sm-6 col-lg-4 mb-7">
        <div className="single-blog">
          <div className="single-thumb mb-4 zoom-in d-block overflow-hidden">
            <img src="assets/images/products/product-1.jpg" alt="single-thumb-naile" />
          </div>
          <div className="single-service">
            <h3 className="title text-capitalize mb-4">What do we do?</h3>
            <li> 
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto
            </li>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 mb-7">
        <div className="single-blog">
          <div className="single-thumb mb-4 zoom-in d-block overflow-hidden">
            <img src="assets/images/products/product-2.jpg" alt="single-thumb-naile" />
          </div>
          <div className="single-service">
            <h3 className="title text-capitalize mb-4">Our Mission</h3>
            <li style={{margin:"0 5px"}}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto
            </li>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 mb-7">
        <div className="single-blog">
          <div className="single-thumb mb-4 zoom-in d-block overflow-hidden">
            <img src="assets/images/products/product-3.jpg" alt="single-thumb-naile" />
          </div>
          <div className="single-service">
            <h3 className="title text-capitalize mb-4">About Us</h3>
            <li>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="service-section section-mt section-mb"style={{paddingTop:"100px"}}>
  <div className="container">
    <div className="services">
      <div className="row mb-n7">
        <div className="col-sm-6 col-lg-3 mb-7">
          <div className="service-item">
            <img className="service-icon" src="assets/images/icon/service1.png" alt="images_not_found" />
            <h3 className="service-title">100% SECURE PAYMENTS</h3>
            <p>Moving your card details to a much more secured place</p>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 mb-7">
          <div className="service-item">
            <img className="service-icon" src="assets/images/icon/service2.png" alt="images_not_found" />
            <h3 className="service-title">TRUSTPAY</h3>
            <p>100% Payment Protection. Easy Return Policy</p>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 mb-7">
          <div className="service-item">
            <img className="service-icon" src="assets/images/icon/service3.png" alt="images_not_found" />
            <h3 className="service-title">HELP CENTER</h3>
            <p>GGot a question? Look no further.Browse our FAQs or submit your query here.</p>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 mb-7">
          <div className="service-item">
            <img className="service-icon" src="assets/images/icon/service4.png" alt="images_not_found" />
            <h3 className="service-title">Express Shipping</h3>
            <p>Fast, reliable delivery from global warehouses</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About;
