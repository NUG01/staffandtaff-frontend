import { useRouter } from "next/router";
import Header from '../header';
import Footer from '../footer';
import Head from "next/head";


export default function Job() {
    const router = useRouter();
    console.log(router)
    const step = router.query.step;

    return (
        <>
            <Head>
                <title>About</title>
            </Head>

            <Header active=""/>

            <main>
                {step}
            </main>

            <Footer />
        </>
    );
}