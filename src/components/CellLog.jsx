import React from "react";
import { useState, useEffect } from "react";

export default function CellLog() {
  const [cellData, setCellData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await fetch("https://lte-supervisor.com/cells/")
        .then((res) => res.json())
        .then(function (data) {
          setCellData(data);
        });
    }

    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <ul>
      {cellData.slice(-5).map((cell, index) => (
        <>
          <li key={index}>
            ScellID: {cell.scellid != "" ? cell.scellid : "None"}
          </li>
          <ul>
            <li>First Seen: {cell.first_seen}</li>
            <li>Last Seen: {cell.last_seen}</li>
          </ul>
        </>
      ))}
    </ul>
  );
}
