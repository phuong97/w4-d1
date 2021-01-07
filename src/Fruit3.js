import React from "react";
import { Card } from "react-bootstrap";

function Fruit3({ name, description, emoji, price }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            {name} {emoji}
          </Card.Title>
          <Card.Text>
            <p>{description}</p>
            <p>Price : ${price}/kg</p>
            <p>{description}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Fruit3;
