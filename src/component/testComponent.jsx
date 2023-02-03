import React from "react";
import useHook from "../customHook";

const TestComponent = () => {
  const { test, setTest } = useHook();

<<<<<<< HEAD
  console.log("test component--1-", test);
=======
  console.log("test component--2-", test);
>>>>>>> f4babd1 (테스트 컴포넌트2로변경)

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
