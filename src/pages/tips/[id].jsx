import { useRouter } from "next/router";
import Header from '../header';
import Footer from '../footer';
import Head from "next/head";

export default function Tip({isLogged, user, data}){

    return(
        <>
            <Head>
                <title>Email verification</title>
            </Head>

            <Header isLogged={isLogged} user={user} active="tips"/>

            <main>
                {data.title}
            </main>
            
            <Footer />
        </>
    )

}

export async function getServerSideProps(context){
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.query.id}`)
        const tipData = await response.json()

        return{
            props: {
                data: tipData
            }
        }
}