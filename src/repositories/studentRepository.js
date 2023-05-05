const db = require('./db')
const BadRequest = require('../errors/BadRequest')
const util = require('../utils')

async function findAll() {
  console.debug(`studentRepository findAll`)
  try {
    const rows = await db.all("SELECT * FROM student")
    console.debug("studentRepository findAll response", rows)
    return rows;
  } catch(e) {
    console.error("studentRepository findAll error", e);
    return e
  }
}

async function findById(id) {
  console.debug(`studentRepository findById`, id)
  if (isNaN(id)) {
    throw new BadRequest('BAD_REQUEST')
  }
  try {
    const row = await db.get(`SELECT * FROM student WHERE id = ${id}`)
    console.debug("studentRepository findById response", row)
    return row;
  } catch(e) {
    console.error("studentRepository findById error", e);
    return e
  }
}

async function findByRut(rut) {
  console.debug(`studentRepository findByRut`, rut)
  if (!rut || !util.validateRut(rut)) {
    throw new BadRequest('BAD_REQUEST')
  }
  try {
    const row = await db.get(`SELECT * FROM student WHERE rut = ${rut}`)
    console.debug("studentRepository findByRut response", row)
    return row;
  } catch(e) {
    console.error("studentRepository findByRut error", e);
    return e
  }
}

async function create(student) {
  console.debug(`studentRepository create`, student)
  if (!student.rut || !util.validateRut(student.rut) || !student.name || student.name.trim() === '' || 
    !student.phoneNumber || !student.email || !util.validateEmail(student.email)) {
    throw new BadRequest('BAD_REQUEST')
  }
  try {
    const SQL = `INSERT INTO student(id, rut, name, phoneNumber, email) VALUES (?, ?, ?, ?, ?)`;
    const params = [
      null,
      student.rut,
      student.name,
      student.phoneNumber,
      student.email
    ]
    const row = await db.run(SQL, params)
    console.debug("studentRepository create response", row)
    return row;
  } catch(e) {
    console.error("studentRepository create error", e);
    return e
  }
}

async function edit(student) {
  console.debug(`studentRepository edit`, student)
  try {
    let sql = [`UPDATE student SET`]
    let params = []

    if (student.rut) {
      sql.push('rut = ?,')
      params.push(student.rut)
    }
    if (student.name) {
      sql.push('name = ?,')
      params.push(student.name)
    }
    if (student.phoneNumber) {
      sql.push('phoneNumber = ?,')
      params.push(student.phoneNumber)
    }
    if (student.email) {
      sql.push('email = ?,')
      params.push(student.email)
    }

    sql = sql.join(" ")
    sql = sql[sql.length - 1] === ',' ? sql.slice(0, sql.length - 1) : sql

    sql = sql + ' WHERE id = ?'
    params.push(student.id)

    console.debug("studentRepository edit sql", sql.toString());
    const row = await db.run(sql, params)
    console.debug("studentRepository edit response", row)
    return row;
  } catch(e) {
    console.error("studentRepository edit error", e);
    return e
  }
}

async function remove(id) {
  console.debug(`studentRepository remove`, id)
  if (isNaN(id)) {
    throw new BadRequest('BAD_REQUEST')
  }
  try {
    const SQL = `DELETE FROM student WHERE id = ?`;
    const params = [parseInt(id)]
    const row = await db.run(SQL, params)
    console.debug("studentRepository remove response", row)
    return row;
  } catch(e) {
    console.error("studentRepository remove error", e);
    return e
  }
}

module.exports = { findAll, findById, findByRut, create, edit, remove }