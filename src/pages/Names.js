import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Names = () => {
  const [names, setNames] = useState([]);

  // Calls to the back end to get the names information from the json
  useEffect(() => {
    fetch("http://localhost:8000/names")
      .then((res) => res.json())
      .then((data) => setNames(data));
  }, []);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Names</Card.Title>
        <ListGroup>
        {/* For loop for each name in the list of names */}
        {names
          .filter((name) => name !== "please enter your name")
          .map((name) => (
            <ListGroup.Item>{name}</ListGroup.Item>
          ))}
      </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Names;
