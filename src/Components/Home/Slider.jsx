import React, { useState } from 'react'
import "./slider.css"
import { Carousel  } from 'react-bootstrap'
import slider1 from '../../assets/images/slider1.png'
import slider4 from '../../assets/images/slider4.png'

function Slider() {
  const [index, setindex] = useState(0)
  const handleSelect = (selectedIndex) => {
    setindex(selectedIndex)

  }
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      
      <Carousel.Item className='slider-background' interval={2000}>
        <div className='d-flex flex-row justify-content-center align-items-center'>
          <img 
            style={{height: "296px", width: "313.53px" }}
            className=''
            src={slider1}
            alt="First Slide"
          />
          <div className=''>
              <h3 className='slider-title'>خصم كبير لملوك التوفير</h3>
              <p className='slider-text'>خصم يصل إلى نصف السعر عند شرائك بألف جنيهآ</p>
          </div>
        </div>
      </Carousel.Item>
      
      <Carousel.Item className='slider-background' interval={2000}>
        <div className='d-flex flex-row justify-content-center align-items-center'>
          <img 
            style={{height: "296px", width: "313.53px" }}
            className=''
            src={slider4}
            alt="First Slide"
          />
          <div className=''>
              <h3 className='slider-title'>خصم كبير لملوك التوفير</h3>
              <p className='slider-text'>خصم يصل إلى نصف السعر عند شرائك بألف جنيهآ</p>
          </div>
        </div>
      </Carousel.Item>
      
      <Carousel.Item className='slider-background2' interval={2000}>
        <div className='d-flex flex-row justify-content-center align-items-center'>
          <img 
            style={{height: "296px", width: "313.53px" }}
            className=''
            src={slider1}
            alt="First Slide"
          />
          <div className=''>
              <h3 className='slider-title'>خصم كبير لملوك التوفير</h3>
              <p className='slider-text'>خصم يصل إلى نصف السعر عند شرائك بألف جنيهآ</p>
          </div>
        </div>
      </Carousel.Item>
      
      <Carousel.Item className='slider-background3' interval={2000}>
        <div className='d-flex flex-row justify-content-center align-items-center'>
          <img 
            style={{height: "296px", width: "313.53px" }}
            className=''
            src={slider4}
            alt="First Slide"
          />
          <div className=''>
              <h3 className='slider-title'>خصم كبير لملوك التوفير</h3>
              <p className='slider-text'>خصم يصل إلى نصف السعر عند شرائك بألف جنيهآ</p>
          </div>
        </div>
      </Carousel.Item>
      
    </Carousel>
  )
}

export default Slider
