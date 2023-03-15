import { useState } from 'react';
import Head from 'next/head'
import styles from '@/styles/register/register.module.css'
import Header from '@/pages/header';
import Footer from '@/pages/footer';
import Wizard from '@/components/registerComponents/w';
import RegisterForm from '@/components/registerComponents/rf';

export default function seekerRegister({isLogged, user, login, logout, register}){
    const [step, setStep] = useState(1)
    const maxSteps = 5

    return(
        <>
            <Head>
                <title>Seeker register</title>
            </Head>

            <Header isLogged={isLogged} user={user} logout={logout} active="register"/>

            <main className={styles.mainWrapper}>
                <Wizard styles={styles} step={step} maxSteps={maxSteps} type="seeker"/>
                <RegisterForm isLogged={isLogged} user={user} register={register} type="seeker"/>
            </main>

            <Footer />
        </>
    )

}