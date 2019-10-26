const express = require('express')
const app = express()

app.use('/users', require('./users'))
app.use('/todos', require('./todos'))
app.use('/auth', require('./auth'))

app.get('/', (req, res) => res.send('API RUNNING'))

module.exports = app