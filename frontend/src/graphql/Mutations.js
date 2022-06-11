import { } from "@apollo/client";
import {gql} from '@apollo/client';
import { GET_USER_LIST } from "../graphql/Queries";
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