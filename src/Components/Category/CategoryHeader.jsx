import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

// import css file
import './categoryHeader.css'

 function CategoryHeader() {
  return (
    <div className='cat-header'>
        <Container>

            <Row>
                <Col className='d-flex justify-content-start py-2 flex-wrap'>
                    <div className="cat-text-header">الكل</div>
                    <div className="cat-text-header">الإلكترونيات</div>
                    <div className="cat-text-header">الملابس</div>
                    <div className="cat-text-header">الأجهزة الكهربية</div>
                    <div className="cat-text-header">الألعاب</div>
                    <div className="cat-text-header">المعدات الرياضية</div>
                    <div className="cat-text-header">التخفيضات</div>
                    <div className="cat-text-header">العربة</div>
                </Col>
            </Row>

        </Container>
    </div>
  )
}


export default CategoryHeader