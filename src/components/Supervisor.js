import React from "react";

const Supervisor = ({ data }) => {
    return (
      <div>
        <h2>Supervisor</h2>
        <>
          <p>{data.pci}</p>
          <p>{data.rsrp}</p>
          <p>{data.rsrq}</p>
        </>
      </div>
    );
  };
  
export default Supervisor;