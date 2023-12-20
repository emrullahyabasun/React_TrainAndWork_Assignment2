import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Product({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);



  return (
    <div className="product-double-row-tab-area section-space">
      <div className="container wide">
        <div className="row">
          <div className="col-lg-12">
            <div className="product-double-row-tab-wrapper">
              <div className="row">
                {products.map((product) => (
                  <div key={product.id} className="col-xl-custom-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-custom-sm-6">
                    <div className="single-grid-product">
                      <div className="single-grid-product__image">
                        {/* ... ürün resimleri ve diğer içerikler ... */}
                        <Link to={`/product/${product.slug}`} className="image-wrap">
                          {product.img.map((image, index) => (
                            <img
                              key={index}
                              src={image}
                              className="img-fluid"
                              alt={product.name}
                            />
                          ))}
                        </Link>
                        <div className="product-hover-icon-wrapper">
                          <span className="single-icon single-icon--quick-view">
                            <a
                              className="cd-trigger"
                              href="#qv-1"
                              data-tippy="Quick View"
                              data-tippy-inertia="true"
                              data-tippy-animation="shift-away"
                              data-tippy-delay="50"
                              data-tippy-arrow="true"
                              data-tippy-theme="sharpborder"
                            >
                              <i className="fa fa-search"></i>
                            </a>
                          </span>
                          <span className="single-icon single-icon--add-to-cart">
                            <a
                              href="#"
                              data-tippy="Add to cart"
                              data-tippy-inertia="true"
                              data-tippy-animation="shift-away"
                              data-tippy-delay="50"
                              data-tippy-arrow="true"
                              data-tippy-theme="sharpborder"
                            >
                              <i className="fa fa-shopping-basket"></i>{" "}
                              <span onClick={() => addToCart(product)}>ADD TO CART</span>
                            </a>
                          </span>
                          <span className="single-icon single-icon--compare">
                            <a
                              href="#"
                              data-tippy="Compare"
                              data-tippy-inertia="true"
                              data-tippy-animation="shift-away"
                              data-tippy-delay="50"
                              data-tippy-arrow="true"
                              data-tippy-theme="sharpborder"
                            >
                              <i className="fa fa-exchange"></i>
                            </a>
                          </span>
                        </div>
                      </div>
                      <div className="single-grid-product__content">
                        <h3 className="title">
                          <Link to={`/product/${product.slug}`}>{product.name}</Link>
                        </h3>
                        <div className="price">
                          <span className="discounted-price">${product.price}</span>
                        </div>
                        <div className="rating">
                          <i className="fa fa-star active"></i>
                          <i className="fa fa-star active"></i>
                          <i className="fa fa-star active"></i>
                          <i className="fa fa-star active"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="color">
                          <ul>
                            <li>
                              <a
                                className="active"
                                href="#"
                                data-tippy="Black"
                                data-tippy-inertia="true"
                                data-tippy-animation="shift-away"
                                data-tippy-delay="50"
                                data-tippy-arrow="true"
                                data-tippy-theme="roundborder"
                              >
                                <span className="color-picker black"></span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                data-tippy="Blue"
                                data-tippy-inertia="true"
                                data-tippy-animation="shift-away"
                                data-tippy-delay="50"
                                data-tippy-arrow="true"
                                data-tippy-theme="roundborder"
                              >
                                <span className="color-picker blue"></span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                data-tippy="Brown"
                                data-tippy-inertia="true"
                                data-tippy-animation="shift-away"
                                data-tippy-delay="50"
                                data-tippy-arrow="true"
                                data-tippy-theme="roundborder"
                              >
                                <span className="color-picker brown"></span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <a
                          href="#"
                          className="favorite-icon"
                          data-tippy="Add to Wishlist"
                          data-tippy-inertia="true"
                          data-tippy-animation="shift-away"
                          data-tippy-delay="50"
                          data-tippy-arrow="true"
                          data-tippy-theme="sharpborder"
                          data-tippy-placement="left"
                        >
                          <i className="fa fa-heart-o"></i>
                          <i className="fa fa-heart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Product