const faunadb = require('faunadb')
const q = faunadb.query

const client = new faunadb.Client({
  secret: process.env.FAUNADB,
})

function findAll() {
  console.debug(`studentRepository findAll`)
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
    console.error('studentRepository error', error)
    throw new Error(error)
  })
}

async function findById(id) {
  console.debug('studentRepository findById', id)
  if (isNaN(id)) {
    throw new Error('BAD_REQUEST')
  }
  return client.query(
    q.Select(['data'], q.Get(
        q.Ref(q.Collection('student'), id)
      )
    )
  )
  .then(response => response)
  .catch((error) => {
    console.error('studentRepository findById error', error)
    throw new Error(error)
  })
}

function findByRut(rut) {
  console.debug('studentRepository findByRut', rut)
  return client.query(
    q.Get(
      q.Match(
        q.Ref('indexes/student_by_rut'),
        rut
      )
    )
  )
  .then( response => {
    return {id: response.ref.id, ...response.data}
  }).catch((e) => {
    console.error('studentRepository findByRut error', e)
    if (e.requestResult.statusCode === 404)
      return {}
    throw e
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

async function edit(student) {
  try {
    console.debug('studentRepository edit', student)

    let data = {}
    if (student.rut) {
      data.rut = student.rut
    }
    if (student.name) {
      data.name = student.name
    }
    if (student.phoneNumber) {
      data.phoneNumber = student.phoneNumber
    }
    if (student.email) {
      data.email = student.email
    }

    console.debug('studentRepository edit data', data)

    const response = await client.query(
      q.Update(
        q.Ref(q.Collection('student'), student.id),
        {
          data: {
            ...data,
            updatedAt: q.Now()
          }
        }
      )
    )
    console.debug('studentRepository edit response', response.data)
    return response.data
  } catch(e) {
    console.error('studentRepository edit error', e)
    throw new Error(e.message)
  }
}

async function remove(id) {
  console.debug('studentRepository remove', id)
  if (isNaN(parseInt(id))) {
    throw new Error('BAD_REQUEST')
  }
  return client.query(
    q.Delete(
      q.Ref(q.Collection('student'), id)
    )
  )
  .then(response => response)
  .catch((error) => {
    console.error('studentRepository remove error', error)
    throw new Error(error)
  })
}

module.exports = { findAll, findById, findByRut, create, edit, remove }