import React from "react";
import "./style.css";
import Data from "./data";
import { useState, useEffect } from "react";
import Person from "./Person";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

function App() {
  const [person, setPerson] = useState(Data[0]);
  const date = new Date();
  const sec = date.getSeconds();

  //auto-slider function
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

  // setInterval(()=>console.log("Hello!"),2000)
  //useEffect(()=>{setInterval(()=>console.log("Hello!"),2000)},[]);

  const prevPicture = (ID) => {
    console.log("before setPerson");

    setPerson((I) => {
      if (ID === 1) {
        return Data[4];
      } else {
        return Data[ID - 2];
      }
    });
  };

  const nextPicture = () => {
    setPerson((I) => {
      if (person.id === 5) {
        return Data[0];
      } else {
        return Data[person.id];
      }
    });
  };

  //console.log(sec);

  return (
    <>
      <div className="header">
        <h1 className="backslash">/</h1>
        <h1 className="title">Reviews</h1>
      </div>
      <div className="container">
        <div className="LeftArrow">
          <button
            type="button"
            className="LA"
            onClick={() => prevPicture(person.id)}
          >
            <FiChevronLeft />
          </button>
        </div>
        <div className="RightArrow">
          <button type="button" className="RA" onClick={() => nextPicture()}>
            <FiChevronRight />
          </button>
        </div>
        <div className="content">
          <Person info={person} />
        </div>
        <div className="quote">
          <FaQuoteRight />
        </div>
      </div>
    </>
  );
}

export default App;
