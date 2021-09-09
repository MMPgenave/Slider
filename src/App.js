import React from "react";
import "./style.css";
import Data from "./data";
import { useState, useEffect,useRef } from "react";
import Person from "./Person";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

function App() {
  const [person, setPerson] = useState(Data[0]);
  const refFlag = useRef(true);

  //auto-slider function
  console.log(`flag=${refFlag.current}`);

  if (refFlag.current) {
    setTimeout(() => {
      setPerson((prevValue) => {
        if (person.id === 4) {
          return Data[0];
        } else {
          return Data[person.id+1];
        }
      });
    }, 5000);
  }
 
  
  useEffect(() => {
    console.log('useEffect enabeld')
    refFlag.current = true;
    
  })

  const prevPicture = () => {
        console.log("Previous button clicked");

    refFlag.current = false;
    setPerson((prevValue) => {
      if (person.id === 0) {
        return Data[4];
      } else {
        return Data[person.id - 1];
      }
    });
  };

  const nextPicture = () => {
    console.log("next button clicked");
    refFlag.current = false;
    setPerson((prevValue) => {
      if (person.id === 4) {
        return Data[0];
      } else {
        return Data[person.id + 1];
      }
    });
  };



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
            onClick={() => prevPicture()}
          >
            <FiChevronLeft />
          </button>
        </div>
        <div className="RightArrow">
          <button
            type="button"
            className="RA"
            onClick={() => nextPicture()}
          >
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
