import { useState } from "react";

const useHook = () => {
  const [test, setTest] = useState(false);

  return {
    test,
    setTest,
  };
};

export default useHook;
