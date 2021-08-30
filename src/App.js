import React from "react";
import "./style.css";
import Data from "./data";
import { useState, useEffect } from "react";
import Person from "./Person";
function App() {
  const [person, setPerson] = useState(Data[0]);
  const date = new Date();
  const sec = date.getSeconds();

  /*  setTimeout(() => {
    setPerson((I) => {
      if (person.id === 4) {
        return Data[0];
      } else {
        return Data[person.id];
      }
    });
  }, 3000); */

  // setInterval(()=>console.log("Hello!"),2000)
  //useEffect(()=>{setInterval(()=>console.log("Hello!"),2000)},[]);

  console.log(sec);

  return (
    <>
      <div className="header">
        <h1 className="backslash">/</h1>
        <h1 className="title">Reviews</h1>
      </div>
      <div className="container">
        <div
          className="LeftArrow"
          onClick={() => {
            setPerson((value) => {
              console.log("leftArrow clicked!");
            });
          }}
        >
          LA
        </div>
        <div className="RightArrow">RA</div>
        <div className="content">
          <Person info={person} />
        </div>
        <div className="quote">qutation</div>
      </div>
    </>
  );
}

export default App;
