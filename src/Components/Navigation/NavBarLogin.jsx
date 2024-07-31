import React from 'react'
import './navBarLogin.css'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import logo from  '../../../public/images/logo.svg'
import login from "../../assets/images/login.png"
import card from  '../../assets/images/cart.png'


function NavBarLogin() {
  return (
    <Navbar expand="sm" bg='dark' data-bs-theme="dark" className="sticky-top">
    <Container  >
      <Navbar.Brand >
        <a href='/'>
          <img src={logo} className='logo' alt="" />
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse  id='basic-navbar-nav'>
          <Form.Control
            type="search"
            placeholder="ابحث..."
            className="me-2 w-100 text-center"
            style={{backgroundColor: 'white'}}
            aria-label="Search"
            />      
        <Nav className="me-auto" >
          <Nav.Link href='/login' className='nav-text d-flex mt-3 justify-content-center'>
            <img src={login} className='login-img' alt="" />
            <p style={{color: "white"}}>دخول</p>

          </Nav.Link>
          <Nav.Link href='/cart' className='nav-text d-flex mt-3 justify-content-center'>
            <img src={card} className='login-img' alt="" />
            <p style={{color: "white"}}>العربة</p>

          </Nav.Link>
          
          
        </Nav>
        
      </Navbar.Collapse>
      
    </Container>
  </Navbar>
  )
}

export default NavBarLogin
