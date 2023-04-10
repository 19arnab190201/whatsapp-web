import React, { useState } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { useUserAuth } from "../Context/AuthContext";

const Auth = () => {
  const [signup, setSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp, logIn, updateUser } = useUserAuth();
  const url =
    "https://i.pinimg.com/564x/a9/d6/05/a9d60534f8f7b6e7d960892db9b0f4ae.jpg";
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      await updateUser(name, url);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container>
      <button
        onClick={() => {
          setSignup(true);
        }}>
        SignUP
      </button>
      <button
        onClick={() => {
          setSignup(false);
        }}>
        SignIN
      </button>
      <Row>
        {signup ? (
          <Col>
            <h1>SignUP</h1>
            <Form onSubmit={handleSignUpSubmit}>
              <Form.Group className='mb-3' controlId='formBasicText'>
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter Name'
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Email address'
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className='text-muted'>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='formBasicCheckbox'></Form.Group>
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          </Col>
        ) : (
          <Col>
            <h1>SignIN</h1>
            <Form onSubmit={handleSignInSubmit}>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Email address'
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className='text-muted'>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='formBasicCheckbox'></Form.Group>
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Auth;
