const sequelize=require('../config/db');
const{Sequelize,DataTypes}=require('sequelize');
const db={}
db.Sequelize=Sequelize;
db.sequelize=sequelize
db.sequelize.sync({force:false})
.then(()=>{
   console.log('yes re-sync')
})
db.artists=require('./artists')(sequelize,DataTypes)
db.songs=require('./songs')(sequelize,DataTypes)
module.exports=db;