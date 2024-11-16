import { memo, useCallback, useState } from "react";

export function Callback() {
  const [count, setCount] = useState(0);

  const inputFunction = useCallback(() => {
    console.log("Hi there!");
  }, []);

  return (
    <div>
      <ButtonComponent inputFunction={inputFunction} />

      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        {" "}
        Click me {count}{" "}
      </button>
    </div>
  );
}

const ButtonComponent = memo(({ inputFunction }) => {
  console.log("chield Component");

  return (
    <div>
      <button
        onClick={() => {
          inputFunction();
        }}
      >
        {" "}
        Button Clicked
      </button>
    </div>
  );
});
