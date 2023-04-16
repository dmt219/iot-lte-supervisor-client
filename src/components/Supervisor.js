import React from "react";
import SignalDisplay from "./SignalDisplay";

const Supervisor = ({ data }) => {
  
  return (
    <div>
      <h2>Supervisor</h2>
      <>
        <p>PCI = {data.pci}</p>
        <SignalDisplay signal = "RSRP"/>
        <SignalDisplay signal = "RSRQ"/>
      </>
    </div>
  );
};
  
export default Supervisor;