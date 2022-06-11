const Sequelize=require('sequelize');
const sequelize=new Sequelize('deltaxdb','root','rooty',{
    host:'localhost',
   dialect:'mysql',
   logging:true
})
sequelize.sync()
sequelize.authenticate()
.then(()=>{
    console.log('connected')
})
.catch(e=>{
    console.log('error'+e)
})
module.exports=sequelize;