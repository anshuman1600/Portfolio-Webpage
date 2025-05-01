import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <section id="contact" className="content-section">
      <Container>
        <h2>Contact Me</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Your message" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Send Message
          </Button>
        </Form>
      </Container>
    </section>
  );
}

export default Contact; 