const db = require('./db')
const BadRequest = require('../errors/BadRequest')

async function findAll() {
  console.debug(`enrollmentRepository findAll`)
  try {
    let rows = await db.all(`SELECT * FROM enrollment`)
    console.debug("enrollmentRepository findAll response", rows)
    return rows;
  } catch(e) {
    console.error("enrollmentRepository findAll error", e);
    return e
  }
}

async function findByStudenId(id) {
  console.debug(`enrollmentRepository findByStudenId`, id)
  if (isNaN(id)) {
    throw new BadRequest('BAD_REQUEST')
  }
  try {
    const row = await db.get(`SELECT * FROM enrollment WHERE student_id = ${id}`)
    console.debug("enrollmentRepository findByStudenId response", row)
    return row;
  } catch(e) {
    console.error("enrollmentRepository findByStudenId error", e);
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

module.exports = { findAll, findByStudenId, create }