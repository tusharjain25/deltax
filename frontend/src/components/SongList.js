import React from "react";
import { useQuery,} from "@apollo/client";
import { GET_SONG_LIST } from "../graphql/forsong/Queries";


export default function SongList() {
  const { data,loading,error } = useQuery(GET_SONG_LIST);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  
  const filtered = data.songList.filter((id) => id.SongName != null);
 
  return (
    <>
    <div>
      your data is here//////
      <table>
        <thead>
          <tr>
            {/* <td>id</td> */}
            <td>songname</td>
            <td>dateofRelease</td>
            <td>Cover</td>
          </tr>
        </thead>
        <tbody>
          {filtered.map((item) => (
            <tr>
             {/* <td>{item.id}</td> */}
              <td>{item.SongName}</td>
              <td>{item.DateofRelease}</td>
              <td>{item.Cover}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>

  );
}
