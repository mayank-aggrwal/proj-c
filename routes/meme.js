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
        const memes = await Meme.find().sort({$natural:-1}).limit(100);
        // console.log(typeof(memes))
        // if (memes) {
        //     console.log(memes)
        //     res.json(memes)
        // } else {
        //     return res.status(404).json(`Memes not found`)
        // }
        res.json(memes)
    } catch (err) {
        console.log(err)
        const errors = {
            message: 'Server error'
        }
        res.status(500).json({ errors })
    }
})

// GET /memes/<id>
router.get('/memes/:id', async (req, res) => {
    try {
        const id = req.params.id
        // const meme = await Meme.findById(id)
        let meme = undefined
        console.log('0')
        try {
            meme = await Meme.findById(id)
            console.log('1')
        } catch (err) {
            console.log('2')
            if (err.name == 'CastError') {
                console.log(err)
                const errors = {
                    message: 'Meme ID not found'
                }
                return res.status(404).json({ errors })
            } else {
                throw err
            }
            
        }
        console.log('3')
        // const meme = await Meme.findOne({ '_id': id })
        if (meme) {
            resJson = {
                id: meme._id,
                name: meme.name,
                url: meme.url,
                caption: meme.caption,
                date: meme.date
            }
            console.log('4')
            res.json(resJson)
        } else {
            console.log('5')
            const errors = {
                message: 'Meme ID not found'
            }
            return res.status(404).json({ errors })
        }
    } catch (err) {
        console.log(err)
        console.log('6')
        const errors = {
            message: 'Server error'
        }
        res.status(500).json({ errors })
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

// PATCH /memes/<id>
router.patch('/memes/:id', async (req, res) => {
    try {

        const id = req.params.id
        let meme = undefined
        console.log('0')
        try {
            meme = await Meme.findById(id)
            console.log('1')
        } catch (err) {
            console.log('2')
            if (err.name == 'CastError') {
                console.log(err)
                const errors = {
                    message: 'Meme ID not found'
                }
                return res.status(404).json({ errors })
            } else {
                throw err
            }
            
        }
        console.log('3')
        if (meme) {
            if ('url' in req.body) {
                meme['url'] = req.body['url']
            }
            if ('caption' in req.body) {
                meme['caption'] = req.body['caption']
            }
            console.log(meme)
            await meme.save()
            const status = {
                code: '204'
            }
            res.status(204).json({ status })
        } else {
            const errors = {
                message: 'Meme ID not found'
            }
            return res.status(404).json({ errors })
        }
    } catch (err) {
        console.log(err)
        const errors = {
            message: 'Server error'
        }
        res.status(500).json({ errors })
    }
    
})

module.exports = router