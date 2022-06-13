import React from "react";
import { useQuery,} from "@apollo/client";
import { GET_USER_LIST } from "../graphql/forartist/Queries";


export default function UserList() {
  const { data,loading,error } = useQuery(GET_USER_LIST);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  
  const filtered = data.userList.filter((id) => id.ArtistName != null);
  return (
    <>
    <div>
      your data is here//////
      <table>
        <thead>
          <tr>
            {/* <td>id</td> */}
            <td>name</td>
            <td>dob</td>
            <td>bio</td>
          </tr>
        </thead>
        <tbody>
          {filtered.map((item) => (
            <tr>
             {/* <td>{item.id}</td> */}
              <td>{item.ArtistName}</td>
              <td>{item.Dob}</td>
              <td>{item.Bio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>

  );
}
