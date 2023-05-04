const BadRequest = require('../errors/BadRequest')
const enrollmentRepository = require('../repositories/enrollmentRepository')

async function findAll(req, res, next) {
  try {
    console.debug(`enrollmentController findAll`)
    const resp = await enrollmentRepository.findAll()
    console.debug(`enrollmentController findAll response`, resp)
    res.json(resp);
  } catch(e) {
    console.error(`enrollmentController findAll error`, e)
    next(e)
  }
}

async function create(req, res, next) {
  try {
    console.debug(`enrollmentController create`, req.body)
    const { studentId, careerId } = {...req.body}

    if (!studentId || isNaN(parseInt(studentId))) {
      throw new BadRequest('BAD_REQUEST')
    }
    if (!careerId || isNaN(parseInt(careerId))) {
      throw new BadRequest('BAD_REQUEST')
    }

    const resp = await enrollmentRepository.create({ studentId, careerId })
    console.debug(`enrollmentController create response`, resp)
    res.json(resp);
  } catch(e) {
    console.error(`enrollmentController create error`, e)
    next(e)
  }
}

module.exports = { findAll, create };