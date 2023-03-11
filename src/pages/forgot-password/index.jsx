import InputError from '@/components/InputError'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState, useRef } from 'react'
import Header from '../header';
import Footer from '../footer';
import styles from '../../styles/password/recovery.module.css'
import Head from 'next/head';

const ForgotPassword = ({isLogged, user})=> {
    const { forgotPassword } = useAuth({ middleware: 'guest' })

    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const form = useRef()

    const submitForm = event => {
        event.preventDefault()

        form.current.classList.add('disabledSection')

        forgotPassword({ email, setErrors, setStatus, form })
    }

    return (
        <>
            <Head>
                <title>Password Recovery</title>
            </Head>

            <Header isLogged={isLogged} user={user} active=""/>

            <main className={styles.main}>
                <form className={styles.mainForm} ref={form} onSubmit={submitForm}>
                    <h1>RESET PASSWORD</h1>
                    <p>
                        Enter the email address associated with your account and we’ll send you a link to reset your password.
                    </p>
                    <div className={styles.inputControl}>
                        <svg width="20" height="16" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z"
                                fill="#757575"/>
                        </svg>

                        <input onChange={event => setEmail(event.target.value)} type="email" placeholder="Email" className={styles.singleInput} required name="email" />
                    </div>
                    <div className={styles.inputContainer}>
                        <InputError messages={errors.email} className="error-text" id={styles.errorText} />
                    </div>
                    <input type="submit" value="SUBMIT" className={styles.submitInput} />
                    <Link href="/login">Go back to the login page</Link>
                </form>
            </main>
            
            <Footer />
        </>
    )
}

export default ForgotPassword
