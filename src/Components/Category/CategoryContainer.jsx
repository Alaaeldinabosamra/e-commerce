import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from './CategoryCard'


// importing static images
import clothe from '../../assets/images/clothe.png';
import cat2 from '../../assets/images/cat2.png';
import labtop from '../../assets/images/labtop.png';
import sale from '../../assets/images/sale.png';
import pic from '../../assets/images/pic.png';

export default function CategoryContainer() {
  return (
    <Container>
        <div className='admin-content-text mt-2'>كل التصنيفات</div>
        <Row className='my-2 d-flex justify-content-between'>
        <CategoryCard title="أجهزة منزلية" img={clothe} background="#F4DBA5" />
        <CategoryCard title="أجهزة منزلية" img={clothe} background="#F4DBA5" />
        <CategoryCard title="أجهزة منزلية" img={clothe} background="#F4DBA5" />
        <CategoryCard title="أجهزة منزلية" img={cat2} background="#F43BA4" />
        <CategoryCard title="أجهزة منزلية" img={cat2} background="#F43BA4" />
        <CategoryCard title="أجهزة منزلية" img={cat2} background="#F43BA4" />
        <CategoryCard title="أجهزة منزلية" img={labtop} background="#F4DBFF" />
        <CategoryCard title="أجهزة منزلية" img={labtop} background="#F4DBFF" />
        <CategoryCard title="أجهزة منزلية" img={labtop} background="#F4DBFF" />
        <CategoryCard title="أجهزة منزلية" img={sale} background="#2FF2BA" />
        <CategoryCard title="أجهزة منزلية" img={sale} background="#2FF2BA" />
        <CategoryCard title="أجهزة منزلية" img={sale} background="#2FF2BA" />
        <CategoryCard title="أجهزة منزلية" img={pic} background="#F22D62" />
        <CategoryCard title="أجهزة منزلية" img={pic} background="#F22D62" />
        <CategoryCard title="أجهزة منزلية" img={pic} background="#F22D62" />
        <CategoryCard title="أجهزة منزلية" img={clothe} background="#F83D62" />
        <CategoryCard title="أجهزة منزلية" img={clothe} background="#a8fDa2" />
        <CategoryCard title="أجهزة منزلية" img={clothe} background="#e3aDad" />
        </Row>
        
    </Container>
  )
}
