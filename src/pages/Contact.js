import React from 'react'

function Contact() {
  return (

    <div class="page-content-wrapper">








      <div class="contact-icon-text-area section-space">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">


              <div class="contact-icon-text-wrapper">
                <div class="row">
                  <div class="col-sm-4">


                    <div class="single-contact-icon-text">
                      <div class="single-contact-icon-text__icon">
                        <i class="fa fa-map-marker"></i>
                      </div>
                      <h3 class="single-contact-icon-text__title">ADDRESS</h3>
                      <p class="single-contact-icon-text__value">Joseph, Canada 10020</p>
                    </div>


                  </div>
                  <div class="col-sm-4">


                    <div class="single-contact-icon-text">
                      <div class="single-contact-icon-text__icon">
                        <i class="fa fa-phone"></i>
                      </div>
                      <h3 class="single-contact-icon-text__title">PHONE NUMBER</h3>
                      <p class="single-contact-icon-text__value">(012) 3456 7890</p>
                    </div>

                  </div>
                  <div class="col-sm-4">


                    <div class="single-contact-icon-text">
                      <div class="single-contact-icon-text__icon">
                        <i class="fa fa-envelope"></i>
                      </div>
                      <h3 class="single-contact-icon-text__title">MAIL ADDRESS</h3>
                      <p class="single-contact-icon-text__value">info@website.com</p>
                    </div>


                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>



      <div class="contact-form-content-area section-space--contact-form">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">


              <div class="contact-form-content-wrapper">
                <div class="row">
                  <div class="col-md-8">


                    <div class="contact-form-wrapper">
                      <form id="contact-form" action="https://htmldemo.net/robin/robin/assets/php/mail.php" method="post">
                        <div class="row">
                          <div class="col-lg-4 col-sm-6">
                            <input type="text" placeholder="First Name *" name="customerName" id="customername" required />
                          </div>
                          <div class="col-lg-4 col-sm-6">
                            <input type="text" placeholder="Email *" name="customerEmail" id="customerEmail" required />
                          </div>
                          <div class="col-lg-4">
                            <input type="text" placeholder="Subject" name="contactSubject" id="contactSubject" />
                          </div>
                          <div class="col-lg-12">
                            <textarea cols="30" rows="10" placeholder="Message *" name="contactMessage" id="contactMessage" required></textarea>
                          </div>
                          <div class="col-lg-12">
                            <button type="submit" id="submit" class="theme-button"> SEND A MESSAGE</button>
                          </div>
                        </div>
                      </form>
                      <p class="form-messege"></p>
                    </div>



                  </div>

                  <div class="col-md-4">


                    <div class="contact-form-content">
                      <p>Please view our FAQ to find answers to your questions or send us an email for general questions! Due to unexpected volumes, it is taking us a little longer than we would like to respond to emails. Our current email response time is 3 business days.</p>

                      <ul class="social-links">
                        <li><a href="http://www.facebook.com/"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="http://www.plus.google.com/"><i class="fa fa-google-plus"></i></a></li>
                        <li><a href="http://www.linkedin.com/"><i class="fa fa-linkedin"></i></a></li>
                        <li><a href="http://www.twitter.com/"><i class="fa fa-twitter"></i></a></li>
                      </ul>
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

export default Contact