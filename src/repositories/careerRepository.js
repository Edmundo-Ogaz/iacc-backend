const db = require('./db')

async function findAll() {
  console.debug(`careerRepository findAll`)
  try {
    const rows = await db.all("SELECT * FROM career")
    console.error("careerRepository findAll response", rows)
    return rows;
  } catch(e) {
    console.error("careerRepository findAll error", e);
    return e
  }
}

module.exports = { findAll }