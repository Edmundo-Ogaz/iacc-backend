const express = require("express");
//const cors = require("cors");
require('dotenv').config();

const studentController = require('./controllers/studentController')

const app = express();

app.use(express.json());
//app.use(cors());

app.get('/health', (req, res) => { res.json({message: "alive"}) });

app.get('/students', studentController.findAll)
app.post('/students', studentController.create)
app.get('/students/:id', studentController.findById)
// app.patch('/students/:id', studentController.edit)

app.use((err, req, res, next) => {
  res.status(err.code ? err.code : 500).send({ error: err.message });
})

module.exports = app;