import React from "react";
import { Button, ListGroup } from "react-bootstrap";

function CrudApp() {
  return (
    <div className="App">
      <h1 className="geeks">GeeksforGeeks </h1>
      <h3>CRUD App</h3>
      {/* <ListGroup.item > 
        <Button variant="primary" onClick={() => console.log("Primary")}>
          Primary
        </Button>
      </ListGroup.item> */}

      <ListGroup>
        <ListGroup.Item>
          <Button variant="primary" onClick={() => console.log("Primary")}>
            Primary
          </Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button
            variant="primary"
            onClick={() => console.log("Primary")}
            className="me-5"
          >
            Primary
          </Button>
          <Button variant="primary" onClick={() => console.log("Primary")}>
            Primary
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default CrudApp;
