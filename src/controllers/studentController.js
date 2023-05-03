const BadRequest = require('../errors/BadRequest')
const studentRepository = require('../repositories/studentRepository')
const util = require('../utils')

async function findAll(req, res, next) {
  try {
    console.debug(`studentController findAll`)
    const resp = await studentRepository.findAll()
    console.debug(`findAll response`, resp)
    res.json(resp);
  } catch(e) {
    console.error(`studentController findAll error`, e)
    next(e)
  }
}

async function findById(req, res, next) {
  try {
    const id = req.params.id;
    console.debug(`studentController findById`)
    if (isNaN(id)) {
      throw new BadRequest('BAD_REQUEST')
    }

    const resp = await studentRepository.findById(id)
    console.debug(`studentController findById response`, resp)
    res.json(resp);
  } catch(e) {
    console.error(`studentController findById error`, e)
    next(e)
  }
}

async function create(req, res, next) {
  try {
    console.debug(`studentController create`, req.body)
    const { rut, name, phoneNumber, email } = {...req.body}

    if (!rut || !util.validateRut(rut)) {
      throw new BadRequest('BAD_REQUEST')
    }
    if (!name || name.trim() === '') {
      throw new BadRequest('BAD_REQUEST')
    }
    if (!phoneNumber) {
      throw new BadRequest('BAD_REQUEST')
    }
    if (email && !util.validateEmail(email)) {
      throw new BadRequest('BAD_REQUEST')
    }

    const resp = await studentRepository.create({ rut, name, phoneNumber, email })
    console.debug(`studentController create response`, resp)
    res.json(resp);
  } catch(e) {
    console.error(`studentController create error`, e)
    next(e)
  }
}

module.exports = { findAll, findById, create };