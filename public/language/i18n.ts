import en from './en.json'
import ru from './ru.json'

import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'


const resources = {
    en: {
        translation: en,
    },
    ru: {
        translation: ru,
    }
}


i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('language')) : 'ru',
        fallbackLng: 'ru'
    })

export default i18n;