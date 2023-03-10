import Header from '../header';
import Footer from '../footer';
import Head from 'next/head';
import styles from '../../styles/faq/faq.module.css'

export default function Faq() {

    let faqData = {
      "Category 1":[
        {
          heading: "What is the platform for?",
          content: "It is agreed that the client wishes to market a new platform allowing recruiters and candidates in the restaurant and hotel sector to register and offer their job offers online or to apply for a job offer. Thus, it will be possible for candidates to search on the platform for a specific job offer according to pre-defined criteria and to apply for it."
        },
        {
          heading: "What is the platform for?",
          content: "It is agreed that the client wishes to market a new platform allowing recruiters and candidates in the restaurant and hotel sector to register and offer their job offers online or to apply for a job offer. Thus, it will be possible for candidates to search on the platform for a specific job offer according to pre-defined criteria and to apply for it."
        }
      ],
  
      "Category 2":[
        {
          heading: "What is the platform for?",
          content: "It is agreed that the client wishes to market a new platform allowing recruiters and candidates in the restaurant and hotel sector to register and offer their job offers online or to apply for a job offer. Thus, it will be possible for candidates to search on the platform for a specific job offer according to pre-defined criteria and to apply for it."
        },
        {
          heading: "What is the platform for?",
          content: "It is agreed that the client wishes to market a new platform allowing recruiters and candidates in the restaurant and hotel sector to register and offer their job offers online or to apply for a job offer. Thus, it will be possible for candidates to search on the platform for a specific job offer according to pre-defined criteria and to apply for it."
        }
      ]
    }

    let faqKeys = Object.keys(faqData)
    let faqValues = Object.values(faqData)

    const toggleAccordion = (mainIndex, index)=>{
        document.querySelectorAll('.expandAccordionParent')[mainIndex]
        .querySelectorAll('.expandAccordion')[index]
        .classList.toggle('openAccordion')
    }
    
    return (
        <>
            <Head>
                <title>F.A.Q</title>
            </Head>

            <Header active="faq"/>

            <main className={styles.main}>
                <h1 className={styles.mainHeader}>Frequently Asked Questions</h1>
                <h2 className={styles.intro}>Do you have questions? We’re here to help.</h2>
                <form action="" className={styles.faqForm}>
                    <i className={`fa-solid fa-magnifying-glass ${styles.glass}`}></i>
                    <input type="text" name="search" placeholder="Search" required />
                    <i className={`fa-solid fa-arrow-right ${styles.arrowRight}`}></i>
                </form>

                <div className={styles.accordionContainer}>
                    {
                        faqKeys.map((item, mainIndex) => {
                            return(
                                <div key={mainIndex} className={`expandAccordionParent ${styles.accordionParent}`}>
                                    <h1>{item}</h1>
                                    {faqValues[mainIndex].map((item, index) =>{
                                        return(
                                            <div key={index} className={`expandAccordion ${styles.accordion}`}>
                                                <h1 className={styles.header} onClick={()=> toggleAccordion(mainIndex, index)}>
                                                    {item.heading}
                                                </h1>
                                                <div className={styles.content}>
                                                    {item.content}
                                                </div>
                                            </div>
                                        )
                                    })}
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
