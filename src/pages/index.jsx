import Header from './header';
import Footer from './footer';
import Head from 'next/head';
import { useAuth } from '@/hooks/auth'

export default function Homepage() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
        <Head>
            <title>Staff&Taff</title>
        </Head>

        <Header active="home"/>

        <main>
            Homepage
        </main>

        <Footer />
        </>
    );
}
