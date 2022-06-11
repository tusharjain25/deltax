const graphql=require('graphql')
const{
     GraphQLObjectType,
     GraphQLSchema,
     GraphQLString,
     GraphQLInt,
     GraphQLList,
}=graphql;


const{ USER_LIST}=require('./queries/user');


const RootQuery=new GraphQLObjectType({
    name:'xyz',
    fields:{
        userList:USER_LIST,
     }
})
module.exports=new GraphQLSchema({query:RootQuery})