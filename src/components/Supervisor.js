import React from "react";

const Supervisor = ({ data }) => {
  const rsrp_dBm = data.rsrp - 140
  const rsrq_dB = data.rsrp * 0.5 - 19.5
  return (
    <div>
      <h2>Supervisor</h2>
      <>
        <p>PCI = {data.pci}</p>
        <p id="rsrp">
          RSRP = {rsrp_dBm} dBm
          <p>{data.rsrp}</p>
        </p>
        <p id="rsrp">
          RSRQ = {rsrq_dB} dB
          <p>{data.rsrq}</p>
        </p>
      </>
    </div>
  );
};
  
export default Supervisor;