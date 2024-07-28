import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const MainPage = () => {
  return (
    <div className="body">
      <Navbar collapseOnSelect expand="lg" bg="light" className="navbar-custom" sticky="top">
        <Navbar.Brand href="#">
          <img 
            src="https://res.cloudinary.com/dxyzgyveu/image/upload/v1722104660/best_imfexa.png" 
            style={{width: '100px', height: '100px', borderRadius: '10px'}} 
            alt="Logo" 
            className='logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{position:'relative',right:'20px',border:'none'}}/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="subnav" >
            <Nav.Link href="main.php" className="nav-link" style={{fontWeight: 'bold',paddingTop: '15px', fontSize: '20px',color:'#666'}}>
              Home
            </Nav.Link>
            <NavDropdown title="Courses" id="navbarDropdownCourses" className="nav-link" style={{color: 'black', fontWeight: 'bold',  fontSize: '20px'}}>
              <NavDropdown.Item href="#">CUET(UG)</NavDropdown.Item>
              <NavDropdown.Item href="#">CUET(PG)</NavDropdown.Item>
              <NavDropdown.Item href="#">NCERT CLASS XII</NavDropdown.Item>
              <NavDropdown.Item href="#">SEBA CLASS X</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="navbarDropdownServices" className="nav-link" style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>
              <NavDropdown.Item href="#">Online classes</NavDropdown.Item>
              <NavDropdown.Item href="#">Mock Test series</NavDropdown.Item>
              <NavDropdown.Item href="#">Downloaded Study Materials</NavDropdown.Item>
              <NavDropdown.Item href="#">Previous Year Question Bank</NavDropdown.Item>
              <NavDropdown.Item href="#">Counselling and Mock Registration for Admission in Central University</NavDropdown.Item>
              <NavDropdown.Item href="#">Complete Guidance for Admission Process of Delhi University</NavDropdown.Item>
            </NavDropdown>
            <div className='' style={{display:'flex'}}>
            <Nav.Link href="placed.php" className="nav-link gradient-text" style={{fontSize: '20px'}}>
              CUET Online Subscription
            </Nav.Link>
            <Button className="small-yellow-button" style={{textalign:'center'}}>New</Button>
            </div>
            
            <Nav.Link href="view.php" className="nav-link blogs" style={{fontWeight: 'bold', fontSize: '20px',color:'#666'}}>
              Blogs
            </Nav.Link>
          <Form inline className="signbtn">
            <Button variant="outline-primary">
              <a href="index.php" style={{textDecoration: 'none', color: 'rgb(150, 35, 150)', fontWeight: 'bold', fontSize: '20px'}}>
                Sign In/Sign Up
              </a>
            </Button>
          </Form>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
      <br />
    </div>
  );
};

export default MainPage;
