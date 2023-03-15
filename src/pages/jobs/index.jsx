import Banner from '@/components/jobsComponents/banner';
import JobList from '@/components/jobsComponents/jobList'
import GeneralInformation from '@/components/jobsComponents/generalInformation'
import Header from '@/pages/header';
import Footer from '@/pages/footer';
import Head from 'next/head';
import TipsList from '@/components/TipsList';
import CountryJobs from '@/components/jobsComponents/CountryJobs';
import {countries} from '@/components/countries';

export default function Jobs({jobDataList, isLogged, user, logout}) {

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
                <title>Jobs</title>
            </Head>

            <Header isLogged={isLogged} user={user} logout={logout} active="job"/>

            <Banner />

            <JobList data={jobDataList}/>

            <GeneralInformation />

            <TipsList data={tipsData} isHeader={true}/>
            <CountryJobs data={countries}/>
            <Footer />
        </>
    );
}

export async function getServerSideProps(context){
    
    let data = []

    if(context.query.search){
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.query.search}`)
        const sData = await response.json()
        data.push(sData)
    }else{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        data = await response.json()
    }

    return{
        props: {
            jobDataList: data
        }
    }
}