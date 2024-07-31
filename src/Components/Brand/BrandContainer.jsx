import React from 'react'

// importing static images
import brand1 from '../../assets/images/brand1.png'
import brand2 from '../../assets/images/brand2.png'
import brand3 from '../../assets/images/brand3.png'
import { Container, Row } from 'react-bootstrap'
import BrandCard from './BrandCard'


export default function BrandContainer() {
  return (
    <Container>
        <div className='admin-content-text mt-2'>كل الماركات</div>
        <Row className='my-1 d-flex justify-content-between'>
            <BrandCard img={brand1} />
            <BrandCard img={brand2} />
            <BrandCard img={brand3} />
            <BrandCard img={brand1} />
            <BrandCard img={brand2} />
            <BrandCard img={brand3} />
            <BrandCard img={brand1} />
            <BrandCard img={brand2} />
            <BrandCard img={brand3} />
            <BrandCard img={brand1} />
            <BrandCard img={brand2} />
            <BrandCard img={brand3} />
            <BrandCard img={brand1} />
            <BrandCard img={brand2} />
            <BrandCard img={brand3} />
            <BrandCard img={brand1} />
            <BrandCard img={brand2} />
            <BrandCard img={brand3} />
        </Row>
        
    </Container>
  )
}
