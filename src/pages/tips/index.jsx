import Header from '@/pages/header';
import Footer from '@/pages/footer';
import Head from 'next/head';
import styles from '@/styles/tips/tips.module.css'
import TipsList from '@/components/TipsList';

export default function Tips({isLogged, user, logout}) {

    let tipsData = {
        "Category 1":[
          {
            id: 1,
            date: "13.03.2023",
            heading: "What is the platform for?",
            content: "It is agreed that the client wishes to market a new platform allowing recruiters and candidates in the restaurant and hotel sector to register and offer their job offers online or to apply for a job offer. Thus, it will be possible for candidates to search on the platform for a specific job offer according to pre-defined criteria and to apply for it."
          },
          {
            id: 2,
            date: "13.03.2023",
            heading: "What is the platform for?",
            content: "It is agreed that the client wishes to market a new platform allowing recruiters and candidates in the restaurant and hotel sector to register and offer their job offers online or to apply for a job offer. Thus, it will be possible for candidates to search on the platform for a specific job offer according to pre-defined criteria and to apply for it."
          },
          {
            id: 3,
            date: "13.03.2023",
            heading: "What is the platform for?",
            content: "It is agreed that the client wishes to market a new platform allowing recruiters and candidates in the restaurant and hotel sector to register and offer their job offers online or to apply for a job offer. Thus, it will be possible for candidates to search on the platform for a specific job offer according to pre-defined criteria and to apply for it."
          },
          {
            id: 4,
            date: "13.03.2023",
            heading: "What is the platform for?",
            content: "It is agreed that the client wishes to market a new platform allowing recruiters and candidates in the restaurant and hotel sector to register and offer their job offers online or to apply for a job offer. Thus, it will be possible for candidates to search on the platform for a specific job offer according to pre-defined criteria and to apply for it."
          },
        ],
    
        "Category 2":[
          {
            id: 5,
            date: "13.03.2023",
            heading: "What is the platform for?",
            content: "It is agreed that the client wishes to market a new platform allowing recruiters and candidates in the restaurant and hotel sector to register and offer their job offers online or to apply for a job offer. Thus, it will be possible for candidates to search on the platform for a specific job offer according to pre-defined criteria and to apply for it."
          },
          {
            id: 6,
            date: "13.03.2023",
            heading: "What is the platform for?",
            content: "It is agreed that the client wishes to market a new platform allowing recruiters and candidates in the restaurant and hotel sector to register and offer their job offers online or to apply for a job offer. Thus, it will be possible for candidates to search on the platform for a specific job offer according to pre-defined criteria and to apply for it."
          }
        ]
      }

    return (
        <>
            <Head>
                <title>Tips</title>
            </Head>

            <Header isLogged={isLogged} user={user} logout={logout} active="tips"/>

            <main className={styles.main}>
                <h1 className={styles.mainHeader}>Tips from Staff&Taff</h1>
                <h2 className={styles.intro}>The professionals from our team are sharing useful tips.</h2>
                <form action="" className={styles.faqForm}>
                    <i className={`fa-solid fa-magnifying-glass ${styles.glass}`}></i>
                    <input type="text" name="search" placeholder="Search" required />
                    <i className={`fa-solid fa-arrow-right ${styles.arrowRight}`}></i>
                </form>
                <TipsList data={tipsData} isHeader={false}/> 
            </main>
            <Footer />
        </>
    );
}
