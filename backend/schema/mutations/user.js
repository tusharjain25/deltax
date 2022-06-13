var db =require('../../models');
const artist=db.artists;
const{GraphQLList ,GraphQLString, GraphQLID, GraphQLInt}=require('graphql')
const UserType=require('../typedef/UserType');

module.exports.USER_ADD={
    type:UserType,
    args:{
        id:{type:GraphQLInt},
        ArtistName:{type:GraphQLString},
        Dob:{type:GraphQLString},
        Bio:{type:GraphQLString},
    },
    resolve:(parent,args)=>{
        artist.create({
           id:args.id,
           ArtistName:args.ArtistName,
           Dob:args.Dob,
           Bio:args.Bio,
        })
       return args
    }
}