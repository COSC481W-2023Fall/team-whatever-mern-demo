import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



// const UserSchema = new mongoose.Schema({
//     name: String
// })

// const UserModel = mongoose.model("users", UserSchema)
// module.exports = UserModel

const Names = () => {
  const [names, setNames] = useState([]);

  // Calls to the back end to get the names information from the json
  useEffect(() => {
    fetch("https://demo-webserver.onrender.com/names")
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
