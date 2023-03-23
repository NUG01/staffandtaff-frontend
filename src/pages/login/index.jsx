"use client"

import InputError from '@/components/InputError'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'

import Header from '@/pages/header';
import Footer from '@/pages/footer';
import Head from 'next/head';
import styles from '@/styles/login/login.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthData } from '@/redux/userAuth';
import { useAjax } from '@/hooks/ajax'

const Login = ({isLogged, user})=> {
    const router = useRouter()
    const {sendData} = useAjax()
    const userAuthCheck = useSelector(state => state.userAuthData.value)
    
    const dispatch = useDispatch()

    if(isLogged === 1 && user){
        router.replace('/jobs')
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)
    const [passwordType, setType] = useState('password')
    const [mobilePreview, setMobilePreview] = useState('')

    const form = useRef()

    useEffect(() => {
        if (router.query.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.query.reset))
        } else {
            setStatus(null)
        }

        setMobilePreview(location.hash)
    })
    
    const changePasswordType = ()=>{
        passwordType === 'password' ? setType('text') : setType('password')
    }

    const [isValid,setIsValid] = useState(false)
    const [submited,setSubmited] = useState(false)
    function isValidEmail(email) {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      }

    function submitForm(e){
        e.preventDefault()
        setSubmited(true)
        form.current.classList.add('disabledSection')

        sendData('/api/v1/login', {email, password}, ()=>{

            dispatch(setAuthData(true))
            window.location.pathname = '/jobs';

        }, (error)=>{

            console.log(error)
            form.current.classList.remove('disabledSection')

        })
    }

    return (
        <>              
            <Head>
                <title>Connexion</title>
            </Head>

            <Header isLogged={isLogged} user={user} active="login" isMobile={mobilePreview == '#loginView' ? true : ''}/>

            <div className={styles.mainWrapper}>
                    <div className={`${styles.formHolder} ${mobilePreview == '#registerView' ? 'hideSection' : ''}`}>
                        <form ref={form} className={styles.formController} onSubmit={submitForm}>
                            <Link href="/jobs">
                                <img src="/logo-login.png" alt="" className={styles.mobileViewLogo} />
                            </Link>
                            <h3>CONNEXION</h3>
                            <div className={styles.inputControl}>
                                <svg width="20" height="16" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z"
                                        fill="#757575" />
                                </svg>

                                <input
                                 type="text" placeholder="example@staffandtaff.com" className={
                                    submited && !isValid ? styles.singleInputInvalid : styles.singleInput
                                    } required name="email" id='email' onChange={event =>{
                                    setIsValid(isValidEmail(event.target.value))
                                     setEmail(event.target.value)}} value={email}/>
                                
                            </div>
                            <div className={styles.inputControl}>
                                <svg width="16" height="21" viewBox="0 0 16 21" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8 16C6.89 16 6 15.1 6 14C6 12.89 6.89 12 8 12C8.53043 12 9.03914 12.2107 9.41421 12.5858C9.78929 12.9609 10 13.4696 10 14C10 14.5304 9.78929 15.0391 9.41421 15.4142C9.03914 15.7893 8.53043 16 8 16ZM14 19V9H2V19H14ZM14 7C14.5304 7 15.0391 7.21071 15.4142 7.58579C15.7893 7.96086 16 8.46957 16 9V19C16 19.5304 15.7893 20.0391 15.4142 20.4142C15.0391 20.7893 14.5304 21 14 21H2C0.89 21 0 20.1 0 19V9C0 7.89 0.89 7 2 7H3V5C3 3.67392 3.52678 2.40215 4.46447 1.46447C5.40215 0.526784 6.67392 0 8 0C8.65661 0 9.30679 0.129329 9.91342 0.380602C10.52 0.631876 11.0712 1.00017 11.5355 1.46447C11.9998 1.92876 12.3681 2.47995 12.6194 3.08658C12.8707 3.69321 13 4.34339 13 5V7H14ZM8 2C7.20435 2 6.44129 2.31607 5.87868 2.87868C5.31607 3.44129 5 4.20435 5 5V7H11V5C11 4.20435 10.6839 3.44129 10.1213 2.87868C9.55871 2.31607 8.79565 2 8 2Z"
                                        fill="#757575" />
                                </svg>


                                <input placeholder="Mot de passe" required className={styles.singleInput}  name="log-password" type={passwordType} autoComplete="current-password" onChange={event => setPassword(event.target.value)} value={password}/>

                                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" id={styles.hideUnhide} onClick={()=> changePasswordType()}>
                                    <path
                                        d="M1 1.27L2.28 0L19 16.72L17.73 18L14.65 14.92C13.5 15.3 12.28 15.5 11 15.5C6 15.5 1.73 12.39 0 8C0.69 6.24 1.79 4.69 3.19 3.46L1 1.27ZM11 5C11.7956 5 12.5587 5.31607 13.1213 5.87868C13.6839 6.44129 14 7.20435 14 8C14 8.35 13.94 8.69 13.83 9L10 5.17C10.31 5.06 10.65 5 11 5ZM11 0.5C16 0.5 20.27 3.61 22 8C21.18 10.08 19.79 11.88 18 13.19L16.58 11.76C17.94 10.82 19.06 9.54 19.82 8C18.17 4.64 14.76 2.5 11 2.5C9.91 2.5 8.84 2.68 7.84 3L6.3 1.47C7.74 0.85 9.33 0.5 11 0.5ZM2.18 8C3.83 11.36 7.24 13.5 11 13.5C11.69 13.5 12.37 13.43 13 13.29L10.72 11C9.29 10.85 8.15 9.71 8 8.28L4.6 4.87C3.61 5.72 2.78 6.78 2.18 8Z"
                                        fill="#757575" />
                                </svg>
                            </div>

                            <div className={styles.inputControl}>
                                <Link href="/forgot-password" className={styles.passwordRecovery}> Mot de passe oublié ? </Link>
                            </div>

                                <InputError messages={errors.email} className="error-text" />
                                <InputError messages={errors.password} className="error-text"/>

                            <div className={styles.inputControl}>
                                <input type="submit" value="CONNEXION" className={styles.submitInput} />
                            </div>

                        </form>
                    </div>
                    <div className={`${styles.regNow} ${mobilePreview == '#loginView' ? 'hideSection' : ''}`}>
                        <img src="/logo.png" alt="" />
                        <div className={styles.regBlock}>
                            <div className={styles.leftSide}>
                                <h3>
                                    JE SUIS UN RECRUTEUR
                                </h3>
                                <p>SInscrivez-vous gratuitement et trouvez les meilleurs talents pour votre équipe. Renforcez la notoriété de votre entreprise. Rendez le processus de recrutement efficace.</p>
                                <Link href="/recruiter-register">
                                INSCRIVEZ-VOUS EN TANT QUE RECRUTEUR <i className="fa-solid fa-arrow-up"></i>
                                </Link>
                            </div>
                            <div className={styles.rightSide}>
                                <h3>
                                    JE CHERCHE UN EMPLOI
                                </h3>
                                <p>Inscrivez-vous gratuitement et présentez-vous aux recruteurs. Trouvez un emploi selon vos critères. Postulez rapidement et facilement.</p>
                                <Link href="/seeker-register">
                                    INSCRIVEZ-VOUS EN TANT QUE CHERCHEUR D'EMPLOI <i className="fa-solid fa-arrow-up"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                
            <Footer className="noMargin"/>
        </>

    )
}

export default Login