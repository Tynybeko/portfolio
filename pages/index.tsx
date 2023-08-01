import { useTranslation } from 'react-i18next';
import useLocalStorage from '../public/language/use-localstorage';




const Home = () => {
    const { t } = useTranslation();
    const [language, setLanguage] = useLocalStorage('language', 'ru');

    return (
        <section id='home'>
            <h2>{t('home_title')}</h2>
            <h1>Главная</h1>
        </section>
    )
}

export default Home