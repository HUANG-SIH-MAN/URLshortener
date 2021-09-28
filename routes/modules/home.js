const express = require('express')
const router = express.Router()
const createShortURL = require('../../public/javascript/createShortURL')

const URL = require('../../models/URL')

router.get('/', (req, res) => {
    res.render('index')
})

router.post('/result', (req, res) => { 
    URL.findOne({ orignURL: req.body.URL })
    .lean()
    .select('shortURL')
    .then((newURL) => {
        let shortURL = ''
            if (!newURL) {
                shortURL = createShortURL()
                URL.create({
                    orignURL: req.body.URL, 
                    shortURL: shortURL,
                })
            } else {
                shortURL = newURL.shortURL
            }
        return res.render('result', { shortURL: `http://localhost:3000/${ shortURL }` })
    })
    .catch(error => console.log(error))
})

router.get('/:shortURL', (req, res) => {
    URL.findOne({ shortURL: req.params.shortURL})
    .select('orignURL')
    .lean()
    .then((URL)=> res.redirect(`${URL.orignURL}`))
    .catch(error => console.log(error))
})

module.exports = router