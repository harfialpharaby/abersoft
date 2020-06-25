require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', routes)

app.listen(port, () => console.log(`Server starts on ${port}`))