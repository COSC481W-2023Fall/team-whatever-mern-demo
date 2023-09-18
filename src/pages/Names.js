import { useEffect, useState } from "react";

const Names = () => {
  const [names, setNames] = useState([]);

  // Calls to the back end to get the names information from the json
  useEffect(() => {
    fetch("https://demo-webserver.onrender.com/names")
      .then((res) => res.json())
      .then((data) => setNames(data));
  }, []);

  return (
    <div className={"card"}>
      <h1>Names</h1>
      <ul>
        {/* For loop for each name in the list of names */}
        {names
          .filter((name) => name !== "please enter your name")
          .map((name) => (
            <li>{name}</li>
          ))}
      </ul>
    </div>
  );
};

export default Names;
