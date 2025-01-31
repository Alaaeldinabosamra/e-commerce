import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../Utility/SubTitle'
import BrandCard from './BrandCard'

// importing static images
import brand1 from '../../assets/images/brand1.png'
import brand2 from '../../assets/images/brand2.png'
import brand3 from '../../assets/images/brand3.png'

function brandCardContainer({title,btnTitle}) {
  return (
    <Container>
        <SubTitle title={title} btnTitle={btnTitle} path="/allbrand" />
        <Row className='my-1 d-flex justify-content-between'>
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

export default brandCardContainer
