const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.post('/result', (req, res) => {
    res.render('result')
})

module.exports = router