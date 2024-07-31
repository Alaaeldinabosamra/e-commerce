import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import SearchCountResult from '../../Components/Utility/SearchCountResult'
import SideFilter from '../../Components/Utility/SideFilter'
import { Col, Container, Row } from 'react-bootstrap'


import CardProductContainer from '../../Components/Products/CardProductContainer'
import Pagination from '../../Components/Utility/Pagination'


function ShopProduct() {
  return (
    <div style={{ minHeight: '670px'}}>
        <CategoryHeader />
        <Container>
            <SearchCountResult title="400 نتيجة بحث" />
            
            <Row className='d-flex flex-row'>
                <Col sm="3" xs="3" md="2" className='d-flex'>
                    <SideFilter />
                </Col>
                <Col sm="9" xs="9" md="10">
                    <CardProductContainer title="" btnTitle="" />
                </Col>
            </Row>
            <Row>
                <Pagination />
            </Row>
        </Container>

    </div>
  )
}

export default ShopProduct