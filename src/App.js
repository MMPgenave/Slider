import React from "react";
import "./style.css";
import Data from "./data";
import { useState, useEffect } from "react";
import Person from "./Person";
function App() {
  const [person, setPerson] = useState(Data[0]);
  const date = new Date();
  const sec = date.getSeconds();

  //auto-slider function
  setTimeout(() => {
    setPerson((I) => {
      if (person.id === 5) {
        return Data[0];
      } else {
        return Data[person.id];
      }
    });
  }, 5000);

  // setInterval(()=>console.log("Hello!"),2000)
  //useEffect(()=>{setInterval(()=>console.log("Hello!"),2000)},[]);

  const prevPicture = (ID) => {
    console.log(`leftArrow clicked, ID=${ID}`);
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
            LA
          </button>
        </div>
        <div className="RightArrow">
          <button type="button" className="RA" onClick={() => nextPicture()}>
            RA
          </button>
        </div>
        <div className="content">
          <Person info={person} />
        </div>
        <div className="quote">qutation</div>
      </div>
    </>
  );
}

export default App;
