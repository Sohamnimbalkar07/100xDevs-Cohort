import { useState } from "react";
import "./App.css";
import { countAtom, evenSelector } from "./store/atom/count";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

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
      <EvenCountRenderer/>
      <Buttons />
    </div>
  );
}

function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector);

  return <div>
    {isEven ? "is is even" : null}
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count => count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count => count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
