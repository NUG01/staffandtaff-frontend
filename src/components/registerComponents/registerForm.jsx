import InputError from '@/components/InputError'
import Link from 'next/link'
import { useState, useRef } from 'react'
import styles from '@/styles/register/register.module.css'

export default function registerForm({isLogged, user, register, type}) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])
    const [passwordType, setType] = useState('password')
    const [passwordConfirmType, setConfirmType] = useState('password')
    
    
    const changePasswordType = ()=>{
        passwordType === 'password' ? setType('text') : setType('password')
    }

    const changePasswordConfirmType = ()=>{
        passwordConfirmType === 'password' ? setConfirmType('text') : setConfirmType('password')
    }

    const form = useRef()

    const submitForm = event => {
        event.preventDefault()

        form.current.classList.add('disabledSection')

        register({
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
            form
        })
    }

    return (
        <>
                <div className={styles.formHolder}>
                    <form ref={form} className={styles.form} onSubmit={submitForm}>

                        <div className={styles.inputControl}>
                                <svg width="20" height="16" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z"
                                        fill="#757575" />
                                </svg>
                                <input 
                                id="email"
                                type="email"
                                value={email}
                                className={styles.singleInput}
                                onChange={event => setEmail(event.target.value)}
                                placeholder="Email"
                                required/>
                                <InputError messages={errors.email} className="mt-2" />
                        </div>

                        
                        <div className={styles.inputControl}>
                                <svg width="16" height="21" viewBox="0 0 16 21" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8 16C6.89 16 6 15.1 6 14C6 12.89 6.89 12 8 12C8.53043 12 9.03914 12.2107 9.41421 12.5858C9.78929 12.9609 10 13.4696 10 14C10 14.5304 9.78929 15.0391 9.41421 15.4142C9.03914 15.7893 8.53043 16 8 16ZM14 19V9H2V19H14ZM14 7C14.5304 7 15.0391 7.21071 15.4142 7.58579C15.7893 7.96086 16 8.46957 16 9V19C16 19.5304 15.7893 20.0391 15.4142 20.4142C15.0391 20.7893 14.5304 21 14 21H2C0.89 21 0 20.1 0 19V9C0 7.89 0.89 7 2 7H3V5C3 3.67392 3.52678 2.40215 4.46447 1.46447C5.40215 0.526784 6.67392 0 8 0C8.65661 0 9.30679 0.129329 9.91342 0.380602C10.52 0.631876 11.0712 1.00017 11.5355 1.46447C11.9998 1.92876 12.3681 2.47995 12.6194 3.08658C12.8707 3.69321 13 4.34339 13 5V7H14ZM8 2C7.20435 2 6.44129 2.31607 5.87868 2.87868C5.31607 3.44129 5 4.20435 5 5V7H11V5C11 4.20435 10.6839 3.44129 10.1213 2.87868C9.55871 2.31607 8.79565 2 8 2Z"
                                        fill="#757575" />
                                </svg>


                                <input 
                                id="password"
                                type={passwordType}
                                value={password}
                                className={styles.singleInput}
                                onChange={event => setPassword(event.target.value)}
                                required
                                placeholder='Password'
                                autoComplete="new-password"/>

                                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" id={styles.hideUnhide} onClick={()=> changePasswordType()}>
                                    <path
                                        d="M1 1.27L2.28 0L19 16.72L17.73 18L14.65 14.92C13.5 15.3 12.28 15.5 11 15.5C6 15.5 1.73 12.39 0 8C0.69 6.24 1.79 4.69 3.19 3.46L1 1.27ZM11 5C11.7956 5 12.5587 5.31607 13.1213 5.87868C13.6839 6.44129 14 7.20435 14 8C14 8.35 13.94 8.69 13.83 9L10 5.17C10.31 5.06 10.65 5 11 5ZM11 0.5C16 0.5 20.27 3.61 22 8C21.18 10.08 19.79 11.88 18 13.19L16.58 11.76C17.94 10.82 19.06 9.54 19.82 8C18.17 4.64 14.76 2.5 11 2.5C9.91 2.5 8.84 2.68 7.84 3L6.3 1.47C7.74 0.85 9.33 0.5 11 0.5ZM2.18 8C3.83 11.36 7.24 13.5 11 13.5C11.69 13.5 12.37 13.43 13 13.29L10.72 11C9.29 10.85 8.15 9.71 8 8.28L4.6 4.87C3.61 5.72 2.78 6.78 2.18 8Z"
                                        fill="#757575" />
                                </svg>
                            <InputError
                                messages={errors.password}
                                className="mt-2"
                            />
                        </div>

                        

                        
                        <div className={styles.inputControl}>
                                <svg width="16" height="21" viewBox="0 0 16 21" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8 16C6.89 16 6 15.1 6 14C6 12.89 6.89 12 8 12C8.53043 12 9.03914 12.2107 9.41421 12.5858C9.78929 12.9609 10 13.4696 10 14C10 14.5304 9.78929 15.0391 9.41421 15.4142C9.03914 15.7893 8.53043 16 8 16ZM14 19V9H2V19H14ZM14 7C14.5304 7 15.0391 7.21071 15.4142 7.58579C15.7893 7.96086 16 8.46957 16 9V19C16 19.5304 15.7893 20.0391 15.4142 20.4142C15.0391 20.7893 14.5304 21 14 21H2C0.89 21 0 20.1 0 19V9C0 7.89 0.89 7 2 7H3V5C3 3.67392 3.52678 2.40215 4.46447 1.46447C5.40215 0.526784 6.67392 0 8 0C8.65661 0 9.30679 0.129329 9.91342 0.380602C10.52 0.631876 11.0712 1.00017 11.5355 1.46447C11.9998 1.92876 12.3681 2.47995 12.6194 3.08658C12.8707 3.69321 13 4.34339 13 5V7H14ZM8 2C7.20435 2 6.44129 2.31607 5.87868 2.87868C5.31607 3.44129 5 4.20435 5 5V7H11V5C11 4.20435 10.6839 3.44129 10.1213 2.87868C9.55871 2.31607 8.79565 2 8 2Z"
                                        fill="#757575" />
                                </svg>


                                <input 
                                id="passwordConfirmation"
                                type={passwordConfirmType}
                                value={passwordConfirmation}
                                className={styles.singleInput}
                                onChange={event =>
                                    setPasswordConfirmation(event.target.value)
                                }
                                required
                                placeholder='Confirm password'
                                autoComplete="new-password"/>

                                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" id={styles.hideUnhide} onClick={()=> changePasswordConfirmType()}>
                                    <path
                                        d="M1 1.27L2.28 0L19 16.72L17.73 18L14.65 14.92C13.5 15.3 12.28 15.5 11 15.5C6 15.5 1.73 12.39 0 8C0.69 6.24 1.79 4.69 3.19 3.46L1 1.27ZM11 5C11.7956 5 12.5587 5.31607 13.1213 5.87868C13.6839 6.44129 14 7.20435 14 8C14 8.35 13.94 8.69 13.83 9L10 5.17C10.31 5.06 10.65 5 11 5ZM11 0.5C16 0.5 20.27 3.61 22 8C21.18 10.08 19.79 11.88 18 13.19L16.58 11.76C17.94 10.82 19.06 9.54 19.82 8C18.17 4.64 14.76 2.5 11 2.5C9.91 2.5 8.84 2.68 7.84 3L6.3 1.47C7.74 0.85 9.33 0.5 11 0.5ZM2.18 8C3.83 11.36 7.24 13.5 11 13.5C11.69 13.5 12.37 13.43 13 13.29L10.72 11C9.29 10.85 8.15 9.71 8 8.28L4.6 4.87C3.61 5.72 2.78 6.78 2.18 8Z"
                                        fill="#757575" />
                                </svg>
                            <InputError
                                messages={errors.password}
                                className="mt-2"
                            />
                        </div>


                        <div className={styles.inputControl}>
                            <input type="submit" value="SUBMIT" className={styles.submitInput} />
                        </div>
                                
                        <div className={styles.inputControl}>
                            <p className={styles.alreadyRegParent}>
                                Already have an account? <Link href="/login" className={styles.alreadyReg}> Go to the login page </Link>
                            </p>
                        </div>
                    </form>
                </div>
        </>
    )
}