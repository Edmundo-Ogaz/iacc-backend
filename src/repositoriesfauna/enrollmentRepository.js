const faunadb = require('faunadb')
const q = faunadb.query

const client = new faunadb.Client({
  secret: process.env.FAUNADB,
})

async function create(enrollment) {
  try {
    console.log('enrollmentRepository create', enrollment)

    const studentRef = await client.query(q.Select(["ref"], q.Get(q.Ref(q.Collection('student'), enrollment.student_id))))
    const careerRef = await client.query(q.Select(["ref"], q.Get(q.Ref(q.Collection('career'), enrollment.career_id))))

    const response = await client.query(
      q.Create(
        q.Collection('enrollment'),
          {
            data: {
              student: studentRef,
              career: careerRef,
              createdAt: q.Now()
            },
          },
        )
      )
      console.log('enrollmentRepository create response', response)
      return response.data
  } catch(e) {
    console.error('enrollmentRepository error', e)
    throw new Error(e.message)
  }
}

module.exports = { create }