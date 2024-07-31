import React from 'react'
import './categoryCard.css'
import { Col } from 'react-bootstrap'
export default function CategoryCard({background, img , title}) {
  return (
    <Col xs="6" sm="6" md="4" lg="2" className='my-4 d-flex justify-content-around'>
      <div className='allCard mb-3'>
        <div className='category-card' style={{ backgroundColor: `${background}`}}></div>{" "}
            <img src={img} className='category-card-img' alt="zcv" />
            <p className='category-card-text my-2'>{title}</p>
        
      </div>
    </Col>
  )
}
