import React from "react";
import { Card } from "react-bootstrap";

function Fruit1({ description, name, emoji, price }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        {/* <CardDeck> */}
        <Card.Body>
          <Card.Title>
            {name} {emoji}
          </Card.Title>
          <p>{description}</p>
          <p>Price :${price}/kg</p>
          <p>{description}</p>
        </Card.Body>
        {/* </CardDeck> */}
      </Card>
    </div>
  );
}

export default Fruit1;
