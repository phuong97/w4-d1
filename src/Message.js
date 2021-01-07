import React from "react";

function Message({ name, yearOfBirth }) {
  return (
    <div>
      <h1 className="text-center">
        Hi {name}. You are {2021 - yearOfBirth} years old.
      </h1>
    </div>
  );
}

export default Message;
