import React from "react";

const SongList = ({ data }) => {
  return (
    <div>
      <h2>Songs</h2>
      <ul>
        {data.map(({ id, title, artist, release_date }) => (
          <li key={id}>
            {title} - {artist} ({release_date})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
