import Banner from '../../components/jobsComponents/banner';
import JobList from '../../components/jobsComponents/jobList'
import GeneralInformation from '../../components/jobsComponents/generalInformation'
import { useState, useEffect } from 'react';
import Header from '../header';
import Footer from '../footer';
import Head from 'next/head';

export default function Jobs({jobDataList}) {
    return (
        <>
            <Head>
                <title>Jobs</title>
            </Head>

            <Header active="job"/>

            <Banner />

            <JobList data={jobDataList}/>

            <GeneralInformation />

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