import Header from '@/pages/header';
import Footer from '@/pages/footer';
import Head from 'next/head';
import styles from '@/styles/tips/tips.module.css'
import Link from 'next/link';

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
  
      let tipKeys = Object.keys(tipsData)
      let tipValues = Object.values(tipsData)

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

                <div className={styles.tipsContainer}>
                    {
                        tipKeys.map((item, mainIndex) => {
                            return(
                                <div key={mainIndex} className={styles.tipsParent}>
                                    <h1>{item}</h1>
                                    <div className={styles.tipsRow}>
                                        {tipValues[mainIndex].map((item, index) =>{
                                            return(
                                                <Link href={`/tips/${item.id}`} key={index} className={styles.tip}>
                                                    <img src="/tip-template-img.png" alt="" />
                                                    <div className={styles.tipContent}>
                                                        <h1 className={styles.header}>
                                                            {item.heading}
                                                        </h1>
                                                        <p>{item.date}</p>
                                                        <div className={styles.content}>
                                                            {item.content.substring(0, 150)}
                                                            { item.content.length > 150 ? <span className="viewMore">... <p>View more</p></span> : ''}
                                                        </div>
                                                    </div>
                                                </Link>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </main>
            
            <Footer />
        </>
    );
}
