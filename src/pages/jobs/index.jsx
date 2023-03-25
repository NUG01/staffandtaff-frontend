import Banner from '@/components/jobsComponents/Banner'
import JobList from '@/components/jobsComponents/JobList'
import GeneralInformation from '@/components/jobsComponents/GeneralInformation'
import Header from '@/pages/header'
import Footer from '@/pages/footer'
import Head from 'next/head'
import TipsList from '@/components/TipsList'
import CountryJobs from '@/components/jobsComponents/CountryJobs'
import { countries } from '@/components/countries'
import styles from '@/styles/homepage/homepage.module.css'

export default function Jobs({jobDataList, isLogged, user, logout}, props) {
import axios from '@/lib/axios';
import { useAjax } from '@/hooks/ajax';


export default function Jobs({ jobDataList, isLogged, user, logout }) {
    let tipsData = {
        'Category 1': [
            {
                id: 1,
                date: '13.03.2023',
                heading: 'What is the platform for?',
                content:
                    'It is agreed that the client wishes to market a new platform allowing recruiters and candidates in the restaurant and hotel sector to register and offer their job offers online or to apply for a job offer. Thus, it will be possible for candidates to search on the platform for a specific job offer according to pre-defined criteria and to apply for it.',
            },
            {
                id: 2,
                date: '13.03.2023',
                heading: 'What is the platform for?',
                content:
                    'It is agreed that the client wishes to market a new platform allowing recruiters and candidates in the restaurant and hotel sector to register and offer their job offers online or to apply for a job offer. Thus, it will be possible for candidates to search on the platform for a specific job offer according to pre-defined criteria and to apply for it.',
            },
            {
                id: 3,
                date: '13.03.2023',
                heading: 'What is the platform for?',
                content:
                    'It is agreed that the client wishes to market a new platform allowing recruiters and candidates in the restaurant and hotel sector to register and offer their job offers online or to apply for a job offer. Thus, it will be possible for candidates to search on the platform for a specific job offer according to pre-defined criteria and to apply for it.',
            },
            {
                id: 4,
                date: '13.03.2023',
                heading: 'What is the platform for?',
                content:
                    'It is agreed that the client wishes to market a new platform allowing recruiters and candidates in the restaurant and hotel sector to register and offer their job offers online or to apply for a job offer. Thus, it will be possible for candidates to search on the platform for a specific job offer according to pre-defined criteria and to apply for it.',
            },
        ],
    }

    return (
        <>
            <Head>
                <title>Emplois</title>
            </Head>

<<<<<<< HEAD
            <Header isLogged={isLogged} user={user} active="job"/>
=======
            <Header
                isLogged={isLogged}
                user={user}
                logout={logout}
                active="job"
            />
>>>>>>> da9eff3 (merge)

            <Banner />

            <h1 className={styles.jobListHeading}>Trouver un emploi</h1>

            <JobList data={jobDataList} />

            <GeneralInformation />

            <TipsList data={tipsData} isHeader={true} />

            <CountryJobs data={countries} />

            <Footer className="noMargin" />
        </>
    )
}

<<<<<<< HEAD
export async function getServerSideProps(context){
    let sData;

    if(context.query.search){
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${context.query.search}`)
        sData = await response.json()
    }else{
<<<<<<< HEAD
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/jobs`)
        sData = await response.json()
=======
        // await getData('/api/v1/jobs', (res)=>{
        //   jobData = res.data
        //   jobData.push(res.data)
        //   console.log(jobData)
        // })
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
        const sData = await response.json()
        jobData = sData
=======
export async function getServerSideProps(context) {
    let data = []

    if (context.query.search) {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${context.query.search}`,
        )
        const sData = await response.json()
        data.push(sData)
    } else {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts`,
        )
        data = await response.json()
>>>>>>> 2b74713 (merge)
>>>>>>> da9eff3 (merge)
    }

    return {
        props: {
<<<<<<< HEAD
            jobDataList: sData,
=======
<<<<<<< HEAD
            jobDataList: jobData,
>>>>>>> da9eff3 (merge)
        }
=======
            jobDataList: data,
        },
>>>>>>> 2b74713 (merge)
    }
}
