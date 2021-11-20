import React from "react";

const Person = (props) => {
  const { id, name, job, image, text } = props.info;

  return (
    <div key={id} className="person">
      <img src={image} alt={name} className="image" />
      <h1>{name}</h1>
    </div>
  );
};

export default Person;
