import Header from './header';
import Footer from './footer';
import Head from 'next/head';
import Jobs from './jobs/index';
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/router';

export default function Homepage({isLogged, user}) {
    const router = useRouter()

    router.replace('/jobs')

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
