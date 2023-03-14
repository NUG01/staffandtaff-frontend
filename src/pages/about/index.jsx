import Header from '@/pages/header';
import Footer from '@/pages/footer';
import Head from 'next/head';
import styles from '@/styles/about/about.module.css'
import AboutText from '@/components/About us/AboutText';
import Form from '@/components/About us/Form';

export default function About({isLogged, user, logout}) {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <Header isLogged={isLogged} user={user} logout={logout} active="about"/>
            
            <main className={styles.main}>
                <AboutText />
                <div className={styles.vl}></div>
                <Form />
            </main>

            <Footer />
        </>
    );
}
