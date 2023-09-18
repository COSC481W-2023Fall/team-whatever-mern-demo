import { useEffect, useState } from "react";

const Home = () => {
    const [message, setMessage] = useState("");
    const [nameInput, setNameInput] = useState(""); // New state for the name input

    // Contacts the backend to retrieve the information
    useEffect(() => {
        fetch("https://demo-webserver.onrender.com")
            .then((res) => res.json())
            .then((data) => setMessage(data));
    }, []);

    const handleSubmit = () => {
        // Send the name input to the server
        fetch("https://demo-webserver.onrender.com/submit-name", {
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
            <div className={"card"}>
            <h2>{message}</h2>
            <div className={"form"}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                />
                <br></br>
                <button onClick={handleSubmit}  >Submit!</button>
            </div>
            </div>
        </div>
    );
};

export default Home;