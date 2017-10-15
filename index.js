'use strict'

const languageList = require('./lib/supported-languages')

let googleTranslate = null

module.exports.set = (key) => {
  googleTranslate = require('google-translate')(key)
}

let addTranslation = (arr, code, language, translatedText) => {
  arr.push({
    code: code,
    language: language,
    translatedText: translatedText
  })
}

module.exports.translate = ({text}) => {
  return new Promise((resolve, reject) => {
    let translations = []
    Object.keys(languageList).forEach((key) => {
      let value = languageList[key]
      googleTranslate.translate(text, key, (err, translation) => {
        addTranslation(translations, key, value, translation.translatedText)
        if (translations.length === Object.keys(languageList).length) {
          return resolve(translations)
        }
      })
    }, this)
  })
}