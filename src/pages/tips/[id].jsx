import Header from '@/pages/header';
import Footer from '@/pages/footer';
import styles from "@/styles/tips/singleTip.module.css"
import Head from "next/head";

export default function Tip({isLogged, user, logout, data}){

    return(
        <>
            <Head>
                <title>{data.title}</title>
            </Head>

            <Header isLogged={isLogged} user={user} logout={logout} active=""/>

            <main className={styles.mainWrapper}>
                <div className={styles.banner} style={{backgroundImage: 'url("/tip-template-img.png")'}}></div>
                
                <h1>
                    {data.title}
                </h1>
                
                <div className={styles.content}>
                </div>
            </main>
            
            <Footer />
        </>
    )

}

export async function getServerSideProps(context){
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${context.query.id}`)
        const tipData = await response.json()

        return{
            props: {
                data: tipData
            }
        }
}