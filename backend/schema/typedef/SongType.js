const graphql=require('graphql')
const{
     GraphQLObjectType,
     GraphQLString,
     GraphQLScalarType,
     GraphQLID
}=graphql;


const SongType=new GraphQLObjectType(
{
    name:'songs',
    fields:()=>({
        id:{type:GraphQLID},
        SongName:{type:GraphQLString},
        DateofRelease:{type:GraphQLString},
        Cover:{type:GraphQLString},
    }) 
}
)
module.exports=SongType;