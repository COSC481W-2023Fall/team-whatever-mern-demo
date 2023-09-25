import { useEffect, useState, useRef } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const Home = () => {
    const [message, setMessage] = useState("");
    const [nameInput, setNameInput] = useState(""); // New state for the name input
    const inputBox = useRef(null);

    // Contacts the backend to retrieve the information
    useEffect(() => {
        fetch("https://demo-webserver.onrender.com")
            .then((data) => setMessage(data));
    }, []);

    const handleSubmit = (e) => {
        // Send the name input to the server
        fetch("https://demo-webserver.onrender.com/submit-name", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: nameInput }),
        })
            .then((res) => {
                res.json();
                // Empty the name input value for re-use
                inputBox.current.value = "";
            })
            .then((data) => {
                console.log(data);
            });
    };

    const handleInput = (e) => {
        setNameInput(e.target.value);
        setMessage(e.target.value)
    }

    return (
        <div className="App">
            <Card>
                <Card.Body>
                    <Card.Title>Hello, {message}!</Card.Title>
                    <Form.Control
                        ref={inputBox}
                        defaultValue={nameInput}
                        placeholder="Enter your name"
                        onChange={(e) => handleInput(e)}
                    />
                    <Button onClick={(e) => handleSubmit(e)}>Submit!</Button>
                </Card.Body>
            </Card>
        </div >
    );
};

export default Home;