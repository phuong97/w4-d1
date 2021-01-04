import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { Container, Card, CardDeck } from "react-bootstrap";
import Fruit from "./Fruit";
import Fruit1 from "./Fruit1";
const Message = ({ name, yearOfBirth }) => {
  return (
    <h3 className="text-center">
      Hi {name}! You are {2021 - yearOfBirth} years old
    </h3>
  );
};

const allItems = [
  { id: "apple", value: "🍎 apple" },
  { id: "orange", value: "🍊 orange" },
  { id: "grape", value: "🍇 grape" },
  { id: "pear", value: "🍐 pear" },
];

// function Fruit({ id, value }) {
//   return (
//     <h3>
//       {id}:{value}
//     </h3>
//   );
// }

const Fruits = [
  { description: "Good.", name: "apple", emoji: "🍎", price: 0.5 },
  { description: "So so.", name: "orange", emoji: "🍊", price: 0.2 },
  { description: "Okay.", name: "grape", emoji: "🍇", price: 1.2 },
  { description: "Excellent", name: "pear", emoji: "🍐", price: 1.5 },
];

function App() {
  return (
    // <div className="App">
    // </div>
    <Container>
      {/* <h1 className='text-center'>My new React App</h1> */}
      <Message name="Phuong" yearOfBirth={1997} />
      {allItems.map((fruit) => (
        <Fruit id={fruit.id} value={fruit.value} />
      ))}
      <Card>
        <CardDeck>
          {Fruits.map((fruits) => (
            <Fruit1
              description={fruits.description}
              name={fruits.name}
              emoji={fruits.emoji}
              price={fruits.price}
            />
          ))}
        </CardDeck>
      </Card>
    </Container>
  );
}

export default App;
