import Header from '@/pages/header';
import Footer from '@/pages/footer';
import Head from 'next/head';

export default function Homepage({isLogged, user, logout}) {

    return (
        <>
        <Head>
            <title>Staff&Taff</title>
        </Head>

        <Header isLogged={isLogged} user={user} active="home"/>

        <Footer />
        </>
    );
}
