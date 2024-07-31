import React from 'react'

// import css file
import "./productGallery.css"


// initalize image gallery
import 'react-image-gallery/styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery'

// importing static images
import mobile from '../../assets/images/mobile.png'
import { LeftButton, RightButton } from './ArrowsButtons'



function ProductsGallery() {

    const images = [
        {
            original: `${mobile}`,
        },
        {
            original: `${mobile}`,
        },
        {
            original: `${mobile}`,
        },
    ]


  return (
    <div className='product-gallery-card d-flex justfiy-content-center align-items-center pt-2'>
      <ImageGallery items={images} 
        defaultImage={mobile}
        showFullscreenButton = {false}
        isRTL={true}
        showPlayButton= {false}
        showThumbnails = {false}
        renderRightNav={LeftButton}
        renderLeftNav={RightButton}
      />
    </div>
  )
}

export default ProductsGallery
