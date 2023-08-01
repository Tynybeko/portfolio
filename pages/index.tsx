import { useTranslation } from 'react-i18next';





const Home = () => {
    const { t } = useTranslation();

    return (
        <section id='home'>
            <h2>{t('home_title')}</h2>
            <h1>Главная</h1>
        </section>
    )
}

export default Home