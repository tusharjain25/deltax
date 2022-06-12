import React from "react";
import { useQuery,} from "@apollo/client";
import { GET_USER_LIST } from "../graphql/Queries";


export default function UserList() {
  const { data,loading,error } = useQuery(GET_USER_LIST);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  
  const filtered = data.userList.filter((name) => name.name != null);
  return (
    <>
    <div>
      your data is here//////
      <table>
        <thead>
          <tr>
            
           
            <td>name</td>
            <td>dob</td>
            <td>bio</td>
            
          </tr>
        </thead>
        <tbody>
          {filtered.map((item) => (
            <tr>
             
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
