const faunadb = require('faunadb')
const q = faunadb.query

const client = new faunadb.Client({
  secret: process.env.FAUNADB,
})

function findAll() {
  console.debug(`studentRepository studentReposity findAll`)
  return client.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('student'))),
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
    console.error('studentRepository studentReposity error', error)
    throw new Error(error)
  })
}

async function create(student) {
  try {
    console.log('studentRepository create', student)
    const response = await client.query(
      q.Create(
        q.Collection('student'),
          {
            data: {
              rut: student.rut,
              name: student.name,
              phoneNumber: student.phoneNumber,
              email: student.email,
              createdAt: q.Now()
            },
          },
        )
      )
      console.log('studentRepository create response', response)
      return response.data
  } catch(e) {
    console.error('studentRepository error', e)
    throw new Error(e.message)
  }
}

module.exports = { findAll, create }