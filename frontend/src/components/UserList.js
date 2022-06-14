import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USER_LIST } from "../graphql/forartist/Queries";

export default function UserList() {
  const { data, loading, error } = useQuery(GET_USER_LIST);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const filtered = data.userList.filter((id) => id.ArtistName != null);
  return (
    <>
      Top 10 Artists
      <div className="container border border-primary">
        <ul className="row list-unstyled border border-primary">
          <li className="col mx-4">Artistname</li>
          <li className="col">Dob</li>
          <li className="col">Bio</li>
        </ul>
        {filtered.map((item) => (
          <ul className="row list-unstyled ">
            <li className="col mx-4 ">{item.ArtistName}</li>
            <li className="col">{item.Dob}</li>
            <li className="col">{item.Bio}</li>
          </ul>
        ))}
        
      </div>
    </>
  );
}
