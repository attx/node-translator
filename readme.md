# node-translator

> Translate a string to 104 lanuages through the Google Translator API

[![npm badge][2]][1]

Using the [Google Translator](https://cloud.google.com/translate) API.

## Get started
```
npm install node-translator --save
```

## Usage
```
const translator = require('./node-translator')

translator.set('<GOOGLE_API_KEY>')

let text = 'The old brown fox is lazy now." // text to translate
translator.translate({
  text: text,
}).then((result) => {
  console.log(result)
})
```

Google Translator API Access required: [cloud.google.com/translate](https://cloud.google.com/translate)
```
// ./config.json
{
  "API_KEY": "<GOOGLE_API_KEY>"
}
```

## Result Format
```
{
  'af': { code: 'af', language: 'Afrikaans', translatedText: '..' },
  'sq': { code: 'sq', language: 'Albanian', translatedText: '..' },
  'am': { code: 'am', language: 'Amharic', translatedText: '..' },
  // ...
}
```

[1]: https://npmjs.org/package/node-translator
[2]: https://nodei.co/npm/node-translator.png?downloads=true&stars=true
