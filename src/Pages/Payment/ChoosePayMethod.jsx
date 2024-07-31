import React from 'react'
import { Container } from 'react-bootstrap'
import ChoosePayment from '../../Components/Payment/ChoosePayment'

function ChoosePayMethod() {
  return (
    <Container style={{minHeight: '670px'}}>
      <ChoosePayment />
    </Container>
  )
}

export default ChoosePayMethod
