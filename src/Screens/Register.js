import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { InputGroup } from "react-bootstrap";


function Registerpage() {
    return (
        <Container>
            <Row>

                <Col className="align-self-center col-reg" md={{ span: 5, offset: 3 }}>
                    <Form className="m-3 reg">
                        <h2 className="mt-1 reg-head">REGISTER</h2>
                        <Form.Group className="mb-3 " controlId="formBasicFullname">
                            <Form.Label className="form-labels">Full Name</Form.Label>
                            <Form.Control required className="inpt-field" type="fullname" placeholder="Enter Name" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="form-labels">Phone</Form.Label>
                            <InputGroup>
                                <InputGroup.Text>+977</InputGroup.Text>
                                <Form.Control
                                    className="inpt-field" 
                                    required
                                    id="inlineFormInputGroupPhone"

                                />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="form-labels">Email</Form.Label>
                            <Form.Control required className="inpt-field"  type="email" placeholder="badalma12@gmail.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="form-labels">Password</Form.Label>
                            <Form.Control required className="inpt-field"  type="password" placeholder="Your Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="form-labels">Confirm Password</Form.Label>
                            <Form.Control required className="inpt-field"  type="password" placeholder="Enter Again" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="form-labels">Referral Code</Form.Label>
                            <Form.Control type="phone" className="inpt-field"  placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check className="inpt-field"  required type="checkbox" label="I agree to all the Terms and Conditions" />
                        </Form.Group>

                        <div className="d-grid gap-2">
                            <Button variant="success" type="submit"  className="ml-5">
                                Register
                            </Button>
                            <p className="mt-1">Already have an account?</p>
                            <Button href="/login" variant="outline-success" type="submit">
                                Login
                            </Button>
                        </div>
                    </Form>
                </Col>

            </Row>
        </Container>
    )
}

export default Registerpage;