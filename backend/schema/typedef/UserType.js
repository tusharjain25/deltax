const graphql=require('graphql')
const{
     GraphQLObjectType,
     GraphQLString,
     GraphQLInt,
}=graphql;


const UserType=new GraphQLObjectType({
    name:'artist',
    fields:()=>({
        id:{type:GraphQLInt},
        name:{type:GraphQLString},
        dob:{type:GraphQLString},
        bio:{type:GraphQLString}
    })
})
module.exports=UserType;