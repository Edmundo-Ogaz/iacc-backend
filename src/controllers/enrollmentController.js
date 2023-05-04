const BadRequest = require('../errors/BadRequest')
const enrollmentRepository = require('../repositories/enrollmentRepository')

async function create(req, res, next) {
  try {
    console.debug(`enrollmentController create`, req.body)
    const { student_id, career_id } = {...req.body}

    if (!student_id || isNaN(parseInt(student_id))) {
      throw new BadRequest('BAD_REQUEST')
    }
    if (!career_id || isNaN(parseInt(career_id))) {
      throw new BadRequest('BAD_REQUEST')
    }

    const resp = await enrollmentRepository.create({ student_id, career_id })
    console.debug(`enrollmentController create response`, resp)
    res.json(resp);
  } catch(e) {
    console.error(`enrollmentController create error`, e)
    next(e)
  }
}

module.exports = { create };