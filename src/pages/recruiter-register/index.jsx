import { useState } from 'react';
import Head from 'next/head'
import styles from '@/styles/register/register.module.css'
import Header from '@/pages/header';
import Footer from '@/pages/footer';
import Wizard from '@/components/registerComponents/WizardSteps';
import RegisterForm from '@/components/registerComponents/RegistrationForm';
import EmailVerification from '@/components/registerComponents/EmailVerification';
import RecruiterFlow from '@/components/registerComponents/RecruiterFlow';
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
                {/* {step === 1 &&(
                    <RegisterForm isLogged={isLogged} user={user} register={register} type="recruiter" setStep={setStep}/>
                )}
                {step === 1.5 &&(
                    <EmailVerification styles={styles} step={step} setStep={setStep}/>
                )}
                {step === 2 &&(
                    <RecruiterFlow styles={styles} step={step} setStep={setStep}

                        nextButton={
                            <div className={styles.nextButton} onClick={()=> setStep(3)}>
                                suivant
                                <i class="fa-solid fa-chevron-right"></i>
                            </div>
                        }

                    />
                )} */}
                <Plans/>
            </main>
            
            <Footer />
        </>
    )

}