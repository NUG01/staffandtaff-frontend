import Header from '../header';
import Footer from '../footer';
import Head from 'next/head';

export default function Tips() {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>

            <Header active="tips"/>

            <main>
                Tips
            </main>
            
            <Footer />
        </>
    );
}
