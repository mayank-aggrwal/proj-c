const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')

const app = express()

// Connection to database
connectDB()

app.use(cors())
app.use(express.json({ extended: false }))

app.use('/', require('./routes/meme'))

const PORT = process.env.PORT || 8081

app.listen(PORT, (req, res) => console.log(`Server is up and running at PORT ${PORT}`))