
import {gql} from '@apollo/client';
 export const GET_USER_LIST = gql`
  query Artists  {
   userList{
      id,
      ArtistName,
      Dob,
      Bio,

    }
  }
`