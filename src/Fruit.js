import React from "react";

function Fruit({ id, value }) {
  return (
    <div>
      <h3>
        {id}:{value}
      </h3>
    </div>
  );
}

export default Fruit;
