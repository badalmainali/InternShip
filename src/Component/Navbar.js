import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navbars() {
    return (
        <Navbar bg="light" expand="lg" className='navs'>
            <Container className='mx-auto'>
                <Navbar.Brand  href="#">Ecommerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '130px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" className='ml-4'>Home</Nav.Link>
                        <Nav.Link href="#action2" className='ml-4'>About Us</Nav.Link>
                        <Button className='mx-auto ml-4' variant="outline-success" >SIGN IN</Button>
                    </Nav>
                    
                        
                   
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Navbars;