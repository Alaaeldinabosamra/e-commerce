import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './discountSection.css'
import labtops from '../../assets/images/laptops.png'

function DiscountSection() {
  return (
    <Container>
       <Row className='discount-backcolor my-3 mx-2 d-flex text-center align-items-center'>
            <Col sm="6">
                <div className='discount-title'>
                  خصم يصل إلى 30% على أجهزة اللاب توب
                </div>
            </Col>
            <Col sm="6">
              <img className="discount-img" src={labtops} alt="" />
            </Col>
       </Row>
    </Container>
  )
}

export default DiscountSection
