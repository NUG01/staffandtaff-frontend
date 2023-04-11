import Header from '@/pages/header'
import Footer from '@/pages/footer'
import Head from 'next/head'
import styles from '@/styles/faq/faq.module.css'
import { useRef } from 'react'
import Link from 'next/link'

export default function Faq({ isLogged, user, logout, search, data }) {
    const parent = useRef()
    const form = useRef()
    const input = useRef()

    let faqData = {
        'Category 1': [
            {
                heading: 'Question? 1',
                content:
                    'It is agreed that the client wishes to market a new platform allowing recruiters and candidates in the restaurant and hotel sector to register and offer their job offers online or to apply for a job offer. Thus, it will be possible for candidates to search on the platform for a specific job offer according to pre-defined criteria and to apply for it.',
            },
            {
                heading: 'Question? 2',
                content:
                    'It is agreed that the client wishes to market a new platform allowing recruiters and candidates in the restaurant and hotel sector to register and offer their job offers online or to apply for a job offer. Thus, it will be possible for candidates to search on the platform for a specific job offer according to pre-defined criteria and to apply for it.',
            },
            {
                heading: 'Question? 3',
                content:
                    'It is agreed that the client wishes to market a new platform allowing recruiters and candidates in the restaurant and hotel sector to register and offer their job offers online or to apply for a job offer. Thus, it will be possible for candidates to search on the platform for a specific job offer according to pre-defined criteria and to apply for it.',
            },
        ],

        'Category 2': [
            {
                heading: 'Question? 4',
                content:
                    'It is agreed that the client wishes to market a new platform allowing recruiters and candidates in the restaurant and hotel sector to register and offer their job offers online or to apply for a job offer. Thus, it will be possible for candidates to search on the platform for a specific job offer according to pre-defined criteria and to apply for it.',
            },
            {
                heading: 'Question? 5',
                content:
                    'It is agreed that the client wishes to market a new platform allowing recruiters and candidates in the restaurant and hotel sector to register and offer their job offers online or to apply for a job offer. Thus, it will be possible for candidates to search on the platform for a specific job offer according to pre-defined criteria and to apply for it.',
            },
            {
                heading: 'Question? 6',
                content:
                    'It is agreed that the client wishes to market a new platform allowing recruiters and candidates in the restaurant and hotel sector to register and offer their job offers online or to apply for a job offer. Thus, it will be possible for candidates to search on the platform for a specific job offer according to pre-defined criteria and to apply for it.',
            },
            {
                heading: 'Question? 7',
                content:
                    'It is agreed that the client wishes to market a new platform allowing recruiters and candidates in the restaurant and hotel sector to register and offer their job offers online or to apply for a job offer. Thus, it will be possible for candidates to search on the platform for a specific job offer according to pre-defined criteria and to apply for it.',
            },
        ],
    }

    // faqData = data.faqs

    let faqKeys = Object.keys(faqData)
    let faqValues = Object.values(faqData)

    let searchedDataCategories = []
    let searchedData = []

    const toggleAccordion = (mainIndex, index) => {
        document
            .querySelectorAll('.expandAccordionParent')
            [mainIndex].querySelectorAll('.expandAccordion')
            [index].classList.toggle('openAccordion')
    }

    function submitForm(e) {
        e.preventDefault()
        if (input.current.value.length > 0) form.current.submit()
    }

    if (search) {
        faqKeys.forEach((key, keyIndex) => {
            let newArr = []
            faqValues[keyIndex].forEach(value => {
                if (
                    value.heading
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                    value.content.toLowerCase().includes(search.toLowerCase())
                ) {
                    if (!searchedDataCategories.includes(key)) {
                        searchedDataCategories.push(key)
                    }
                    newArr.push(value)
                }
            })
            newArr.length > 0 ? searchedData.push(newArr) : ''
        })
    }

    let displayData

    if (!search) {
        displayData = faqKeys.map((item, mainIndex) => {
            return (
                <div
                    key={mainIndex}
                    className={`expandAccordionParent ${styles.accordionParent}`}>
                    <h1>{item}</h1>
                    {faqValues[mainIndex].map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={`expandAccordion ${styles.accordion}`}
                                ref={parent}>
                                <h1
                                    className={styles.header}
                                    onClick={() =>
                                        toggleAccordion(mainIndex, index)
                                    }>
                                    {item.question}
                                </h1>
                                <div className={styles.content}>
                                    {item.answer}
                                </div>
                            </div>
                        )
                    })}
                </div>
            )
        })
    } else {
        displayData = searchedDataCategories.map((item, mainIndex) => {
            return (
                <div
                    key={mainIndex}
                    className={`expandAccordionParent ${styles.accordionParent}`}>
                    <h1>{item}</h1>
                    {searchedData[mainIndex].map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={`expandAccordion ${styles.accordion}`}
                                ref={parent}>
                                <h1
                                    className={styles.header}
                                    onClick={() =>
                                        toggleAccordion(mainIndex, index)
                                    }>
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

    if (displayData.length === 0) {
        return (
            <>
                <Head>
                    <title>F.A.Q</title>
                </Head>

                <Header isLogged={isLogged} user={user} active="faq" />

                <main className={styles.main}>
                    <h1 className={styles.mainHeader}>Foire Aux Questions</h1>
                    <h2 className={styles.intro}>
                        Avez-vous des questions ? Nous sommes là pour vous
                        répondre.
                    </h2>
                    <form action="" className={styles.faqForm} ref={form}>
                        <i
                            className={`fa-solid fa-magnifying-glass ${styles.glass}`}></i>
                        <input
                            type="text"
                            name="search"
                            placeholder="Recherche"
                            required
                            ref={input}
                            defaultValue={search != false ? search : ''}
                        />
                        <i
                            className={`fa-solid fa-arrow-right ${styles.arrowRight}`}
                            onClick={e => {
                                submitForm(e)
                            }}></i>
                    </form>

                    <div className={styles.noResults}>
                        <img src="/no-results-character.png" alt="" />
                        <h3>
                            Désolé, nous n'avons pas trouvé de résultats
                            correspondant à <br />“{search}”.
                        </h3>
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

                    <div className={styles.sendRequest}>
                        <h3>Vous souhaitez nous contacter ?</h3>
                        <p>
                            Envoyez-nous votre question et notre équipe vous
                            reviendra dans les plus brefs délais.
                        </p>
                        <Link href="/about">CONTACTEZ-NOUS</Link>
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

            <Header isLogged={isLogged} user={user} active="faq" />

            <main className={styles.main}>
                <h1 className={styles.mainHeader}>
                    Frequently Asked Questions
                </h1>
                <h2 className={styles.intro}>
                    Do you have questions? We’re here to help.
                </h2>
                <form action="" className={styles.faqForm} ref={form}>
                    <i
                        className={`fa-solid fa-magnifying-glass ${styles.glass}`}></i>
                    <input
                        type="text"
                        name="search"
                        placeholder="Rechercher"
                        required
                        ref={input}
                        defaultValue={search != false ? search : ''}
                    />
                    <i
                        className={`fa-solid fa-arrow-right ${styles.arrowRight}`}
                        onClick={e => {
                            submitForm(e)
                        }}></i>
                </form>

                <div className={styles.accordionContainer}>{displayData}</div>
            </main>

            <Footer />
        </>
    )
}

export async function getServerSideProps(context) {
    let data

    if (context.query.search) {
        console.log(context.query.search)
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/faq`,
        )
        data = await response.json()
        console.log(data)
        return {
            props: {
                search: context.query.search,
            },
        }
    } else {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/faq`,
        )
        data = await response.json()
        return {
            props: {
                search: false,
                data,
            },
        }
    }
}
