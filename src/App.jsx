import './App.css'
import Footer from './Components/Footer/Footer'
import NavBarLogin from './Components/Navigation/NavBarLogin'
import Home from './Pages/Home/Home'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'

import { BrowserRouter , Routes , Route } from 'react-router-dom'
import AllCategory from './Pages/Category/AllCategory'
import Allbrand from './Pages/Brand/Allbrand'
import ShopProduct from './Pages/Products/ShopProduct'
import ProductDetails from './Pages/Products/ProductDetails'
import Cart from './Pages/Cart/Cart'
import ChoosePayMethod from './Pages/Payment/ChoosePayMethod'
import AdminAllProducts from './Pages/Admin/AdminAllProducts'
import AdminAllOrders from './Pages/Admin/AdminAllOrders'
import AdminOrderDetails from './Pages/Admin/AdminOrderDetails'
import AdminAddBrand from './Pages/Admin/AdminAddBrand'
import AdminAddCategory from './Pages/Admin/AdminAddCategory'
import AdminAddSubCategory from './Pages/Admin/AdminAddSubCategory'
import AdminAddProduct from './Pages/Admin/AdminAddProduct'
import UserAllOrders from './Pages/User/UserAllOrders'
import UserFavProducts from './Pages/User/UserFavProducts'
import UserAddAddress from './Pages/User/UserAddAddress'
import UserProfile from './Pages/User/UserProfile'
import UserAllAddress from './Pages/User/UserAllAddress'
import UserEditAddress from './Pages/User/UserEditAddress'

function App() {
  

  return (
    
      <div className='cairo'>
        <NavBarLogin />
        <BrowserRouter>
        
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/allcategory' element={<AllCategory />} />
            <Route path='/allbrand' element={<Allbrand />} />
            <Route path='/products' element={<ShopProduct />} />
            <Route path='/products/:id' element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order/paymethod' element={<ChoosePayMethod />} />
            <Route path='/admin/allproducts' element={<AdminAllProducts />} />
            <Route path='/admin/allorders' element={<AdminAllOrders />} />
            <Route path='/admin/orders/:id' element={<AdminOrderDetails />} />
            <Route path='/admin/addbrand' element={<AdminAddBrand />} />
            <Route path='/admin/addcategory' element={<AdminAddCategory />} />
            <Route path='/admin/addsubcategory' element={<AdminAddSubCategory />} />
            <Route path='/admin/addproduct' element={<AdminAddProduct />} />
            <Route path='/user/allorders' element={<UserAllOrders />} />
            <Route path='/user/favoriteproducts' element={<UserFavProducts />} />
            <Route path='/user/addresses' element={<UserAllAddress />} />
            <Route path='/user/add-address' element={<UserAddAddress />} />
            <Route path='/user/edit-address' element={<UserEditAddress />} />
            <Route path='/user/profile' element={<UserProfile />} />
          </Routes>
        
        
        </BrowserRouter>
        <Footer />
      </div>
    
  )
}

export default App
