import React from 'react';
import { Link } from 'react-router-dom';

function Header({ cart, totalAmount, setCart }) {
  const removeFromCart = (productId) => {

    setCart(cart.filter((item) => item.id !== productId));
  };


  const calculateTotal = () => {
    
    if (!Array.isArray(cart)) return 0;
  
    
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="header-navigation-area header-navigation-area--extra-space d-none d-lg-block">
      <div className="container wide">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-info-wrapper header-info-wrapper--alt-style">
              <div className="header-logo">
                <Link to="/">
                  <img src="assets/img/logo.png" className="img-fluid" alt="Logo" />
                  <img src="assets/img/logo-alt.png" className="img-fluid" alt="Alternate Logo" />
                </Link>
              </div>

              <div className="header-navigation-wrapper">
                <nav>
                  <ul>
                    <li>
                      <Link to="/">HOME</Link>
                    </li>
                    <li className="has-children">
                      <Link to="/aboutus">ABOUT</Link>
                      <ul className="submenu submenu--column-1">
                        <li><Link to="/aboutus">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/blog">BLOG</Link>
                    </li>
                    <li>
                      <Link to="/shop">SHOP</Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="header-icon-area">
                <div className="header-icon d-flex align-items-center">
                  <ul className="header-icon__list">
                    <li>
                      <Link to="/cart">
                        <i className="fa fa-shopping-basket" />
                        {cart.length > 0 && <span className="item-count">{cart.length}</span>}
                      </Link>
                      <div className="minicart-wrapper">
                        <p className="minicart-wrapper__title">CART</p>
                        <div className="minicart-wrapper__items ps-scroll">
                          {
                            Array.isArray(cart) && cart.map((item, index) => (
                              <div key={index} className="minicart-wrapper__items__single">
                                <div onClick={() => removeFromCart((item.id))} style={{ cursor: "pointer" }} className="close-icon">
                                  <i className="pe-7s-close" />
                                </div>
                                <div className="image">
                                  <a href="product-details-basic.html">
                                    <img
                                      style={{ width: "90px" }}
                                      src={item.img[0]}
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="content">
                                  <p className="product-title">
                                    <a href="product-details-basic.html">
                                      {item.name}
                                    </a>
                                  </p>
                                  <p className="product-calculation">
                                    <span className="count">{item.quantity}</span> x{" "}
                                    <span className="price">${item.price}</span>
                                  </p>
                                </div>
                              </div>
                            ))
                          }
                        </div>
                        <p className="minicart-wrapper__subtotal">
                          SUBTOTAL: <span>${calculateTotal().toFixed(2)}</span>
                        </p>
                        <div className="minicart-wrapper__buttons">
                          <Link to="/cart" className="theme-button theme-button--minicart-button">
                            VIEW CART
                          </Link>
                          <Link to="/checkout" className="theme-button theme-button--alt theme-button--minicart-button theme-button--minicart-button--alt mb-0">
                            CHECKOUT
                          </Link>
                        </div>
                        <p className="minicart-wrapper__featuretext">
                          Free Shipping on All Orders Over $100!
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
