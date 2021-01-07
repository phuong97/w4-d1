import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { Container, CardDeck } from "react-bootstrap";
// import Fruit from "./Fruit";
// import Fruit1 from "./Fruit1";
// import Message from "./Message";
// const Message = ({ name, yearOfBirth }) => {
//   return (
//     <h3 className="text-center">
//       Hi {name}! You are {2021 - yearOfBirth} years old
//     </h3>
//   );
// };

import Message1 from "./Message1";
import Fruit2 from "./Fruit2";
import Fruit3 from "./Fruit3";

// Assignment 2
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

// ---Bonus---
const Fruits = [
  { description: "Good.", name: "apple", emoji: "🍎", price: 0.5 },
  { description: "So so.", name: "orange", emoji: "🍊", price: 0.2 },
  { description: "Okay.", name: "grape", emoji: "🍇", price: 1.2 },
  { description: "Excellent", name: "pear", emoji: "🍐", price: 1.5 },
];

function App() {
  return (
    <Container>
      {/* Assignment 1  */}
      <Message1 name="Phuong" yearOfBirth={1997} />

      {/* Assignment 2 */}
      {allItems.map((fruit) => (
        <Fruit2 id={fruit.id} value={fruit.value} />
      ))}

      {/* Assignment 3  */}

      <CardDeck>
        {Fruits.map((fruits) => (
          <Fruit3
            description={fruits.description}
            name={fruits.name}
            emoji={fruits.emoji}
            price={fruits.price}
          />
        ))}
      </CardDeck>
    </Container>
  );
}
export default App;

// function App() {
//   return (
//     // <div className="App">
//     // </div>
//     <Container>
//       {/* <h1 className='text-center'>My new React App</h1> */}
//       <Message name="Phuong" yearOfBirth={1997} />
//       {allItems.map((fruit) => (
//         <Fruit id={fruit.id} value={fruit.value} />
//       ))}
//       <Card>
//         <CardDeck>
//           {Fruits.map((fruits) => (
//             <Fruit1
//               description={fruits.description}
//               name={fruits.name}
//               emoji={fruits.emoji}
//               price={fruits.price}
//             />
//           ))}
//         </CardDeck>
//       </Card>
//     </Container>
//   );
// }

// export default App;
