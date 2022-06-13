var db =require('../../models');
const song=db.songs;
const{GraphQLList ,GraphQLString, GraphQLID, GraphQLInt}=require('graphql')
const SongType=require('../typedef/SongType');

module.exports.SONG_ADD={
    type:SongType,
    args:{
        id:{type:GraphQLInt},
        SongName:{type:GraphQLString},
        DateofRelease:{type:GraphQLString},
        Cover:{type:GraphQLString},
    },
    resolve:(parent,args)=>{
        song.create({
           id:args.id,
           SongName:args.SongName,
           DateofRelease:args.DateofRelease,
           Cover:args.Cover,
        })
       return args
    }
}