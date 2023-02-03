import React from "react";
import useHook from "../customHook";

const TestComponent = () => {
  const { test, setTest } = useHook();

  console.log("test component--1-", test);

  return (
    <button
      onClick={() => {
        setTest((test) => !test);
      }}
    >
      변경
    </button>
  );
};

export default TestComponent;
