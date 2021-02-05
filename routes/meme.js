const express = require('express')
const router = express.Router()

router.get('/health', function(req, res) {
    res.send('API is up and running')
})

router.get('/memes', async (req, res) => {
    res.send('Memes route')
})

router.get('/memes/:id', async (req, res) => {
    const id = req.params.id
    res.send(`You sent ${id}`)
})

router.post('/memes', async (req, res) => {
    res.send('Memes route')
})

module.exports = router