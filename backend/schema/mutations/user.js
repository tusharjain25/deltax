var db =require('../../models');
const artist=db.artists;
const{GraphQLList ,GraphQLString, }=require('graphql')
const UserType=require('../typedef/UserType');

module.exports.USER_ADD={
    type:UserType,
    args:{
        name:{type:GraphQLString},
        dob:{type:GraphQLString},
        bio:{type:GraphQLString},
    },
    resolve:async(parent,args)=>{
       await artist.create({
           name:args.name,
           dob:args.dob,
           bio:args.bio,
        })
       return args
    }
}