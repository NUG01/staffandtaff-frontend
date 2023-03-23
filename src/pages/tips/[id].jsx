import Header from '@/pages/header';
import Footer from '@/pages/footer';
import styles from "@/styles/tips/singleTip.module.css"
import TipsList from '@/components/TipsList';
import Head from "next/head";

export default function Tip({isLogged, user, logout, data}){

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
      }

    return(
        <>
            <Head>
                <title>{data.title}</title>
            </Head>

            <Header isLogged={isLogged} user={user} logout={logout} active=""/>

            <main className={`${styles.mainWrapper} ${styles.singleTipMainWrapper}`}>
                <div className={styles.banner} style={{backgroundImage: 'url("/tip-template-img.png")'}}>
                    <h1>
                        Titre du conseil
                    </h1>
                    <p className={styles.date}>
                        July 7, 2023
                    </p>
                </div>
                
                <div className={styles.content}>
                    <p className={styles.firstBlock}>
                    En 2022, ce n'est plus le style d'écriture du rédacteur web qui fait d'un article de blog, un bon article. C'est plutôt sa capacité à respecter les règles de l'écriture web et à comprendre les attentes du lecteur à qui il s'adresse. Parfois, il arrive qu'il soit compliqué d'allier plaisir de lecture et contraintes techniques, notamment si l'on souhaite s'attirer les faveurs de Google. Le rédacteur ou la rédactrice web doit alors jongler entre propos agréables à lire et phrases respectant les techniques de rédaction seo. <br />
                    Dans tous les cas, si vous vous demandez comment rédiger un article de blog, sachez qu'il y a des éléments qui doivent absolument se retrouver dans votre contenu. C'est notamment le cas du mot-clé (ou des mots-clés), du vocabulaire proche d'un point de vue sémantique, des liens, des images, de l'introduction... <br />
                    Il y a également des élements structurels et une certaine approche marketing à respecter : la présence d'une introduction et d'une conclusion, de mises en gras, d'une ou de plusieurs listes à puces... sans oublier que le contenu doit répondre à l'intention de recherche de l'internaute et être optimisé pour le référencement naturel...
                    </p>
                    
                    <p className={styles.secondBlock}>
                    <img src="/tip-template-img.png" alt="" />
                    En 2022, ce n'est plus le style d'écriture du rédacteur web qui fait d'un article de blog, un bon article. C'est plutôt sa capacité à respecter les règles de l'écriture web et à comprendre les attentes du lecteur à qui il s'adresse. Parfois, il arrive qu'il soit compliqué d'allier plaisir de lecture et contraintes techniques, notamment si l'on souhaite s'attirer les faveurs de Google. Le rédacteur ou la rédactrice web doit alors jongler entre propos agréables à lire et phrases respectant les techniques de rédaction seo. <br />
                    Dans tous les cas, si vous vous demandez comment rédiger un article de blog, sachez qu'il y a des éléments qui doivent absolument se retrouver dans votre contenu. C'est notamment le cas du mot-clé (ou des mots-clés), du vocabulaire proche d'un point de vue sémantique, des liens, des images, de l'introduction... <br />
                    Il y a également des élements structurels et une certaine approche marketing à respecter : la présence d'une introduction et d'une conclusion, de mises en gras, d'une ou de plusieurs listes à puces... sans oublier que le contenu doit répondre à l'intention de recherche de l'internaute et être optimisé pour le référencement naturel... <br />
                    En 2022, ce n'est plus le style d'écriture du rédacteur web qui fait d'un article de blog, un bon article. C'est plutôt sa capacité à respecter les règles de l'écriture web et à comprendre les attentes du lecteur à qui il s'adresse. Parfois, il arrive qu'il soit compliqué d'allier plaisir de lecture et contraintes techniques, notamment si l'on souhaite s'attirer les faveurs de Google. Le rédacteur ou la rédactrice web doit alors jongler entre propos agréables à lire et phrases respectant les techniques de rédaction seo. <br />
                    Dans tous les cas, si vous vous demandez comment rédiger un article de blog, sachez qu'il y a des éléments qui doivent absolument se retrouver dans votre contenu. C'est notamment le cas du mot-clé (ou des mots-clés), du vocabulaire proche d'un point de vue sémantique, des liens, des images, de l'introduction... <br />
                    Il y a également des élements structurels et une certaine approche marketing à respecter : la présence d'une introduction et d'une conclusion, de mises en gras, d'une ou de plusieurs listes à puces... sans oublier que le contenu doit répondre à l'intention de recherche de l'internaute et être optimisé pour le référencement naturel...
                    </p>
                </div>

                <TipsList data={tipsData} isHeader={true} singleTip={true} customHeader="Autres conseils de Staff&Taff"/>

            </main>
            
            <Footer className="noMargin"/>
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