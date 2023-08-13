import React, { useState } from 'react'
import ContactStyles from "./Form.module.css"
import { Container, Form, Button } from 'react-bootstrap';
const ContactForm = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };
    return (
        <Container className={ContactStyles.formContainer}>
            <h2 className={ContactStyles.heading}>Contact Us</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="fullName">
                    <Form.Label className={ContactStyles.labels}>Full Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label className={ContactStyles.labels}>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="address">
                    <Form.Label className={ContactStyles.labels}>Address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="message">
                    <Form.Label className={ContactStyles.labels}>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Enter your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </Form.Group>

                <Button type="submit" className={ContactStyles.button}>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default ContactForm;