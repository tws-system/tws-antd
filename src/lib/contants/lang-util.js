import locale from '../locales'

export const getLangFromLocalStorage = () => {
  return window.localStorage.getItem('tws-lang') || 'zh'
}

export const convertContent = (content) => {
  const lang = getLangFromLocalStorage()
  return getLangMessage(lang)[content] || content
}

const getLangMessage = (lang) => {
  return locale[lang].intlMessage
}
