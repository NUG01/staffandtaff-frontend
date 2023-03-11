import Header from '../header';
import Footer from '../footer';
import Head from 'next/head';

export default function Tips({isLogged, user}) {

    return (
        <>
            <Head>
                <title>About</title>
            </Head>

            <Header isLogged={isLogged} user={user} active="tips"/>

            <main>
                Tips
            </main>
            
            <Footer />
        </>
    );
}
