import "./App.css";
import { MicroTask1 } from "./components/microTask1/MicroTask1";
import { MicroTask2 } from "./components/microTask2/MicroTask2";
import AssociativeArray from "./components/src/AssociativeArray";

function App() {
  return (
    <>
      <h1>Micro Tasks, Home Work</h1>
      <div>
        <h2>Sprint 1</h2>
        <MicroTask1 />
        <MicroTask2 />
      </div>
      <div>
        <h2>Sprint 2</h2>
        <AssociativeArray />
      </div>
    </>
  );
}

export default App;
