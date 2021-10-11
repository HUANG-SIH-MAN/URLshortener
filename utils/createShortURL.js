// //新版程式碼1(嘗試進行重複變數驗證，使用async/await) (未完成：TypeError: createShortURL is not a function)
// const URL = require('../models/URL')
// function createGarbled () {
//     const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
//     const upperCaseLetters = lowerCaseLetters.toUpperCase()
//     const number = '0123456789'
//     const allWord = [...lowerCaseLetters, ...upperCaseLetters, ...number]
//     let result = ''
//     for (let i = 0 ; i < 5 ; i++) {
//         result += allWord[Math.floor(Math.random() * allWord.length)]
//     }
//     return result
// }

// module.exports = (async function createShortURL () {
//     let ShortURL = createGarbled()
//     let checkShortURL = await URL.findOne({ shortURL: ShortURL }).select('shortURL').lean()
//     if (!checkShortURL) {
//         return ShortURL
//     } else {
//         return await createShortURL()
//     }
// }) ()


//新版程式碼(嘗試進行重複變數驗證) (未完成：Error: Cannot find module '../../models/URL')
// const URL = require('../../models/URL')
// function createGarbled () {
//     const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
//     const upperCaseLetters = lowerCaseLetters.toUpperCase()
//     const number = '0123456789'
//     const allWord = [...lowerCaseLetters, ...upperCaseLetters, ...number]
//     let result = ''
//     for (let i = 0 ; i < 5 ; i++) {
//         result += allWord[Math.floor(Math.random() * allWord.length)]
//     }
//     return result
// }

// async function createShortURL () {
//     let ShortURL = createGarbled()
//     let checkShortURL = await URL.findOne({ shortURL: ShortURL }).select('shortURL').lean()
//     if (!checkShortURL) {
//         return ShortURL
//     } else {
//         return await createShortURL()
//     }
// }

// module.exports.createShortURL = createShortURL



//新版程式碼2(嘗試進行重複變數驗證，使用Promise) (未完成：)
// const URL = require('../models/URL')
// function createGarbled () {
//     const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
//     const upperCaseLetters = lowerCaseLetters.toUpperCase()
//     const number = '0123456789'
//     const allWord = [...lowerCaseLetters, ...upperCaseLetters, ...number]
//     let result = ''
//     for (let i = 0 ; i < 5 ; i++) {
//         result += allWord[Math.floor(Math.random() * allWord.length)]
//     }
//     return result
// }

// const createShortURL = new Promise((resolve, reject) => {
//     let ShortURL = createGarbled()
//     let checkShortURL = URL.findOne({ shortURL: ShortURL }).select('shortURL').lean()
//     if (!checkShortURL) {
//         return resolve(ShortURL)
//     } else {
//         return createShortURL()
//     }
// })
// module.exports = createShortURL


// //原本的程式碼(未進行重複亂數驗證)
function createShortURL () {
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const upperCaseLetters = lowerCaseLetters.toUpperCase()
    const number = '0123456789'
    const allWord = [...lowerCaseLetters, ...upperCaseLetters, ...number]
    let result = ''
    for (let i = 0 ; i < 5 ; i++) {
        result += allWord[Math.floor(Math.random() * allWord.length)]
    }
    return result
}
module.exports = createShortURL