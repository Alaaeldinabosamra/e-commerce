import React from 'react'
import ProductCard from './ProductCard'
import SubTitle from '../Utility/SubTitle'
import { Container, Row } from 'react-bootstrap'

function CardProductContainer({title, btnTitle, path}) {
  return (
    <Container>
        <SubTitle title={title} btnTitle={btnTitle} path={path} />
        <Row className='my-2 d-flex justify-content-between'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </Row>
        
    </Container>
  )
}

export default CardProductContainer
