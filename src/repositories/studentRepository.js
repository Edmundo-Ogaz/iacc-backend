const db = require('./db')

function findAll() {
  console.debug(`studentRepository findAll`)
  return new Promise((resolve, reject) => {
    try {
      db.all("SELECT * FROM student", (err, rows) => {
        console.error("studentRepository findAll response", rows);
      return resolve(rows);
      });
      
    } catch(e) {
      console.error("studentRepository findAll error", e);
      return reject(e.message);
    }
  });
}

function findById(id) {
  console.debug(`studentRepository findById`, id)
  return new Promise((resolve, reject) => {
    return db.get(`SELECT * FROM student WHERE id = ${id}`, function (err, res) {
      if (err) {
        console.error("studentRepository findById error", err);
        return reject(err.message);
      }
      console.error("studentRepository findById response", res);
      return resolve(res);
    });
  });
}

function findByRut(rut) {
  console.debug(`studentRepository findByRut`, rut)
  return new Promise((resolve, reject) => {
    return db.get(`SELECT * FROM student WHERE rut = ${rut}`, function (err, res) {
      if (err) {
        console.error("studentRepository findByRut error", err);
        return reject(err.message);
      }
      console.error("studentRepository findByRut response", res);
      return resolve(!res ? {} : res);
    });
  });
}

function create(student) {
  console.log('studentRepository create', student)
  return new Promise((resolve, reject) => {
    const SQL = `INSERT INTO student(id, rut, name, phoneNumber, email) VALUES (?, ?, ?, ?, ?)`;
    const params = [
      null,
      student.rut,
      student.name,
      student.phoneNumber,
      student.email
    ]
    return db.run(SQL, params, function (err, res) {
      if (err) {
        console.error("studentRepository create error", err);
        return reject(err.message);
      }
      console.error("studentRepository create response", res);
      return resolve({message: 'success'});
    });
  });
}

function edit(student) {
  console.log('studentRepository edit', student)
  return new Promise((resolve, reject) => {

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

    return db.run(sql.toString(), params, function (err, res) {
      if (err) {
        console.error("studentRepository edit error", err);
        return reject(err.message);
      }
      console.error("studentRepository edit response", res);
      return resolve({message: 'success'});
    });
  });
}

function remove(id) {
  console.log('studentRepository remove', id)
  return new Promise((resolve, reject) => {
    if (isNaN(parseInt(id))) {
      resolve(new Error('BAD_REQUEST'))
    }
    const SQL = `DELETE FROM student WHERE id = ?`;
    const param = [parseInt(id)]
    return db.run(SQL, param, function (err, res) {
      if (err) {
        console.error("studentRepository remove error", err);
        return reject(err.message);
      }
      console.error("studentRepository remove response", res);
      return resolve({message: 'success'});
    });
  });
}

module.exports = { findAll, findById, findByRut, create, edit, remove }