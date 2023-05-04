const faunadb = require('faunadb')
const q = faunadb.query

const client = new faunadb.Client({
  secret: process.env.FAUNADB,
})

function findAll() {
  console.debug(`careerRepository findAll`)
  return client.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('career'))),
      q.Lambda(
        'X',
        {
          id: q.Select(['ref', 'id'], q.Get(q.Var('X'))),
          name: q.Select(['data', 'name'], q.Get(q.Var('X')))
        }
      )
    )
  )
  .then(response => response.data)
  .catch((error) => {
    console.error('studentRepository error', error)
    throw new Error(error)
  })
}

module.exports = { findAll }