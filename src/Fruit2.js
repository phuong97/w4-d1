import React from "react";

function Fruit2({ id, value }) {
  return (
    <div>
      <h3 className="text-center">
        {id} : {value}
      </h3>
    </div>
  );
}

export default Fruit2;
