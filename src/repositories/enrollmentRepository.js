const db = require('./db')
const BadRequest = require('../errors/BadRequest')

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

async function findAll() {
  console.debug(`enrollmentRepository findAll`)
  try {
    let rows = await db.all(SQL)
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
    console.debug("enrollmentRepository findAll response", rows)
    return rows;
  } catch(e) {
    console.error("enrollmentRepository findAll error", e);
    return e
  }
}

async function create(enrollment) {
  console.debug(`enrollmentRepository create`, enrollment)
  if (!enrollment.studentId || isNaN(parseInt(enrollment.studentId)) || 
    !enrollment.careerId || isNaN(parseInt(enrollment.careerId))) {
    throw new BadRequest('BAD_REQUEST')
  }
  try {
    const SQL = `INSERT INTO enrollment(id, student_id, career_id) VALUES (?, ?, ?)`;
    const params = [
      null,
      enrollment.studentId,
      enrollment.careerId,
    ]
    const row = await db.run(SQL, params)
    console.debug("enrollmentRepository create response", row)
    return row;
  } catch(e) {
    console.error("enrollmentRepository create error", e);
    return e
  }
}

module.exports = { findAll, create }