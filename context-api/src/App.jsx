import { useContext, useState } from "react";
import "./App.css";
import { countContext } from "./context";

function App() {
  const [count, setCount] = useState(0);
  
  // wrap anyone thats wants to use the teleported value inside a provider 
  return (
    <div>
      <countContext.Provider value={{ count, setCount}}>
      <Count />
      </countContext.Provider>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const { count } = useContext(countContext);
  return <div>{count}</div>;
}

function Buttons() {
  const { count, setCount } = useContext(countContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}
export default App;
