import React from "react";
import { Alert } from "react-bootstrap";
import { useState } from "react";

const average = (arr) => arr.reduce((p, c) => p + c, 0) / arr.length;
export default function SimAlert({ simData }) {
  const [currentRSRPThreshold, setCurrentRSRPThreshold] = useState(-90);
  const [currentRSRQThreshold, setCurrentRSRQThreshold] = useState(-15);
  const averageRSRP = average(simData.rsrp_dbm);
  const averageRSRQ = average(simData.rsrq_db);
  return (
    <>
      <div>
        <p>Average RSRP last 1 hour: {averageRSRP}</p>
        <span>Current RSRP Threshold:</span>
        <Form
          number={currentRSRPThreshold}
          setAction={setCurrentRSRPThreshold}
        />
        <p></p>
        {averageRSRP > currentRSRPThreshold ? (
          <Alert variant={"success"}>Good RSRP</Alert>
        ) : (
          <Alert variant={"danger"}>Bad RSRP</Alert>
        )}
      </div>

      <div>
        <p>Average RSRQ last 1 hour: {averageRSRQ}</p>
        <span>Current RSRQ Threshold: </span>
        <Form
          number={currentRSRQThreshold}
          setAction={setCurrentRSRQThreshold}
        />
        <p></p>
        {averageRSRQ > currentRSRQThreshold ? (
          <Alert variant={"success"}>Good RSRQ</Alert>
        ) : (
          <Alert variant={"danger"}>Bad RSRQ</Alert>
        )}
      </div>
    </>
  );
}

function Form({ number, setAction }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={number}
        onChange={(e) => setAction(e.target.value)}
        placeholder="Set threshold"
      />
    </form>
  );
}
