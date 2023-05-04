const db = require('./db')

function findAll() {
  console.debug(`enrollmentRepository findAll`)
  return new Promise((resolve, reject) => {
    try {
      db.all("SELECT * FROM enrollment", (err, rows) => {
        console.error("enrollmentRepository findAll response", rows);
      return resolve(rows);
      });
      
    } catch(e) {
      console.error("enrollmentRepository findAll error", err);
      return reject(err.message);
    }
  });
}

async function create(enrollment) {
  console.log('enrollmentRepository create', enrollment)
  return new Promise((resolve, reject) => {
    const SQL = `INSERT INTO enrollment(id, student_id, career_id) VALUES (?, ?, ?)`;
    const params = [
      null,
      enrollment.studentId,
      enrollment.careerId,
    ]
    return db.run(SQL, params, function (err, res) {
      if (err) {
        console.error("enrollmentRepository create error", err);
        return reject(err.message);
      }
      console.error("enrollmentRepository create response", res);
      return resolve(res);
    });
  });
}

module.exports = { findAll, create }