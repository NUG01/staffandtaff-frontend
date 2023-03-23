import Header from '@/pages/header';
import Footer from '@/pages/footer';
import Head from 'next/head';

export default function Terms({isLogged, user, logout}) {
    return (
        <>
            <Head>
                <title>Termes et Conditions</title>
            </Head>

            <Header isLogged={isLogged} user={user} active="terms"/>

            <main>
                Terms
            </main>

            <Footer />
        </>
    );
}
