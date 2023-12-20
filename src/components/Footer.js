import React from 'react'

function Footer() {
  return (
    <div class="footer-area">
      <div class="footer-newsletter-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-10 offset-lg-1 text-center">
              <div class="footer-newsletter-widget">
                <h2 class="footer-newsletter-widget__title">Sign Up & Get 20% Discount Now</h2>
                <p class="footer-newsletter-widget__text">Your Satisfaction defines our Success</p>

                <div class="footer-newsletter-widget__form-wrapper">
                  <form id="mc-form" class="mc-form">
                    <input type="email" placeholder="Your Email" required />
                    <button type="submit" class="theme-button theme-button--alt theme-button--subscribe">SUBSCRIBE US</button>
                  </form>
                </div>


                <div class="mailchimp-alerts mailchimp-alerts--dark">
                  <div class="mailchimp-submitting"></div>
                  <div class="mailchimp-success"></div>
                  <div class="mailchimp-error"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright-area footer-copyright-area--two">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6">
              <div class="copyright-text copyright-text--two text-center text-md-start">
                &copy; Robin by <a href="#">HasTech</a>. All Right Reserved 2019
              </div>
            </div>
            <div class="col-md-6">
              <div class="footer-widget text-center text-md-end mb-0">
                <ul class="footer-widget_social-links footer-widget_social-links--dark">
                  <li><a href="#" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                  <li><a href="#" title="Twitter"><i class="fa fa-twitter"></i></a></li>
                  <li><a href="#" title="LinkedIn"><i class="fa fa-linkedin"></i></a></li>
                  <li><a href="#" title="LinkedIn"><i class="fa fa-instagram"></i></a></li>
                  <li><a href="#" title="Youtube"><i class="fa fa-youtube-play"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer