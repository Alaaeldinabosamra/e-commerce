import React from 'react'

import "./admin.css"
import { Row } from 'react-bootstrap'
import AdminAllOrdersItem from './AdminAllOrdersItem'

function AdminOrders() {
  return (
    <div>
            <div className='admin-content-text'>ادارة جميع الطلبات</div>
            <Row className='justify-content-start'>
                <AdminAllOrdersItem />
                <AdminAllOrdersItem />
                <AdminAllOrdersItem />
            </Row>
        </div>
  )
}

export default AdminOrders
