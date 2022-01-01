import React from 'react';
import { Container, FloatingLabel, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <Navbar expand="lg">
            <Container fluid>
              <div className='header mt-2'>
                    <div>
                        <Navbar.Brand href="#"><i className="fab fa-etsy"></i><span className='commerce'>-commerce</span></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                    </div>

                    <div>
                        <Form className="d-flex header_from">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="form_button ms-2"
                                aria-label="Search" />
                        
                                
                            <button className="w-25 header_button">
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
                            <Nav.Link href="#action1"><i className="fas fa-layer-group"></i></Nav.Link>
                            <Nav.Link href="#action1"><i className="fas fa-heart"></i></Nav.Link>
                            <Nav.Link href="#action1"><i className="fas fa-user"></i></Nav.Link>
                            <Nav.Link href="#action1"><i className="fas fa-shopping-cart"></i></Nav.Link>

                        </Nav>
                    </div>

              </div>
                
            </Container>
        </Navbar>
    );
};

export default Header;