import React, { useState } from 'react'
import ContactStyles from "./Form.module.css"
import { Container, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
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
            <h2 className={ContactStyles.heading}>Contact Me </h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="fullName">
                    <Form.Label className={ContactStyles.labels}>Full Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Aakriti pandey"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)} readOnly
                    />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label className={ContactStyles.labels}>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="aakritiv0709@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} readOnly
                    />
                </Form.Group>

                <Form.Group controlId="address">
                    <Form.Label className={ContactStyles.labels}>Address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Vijaynagar, Jabalpur, Madhya Pradesh"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)} readOnly
                    />
                </Form.Group>

                <Form.Group controlId="message">
                    <Form.Label className={ContactStyles.labels}>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="I'm a Frontend developer"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)} readOnly
                    />
                </Form.Group>

                <button className={ContactStyles.button}><NavLink to="https://www.linkedin.com/in/aakriti-pandey-076abb26b/">Contact Me</NavLink></button>
            </Form>
        </Container>
    )
}

export default ContactForm;