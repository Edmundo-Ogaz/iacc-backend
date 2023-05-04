const BadRequest = require('../errors/BadRequest')
const careerRepository = require('../repositories/careerRepository')

async function findAll(req, res, next) {
  try {
    console.debug(`careerController findAll`)
    const resp = await careerRepository.findAll()
    console.debug(`careerController findAll response`, resp)
    res.json(resp);
  } catch(e) {
    console.error(`careerController findAll error`, e)
    next(e)
  }
}

module.exports = { findAll };