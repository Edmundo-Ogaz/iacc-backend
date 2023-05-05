const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/iacc.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the iacc database.');
  });

  function all(sql) {
    console.debug(`db all`)
    return new Promise((resolve, reject) => {
      try {
        db.all(sql, (err, rows) => {
        return resolve(rows);
        });
        
      } catch(e) {
        return reject(err.message);
      }
    });
  }

  function get(sql) {
    console.debug(`db get`)
    return new Promise((resolve, reject) => {
      return db.get(sql, function (err, res) {
        if (err) {
          return reject(err.message);
        }
        return resolve(!res ? {} : res);
      });
    });
  }

  function run(sql, params) {
    console.log('db run')
    return new Promise((resolve, reject) => {
      return db.run(sql, params, function (err, res) {
        if (err) {
          return reject(err.message);
        }
        return resolve({message: 'success'});
      });
    });
  }
  
module.exports = { all, get, run }