import React from 'react'
import Slider from '../../Components/Home/Slider'
import HomeCategory from '../../Components/Home/HomeCategory'
import CardProductContainer from '../../Components/Products/CardProductContainer'
import BrandCardContainer from '../../Components/Brand/brandCardContainer'
import DiscountSection from '../../Components/Home/DiscountSection'


function Home() {
  return (
    <div className='cairo' style={{minHeight: '670px'}}>
      <Slider />
      <HomeCategory />
      <CardProductContainer title="الأكثر مبيعاً" btnTitle="المزيد" path="/products" />
      <DiscountSection />
      <CardProductContainer title="أحدث الازياء" btnTitle="المزيد"  path="/products" />
      <BrandCardContainer title="أشهر الماركات" btnTitle="المزيد" />
    </div>
  )
}

export default Home
