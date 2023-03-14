import Header from '@/pages/header';
import Footer from '@/pages/footer';
import Head from "next/head";
import styles from "@/styles/tips/singleTip.module.css"

export default function Tip({isLogged, user, logout, data}){

    console.log(styles)

    return(
        <>
            <Head>
                <title>{data.title}</title>
            </Head>

            <Header isLogged={isLogged} user={user} logout={logout} active="tips"/>

            <main className={styles.mainWrapper}>
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