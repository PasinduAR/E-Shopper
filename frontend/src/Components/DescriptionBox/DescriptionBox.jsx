import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that facilitate the 
          bying and seling of products or sevicers over the internet. It 
          serves as vitual marketplace where business and individuals can 
          showcase their products, interact with customers, and cunduct 
          transactions without the need for a physical presence. E-commerce 
          websites have gained immense popularity due to their convenience, 
          accessibility, and the global reach their offer. 
        </p>
        <p>E-commerce websites typically display products or services along with 
          detailed descriptions, images, prices, and any available variations 
          (e.g. sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
      </div>
    </div>
  )
}
