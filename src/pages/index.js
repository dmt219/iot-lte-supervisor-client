import React from "react";
import SongList from "components/SongList";
import Supervisor from "components/Supervisor";
import env from "utils/env";

const Home = ({ songs, data }) => {
  return (
    <div>
      <SongList data={songs} />
      <Supervisor data={data}/>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const res = await fetch(`${env.apiEndpoint}/songs`);
  const songs = await res.json();
  const data = { pci: 1, rsrp: Math.floor(Math.random() * 10), rsrq: Math.floor(Math.random() * 10) }

  return {
    props: {
      songs,
      data
    },
  };
}
