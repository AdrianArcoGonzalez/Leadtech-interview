import "./App.css";
import { useState } from "react";
import Description from "./components/Description/Description";
import Form from "./components/Form/Form";
import Results from "./components/Results/Results";

const initialCheckArray: number[] = [];

const App = (): JSX.Element => {
  const [checkResults, setCheckResult] = useState(initialCheckArray);

  return (
    <div className="App">
      <h1 className="main-title">Leadtech</h1>

      <Description />
      <Form checkResults={checkResults} setCheckResult={setCheckResult} />

      <Results results={checkResults} />
    </div>
  );
};

export default App;
