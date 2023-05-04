const db = require('./db')

function findAll() {
  console.debug(`careerRepository findAll`)
  return new Promise((resolve, reject) => {
    try {
      db.all("SELECT * FROM career", (err, rows) => {
        console.error("careerRepository findAll response", rows);
      return resolve(rows);
      });
      
    } catch(e) {
      console.error("careerRepository findAll error", err);
      return reject(err.message);
    }
  });
}

module.exports = { findAll }