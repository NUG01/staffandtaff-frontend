import Header from '@/pages/header';
import Footer from '@/pages/footer';
import Head from 'next/head';
import styles from '@/styles/tips/tips.module.css'
import { useRef } from 'react';
import Link from 'next/link';

export default function Tips({isLogged, user, logout, search}) {
  const form = useRef()
  const input = useRef()

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
          heading: "What is the platform for? asda",
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

      let tipsKeys = Object.keys(tipsData)
      let tipsValues = Object.values(tipsData)
  
      let searchedDataCategories = []
      let searchedData = []

      function submitForm(e){
          e.preventDefault()
          if(input.current.value.length > 0) form.current.submit()
      }

      if(search) {
        tipsKeys.forEach((key, keyIndex) =>{
            let newArr = []
            tipsValues[keyIndex].forEach(value =>{
                if(value.heading.toLowerCase().includes(search.toLowerCase()) || value.content.toLowerCase().includes(search.toLowerCase())) {
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
      displayData = tipsKeys.map((item, mainIndex) => {
          return(
            <div key={mainIndex} className={styles.tipsContainer}>
            <div key={mainIndex} className={styles.tipsParent}>
                <h1>{item}</h1>
                <div className={styles.tipsRow}>
                    {tipsValues[mainIndex].map((item, index) =>{
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
                                        { item.content.length > 150 ? <span className="viewMore">... <p>Voir plus</p></span> : ''}
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
            </div>
          )
      })
    }else{
        displayData = searchedDataCategories.map((item, mainIndex) => {
            return(
              <div key={mainIndex} className={styles.tipsContainer}>
                  <div className={styles.tipsParent}>
                      <h1>{item}</h1>
                      <div className={styles.tipsRow}>
                          {searchedData[mainIndex].map((item, index) =>{
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
                                              { item.content.length > 150 ? <span className="viewMore">... <p>Voir plus</p></span> : ''}
                                          </div>
                                      </div>
                                  </Link>
                              )
                          })}
                      </div>
                  </div>
              </div>
            )
        })
    }


    if(displayData.length === 0){
      return(
        <>
            <Head>
                <title>Conseils</title>
            </Head>

            <Header isLogged={isLogged} user={user} logout={logout} active="faq"/>

            <main className={styles.main}>
                <h1 className={styles.mainHeader}>Foire Aux Questions</h1>
                <h2 className={styles.intro}>Avez-vous des questions ? Nous sommes là pour vous répondre.</h2>
                <form action="" className={styles.faqForm} ref={form}>
                    <i className={`fa-solid fa-magnifying-glass ${styles.glass}`}></i>
                    <input type="text" name="search" placeholder="Recherche" required ref={input} defaultValue={search != false ? search : ''}/>
                    <i className={`fa-solid fa-arrow-right ${styles.arrowRight}`} onClick={(e)=>{submitForm(e)}}></i>
                </form>

                <div className={styles.noResults}>
                    <img src="/no-results-character.png" alt="" />
                    <h3>Désolé, nous n'avons pas trouvé de résultats correspondant à <br/>“{search}”.</h3>
                </div>

                <div className={styles.searchTips}>
                    <h3>CONSEILS POUR LA RECHERCHE</h3>
                    <ul>
                        <li>Vérifiez l'orthographe et réessayez;</li>
                        <li>Essayez un mot différent mais similaire;</li>
                        <li>Utilisez des mots simples;</li>
                        <li>Essayez de rechercher dans les catégories.</li>
                    </ul>
                </div>

                <div className={styles.recentTips}>
                    [ Recent tips will be here ]
                </div>
            </main>

            <Footer />
        </>
      )

    }

    return (
        <>
            <Head>
                <title>Conseils</title>
            </Head>

            <Header isLogged={isLogged} user={user} logout={logout} active="tips"/>

            <main className={styles.main}>
                <h1 className={styles.mainHeader}>Conseils de la part de Staff&Taff</h1>
                <h2 className={styles.intro}>Nos professionnels partagent des conseils utiles.</h2>
                <form action="" className={styles.faqForm} ref={form}>
                    <i className={`fa-solid fa-magnifying-glass ${styles.glass}`}></i>
                    <input type="text" name="search" placeholder="Recherche" required ref={input}/>
                    <i className={`fa-solid fa-arrow-right ${styles.arrowRight}`} onClick={(e)=>{submitForm(e)}}></i>
                </form>
                    {
                        displayData
                    }
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