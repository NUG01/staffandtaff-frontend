import { useRouter } from "next/router";
import Header from '../header';
import Footer from '../footer';
import Head from "next/head";


export default function Job() {
    const router = useRouter();
    const {params = []} = router.query;

    return (
        <>
            <Head>
                <title>About</title>
            </Head>

            <Header active="jobs"/>

            <main>
                {params[0]}
                <br />
                {params[1]}
            </main>

            <Footer />
        </>
    );
}