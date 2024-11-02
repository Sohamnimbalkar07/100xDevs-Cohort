import './App.css';
import React, { useState, useEffect } from 'react';
import Todo from './hooks/Todo';

function App() {
  return (
    <div className="App">
     {/* <CounterComponent/> */}
     <Todo/>
    </div>
  );
}

function CounterComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Count has changed:', count);

    return () => {
      console.log('Cleaning up after count changed');
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default App;
