import Banner from '@/components/jobsComponents/Banner'
import JobList from '@/components/jobsComponents/JobList'
import GeneralInformation from '@/components/jobsComponents/generalInformation'
import Header from '@/pages/header'
import Footer from '@/pages/footer'
import Head from 'next/head'
import TipsList from '@/components/TipsList'
import CountryJobs from '@/components/jobsComponents/CountryJobs'
import { countries } from '@/components/countries'
import styles from '@/styles/homepage/homepage.module.css'

export default function Jobs({ jobDataList, isLogged, user, logout }, props) {
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

            <Header isLogged={isLogged} user={user} active="job" />

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

export async function getServerSideProps(context) {
    let data

    if (context.resolvedUrl.includes('/jobs?search=')) {
        const response = await fetch(
            process.env.NEXT_PUBLIC_BACKEND_URL +
                '/api/v1' +
                context.resolvedUrl,
        )
        data = await response.json()
    } else {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/jobs`,
        )
        data = await response.json()
    }

    if (data.data) {
        return {
            props: {
                jobDataList: data.data,
            },
        }
    } else {
        return {
            props: {
                jobDataList: data,
            },
        }
    }
}
