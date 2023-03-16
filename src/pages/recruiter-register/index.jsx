"use client"

import { useEffect, useState } from 'react';
import Head from 'next/head'
import styles from '@/styles/register/register.module.css'
import Header from '@/pages/header';
import Footer from '@/pages/footer';
import Wizard from '@/components/registerComponents/WizardSteps';
import RegisterForm from '@/components/registerComponents/RegistrationForm';
import EmailVerification from '@/components/registerComponents/EmailVerification';
import RecruiterFlow from '@/components/registerComponents/recruiter/RecruiterFlow';
import PostJob from '@/components/registerComponents/recruiter/PostJob'
import Plans from '@/components/registerComponents/Plans.jsx';
import Stripe from '@/pages/stripe';
import Router from 'next/router';

export default function recruiterRegister({isLogged, user, login, logout, register}){
    const [step, setStep] = useState(1)
    const [showPlans, setShowPlans] = useState(false)
    const [showStripe, setShowStripe] = useState(false)

    const galleryPictures = []

    const [data, setData] = useState(
        {
            establishmentName: '',
            establishmentOwner: '',  
            establishmentLogo: '',
            establishmentType: '',
            establishmentCountry: '',
            establishmentCity: '',
            establishmentEmployeeNumber: '',
            establishmentDescription: '',
            establishmentSocials: {
                website: '',
                instagram: '',
                linkedin: '',
                facebook: '',
                twitter: '',
                pinterest: '',
                youtube: '',
                tiktok: ''
            },
            establishmentGallery: [],

        })

    const maxSteps = 3

    useEffect(()=>{
        if(step === 1){
            isLogged === 1 ? setStep(2) : setStep(1)
        }
    })

    function nextStep(stepNum){
        console.log(data)

        let validated = true
        
        document.querySelectorAll('.required-record').forEach(inp => {

            if(inp.value === '') {
                inp.classList.add('inputError')
                validated = false

            }
        })

        if(validated) setStep(stepNum)
    }

    return(
        <>
            <Head>
                <title>Recruiter register</title>
            </Head>

            <Header isLogged={isLogged} user={user} logout={logout} active="register"/>

            <main className={styles.mainWrapper}>
                <Wizard styles={styles} step={step} maxSteps={maxSteps} showStripe={showStripe}/>

                {isLogged === 0 && (
                    <>
                        <RegisterForm className={step != 1 ? styles.hideSection : ''} isLogged={isLogged} user={user} register={register} type="recruiter" setStep={setStep}/>

                        <EmailVerification className={step != 1.5 ? styles.hideSection : ''} styles={styles} step={step} setStep={setStep}/>
                    </>
                )}

                {isLogged === 1 && (
                    <>

                        <RecruiterFlow className={step != 2 ? styles.hideSection : ''} styles={styles} step={step} setStep={setStep} data={data} galleryPictures={galleryPictures}
        
                            nextButton={
                                <div className={styles.nextButton} onClick={()=> {nextStep(3)}}>
                                    suivant
                                    <i className="fa-solid fa-chevron-right"></i>
                                </div>
                            }
        
                        />
                        
        
                        <PostJob className={step != 3 || showPlans || showStripe ? styles.hideSection : ''} styles={styles} step={step} setStep={setStep} data={data}
        
                            nextButton={
                                <div className={styles.nextButton} onClick={()=> {setShowPlans(true); scrollTo(0, 0)}}>
                                    suivant
                                    <i className="fa-solid fa-chevron-right"></i>
                                </div>
                            }
        
                        />
        
                        <Plans className={!showPlans || showStripe ? styles.hideSection : ''} inheritedStyles={styles} step={step} setStep={setStep} setShowStripe={setShowStripe} setShowPlans={setShowPlans} />
        
                        <Stripe className={!showStripe || showPlans ? styles.hideSection : ''} inheritedStyles={styles} step={step} setShowPlans={setShowPlans} setShowStripe={setShowStripe}/>
                    </>
                )}

            </main>
            
            <Footer />
        </>
    )

}