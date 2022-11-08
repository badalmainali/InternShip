import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Registerpage() {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <Form className="m-3 reg">
                        <h2 className="mt-4">REGISTER PAGE</h2>
                        <Form.Group className="mb-3 mt-4" controlId="formBasicFullname">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="fullname" placeholder="Enter Name" />
                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="phone" placeholder="+977 9815957785" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="phone" placeholder="badalma12@gmail.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="phone" placeholder="Your Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="phone" placeholder="Enter Again" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Referral Code</Form.Label>
                            <Form.Control type="phone" placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="I agree to all the Terms and Conditions" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default Registerpage;