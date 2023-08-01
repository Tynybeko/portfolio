import '../styles/global.scss';
import { I18nextProvider } from 'react-i18next';
import i18n from '../public/language/i18n';


export default function App({ Component, pageProps }) {
    return (
        <I18nextProvider i18n={i18n}>
            <Component {...pageProps} />
        </I18nextProvider>
    )
}