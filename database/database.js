const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'demo',
  password: '1234',
  port: 5432,
});

  pool.query('SELECT NOW()', (err, res) => {
      if(err){
          console.log("ERROR: "+err);
      }
      else{
    console.log("DB Connection\nRow Count: "+res.rowCount+ "\n"+res.rows[0].now);
      }
    
  });
  

module.exports = pool;