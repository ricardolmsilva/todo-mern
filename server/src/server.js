require('./configs/database')

const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.use('/api', require('./routes'))

app.listen(port, () => console.log(`BACKEND is running in port ${port}`))
