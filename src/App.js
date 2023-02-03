import TestComponent from "./component/testComponent";
import "./App.css";
import useHook from "./customHook";

function App() {
  const { test } = useHook();

  console.log("App---", test);

  return (
    <div className="App">
      <TestComponent />
    </div>
  );
}

export default App;
