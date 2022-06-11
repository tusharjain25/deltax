
var db =require('../../models');
const user=db.artists;
const{GraphQLList}=require('graphql')
const UserType=require('../typedef/UserType');

module.exports.USER_LIST={
    type:new GraphQLList(UserType),
    resolve(parent,args){
        let data=user.findAll();
       return data
    }
}