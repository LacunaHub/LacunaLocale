const English = require('./translations/English/messages.json')
const Russian = require('./translations/Russian/messages.json')
const Ukrainian = require('./translations/Ukrainian/messages.json')
const Belarusian = require('./translations/Belarusian/messages.json')
const French = require('./translations/French/messages.json')

const messages = {
  en: English,
  ru: Russian,
  uk: Ukrainian,
  be: Belarusian,
  fr: French
}

const languages = [
  { name: 'English', code: 'en' },
  { name: 'Русский', code: 'ru' },
  { name: 'Українська', code: 'uk' },
  { name: 'Беларуская', code: 'be' },
  { name: 'Français', code: 'fr' }
]

module.exports = {
  messages,
  languages
}
