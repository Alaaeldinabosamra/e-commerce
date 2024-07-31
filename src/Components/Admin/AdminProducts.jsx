import React from 'react'
import AdminAllProductsCard from './AdminAllProductsCard'
import { Row } from 'react-bootstrap'

import "./admin.css"

function AdminProducts() {
  return (
    <div>
    <div className='admin-content-text'>ادارة جميع المنتجات</div>
    <Row className='justify-content-start'>
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
    </Row>
    
</div>
  )
}

export default AdminProducts
