import React from "react";
import SongList from "components/SongList";
import Supervisor from "components/Supervisor";
import env from "utils/env";
import SignalDisplay from "../components/SignalDisplay";

const Home = ({ songs, signals }) => {
  return (
    <div>
      {/* <SongList data={songs} /> */}
      <Supervisor signals = {signals}/>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  // const res = await fetch(`${env.apiEndpoint}/songs`);
  // const songs = await res.json();
  const data = { pci: 1, rsrp: Math.floor(Math.random() * 10), rsrq: Math.floor(Math.random() * 10) }

  // Timestamp data of multiple signal
  // const res = await fetch(`${env.apiEndpoint}/signals`);
	// const signals = await res.json();
	const signals = [
		{
			"rsrp": 100,
			"ts": "2023-04-12T23:37:30",
			"rsrq": 100,
			"rsrp_dbm": -40,
			"scellid": "scellid",
			"id": 1,
			"rsrq_db": 30.5
		},
		{
			"rsrp": 2,
			"ts": "2023-04-15T18:44:19.146833",
			"rsrq": 1,
			"rsrp_dbm": -138,
			"scellid": "5",
			"id": 2,
			"rsrq_db": -19
		},
    {
      "rsrp": 65,
      "ts": "2023-04-15T18:46:27.196033",
      "rsrq": 22,
      "rsrp_dbm": -75,
      "scellid": "84649987",
      "id": 3,
      "rsrq_db": -8.5
      },
      {
      "rsrp": 66,
      "ts": "2023-04-15T18:46:52.133590",
      "rsrq": 22,
      "rsrp_dbm": -74,
      "scellid": "84649987",
      "id": 4,
      "rsrq_db": -8.5
      },
      {
      "rsrp": 66,
      "ts": "2023-04-15T18:47:17.071368",
      "rsrq": 22,
      "rsrp_dbm": -74,
      "scellid": "84649987",
      "id": 5,
      "rsrq_db": -8.5
      },
      {
      "rsrp": 66,
      "ts": "2023-04-16T00:55:08.036234",
      "rsrq": 18,
      "rsrp_dbm": -74,
      "scellid": "84649987",
      "id": 6,
      "rsrq_db": -10.5
      },
      {
      "rsrp": 66,
      "ts": "2023-04-16T00:55:32.951167",
      "rsrq": 23,
      "rsrp_dbm": -74,
      "scellid": "84649987",
      "id": 7,
      "rsrq_db": -8
      },
      {
      "rsrp": 66,
      "ts": "2023-04-16T00:55:57.907284",
      "rsrq": 20,
      "rsrp_dbm": -74,
      "scellid": "84649987",
      "id": 8,
      "rsrq_db": -9.5
      },
      {
      "rsrp": 66,
      "ts": "2023-04-16T00:56:22.836331",
      "rsrq": 23,
      "rsrp_dbm": -74,
      "scellid": "84649987",
      "id": 9,
      "rsrq_db": -8
      },
      {
      "rsrp": 57,
      "ts": "2023-04-16T00:56:47.782814",
      "rsrq": 23,
      "rsrp_dbm": -83,
      "scellid": "84649993",
      "id": 10,
      "rsrq_db": -8
      },
      {
      "rsrp": 66,
      "ts": "2023-04-16T00:57:12.672692",
      "rsrq": 19,
      "rsrp_dbm": -74,
      "scellid": "84649987",
      "id": 11,
      "rsrq_db": -10
      },
      {
      "rsrp": 67,
      "ts": "2023-04-16T00:57:37.626404",
      "rsrq": 17,
      "rsrp_dbm": -73,
      "scellid": "84649987",
      "id": 12,
      "rsrq_db": -11
      },
      {
      "rsrp": 66,
      "ts": "2023-04-16T00:58:02.560395",
      "rsrq": 23,
      "rsrp_dbm": -74,
      "scellid": "84649987",
      "id": 13,
      "rsrq_db": -8
      },
      {
      "rsrp": 67,
      "ts": "2023-04-16T00:58:27.486185",
      "rsrq": 20,
      "rsrp_dbm": -73,
      "scellid": "84649987",
      "id": 14,
      "rsrq_db": -9.5
      },
      {
      "rsrp": 66,
      "ts": "2023-04-16T00:58:52.443097",
      "rsrq": 22,
      "rsrp_dbm": -74,
      "scellid": "84649987",
      "id": 15,
      "rsrq_db": -8.5
      },
      {
      "rsrp": 67,
      "ts": "2023-04-16T00:59:17.643239",
      "rsrq": 11,
      "rsrp_dbm": -73,
      "scellid": "84649987",
      "id": 16,
      "rsrq_db": -14
      },
      {
      "rsrp": 66,
      "ts": "2023-04-16T00:59:42.316707",
      "rsrq": 22,
      "rsrp_dbm": -74,
      "scellid": "84649987",
      "id": 17,
      "rsrq_db": -8.5
      },
      {
      "rsrp": 57,
      "ts": "2023-04-16T01:00:07.221203",
      "rsrq": 19,
      "rsrp_dbm": -83,
      "scellid": "84649993",
      "id": 18,
      "rsrq_db": -10
      },
      {
      "rsrp": 66,
      "ts": "2023-04-16T01:00:32.176909",
      "rsrq": 22,
      "rsrp_dbm": -74,
      "scellid": "84649987",
      "id": 19,
      "rsrq_db": -8.5
      },
      {
      "rsrp": 66,
      "ts": "2023-04-16T01:00:57.097726",
      "rsrq": 22,
      "rsrp_dbm": -74,
      "scellid": "84649987",
      "id": 20,
      "rsrq_db": -8.5
      },
      {
      "rsrp": 66,
      "ts": "2023-04-16T01:01:22.045630",
      "rsrq": 20,
      "rsrp_dbm": -74,
      "scellid": "84649987",
      "id": 21,
      "rsrq_db": -9.5
      }
	]

  return {
    props: {
      // songs,
      data,
      signals
    },
  };
}
