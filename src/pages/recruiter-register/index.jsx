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
import useCheckRequired from '@/hooks/requiredInputs';
import { useRef } from 'react';

export default function recruiterRegister({isLogged, user, login, logout, register, industries}){
    const [step, setStep] = useState(1)
    const [showPlans, setShowPlans] = useState(false)
    const [showStripe, setShowStripe] = useState(false)
    const uploadedData = useRef({})

    let jobAjax = false

    const {sendMediaData, sendData, patchMediaData} = useAjax()

    const maxSteps = 3

    useEffect(()=>{
        if(step === 1){
            if(user && !user.data.verified) {
                setStep(1.5)
            }else{
                isLogged === 1 ? setStep(2) : setStep(1)
            }
        }
    })

    let completedSteps = [false, false, false, false]

    const galleryPictures = []

    const [companyData, setCompanyData] = useState({
        name: '',
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
        address: ''
    })

    const [jobData, setJobData] = useState({
        start_date: null,
        end_date: null,
        first: '',
        second: '',
        third: '',
        fourth: '',
        fifth: '',
        sixth: '',
        seventh: '',
        eighth: ''
    })
        
    function setNewData (key, value, arr){

        if(arr) {
            companyData[key].push(value)
            return
        }

        companyData[key] = value
    }
        
    function setNewJobData (key, value){
        jobAjax = false
        jobData[key] = value
    }

    async function sendEstablishmentData(stepNum){
        const validated = useCheckRequired()

        if(validated) {
            document.body.classList.add('disabledSection')

            let formData = new FormData()
            Object.keys(companyData).forEach((item, index)=>{
                if(item == 'gallery') {
                    Object.values(companyData)[index].forEach(item => {
                        formData.append('file[]', item)
                    })
                }else{
                    formData.append(item, Object.values(companyData)[index])
                }
            })
            if(uploadedData.current.id) {
                formData.append('_method', 'PATCH')
                await sendMediaData(`/api/v1/establishment/update/${uploadedData.current.id}`, formData, (res)=> {
                    scrollTo(0, 0)
                    setStep(stepNum)
                    uploadedData.current = res.data.data
                    document.body.classList.remove('disabledSection')
                })
                return
            }else{
                await sendMediaData('/api/v1/establishment/store', formData, (res)=> {
                    scrollTo(0, 0)
                    setStep(stepNum)
                    console.log(res.data.data)
                    uploadedData.current = res.data.data
                    document.body.classList.remove('disabledSection')
                })
            }
                
        }else{
            scrollTo(0, 0)
        }
    }

    return(
        <>
            <Head>
                <title>Recruiter register</title>
            </Head>

            <Header isLogged={isLogged} user={user} active="register"/>

            <main className={styles.mainWrapper}>
                <Wizard styles={styles} step={step} maxSteps={maxSteps} showStripe={showStripe} completedSteps={completedSteps}/>

                {isLogged === 0 && (
                    <RegisterForm className={step != 1 ? styles.hideSection : ''} isLogged={isLogged} user={user} register={register} type="recruiter" setStep={setStep}/>
                )}

                {step == 1.5 && (
                    <>
                        <EmailVerification styles={styles} step={step} setStep={setStep}/>
                    </>
                )}

                {isLogged === 1 && user && user.data.verified && (
                    <>

                        <RecruiterFlow className={step != 2 ? styles.hideSection : ''} styles={styles} step={step} setStep={setStep} companyData={companyData} galleryPictures={galleryPictures} setNewData={setNewData} industries={industries}
        
                            nextButton={
                                <div className={styles.nextButton} onClick={()=> {sendEstablishmentData(3)}}>
                                    suivant
                                    <i className="fa-solid fa-chevron-right"></i>
                                </div>
                            }
        
                        />
                        
        
                        <PostJob className={step != 3 || showPlans || showStripe ? styles.hideSection : ''} styles={styles} step={step} setStep={setStep} companyData={uploadedData.current} jobData={jobData} setNewJobData={setNewJobData}
        
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

export async function getServerSideProps(){
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/industries`)
    let data = await response.json()
    console.log(data)

     return{
        props: {
            industries: data.data,
        }
    }
}