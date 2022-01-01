import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#"><i className="fab fa-etsy"></i>-commerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">

                     <Form className="d-flex header_from">
                       <FormControl
                            type="search"
                            placeholder="Search"
                            className="w-100 ms-2"
                            aria-label="Search"/>
                        <button type="button" className="btn btn-primary w-25">
                            <i className="fas fa-search"></i>
                        </button>
                        {/* <Button className='header_button'>Search</Button> */}
                    
                    
                     {/*<div className="input-group">
                        <div className="form-outline">
                            <input type="search" id="form1" className="form-control" />
                            <label className="form-label" for="form1">Search</label>
                        </div>
                        <button type="button" className="btn btn-primary">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>*/}
 </Form>    

                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px', marginLeft: '670px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1"><i className="fas fa-layer-group"></i></Nav.Link>
                        <Nav.Link href="#action1"><i className="fas fa-heart"></i></Nav.Link>
                        <Nav.Link href="#action1"><i className="fas fa-user"></i></Nav.Link>
                        <Nav.Link href="#action1"><i className="fas fa-shopping-cart"></i></Nav.Link>
                        
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;