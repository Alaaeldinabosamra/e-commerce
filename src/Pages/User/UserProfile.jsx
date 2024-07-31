import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserSideBar from '../../Components/User/UserSideBar'
import UserSettings from '../../Components/User/UserSettings'

function UserProfile() {
  return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <UserSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                  <UserSettings />
                </Col>
            </Row>
        </Container>
  )
}

export default UserProfile
