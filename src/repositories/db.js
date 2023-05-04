const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/iacc.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the iacc database.');
  });
  
module.exports = db