import {gql} from '@apollo/client';

export const GET_SONG_LIST=gql`
query Songs{
  songList{
    id,
    SongName,
    DateofRelease,
    Cover,

  }
}
`