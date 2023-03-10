import Banner from '../../components/jobsComponents/banner';
import { useState, useEffect } from 'react';
import Header from '../header';
import Footer from '../footer';
import Head from 'next/head';
import Temp from '../../components/Temp'

export default function Jobs({jobDataList}) {
    
    return (
        <>
            <Head>
                <title>Jobs</title>
            </Head>
            <Temp></Temp>
        </>
    );
}