module.exports=(sequelize,DataTypes) =>{ 
    const artists= sequelize.define('artists',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name:DataTypes.STRING,
        dob:DataTypes.STRING,
        bio:DataTypes.STRING,
       
   },{
       createdAt:'create_at',
       updatedAt:'modified_at'
   }
   
   )

    return artists;
}
                 