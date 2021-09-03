import React from "react";
import "./style.css";
import Data from "./data";
import { useState, useEffect } from "react";
import Person from "./Person";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

function App() {
  const [people, setPeople] = useState(Data);
  const [index, setTindex] = useState(0);
  const prevPicture = (ID) => {};

  const nextPicture = () => {
    console.log("next button clicked");
  };

  //console.log(sec);

  return (
    <>
      <div className="header">
        <h1 className="title">
          {" "}
          <span>/</span> Reviews
        </h1>
      </div>
      <div className="section_container">
        {people.map((person, indexx) => {
          const { id, name, job, image, text } = person;
          let position = "nextSlide";
          if (indexx === index) {
            position = "activeSlide";
          }
          if ( indexx === 4) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={position}>
              <img src={image} className="image" alt={name} />
            </article>
          );
        })}
      </div>
    </>
  );
}

export default App;
