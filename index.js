const English = require('./translations/English/messages.json')
const Russian = require('./translations/Russian/messages.json')
const Ukrainian = require('./translations/Ukrainian/messages.json')

const messages = {
  en: English,
  ru: Russian,
  uk: Ukrainian
}

const languages = [
  { name: 'English', code: 'en' },
  { name: 'Русский', code: 'ru' },
  { name: 'Українська', code: 'uk' }
]

module.exports = {
  messages,
  languages
}
