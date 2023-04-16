import React from "react";
import { useEffect, useState } from "react";
export default function CurrentCellInfo() {
  const [cellInfo, setCellInfo] = useState({
    mcc: "",
    scellid: "",
    mnc: "",
    pcellid: "",
    first_seen: "",
    last_seen: "",
  });
  useEffect(() => {
    async function fetchData() {
      await fetch(
        "http://iotltesupervisor-env.eba-qgmwipr2.ap-southeast-1.elasticbeanstalk.com/get_last_cell/"
      )
        .then((res) => res.json())
        .then(function (data) {
          setCellInfo({
            mcc: data.mcc,
            scellid: data.scellid,
            mnc: data.mnc,
            pcellid: data.pcellid,
            first_seen: data.first_seen,
            last_seen: data.last_seen,
          });
        });
    }

    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <ul>
        <li>SCellID: {cellInfo.scellid}</li>
        <li>PCellID: {cellInfo.pcellid}</li>
        <li>MCC: {cellInfo.mcc}</li>
        <li>MNC: {cellInfo.mnc}</li>
        <li>First seen: {cellInfo.first_seen}</li>
        <li>Last seen: {cellInfo.last_seen}</li>
      </ul>
    </>
  );
}
