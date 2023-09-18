import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const Home = () => {
    const [message, setMessage] = useState("");
    const [nameInput, setNameInput] = useState(""); // New state for the name input

    // Contacts the backend to retrieve the information
    useEffect(() => {
        fetch("http://localhost:8000")
            .then((res) => res.json())
            .then((data) => setMessage(data));
    }, []);

    const handleSubmit = () => {
        // Send the name input to the server
        fetch("http://localhost:8000/submit-name", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: nameInput }),
        })
            .then((res) => {
                res.json()
                window.location.reload();
            })
            .then((data) => {
                console.log(data);
            });

        // Empty the name input value for re-use
        setNameInput("");
    };

    return (
        <div className="App">
            <Card>
                <Card.Body>
                    <Card.Title>{message}</Card.Title>
                    <Form.Control
                        defaultValue={nameInput}
                        placeholder="Enter your name"
                        onChange={(e) => setNameInput(e.target.value)}
                    />
                    <Button onClick={handleSubmit}>Submit!</Button>
                </Card.Body>
            </Card>
        </div >
    );
};

export default Home;