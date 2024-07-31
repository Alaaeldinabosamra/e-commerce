import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProductsGallery from './ProductsGallery'
import ProductsText from './ProductsText'

function ProductsInfo() {
  return (
    <div>
      <Row className='py-3'>
        <Col lg="4" className='d-flex justify-content-center my-2'>
            <ProductsGallery />
        </Col>

        <Col lg="8">
            <ProductsText />
        </Col>
      </Row>
    </div>
  )
}

export default ProductsInfo
