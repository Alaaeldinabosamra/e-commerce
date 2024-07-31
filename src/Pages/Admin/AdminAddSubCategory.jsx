import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminSubCategory from '../../Components/Admin/AdminSubCategory'

function AdminAddSubCategory() {
  return (
    <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                     <AdminSubCategory />
                </Col>
            </Row>
        </Container>
  )
}

export default AdminAddSubCategory
