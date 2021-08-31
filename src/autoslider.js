import React from "react";
import "./style.css";
import Data from "./data";
import { useState, useEffect } from "react";
import Person from "./Person";

const AutoSlider = () => {
  const [person, setPerson] = useState(Data[0]);

  useEffect(() => {
    setTimeout(() => {
      console.log("in setTimeout");

      setPerson((I) => {
        if (person.id === 5) {
          return Data[0];
        } else {
          return Data[person.id];
        }
      });
    }, 5000);
  }, [person.id]);

  return <Person info={person} />;
};

export default AutoSlider;
