import { useEffect, useState } from "react";

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
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });

        // Empty the name input value for re-use
        setNameInput("");
    };

    return (
        <div className="App">
            <h1>{message}</h1>
            <input
                type="text"
                placeholder="Enter your name"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit!</button>
        </div>
    );
};

export default Home;