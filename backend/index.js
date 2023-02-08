const connectToMongo= require('./db');
const express = require('express')
var cors = require('cors')
connectToMongo();

const app = express()
// const port = process.env.PORT || 5000
const port = 5000;

app.use(express.json())
app.use(cors())

//Available Routes
app.use('/api/teacher', require('./routes/teacher.js'))
app.use('/api/subject', require('./routes/subject.js'))

//End point
app.get('/', (req, res) => {
  res.send('Hello Junaid!')
})


app.listen(port, () => {
  console.log(`Teachers'-Manager-backend listening at http://localhost:${port}`)
})