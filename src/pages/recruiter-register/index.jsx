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
import { useAjax } from '@/hooks/ajax';

export default function recruiterRegister({isLogged, user, login, logout, register}){
    const [step, setStep] = useState(2)
    const [showPlans, setShowPlans] = useState(false)
    const [showStripe, setShowStripe] = useState(false)

    const {sendMediaData, sendData} = useAjax()

    let completedSteps = [false, false, false, false]

    const galleryPictures = []

    const [data, setData] = useState(
        {
            establishment_name: '',
            company_name: '',  
            logo: '',
            industry: '',
            country: '',
            city: '',
            number_of_employees: '',
            description: '',
            website: '',
            instagram: '',
            linkedin: '',
            facebook: '',
            twitter: '',
            pinterest: '',
            youtube: '',
            tiktok: '',
            gallery: [],
        })

    const [jobData, setJobData] = useState(
        {
            establishment_name: '',
            company_name: '',  
            logo: '',
            industry: '',
            country: '',
            city: '',
            number_of_employees: '',
            description: '',
            website: '',
            instagram: '',
            linkedin: '',
            facebook: '',
            twitter: '',
            pinterest: '',
            youtube: '',
            tiktok: '',
            gallery: [],
        })

    const maxSteps = 3

    useEffect(()=>{
        if(step === 1){
            isLogged === 1 ? setStep(2) : setStep(1)
        }
    })

    function nextStep(stepNum){

        let validated = true
        
        document.querySelectorAll('.required-record').forEach(inp => {
            if(inp.value === '') {
                if(inp.type === 'file'){
                    inp.parentNode.classList.add('inputParentError')
                }else if(inp.tagName === 'TEXTAREA'){
                    inp.classList.add('input-error')
                    inp.parentNode.classList.add('input-error')
                }else if(inp.classList.contains('hidden-city-inp')){
                    if(inp.value === ''){
                        document.querySelector('.shown-city-inp').classList.add('input-error')
                    }
                }else{
                    inp.classList.add('input-error')
                }
                validated = false
            }
        })
        validated = true

        if(validated) {
            // scrollTo(0, 0)
            // setStep(stepNum)
        }

        let formData = new FormData()
        formData.append('establishment_name', data.establishment_name)
        formData.append('company_name', data.company_name)
        formData.append('logo', data.logo)
        formData.append('industry', data.industry)
        formData.append('country', data.country)
        formData.append('city', data.city)
        formData.append('number_of_employees', data.number_of_employees)
        formData.append('description', data.description)
        formData.append('website', data.website)
        formData.append('instagram', data.instagram)
        formData.append('linkedin', data.linkedin)
        formData.append('facebook', data.facebook)
        formData.append('twitter', data.twitter)
        formData.append('pinterest', data.pinterest)
        formData.append('youtube', data.youtube)
        formData.append('tiktok', data.tiktok)

        data.gallery.forEach(item => {
            formData.append('file[]', item)
        })

        sendMediaData('/api/v1/establishment/store', formData)
    }

    return(
        <>
            <Head>
                <title>Recruiter register</title>
            </Head>

            <Header isLogged={isLogged} user={user} logout={logout} active="register"/>

            <main className={styles.mainWrapper}>
                <Wizard styles={styles} step={step} maxSteps={maxSteps} showStripe={showStripe} completedSteps={completedSteps}/>

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
                        
        
                        <PostJob className={step != 3 || showPlans || showStripe ? styles.hideSection : ''} styles={styles} step={step} setStep={setStep} data={data} jobData={jobData}
        
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