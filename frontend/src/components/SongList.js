import React from "react";
import { useQuery } from "@apollo/client";
import { GET_SONG_LIST } from "../graphql/forsong/Queries";

export default function SongList() {
  const { data, loading, error } = useQuery(GET_SONG_LIST);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const filtered = data.songList.filter((id) => id.SongName != null);

  return (
    <>
      Top 10 Songs
      <div className=" container border border-primary">
        <ul className="row list-unstyled border border-primary">
          <li className="col">Cover</li>
          <li className="col mx-4">Songname</li>
          <li className="col">DateofRelease</li>
          
        </ul>

        {filtered.map((item) => (
          <ul className="row list-unstyled ">
            <li className="col">{item.Cover}</li>
            <li className="col mx-4">{item.SongName}</li>
            <li className="col">{item.DateofRelease}</li>
            
          </ul>
        ))}
      </div>
    </>
  );
}
