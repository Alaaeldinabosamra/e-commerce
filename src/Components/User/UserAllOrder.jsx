import React from 'react'

import "./user.css"
import { Row } from 'react-bootstrap'

import UserAllOrderItem from "./UserAllOrderItem"

function UserAllOrder() {
  return (
    <div>
    <div className="admin-content-text pb-4">اهلا محمد على</div>
    <Row className='justify-content-between'>
       <UserAllOrderItem />
       <UserAllOrderItem />
       <UserAllOrderItem />
    </Row>
    </div>
  )
}

export default UserAllOrder
