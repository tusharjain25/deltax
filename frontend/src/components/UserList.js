import React from "react";
import { useQuery,} from "@apollo/client";
//import { GET_USER_LIST } from "../graphql/Queries";

import {gql} from '@apollo/client';
 const GET_USER_LIST = gql`
  query Artists  {
   userList{
      id,
      name,
      dob,
      bio,

    }
  }
`;

export default function UserList() {
  const { data,loading,error } = useQuery(GET_USER_LIST);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  
  const filtered = data.userList.filter((id) => id.name != null);
  console.log(data);
  return (
    <>
    <div>
      your data is here//////
      <table>
        <thead>
          <tr>
            
            <td>id</td>
            <td>name</td>
            <td>dob</td>
            <td>bio</td>
            
          </tr>
        </thead>
        <tbody>
          {filtered.map((item) => (
            <tr>
              {/* <td>{item.id}</td> */}
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.dob}</td>
              <td>{item.bio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>

  );
}
