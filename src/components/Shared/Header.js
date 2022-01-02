import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import icon from '../../images/icon/bangladesh.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            
       
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

                <hr style={{
                    color: '#000000',
                    backgroundColor: '#000000',
                    height: 2,
                    borderColor: '#000000'
                }} />


           
                    <Nav defaultActiveKey="/home" as="ul">
                          <Nav.Item as="li" >
                            <Nav.Link href="/home" className='header_navbar'>Smart Watches</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                           <Nav.Link className='header_navbar' eventKey="link-1">Dive Watches</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                           <Nav.Link className='header_navbar' eventKey="link-2">Solar Watches</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                         <Nav.Link className='header_navbar' eventKey="link-2">Tactile</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                        <Nav.Link className='header_navbar' eventKey="link-2">Analog</Nav.Link>
                        </Nav.Item>
                      <NavDropdown className='drop_navbar' title="More" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    
                </NavDropdown>
               </Nav>         
                
              <Nav className="justify-content-end all_dropDown">         
                        <NavDropdown title={<img className='drop_down' src={icon} alt="" />} id="navbarScrollingDropdown" className='nav_dropDown '>
                           <NavDropdown.Item href="#action3">বাংলা</NavDropdown.Item>
                           <NavDropdown.Item href="#action4">English</NavDropdown.Item>
                       </NavDropdown>
                  
                   <p className=' break_point'>|</p>
                      
                   
                        <NavDropdown title="$" id="navbarScrollingDropdown" className='nav_dropDown'>
                          <NavDropdown.Item href="#action4">৳ take</NavDropdown.Item>
                          <NavDropdown.Item href="#action3">€ Euro</NavDropdown.Item>
                          <NavDropdown.Item href="#action4">$ US Dollar</NavDropdown.Item>
                        </NavDropdown>   
                     </Nav>  
        </div>    
    );
};

export default Header;          
                
                
           
         