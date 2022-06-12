
var db =require('../../models');
const artist=db.artists;
const{GraphQLList}=require('graphql')
const UserType=require('../typedef/UserType');

module.exports.USER_LIST={
    type:new GraphQLList(UserType),
    resolve(parent,args){
        let data=artist.findAll();
       return data
    }
}
