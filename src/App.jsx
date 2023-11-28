import "./App.css";
import React from "react";

function App() {
  return (
    <div className="box">
      {/* <svg width="700" height="700">
        <rect x="50" y="278" width="102" height="222" fill="blue" className="R518"/>
        <rect x="50" y="500" width="195" height="120" fill="pink" className="OASYS LAB"/>
        <rect x="245" y="500" width="195" height="120" fill="green" className="R516"/>
      </svg> */}
      <div style={{ left: "50px", top: "278px", width: "102px", height: "222px", backgroundColor: "blue" }} className="R518"></div>
      <div style={{ left: "50px", top: "500px", width: "195px", height: "120px", backgroundColor: "pink" }} className="OASYSLAB"></div>
      <div style={{ left: "245px", top: "500px", width: "195px", height: "120px", backgroundColor: "green" }} className="R516"></div>
    </div>
  );
}

export default App;
