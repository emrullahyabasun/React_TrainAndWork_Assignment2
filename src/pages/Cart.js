import React from 'react'
import { Link } from 'react-router-dom';

function Cart({ cart, removeFromCart }) {

  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  if (!Array.isArray(cart)) {
    // cart bir dizi değilse, bir hata mesajı veya boş bir görünüm döndür
    return <div>Cart bir dizi degil</div>;
  }



  return (

    <div class="page-content-wrapper">
      {/* <!--=======  shopping cart wrapper  =======--> */}

      <div class="shopping-cart-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              {/* <!--=======  cart table  =======--> */}

              <div class="cart-table-container">
                <table class="cart-table">
                  <thead>
                    <tr>
                      <th class="product-name" colspan="2">Product</th>
                      <th class="product-price">Price</th>
                      <th class="product-quantity">Quantity</th>
                      <th class="product-subtotal">Total</th>
                      <th class="product-remove">&nbsp;</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cart.map((item, index) => (
                      <tr key={index}>
                        <td className="product-thumbnail">
                          <Link to={`/product/${item.slug}`}>
                            <img src={item.img[0]} className="img-fluid" alt={item.name} />
                          </Link>
                        </td>
                        <td className="product-name">
                          <Link to={`/product/${item.slug}`}>{item.name}</Link>
                          {/* Diğer detaylar */}
                        </td>
                        <td className="product-price"><span className="price">${item.price}</span></td>
                        <td className="product-quantity">{item.quantity}</td>
                        <td className="total-price"><span className="price">${item.price * item.quantity}</span></td>
                        <td className="product-remove">
                          <a onClick={() => removeFromCart(item.id)} style={{ cursor: "pointer" }}>
                            <i className="pe-7s-close"></i>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* <!--=======  End of cart table  =======--> */}
            </div>
            <div class="col-lg-12">
              {/* <!--=======  coupon area  =======--> */}

              <div class="cart-coupon-area">
                <div class="row align-items-center">
                  <div class="col-lg-6">
                    {/* <!--=======  coupon form  =======--> */}

                    <div class="coupon-form">
                      <form action="#">
                        <div class="row row-5">
                          <div class="col-md-7 col-sm-7">
                            <input type="text" placeholder="Enter your coupon code" />
                          </div>
                          <div class="col-md-5 col-sm-5">
                            <button class="theme-button theme-button--silver">APPLY COUPON</button>
                          </div>
                        </div>
                      </form>
                    </div>

                    {/* <!--=======  End of coupon form  =======--> */}
                  </div>

                  <div class="col-lg-6 text-start text-lg-end">
                    {/* <!--=======  update cart button  =======--> */}

                    <Link to="/">UPDATE CART</Link>

                    {/* <!--=======  End of update cart button  =======--> */}
                  </div>
                </div>
              </div>

              {/* <!--=======  End of coupon area  =======--> */}
            </div>

            <div class="col-lg-6 offset-lg-6">
              <div class="cart-calculation-area">
                <h2 class="cart-calculation-area__title">Cart totals</h2>

                <table class="cart-calculation-table">
                  <tr>
                    <th>SUBTOTAL</th>
                    <td className="subtotal">${calculateSubtotal().toFixed(2)}</td>
                  </tr>
                  <tr>
                    <th>TOTAL</th>
                    <td className="total">${calculateSubtotal().toFixed(2)}</td>
                  </tr>
                </table>

                <div class="cart-calculation-button">
                  <button class="theme-button theme-button--alt theme-button--checkout">PROCEED TO CHECKOUT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--=======  End of shopping cart wrapper  =======--> */}
    </div>
  )
}

export default Cart