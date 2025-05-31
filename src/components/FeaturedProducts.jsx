import React from 'react'
import { isDarkModeContext } from '../App';
import { useContext } from 'react';

function FeaturedProducts() {

  const {isDarkMode} = useContext(isDarkModeContext);

  return (
    <div className={`featured-products ${isDarkMode ? "dark-featured-bg" : "light-featured-bg"}`}>
      <h1 className={isDarkMode ? "light-text" : "dark-text"}>Featured Products</h1>
      <div className='products'>
        <div className='product'>
          <img src="" alt="" />
          <h3 className={isDarkMode ? "light-text" : "dark-text"}>Product Name</h3>
          <p className={isDarkMode ? "light-text" : "dark-text"}>Product Description</p>
          <p className={isDarkMode ? "light-text" : "dark-text"}>Product Price</p>
          <button className={isDarkMode ? "light-bg dark-text" : "dark-bg light-text"}>Add to Cart</button>
        </div>
        <div className='product'>
          <img src="" alt="" />
          <h3 className={isDarkMode ? "light-text" : "dark-text"}>Product Name</h3>
          <p className={isDarkMode ? "light-text" : "dark-text"}>Product Description</p>
          <p className={isDarkMode ? "light-text" : "dark-text"}>Product Price</p>
          <button className={isDarkMode ? "light-bg dark-text" : "dark-bg light-text"}>Add to Cart</button>
        </div>
        <div className='product'>
          <img src="" alt="" />
          <h3 className={isDarkMode ? "light-text" : "dark-text"}>Product Name</h3>
          <p className={isDarkMode ? "light-text" : "dark-text"}>Product Description</p>
          <p className={isDarkMode ? "light-text" : "dark-text"}>Product Price</p>
          <button className={isDarkMode ? "light-bg dark-text" : "dark-bg light-text"}>Add to Cart</button>
        </div>
        <div className='product'>
          <img src="" alt="" />
          <h3 className={isDarkMode ? "light-text" : "dark-text"}>Product Name</h3>
          <p className={isDarkMode ? "light-text" : "dark-text"}>Product Description</p>
          <p className={isDarkMode ? "light-text" : "dark-text"}>Product Price</p>
          <button className={isDarkMode ? "light-bg dark-text" : "dark-bg light-text"}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts
