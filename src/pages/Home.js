import React from 'react'
import Product from '../components/Product'

function Home({ addToCart }) {
  return (
    <Product addToCart={addToCart}/>
  )
}

export default Home