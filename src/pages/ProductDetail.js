import React from 'react'

function ProductDetail() {
  return (
    <div className="page-content-wrapper">
      {/* <!--=======  single product slider details area  =======--> */}

      <div className="single-product-slider-details-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/* <!--=======  product details slider area  =======--> */}

              <div className="product-details-slider-area product-details-slider-area--side-move">

                <div className="product-badge-wrapper">
                  <span className="hot">Hot</span>
                </div>

                <div className="row g-2">
                  <div className="col-md-9 order-1 order-md-2 position-relative">
                    <div className="big-image-wrapper">
                      <div className="enlarge-icon">
                        <a className="btn-zoom-popup" href="javascript:void(0)" data-tippy="Click to enlarge" data-tippy-placement="left" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder"><i className="pe-7s-expand1"></i></a>
                      </div>
                      <div className="product-details-big-image-slider-wrapper product-details-big-image-slider-wrapper--side-space theme-slick-slider" data-slick-setting='{
                                            "slidesToShow": 1,
                                            "slidesToScroll": 1,
                                            "arrows": false,
                                            "autoplay": false,
                                            "autoplaySpeed": 5000,
                                            "fade": true,
                                            "speed": 500,
                                            "prevArrow": {"buttonclassName": "slick-prev", "iconclassName": "fa fa-angle-left" },
                                            "nextArrow": {"buttonclassName": "slick-next", "iconclassName": "fa fa-angle-right" }
                                        }' data-slick-responsive='[
                                            {"breakpoint":1501, "settings": {"slidesToShow": 1, "arrows": false} },
                                            {"breakpoint":1199, "settings": {"slidesToShow": 1, "arrows": false} },
                                            {"breakpoint":991, "settings": {"slidesToShow": 1, "arrows": false, "slidesToScroll": 1} },
                                            {"breakpoint":767, "settings": {"slidesToShow": 1, "arrows": false, "slidesToScroll": 1} },
                                            {"breakpoint":575, "settings": {"slidesToShow": 1, "arrows": false, "slidesToScroll": 1} },
                                            {"breakpoint":479, "settings": {"slidesToShow": 1, "arrows": false, "slidesToScroll": 1} }
                                        ]'>
                        <div className="single-image">
                          <img src="assets/img/products/big1-1.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="single-image">
                          <img src="assets/img/products/big1-2.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="single-image">
                          <img src="assets/img/products/big1-3.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="single-image">
                          <img src="assets/img/products/big1-4.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="single-image">
                          <img src="assets/img/products/big1-5.jpg" className="img-fluid" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 order-2 order-md-1 position-relative">
                    <div className="product-details-small-image-slider-wrapper product-details-small-image-slider-wrapper--vertical-space theme-slick-slider" data-slick-setting='{
                                        "slidesToShow": 3,
                                        "slidesToScroll": 1,
                                        "centerMode": false,
                                        "arrows": true,
                                        "vertical": true,
                                        "autoplay": false,
                                        "autoplaySpeed": 5000,
                                        "speed": 500,
                                        "asNavFor": ".product-details-big-image-slider-wrapper",
                                        "focusOnSelect": true,
                                        "prevArrow": {"buttonclassName": "slick-prev", "iconclassName": "fa fa-angle-up" },
                                        "nextArrow": {"buttonclassName": "slick-next", "iconclassName": "fa fa-angle-down" }
                                    }' data-slick-responsive='[
                                        {"breakpoint":1501, "settings": {"slidesToShow": 3, "arrows": true} },
                                        {"breakpoint":1199, "settings": {"slidesToShow": 3, "arrows": true} },
                                        {"breakpoint":991, "settings": {"slidesToShow": 3, "arrows": true, "slidesToScroll": 1} },
                                        {"breakpoint":767, "settings": {"slidesToShow": 3, "arrows": false, "slidesToScroll": 1, "vertical": false, "centerMode": true} },
                                        {"breakpoint":575, "settings": {"slidesToShow": 3, "arrows": false, "slidesToScroll": 1, "vertical": false, "centerMode": true} },
                                        {"breakpoint":479, "settings": {"slidesToShow": 2, "arrows": false, "slidesToScroll": 1, "vertical": false, "centerMode": true} }
                                    ]'>
                      <div className="single-image">
                        <img src="assets/img/products/big1-1.jpg" className="img-fluid" alt="" />
                      </div>
                      <div className="single-image">
                        <img src="assets/img/products/big1-2.jpg" className="img-fluid" alt="" />
                      </div>
                      <div className="single-image">
                        <img src="assets/img/products/big1-3.jpg" className="img-fluid" alt="" />
                      </div>
                      <div className="single-image">
                        <img src="assets/img/products/big1-4.jpg" className="img-fluid" alt="" />
                      </div>
                      <div className="single-image">
                        <img src="assets/img/products/big1-5.jpg" className="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>
                </div>



              </div>

              {/* <!--=======  End of product details slider area  =======--> */}
            </div>
            <div className="col-lg-6">
              {/* <!--=======  product details description area  =======--> */}

              <div className="product-details-description-wrapper">
                <h2 className="item-title">Atelier Ottoman Takumi Series</h2>
                <p className="price">
                  <span className="main-price discounted">$360.00</span>
                  <span className="discounted-price">$300.00</span>
                </p>

                <p className="description">AUpholstered velvet ottoman with antique stud detailing. Invite restrained glamour and on-trend colour into your design scheme with the Eichholtz Ponti Ottoman. Inspired by the neo-classNameical influences of Italian icon, Gio Ponti, this contemporary ottoman collection is presented in a choice of velvet and linen colourways.</p>

                <div className="product-color">
                  <span className="product-details-title">COLOR: </span>
                  <ul>
                    <li><a className="active" href="#" data-tippy="Black" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="roundborder"><span className="color-picker black"></span></a></li>
                    <li><a href="#" data-tippy="Blue" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="roundborder"><span className="color-picker blue"></span></a></li>
                    <li><a href="#" data-tippy="Brown" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="roundborder"><span className="color-picker brown"></span></a></li>
                  </ul>
                </div>


                <div className="pro-qty d-inline-block">
                  <input type="text" value="1" />
                </div>

                <div className="add-to-cart-btn d-inline-block">
                  <button className="theme-button theme-button--alt">ADD TO CART</button>
                </div>

                <div className="quick-view-other-info">
                  <div className="other-info-links">
                    <a href="javascript:void(0)"><i className="fa fa-heart-o"></i> ADD TO WISHLIST</a>
                    <a href="javascript:void(0)"><i className="fa fa-exchange"></i> COMPARE</a>
                  </div>

                  <div className="product-brand">
                    <a href="shop-left-sidebar.html">
                      <img src="assets/img/brands/brand-2.png" className="img-fluid" alt="" />
                    </a>
                  </div>

                  <table>
                    <tr className="single-info">
                      <td className="quickview-title">Brand: </td>
                      <td className="quickview-value">BELLE NETWORK</td>
                    </tr>
                    <tr className="single-info">
                      <td className="quickview-title">SKU: </td>
                      <td className="quickview-value">12345</td>
                    </tr>
                    <tr className="single-info">
                      <td className="quickview-title">Categories: </td>
                      <td className="quickview-value">
                        <a href="#">Decor</a>,
                        <a href="#">Living Room</a>,
                        <a href="#">Furniture</a>
                      </td>
                    </tr>
                    <tr className="single-info">
                      <td className="quickview-title">Tags: </td>
                      <td className="quickview-value">
                        <a href="#">Decor</a>,
                        <a href="#">Light</a>
                      </td>
                    </tr>
                    <tr className="single-info">
                      <td className="quickview-title">Share on: </td>
                      <td className="quickview-value">
                        <ul className="quickview-social-icons">
                          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                          <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                        </ul>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>

              {/* <!--=======  End of product details description area  =======--> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail