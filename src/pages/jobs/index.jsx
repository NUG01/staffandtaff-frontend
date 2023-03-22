import Banner from '@/components/jobsComponents/Banner';
import JobList from '@/components/jobsComponents/JobList'
import GeneralInformation from '@/components/jobsComponents/generalInformation'
import Header from '@/pages/header';
import Footer from '@/pages/footer';
import Head from 'next/head';
import TipsList from '@/components/TipsList';
import CountryJobs from '@/components/jobsComponents/CountryJobs';
import {countries} from '@/components/countries';
import styles from '@/styles/homepage/homepage.module.css'
import axios from '@/lib/axios';
import { useAjax } from '@/hooks/ajax';


export default function Jobs({jobDataList, isLogged, user, logout}) {

  console.log(jobDataList)

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

    return (
        <>
            <Head>
                <title>Emplois</title>
            </Head>

            <Header isLogged={isLogged} user={user} logout={logout} active="job"/>

            <Banner />
              
            <h1 className={styles.jobListHeading}>Trouver un emploi</h1>

            <JobList data={jobDataList}/>

            <GeneralInformation />

            <TipsList data={tipsData} isHeader={true}/>
            
            <CountryJobs data={countries}/>

            <Footer className="noMargin"/>
        </>
    );
}

export async function getServerSideProps(context){
    const {getData} = useAjax()

    var jobData = []

    if(context.query.search){
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${context.query.search}`)
        const sData = await response.json()
        jobData.push(sData)
    }else{
        // await getData('/api/v1/jobs', (res)=>{
        //   jobData = res.data
        //   jobData.push(res.data)
        //   console.log(jobData)
        // })
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
        const sData = await response.json()
        jobData = sData
    }

    return{
        props: {
            jobDataList: jobData,
        }
    }
}