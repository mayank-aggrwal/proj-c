const express = require('express')
const router = express.Router()

const Meme = require('../models/Meme')

// GET /health
router.get('/health', function(req, res) {
    res.send('API is up and running')
})

// GET /memes
router.get('/memes', async (req, res) => {
    try {
        const memes = await Meme.find().sort({$natural:-1}).limit(5);
        console.log(typeof(memes))
        if (memes) {
            console.log(memes)
            res.json(memes)
        } else {
            return res.status(404).json(`Memes not found`)
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(`Server error`);
    }
    // find().sort({$natural:-1}).limit(yourValue);
    // res.send('Memes route')
})

// GET /memes/<id>
router.get('/memes/:id', async (req, res) => {
    try {
        const id = req.params.id
        const meme = await Meme.findById(id)

        if (meme) {
            resJson = {
                id: meme._id,
                name: meme.name,
                url: meme.url,
                caption: meme.caption,
                date: meme.date
            }
            res.json(resJson)
        } else {
            return res.status(404).json(`Meme ID not found`)
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(`Server error`);
    }
    
})

// POST /memes
router.post('/memes', async (req, res) => {
    const { name, url, caption } = req.body
    try {

        meme = new Meme({
            name, 
            url, 
            caption,
            date: new Date()
        })
        await meme.save()
        res.json({ id: meme._id })

    } catch (err) {
        console.log(err)
        const errors = {
            message: 'Server error'
        }
        res.status(500).json({ errors })
    }
})

module.exports = router