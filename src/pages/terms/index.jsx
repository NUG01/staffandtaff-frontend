import Header from '../header';
import Footer from '../footer';
import Head from 'next/head';

export default function Terms() {
    return (
        <>
            <Head>
                <title>Terms & Conditions</title>
            </Head>

            <Header active="terms"/>

            <main>
                Terms
            </main>

            <Footer />
        </>
    );
}
