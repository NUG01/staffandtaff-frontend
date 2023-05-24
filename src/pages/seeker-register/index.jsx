import { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '@/styles/register/register.module.css'
import Header from '@/pages/header'
import Footer from '@/pages/footer'
import Wizard from '@/components/registerComponents/WizardSteps'
import RegisterForm from '@/components/registerComponents/RegistrationForm'
import EmailVerification from '@/components/registerComponents/EmailVerification'
import SeekerFlow from '@/components/registerComponents/seeker/SeekerFlow'

export default function seekerRegister({
    isLogged,
    user,
    login,
    logout,
    register,
}) {
    const [step, setStep] = useState(1)
    const maxSteps = 5

    const [stepOnePayload, setStepOnePayload] = useState(null)

    // useEffect(() => {
    //     if (isLogged === 1 && user && user.data.verified) setStep(2)
    // }, [])

    return (
        <>
            <Head>
                <title>Seeker register</title>
            </Head>

            <Header isLogged={isLogged} user={user} active="register" />

            <main className={styles.mainWrapper}>
                <Wizard
                    styles={styles}
                    step={step}
                    maxSteps={maxSteps}
                    type="seeker"
                />
                {step == 1 && isLogged != 1 && (
                    <RegisterForm
                        setStep={value => setStep(value)}
                        isLogged={isLogged}
                        user={user}
                        register={register}
                        type="seeker"
                    />
                )}
                {step == 1.5 && isLogged != 1 && (
                    <>
                        <EmailVerification
                            styles={styles}
                            step={step}
                            setStep={setStep}
                        />
                    </>
                )}{' '}
                {isLogged === 1 && user && user.data.verified && (
                    <div>
                        <p className={styles.textStyling}>
                            <span> Présentez-vous aux recruteurs.</span>
                            <br />{' '}
                            <span>
                                Augmentez la crédibilité de votre CV en y
                                ajoutant des informations détaillées.
                            </span>
                        </p>
                        <div
                            className={`${styles.textStyling}`}
                            style={{ marginTop: '20px', marginBottom: '30px' }}>
                            <p>
                                Veuillez noter que les champs marqués de (
                                <span className={styles.redSpan}>*</span>) sont
                                obligatoires.
                            </p>
                        </div>
                    </div>
                )}
                {isLogged === 1 && user && user.data.verified && (
                    <SeekerFlow
                        stepOneUpdate={value => {
                            setStepOnePayload(value)
                        }}
                    />
                )}
            </main>

            <Footer />
        </>
    )
}
