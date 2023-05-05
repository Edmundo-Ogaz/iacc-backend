const db = require('./db')

const SQL = `
  SELECT 
  e.id as id,
  s.id as studentId,
  s.name as studentName,
  c.id as careerId,
  c.name as careerName
  FROM enrollment e
  LEFT JOIN student s ON e.student_id = s.id
  LEFT JOIN career c  ON e.student_id = c.id
`

function findAll() {
  console.debug(`enrollmentRepository findAll`)
  return new Promise((resolve, reject) => {
    try {
      db.all(SQL, (err, rows) => {
        console.error("enrollmentRepository findAll response", rows);
        rows = rows.map(row => {
          return {
            id: row.id,
            student: {
              id: row.studentId,
              name: row.studentName
            },
            career: {
              id: row.careerId,
              name: row.careerName
            }}
        })
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
      return resolve({message: 'success'});
    });
  });
}

module.exports = { findAll, create }