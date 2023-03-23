import Header from '@/pages/header';
import Footer from '@/pages/footer';
import Head from 'next/head';
import styles from '@/styles/privacy/privacy.module.css'

export default function Privacy({isLogged, user, logout}) {
    return (
        <>
            <Head>
                <title>Politique de Confidentialité</title>
            </Head>

            <Header isLogged={isLogged} user={user} active="privacy"/>

            <main className={styles.main}>
                <h1 className={styles.mainHeader}>Politique de Confidentialité</h1>

                <div className={styles.section}>
                    <h1 className={styles.sectionHeader}>PRINCIPE</h1>
                    <div className={styles.sectionContent}>
                        La présente déclaration énonce notre politique de confidentialité, autrement dit le traitement des données à caractère personnel recueillies par l'intermédiaire de notre site Web ou de nos services en ligne, ou plus généralement, dans le cadre des prestations que nous fournissons.
                    </div>
                </div>

                <div className={styles.section}>
                    <h1 className={styles.sectionHeader}>Comment collectons-nous vos données?</h1>
                    <div className={styles.sectionContent}>
                    Nous collectons vos données directement auprès de vous ou les recevons de la part de tiers, par ex. d’entreprises liées à nous, d’autorités, de conseillers, de nos prestataires de services ou de sources accessibles au public.
                    <br/>
                    <br/>
                    Nous collectons vos données directement auprès de vous ou les recevons de la part de tiers, par ex. d’entreprises liées à nous, d’autorités, de conseillers, de nos prestataires de services ou de sources accessibles au public.
                    <br/>
                    <br/>
                    Nous collectons vos données directement auprès de vous ou les recevons de la part de tiers, par ex. d’entreprises liées à nous, d’autorités, de conseillers, de nos prestataires de services ou de sources accessibles au public.
                    </div>
                </div>

                

                <div className={styles.section}>
                    <h1 className={styles.sectionHeader}>Ouverture d’un compte utilisateur</h1>
                    <div className={styles.sectionContent}>
                    Votre inscription ainsi que la création d’un compte utilisateur peuvent être requis pour utiliser des services personnalisés ou accéder à des espaces protégés, ou pour traiter des demandes et gérer vos abonnements. À cette fin, vous devrez saisir certaines données à caractère personnel.
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
