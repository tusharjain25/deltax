
var db =require('../../models');
const song=db.songs;
const{GraphQLList}=require('graphql')
const SongType=require('../typedef/SongType');


module.exports.SONG_LIST={
    type:new GraphQLList(SongType),
    resolve(parent,args){
        let data=song.findAll();
       return data
    }
}