import { useTranslation } from 'react-i18next';
import useLocalStorage from '../public/language/use-localstorage';
import { useEffect } from 'react';
import styles from '../styles/home.module.scss'


const Home = () => {
    const { t } = useTranslation();
    const [language, setLanguage] = useLocalStorage('language', 'ru');
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setLanguage('ru')
        }
    }, []); //
    return (
        <section className={styles.home}>
            <div className="container">
                <img className={styles.myimg} src="./kosmonavt.png" alt="" />
                <h2>{t('home_title')}</h2>
            </div>

        </section>
    )
}

export default Home