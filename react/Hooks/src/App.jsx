import { useState, useMemo } from "react";
import "./App.css";
import { Callback } from "./callback";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const count = useMemo(() => {
    console.log("inside usememo");
    let count = 0;
    for (let i = 1; i <= inputValue; i++) {
      console.log("inside for loop");
      count = count + i;
    }
    return count;
  }, [inputValue]);

  return (
    <div>
      <input
        type="number"
        onChange={(e) => {
          setInputValue(Number(e.target.value));
        }}
      ></input>
      <br />
      Sum of 1 to {inputValue} is {count}
      <br />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Click {counter}
      </button>
      <Callback />
    </div>
  );
}

export default App;
