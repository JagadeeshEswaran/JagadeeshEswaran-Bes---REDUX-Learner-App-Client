/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

function TestComponent({ testInput }) {
  const count = useRef(0);
  const inputRef = useRef("");

  useEffect(() => {
    count.current = count.current + 1;
  });

  //   console.log("TestComponent Rendering...");

  return (
    <>
      <input type="text" ref={inputRef} value={testInput} />
      <button
        onClick={(e) => {
          e.preventDefault(), console.log(inputRef.current.value);
        }}
      >
        Print User Input
      </button>
    </>
  );
}

export default TestComponent;
