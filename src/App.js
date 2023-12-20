import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Route, Routes } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";





function App() {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  
  
  const addToCart = (productToAdd) => {
    const newCart = Array.isArray(cart) ? [...cart] : [];
    newCart.push({ ...productToAdd, quantity: 1 });
    setCart(newCart);
  };


  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };


  
  useEffect(() => {

    fetch('http://localhost:3000/cart')
      .then(response => response.json())
      .then(data => {
        setCart(data);

        const total = data.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotalAmount(total);
      })
      .catch(error => console.error('Error fetching cart data: ', error));
  }, []);

  return (
    <div>
      <Header cart={cart} totalAmount={totalAmount} setCart={setCart} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart  cart={cart} removeFromCart={removeFromCart}/>} />
        <Route path="/productdetail" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
