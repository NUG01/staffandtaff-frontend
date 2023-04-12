"use client"

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import Header from '@/pages/header';
import Footer from '@/pages/footer';
import styles from '@/styles/password/password.module.css'
import Head from 'next/head';
import InputError from '@/components/InputError'
import { useAjax } from '@/hooks/ajax'
import Router from 'next/router';

const ForgotPassword = ({isLogged, user, query})=> {
    useEffect(()=>{
        if(query.token != undefined){
            Router.push(`/forgot-password/2?token=${query.token}&email=${query.email}`)
        }
    })
    
    const {sendData} = useAjax()
    const [sent, setSent] = useState()

    const [errors, setErrors] = useState([])

    const form = useRef()
    const emInput = useRef()

    const submitForm = event => {
        event.preventDefault()

        form.current.classList.add('disabledSection')
        emInput.current.blur()
        let email = emInput.current.value

        sendData('/api/v1/forgot-password', {email}, (res)=>{
            form.current.classList.remove('disabledSection')
            Router.push(`/forgot-password/1?email=${email}`)
        })
    }

    return (
        <>
            <Head>
                <title>RÉINITIALISER LE MOT DE PASSE</title>
            </Head>

            <Header isLogged={isLogged} user={user} active="login"/>

            <main className={styles.main}>
                <form className={styles.mainForm} ref={form} onSubmit={submitForm}>
                    <h1>RÉINITIALISER LE MOT DE PASSE</h1>
                    <p>
                    Saisissez l'adresse électronique associée à votre compte et nous vous enverrons un lien pour réinitialiser votre mot de passe.
                    </p>
                    <div className={styles.inputControl}>
                        <svg width="20" height="16" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z"
                                fill="#757575"/>
                        </svg>

                        <input ref={emInput} type="email" placeholder="exemple@staffandtaff.com" className={styles.singleInput} required name="email" />
                    </div>
                    <div className={styles.inputContainer}>
                        <InputError messages={errors.email} className="error-text" id={styles.errorText} />
                    </div>
                    <input type="submit" value="ENVOYER" className={styles.submitInput} />
                    <Link href="/login">Retourner à la page de connexion</Link>
                    <div className={styles.sentSuccessfully}>
                        {sent}
                    </div>
                </form>
            </main>
            
            <Footer />
        </>
    )
}

export default ForgotPassword


export async function getServerSideProps(context){
    return{
        props:{
            query: context.query
        }
    }
}