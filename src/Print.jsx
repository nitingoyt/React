import React from "react";
import "./App.css";


function Print() {
  const [status, setStatus] = React.useState(true);
  const statusHandler=(state)=>{
    setStatus(state)
  }
  return (
    <>
      <div className="Print">
        {status ? <h2>See me or not!!!</h2> : null}
        <button onClick={()=>statusHandler(false)}>Hide</button>
        <button onClick={()=>statusHandler(true)}>Show</button> 
        </div>
    </>
  );
}

export default Print;
