import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

export default function App() {
  const [advice, setAdvice] = useState("");
  useEffect(() => {
    console.log("useEffect");
    getAdvice();
  }, []);

  const getAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const advice = response.data.slip.advice;
        setAdvice(advice);
        console.log(advice);
      })
      .catch((error) => {
        console.log("error ", error);
      });
  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={getAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}
