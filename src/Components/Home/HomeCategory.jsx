import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../Utility/SubTitle'
import CategoryCard from '../Category/CategoryCard'

// importing static images
import clothe from '../../assets/images/clothe.png';
import cat2 from '../../assets/images/cat2.png';
import labtop from '../../assets/images/labtop.png';
import sale from '../../assets/images/sale.png';
import pic from '../../assets/images/pic.png';

function HomeCategory() {
  return (
    <Container>
        <SubTitle title="التصنيفات" btnTitle="المزيد" path="/allcategory" />
        <Row className='my-2 d-flex justify-content-between'>
        <CategoryCard title="أجهزة منزلية" img={clothe} background="#F4DBA5" />
        <CategoryCard title="أجهزة منزلية" img={cat2} background="#F43BA4" />
        <CategoryCard title="أجهزة منزلية" img={labtop} background="#F4DBFF" />
        <CategoryCard title="أجهزة منزلية" img={sale} background="#2FF2BA" />
        <CategoryCard title="أجهزة منزلية" img={pic} background="#F22D62" />
        <CategoryCard title="أجهزة منزلية" img={clothe} background="#F22D62" />
        </Row>
        
    </Container>
  )
}

export default HomeCategory
