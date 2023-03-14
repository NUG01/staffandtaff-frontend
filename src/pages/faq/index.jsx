import Header from '@/pages/header';
import Footer from '@/pages/footer';
import Head from 'next/head';
import styles from '@/styles/faq/faq.module.css'
import { useRef } from 'react';
import Link from 'next/link';

export default function Faq({isLogged, user, logout, search}) {

    const parent = useRef()
    const form = useRef()
    const input = useRef()

    let faqData = {
      "Category 1":[
        {
          heading: "Do aliens really exist?",
          content: "It is agreed that the client wishes to market a new platform allowing recruiters and candidates in the restaurant and hotel sector to register and offer their job offers online or to apply for a job offer. Thus, it will be possible for candidates to search on the platform for a specific job offer according to pre-defined criteria and to apply for it."
        },
        {
          heading: "How to contact aliens?",
          content: "It is agreed that the client wishes to market a new platform allowing recruiters and candidates in the restaurant and hotel sector to register and offer their job offers online or to apply for a job offer. Thus, it will be possible for candidates to search on the platform for a specific job offer according to pre-defined criteria and to apply for it."
        },
        {
          heading: "How to learn alien sign language?",
          content: "It is agreed that the client wishes to market a new platform allowing recruiters and candidates in the restaurant and hotel sector to register and offer their job offers online or to apply for a job offer. Thus, it will be possible for candidates to search on the platform for a specific job offer according to pre-defined criteria and to apply for it."
        }
      ],
  
      "Category 2":[
        
        {
            heading: "How to apologize an alien for a mistaken sign?",
            content: "It is agreed that the client wishes to market a new platform allowing recruiters and candidates in the restaurant and hotel sector to register and offer their job offers online or to apply for a job offer. Thus, it will be possible for candidates to search on the platform for a specific job offer according to pre-defined criteria and to apply for it."
        },
        {
          heading: "How to run from an alien?",
          content: "It is agreed that the client wishes to market a new platform allowing recruiters and candidates in the restaurant and hotel sector to register and offer their job offers online or to apply for a job offer. Thus, it will be possible for candidates to search on the platform for a specific job offer according to pre-defined criteria and to apply for it."
        },
        {
          heading: "Where can i hide dead alien body?",
          content: "It is agreed that the client wishes to market a new platform allowing recruiters and candidates in the restaurant and hotel sector to register and offer their job offers online or to apply for a job offer. Thus, it will be possible for candidates to search on the platform for a specific job offer according to pre-defined criteria and to apply for it."
        },
        {
          heading: "How to really kill an alien if he or she or whatever can revive?",
          content: "It is agreed that the client wishes to market a new platform allowing recruiters and candidates in the restaurant and hotel sector to register and offer their job offers online or to apply for a job offer. Thus, it will be possible for candidates to search on the platform for a specific job offer according to pre-defined criteria and to apply for it."
        }
      ]
    }

    let faqKeys = Object.keys(faqData)
    let faqValues = Object.values(faqData)

    let searchedDataCategories = []
    let searchedData = []

    const toggleAccordion = (mainIndex, index)=>{
        document.querySelectorAll('.expandAccordionParent')[mainIndex]
        .querySelectorAll('.expandAccordion')[index]
        .classList.toggle('openAccordion')
    }

    function submitForm(e){
        e.preventDefault()
        if(input.current.value.length > 0) form.current.submit()
    }
    
    if(search) {
        faqKeys.forEach((key, keyIndex) =>{
            let newArr = []
            faqValues[keyIndex].forEach(value =>{
                if(value.heading.includes(search) || value.content.includes(search)) {
                    if(!searchedDataCategories.includes(key)) {
                        searchedDataCategories.push(key)
                    }
                    newArr.push(value)
                }
            })
            newArr.length > 0 ? searchedData.push(newArr) : ''
        })
    }

    let displayData



    if(!search){
        displayData = faqKeys.map((item, mainIndex) => {
            return(
                <div key={mainIndex} className={`expandAccordionParent ${styles.accordionParent}`}>
                    <h1>{item}</h1>
                    {faqValues[mainIndex].map((item, index) =>{
                        return(
                            <div key={index} className={`expandAccordion ${styles.accordion}`} ref={parent} >
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
    }else{
        displayData = searchedDataCategories.map((item, mainIndex) => {
            return(
                <div key={mainIndex} className={`expandAccordionParent ${styles.accordionParent}`}>
                    <h1>{item}</h1>
                    {searchedData[mainIndex].map((item, index) =>{
                        return(
                            <div key={index} className={`expandAccordion ${styles.accordion}`} ref={parent} >
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

    if(displayData.length === 0){
        return(
            <>
                <Head>
                    <title>F.A.Q</title>
                </Head>
    
                <Header isLogged={isLogged} user={user} logout={logout} active="faq"/>
    
                <main className={styles.main}>
                    <h1 className={styles.mainHeader}>Frequently Asked Questions</h1>
                    <h2 className={styles.intro}>Do you have questions? We’re here to help.</h2>
                    <form action="" className={styles.faqForm} ref={form}>
                        <i className={`fa-solid fa-magnifying-glass ${styles.glass}`}></i>
                        <input type="text" name="search" placeholder="Search" required ref={input} defaultValue={search != false ? search : ''}/>
                        <i className={`fa-solid fa-arrow-right ${styles.arrowRight}`} onClick={(e)=>{submitForm(e)}}></i>
                    </form>
    
                    <div className={styles.noResults}>
                        <img src="/no-results-character.png" alt="" />
                        <h3>Sorry, we couldn’t find any results matching <br/>“{search}”.</h3>
                    </div>

                    <div className={styles.searchTips}>
                        <h3>SEARCH TIPS</h3>
                        <ul>
                            <li>Check your spelling and try again;</li>
                            <li>Try a similar, but a different search term;</li>
                            <li>Keep your search term siple;</li>
                            <li>Try looking within categories</li>
                        </ul>
                    </div>

                    <div className={styles.sendRequest}>
                        <h3>Would you like to reach out?</h3>
                        <p>Send us your question and our support team will reply as soon as possible.</p>
                        <Link href="/about">Reach out now</Link>
                    </div>
                </main>
    
                <Footer />
            </>
        )
    }


    return (
        <>
            <Head>
                <title>F.A.Q</title>
            </Head>

            <Header isLogged={isLogged} user={user} logout={logout} active="faq"/>

            <main className={styles.main}>
                <h1 className={styles.mainHeader}>Frequently Asked Questions</h1>
                <h2 className={styles.intro}>Do you have questions? We’re here to help.</h2>
                <form action="" className={styles.faqForm} ref={form}>
                    <i className={`fa-solid fa-magnifying-glass ${styles.glass}`}></i>
                    <input type="text" name="search" placeholder="Search" required ref={input} defaultValue={search != false ? search : ''}/>
                    <i className={`fa-solid fa-arrow-right ${styles.arrowRight}`} onClick={(e)=>{submitForm(e)}}></i>
                </form>

                <div className={styles.accordionContainer}>
                    {
                        displayData
                    }
                </div>
            </main>

            <Footer />
        </>
    );
}

export async function getServerSideProps(context){

    if(context.query.search){
        return{
            props: {
                search: context.query.search
            }
        }
    }else{
        return{
            props: {
                search: false
            }
        }
    }

}