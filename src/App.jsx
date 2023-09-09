import './App.css'
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { useState } from "react";
import {
  ChevronUp,
  ChevronsUp,
  ChevronDown,
  ChevronsDown,
  Hash,
  RotateCcw,
} from "react-feather";

function App() {
  const [display, counterValue] = useState(0);

  return (
    <div className="counter-box">
      <div className="current-value">
        <p>Current value:</p>
        <h1>{display}</h1>
      </div>

      <div className="buttons">
        <button title="Increment Display Value by 1" onClick={() => counterValue((counter) => counter + 1)}>
          <ChevronUp />
        </button>

        <button title="Increment Display Value by 10" onClick={() => counterValue((counter) => counter + 10)}>
          <ChevronsUp />
        </button>

        <button title="Rest Display to 0" onClick={() => counterValue((counter) => counter - counter)}>
          <RotateCcw />
        </button>

        <button title="Generate random number from 1-100"
          onClick={() => counterValue(() => Math.floor(Math.random() * 100) + 1)}
        >
          <Hash />
        </button>

        <button title="Decrement Display Value by 10" onClick={() => counterValue((counter) => counter - 10)}>
          <ChevronsDown />
        </button>

        <button title="Decrement Display Value by 1" onClick={() => counterValue((counter) => counter - 1)}>
          <ChevronDown />
        </button>
      </div>

    </div>
  );
}

export default App;

 


