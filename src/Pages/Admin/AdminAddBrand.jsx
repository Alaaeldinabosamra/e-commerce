import React from 'react'
import AdminBrand from '../../Components/Admin/AdminBrand'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import { Col, Container, Row } from 'react-bootstrap'

function AdminAddBrand() {
  return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                     <AdminBrand />
                </Col>
            </Row>
        </Container>
  )
}

export default AdminAddBrand
