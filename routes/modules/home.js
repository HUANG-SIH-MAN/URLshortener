const express = require('express')
const router = express.Router()
const createShortURL = require('../../public/javascript/createShortURL')

const URL = require('../../models/URL')

router.get('/', (req, res) => {
    res.render('index')
})

router.post('/result', (req, res) => {
    const shortURL = createShortURL()
    URL.create({
        orignURL: req.body.URL, 
        shortURL: shortURL,
    })
    res.render('result', { shortURL: `http://localhost:3000/${shortURL}` })

})

router.get('/:shortURL', (req, res) => {
    URL.findOne({ shortURL: req.params.shortURL})
    .select('orignURL')
    .lean()
    .then((URL)=> res.redirect(`${URL.orignURL}`))
    .catch(error => console.log(error))
})

module.exports = router