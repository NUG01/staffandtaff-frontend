import Header from '../header';
import Footer from '../footer';
import Head from 'next/head';
import styles from '../../styles/privacy/privacy.module.css'

export default function Privacy({isLogged, user}) {
    return (
        <>
            <Head>
                <title>Privacy</title>
            </Head>

            <Header isLogged={isLogged} user={user} active="privacy"/>

            <main className={styles.main}>
                <h1 className={styles.mainHeader}>Privacy Policy</h1>

                <div className={styles.section}>
                    <h1 className={styles.sectionHeader}>Security and Safety</h1>
                    <div className={styles.sectionContent}>
                        It is agreed that the client wishes to market a new platform allowing
                        recruiters and candidates in the restaurant and hotel sector to register and offer their job offers
                        online or to apply for a job offer. Thus, it will be possible for candidates to search on the platform
                        for a specific job offer according to pre-defined criteria and to apply for it.
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
