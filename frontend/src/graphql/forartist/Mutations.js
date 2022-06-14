

import {gql} from '@apollo/client';
 export const CREATE_USER = gql`
  mutation createUser($ArtistName:String!,$Dob:String!,$Bio:String!)  {
   createUser(ArtistName:$ArtistName,Dob:$Dob,Bio:$Bio){
     
      success,error,message

    }
  }
`;