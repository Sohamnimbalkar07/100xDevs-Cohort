import { useState } from "react";
import "./App.css";
import { countAtom } from "./store/atom/count";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";

function App() {
  return (
    <div>
      <RecoilRoot>
      <Count />
      </RecoilRoot>
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
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}

function Buttons() {
  const [ count, setCount] = useRecoilState(countAtom);
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
