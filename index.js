const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json({ extended: false }))

app.get('/health', (req, res) => {
    res.send('API is up and running')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, (req, res) => console.log(`Server is up and running at PORT ${PORT}`))