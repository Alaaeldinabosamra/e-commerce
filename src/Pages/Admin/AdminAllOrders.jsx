import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Pagination from '../../Components/Utility/Pagination'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminOrders from '../../Components/Admin/AdminOrders'

function AdminAllOrders() {
  return (
    <Container >
    <Row className='py-3'>
        <Col sm="3" xs="2" md="2">
            <AdminSideBar />
        </Col>

        <Col sm="9" xs="10" md="10">
            <AdminOrders />
            <Pagination />
        </Col>
    </Row>
</Container>
  )
}

export default AdminAllOrders
