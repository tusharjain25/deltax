module.exports=(sequelize,DataTypes)=>{
    const artists=sequelize.define('artists',{
      id: {
            type:DataTypes.INTEGER,
            primaryKey:true
            
         },
        ArtistName:DataTypes.STRING,
        Dob:DataTypes.STRING,
        Bio:DataTypes.STRING,
        
    },
    {
        createdAt:'create_at',
        updatedAt:'modified_at',

    }
    )
return artists
}