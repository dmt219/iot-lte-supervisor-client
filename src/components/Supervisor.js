import React from "react";
import SignalDisplay from "./SignalDisplay";

const Supervisor = ({ signals }) => {
  return (
    <div>
      <h2>Supervisors</h2>
      <ul>
        {signals.map(({id, scellid, ts, rsrp, rsrp_dbm, rsrq, rsrq_db}) => (
            <li key={id}>
              <p>ID = {id}</p>
              <p>SCI = {scellid}</p>
              <p>Timestamp = {ts}</p>
              <SignalDisplay name = "RSRP" signal = {rsrp}/>
              <SignalDisplay name = "RSRQ" signal = {rsrq}/>
            </li>
          ))}
      </ul>
    </div>
  );
};
  
export default Supervisor;