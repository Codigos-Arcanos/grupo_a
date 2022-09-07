
var knex = require('knex')({

    client: 'mysql',
    connection: {
        host : 'localhost',      
        user : 'grupoa',      
        password : 'GrupoA123!',  
        database : 'grupo_a'      
     }
});
module.exports = knex