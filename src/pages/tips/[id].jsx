import { useRouter } from "next/router";
import Router from "next/router";
import styles from '../../styles/recovery/recovery.module.css'
import { useState } from "react";
import Header from '../header';
import Footer from '../footer';
import Head from "next/head";
import Link from "next/link";

export default function Tip({isLogged, user}){
    const router = useRouter();
    const id = router.query.id;

    return(
        <>
            <Head>
                <title>Email verification</title>
            </Head>

            <Header isLogged={isLogged} user={user} active="tips"/>

            <main>
                {id}
            </main>
            
            <Footer />
        </>
    )

}