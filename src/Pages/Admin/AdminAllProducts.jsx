import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminProducts from '../../Components/Admin/AdminProducts'
import Pagination from '../../Components/Utility/Pagination'

function AdminAllProducts() {
  return (
    <Container>
      <Row className='py-3'>
        <Col sm="3" xs="2" md="2">
            <AdminSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
            <AdminProducts />
            <Pagination />
        </Col>
      </Row>
    </Container>
  )
}

export default AdminAllProducts
