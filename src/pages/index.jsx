import Header from '@/pages/header';
import Footer from '@/pages/footer';
import Head from 'next/head';
import Jobs from '@/pages/jobs/index';
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/router';

export default function Homepage({isLogged, user, logout}) {
    const router = useRouter()

    router.replace('/jobs')

    return (
        <>
        <Head>
            <title>Staff&Taff</title>
        </Head>

        <Header isLogged={isLogged} user={user} logout={logout} active="home"/>

        <Footer />
        </>
    );
}
