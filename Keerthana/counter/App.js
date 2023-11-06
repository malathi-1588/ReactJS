import React from "react";
import Heading from "./components/heading";
import "./components/styles.css";
import Counter from "./components/counter";
import Button from "./components/button";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Heading />
      <Counter val={count} />
      <Button
        color="green"
        val="Increment"
        onClick={(e) => setCount(count + 1)}
      />
      &nbsp;&nbsp;&nbsp;
      <Button
        color="red"
        val="Decrement"
        onClick={(e) => setCount(count - 1)}
      />
      &nbsp;&nbsp;&nbsp;
      <Button color="gray" val="Reset" onClick={(e) => setCount(0)} />
    </div>
  );
}

export default App;
