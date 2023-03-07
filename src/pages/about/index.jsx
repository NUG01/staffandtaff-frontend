import Header from '../header';
import Footer from '../footer';
import Head from 'next/head';

export default function About() {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>

            <Header active="about"/>
            
            <main>
                About
            </main>

            <Footer />
        </>
    );
}
