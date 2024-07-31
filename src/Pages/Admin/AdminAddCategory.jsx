import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminCategory from '../../Components/Admin/AdminCategory'

function AdminAddCategory() {
  return (
    <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                     <AdminCategory />
                </Col>
            </Row>
    </Container>
  )
}

export default AdminAddCategory
