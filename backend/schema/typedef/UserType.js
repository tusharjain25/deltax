const graphql=require('graphql')
const{
     GraphQLObjectType,
     GraphQLString,
     GraphQLScalarType,
     GraphQLID
}=graphql;


const UserType=new GraphQLObjectType({
    name:'artist',
    fields:()=>({
        id:{type:GraphQLID},
        ArtistName:{type:GraphQLString},
        Dob:{type:GraphQLString},
        Bio:{type:GraphQLString},
    })
}

)
module.exports=UserType;