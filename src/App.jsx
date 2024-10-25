import "./App.css";
import Print from "./Print.jsx";
import { useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  function getData(val) {
    console.log(val.target.value);
    setData(val.target.value);
    setPrint(false);
  }

  return (
    <>
      {
        <div className="App">
          {print ? <h2>{data}</h2> : null}
          <input type="text" onChange={getData} />
          <button onClick={() => setPrint(true)}>Print Data</button>
        </div>
      }
      <Print />
    </>
  );
}

export default App;
