import { useState } from 'react';
import Head from 'next/head'
import styles from '@/styles/register/register.module.css'
import Header from '@/pages/header';
import Footer from '@/pages/footer';
import Wizard from '@/components/registerComponents/wizardSteps';
import RegisterForm from '@/components/registerComponents/registerForm';
import Plans from '@/components/registerComponents/plans';

export default function recruiterRegister({isLogged, user, login, logout, register}){
    const [step, setStep] = useState(1)
    const maxSteps = 3

    return(
        <>
            <Head>
                <title>Recruiter register</title>
            </Head>

            <Header isLogged={isLogged} user={user} logout={logout} active="register"/>

            <main className={styles.mainWrapper}>
                <Wizard styles={styles} step={step} maxSteps={maxSteps}/>
                {/* <RegisterForm isLogged={isLogged} user={user} register={register} type="recruiter"/> */}
                <Plans/>
            </main>
            
            <Footer />
        </>
    )

}