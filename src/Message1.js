import React from "react";

function Message1({ name, yearOfBirth }) {
  return (
    <div>
      <h3 className="text-center">
        Hi, I'm {name}. I'm {2021 - yearOfBirth} years old.
      </h3>
    </div>
  );
}

export default Message1;
