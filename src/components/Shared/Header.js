import React from 'react';
import { Col, Container, Form, FormControl, Nav, Navbar, NavDropdown, Row} from 'react-bootstrap';
import icon from '../../images/icon/bangladesh.png'
import './Header.css'
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <div>
      
                    <Navbar expand="lg">
                        <Container fluid>
                            <div className='header mt-2'>
                                <div>
                                    <Navbar.Brand href="#"><i className="fab fa-etsy"></i><span className='commerce'>-commerce</span></Navbar.Brand>
                                    {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
                                </div>

                                <div>
                                <Form className='d-flex search'>
                                <input type="search" name="" placeholder='Search' className='search_place'/>
                                      <button className="header_button">
                                            <i className="fas fa-search"></i>
                                        </button>      
                                </Form>
                               </div>

                                        
                                    
                                 

                                <div>
                                    <Nav
                                        className="me-auto my-2 my-lg-0"
                                        style={{ maxHeight: '100px' }}
                                        navbarScroll
                                    >
                                <div className='d-flex'>
                                    <Nav.Link href="/products"><i className="fas fa-layer-group mx-2"></i></Nav.Link>
                                    <Nav.Link href=""><i className="fas fa-heart mx-2"></i></Nav.Link>
                                    <Nav.Link href=""><i className="fas fa-user mx-2"></i></Nav.Link>
                                    <Nav.Link href=""><i className="fas fa-shopping-cart mx-2"></i></Nav.Link>

                                </div>
                                    </Nav>
                                </div>

                            </div>

                        </Container>
                    </Navbar>
             

             
                    <hr style={{
                        color: '#000000',
                        backgroundColor: '#000000',
                        height: 2,
                        borderColor: '#000000'
                    }} />


                 
           <div className='navbar_section'> 
                <div>
                    <Nav defaultActiveKey="/home" as="ul">
                        <Nav.Item as="li" >
                            <Nav.Link as={HashLink} to="/" className='header_navbar'>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link as={HashLink} to="/products" className='header_navbar'>Stores</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link as={HashLink} to="/login" className='header_navbar' >Login</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link as={HashLink} to="/dashboard" className='header_navbar'>Dashboard</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>

               <div>
                    <Nav className="justify-content-end all_dropDown">
                        <NavDropdown title={<img className='drop_down' src={icon} alt="" />} id="navbarScrollingDropdown" className='nav_dropDown '>
                            <NavDropdown.Item href="#action3">বাংলা</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">English</NavDropdown.Item>
                        </NavDropdown>

                        <p className=' break_point mx-2'>|</p>


                        <NavDropdown title="$" id="navbarScrollingDropdown" className='nav_dropDown'>
                            <NavDropdown.Item href="#action4">৳ take</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">€ Euro</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">$ US Dollar</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>   
               </div>
            </div>
       
      
        </div>    
    );
};

export default Header;          
                
                
           
         