const graphql=require('graphql')
const{
     GraphQLObjectType,
     GraphQLSchema,
     GraphQLList,
}=graphql;


const{ USER_LIST}=require('./queries/user');
const {USER_ADD}=require('./mutations/user');
const{ SONG_LIST}=require('./queries/songs');

const RootQuery=new GraphQLObjectType({
    name:'query',
    fields:{
        userList:USER_LIST,
        songList:SONG_LIST,
     }
})
const Mutation=new GraphQLObjectType({
     name:'mutation',
     fields:{
        createUser:USER_ADD,
      }
 })
module.exports=new GraphQLSchema({query:RootQuery,mutation:Mutation})