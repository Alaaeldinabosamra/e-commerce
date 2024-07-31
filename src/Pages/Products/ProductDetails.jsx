import React from 'react'

import CategoryHeader from '../../Components/Category/CategoryHeader'

import { Container } from 'react-bootstrap'
import ProductsInfo from '../../Components/Products/ProductsInfo'
import RateContainer from '../../Components/Rate/RateContainer'
import CardProductContainer from '../../Components/Products/CardProductContainer'

export default function ProductDetails() {
  return (
    <div style={{minHeight: '670px'}}>
      <CategoryHeader />
      <Container>
        <ProductsInfo />
        <RateContainer />

        <CardProductContainer title="منتجات قد تعجبك" />
      </Container>
    </div>
  )
}
