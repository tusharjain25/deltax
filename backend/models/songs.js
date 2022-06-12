module.exports=(sequelize,DataTypes)=>{
    const songs=sequelize.define('songs',{
        id: {
            type:DataTypes.INTEGER,
            primaryKey:true
            
         },
        SongName:DataTypes.STRING,
        DateofRelease:DataTypes.STRING,
        Cover:DataTypes.STRING,
    },
    {
        createdAt:'create_at',
        updatedAt:'modified_at',

    }
    )
return songs
}