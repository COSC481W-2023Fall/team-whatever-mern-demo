import { useEffect, useState } from "react";

const Names = () => {
    const [names, setNames] = useState([]);
    
    // Calls to the back end to get the names information from the json
    useEffect(() => {
        fetch("http://localhost:8000/names")
            .then((res) => res.json())
            .then((data) => setNames(data));
    }, []);
    
    return (
        <div>
            <h1>Names</h1>
            <ul>
                {/* For loop for each name in the list of names */}
                {names.map((name) => (
                    <li>{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Names;