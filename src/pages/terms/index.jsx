import Header from '../header';
import Footer from '../footer';
import Head from 'next/head';

export default function Terms({isLogged, user}) {
    return (
        <>
            <Head>
                <title>Terms & Conditions</title>
            </Head>

            <Header isLogged={isLogged} user={user} active="terms"/>

            <main>
                Terms
            </main>

            <Footer />
        </>
    );
}
