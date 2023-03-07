import Banner from '../../components/jobsComponents/banner';
import Header from '../header';
import Footer from '../footer';
import Head from 'next/head';

export default function Jobs() {
    return (
        <>
            <Head>
                <title>Jobs</title>
            </Head>

            <Header active="job"/>

            <Banner />

            <main>
                
            </main>

            <Footer />
        </>
    );
}
