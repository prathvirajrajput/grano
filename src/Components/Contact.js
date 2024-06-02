import React from 'react'

function Contact() {
  return (
    <div>
   <div className="map section-mb">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.4816549723814!2d75.893818574843!3d22.747499826538142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631dbc5e7d2a29%3A0x1c8746aae1d098c8!2sLogical%20Soft%20Tech%20Private%20Limited%20(%20Mobile%20Application%20Development%20%7C%20Website%20Development%20%7C%20SEO%2FSMM)!5e0!3m2!1sen!2sin!4v1693923375959!5m2!1sen!2sin" width={1518} height={450} style={{borderRadius:7}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
</div>


    <section className="contact-section section-mb">
  <div className="container">
    <div className="row mb-n7">
      <div className="col-lg-6 mb-7">
        {/* contact-title-section start */}
        <div className="contact-title-section">
          <h3 className="title">Get in touch</h3>
          <ul>
         <h6> Please ping us to discuss any IT project and 
            <br className="d-none d-xl-block" />
            we will provide you best solution in best price.</h6>
          </ul>
        </div>
        {/* contact-title-section end */}
        <form id="contactForm" className="row" action="https://htmldemo.net/grano/grano/assets/php/contact.php" method="POST" noValidate="novalidate">
          {/* assets/php/contact.php */}
          <div className="col-12 col-sm-6 mb-7">
            <input type="text" className="form-control" id="name" name="name" placeholder="Your Name*" />
          </div>
          <div className="col-12 col-sm-6 mb-7">
            <input type="text" className="form-control" id="email" name="email" placeholder="Your Email*" />
          </div>
          <div className="col-12 mb-9">
            <textarea className="form-control massage-control" name="massage" id="massage" cols={30} rows={10} placeholder="Message" defaultValue={""} />
          </div>
          <div className="col-12">
            <button id="contactSubmit" type="submit" className="btn btn-dark">
              Send Message
            </button>
            <p className="form-message mt-3" />
          </div>
        </form>
      </div>
      <div className="col-lg-6 mb-7" style={{paddingLeft:"40px"}}>
        <div className="contact-address">
          {/* address-list start */}
          <div className="address-list mb-4 mb-xl-10 pb-2">
            <h4 className="title">Office Addres</h4>
            <ul>
            2nd floor , 388, opposite of Eye Retina Hospital, Scheme 54 PU4, Indore, 
            <br className="d-none d-xl-block" />
            Madhya Pradesh 452010
            </ul>
          </div>
          {/* address-list end */}
          {/* address-list start */}
          <div className="address-list mb-4 mb-xl-10 pb-2">
            <h4 className="title">Phone Number</h4>
            <ul>
              <li>
                <a className="phone-number" href="tel:+91- 8210251824">Buiness whatsapp- +91- 8210251824</a>
              </li>
              <li>
                <a className="phone-number" href="tel:+91-7992345857"> Anju's whatsapp- +91-7992345857</a>
              </li>
              <li>
                <a className="phone-number" href="tel:+91- 9074652551">Sumit's whatsapp- +91- 9074652551 , +91-8269829729</a>
              </li>
            </ul>
          </div>
          {/* address-list end */}
          {/* address-list start */}
          <div className="address-list">
            <h4 className="title">Web Address</h4>
            <ul>
              <li>
                <a className="mailto" href="info@logicalsofttech.com"> info@logicalsofttech.com</a>
              </li>
              <li>
                <a className="mailto" href="anjusinghdx51@gmail.com">anjusinghdx51@gmail.com</a>
              </li>
              <li>
                <a className="mailto" href="aryansumit276@gmail.com">aryansumit276@gmail.com</a>
              </li>
            </ul>
          </div>
          {/* address-list end */}
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Contact;
