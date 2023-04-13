import React from "react";
import SongList from "components/SongList";
import env from "utils/env";

const Home = ({ songs }) => {
  return (
    <div>
      <SongList data={songs} />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const res = await fetch(`${env.apiEndpoint}/songs`);
  const songs = await res.json();

  return {
    props: {
      songs,
    },
  };
}
