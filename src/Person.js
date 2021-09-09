import React from "react";

const Person = (props) => {
  const { id, name, job, image, text } = props.info;

  return (
    <div key={id} className="person">
      <img src={image} alt={name} className="image" />
      <h1>{name}</h1>
      <h3>{job}</h3>
      <p >{text}</p>
    </div>
  );
};

export default Person;
