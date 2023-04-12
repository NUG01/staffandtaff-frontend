import Head from "next/head"
import Header from "@/pages/header"
import Footer from "@/pages/footer"
import Link from "next/link"
import styles from '@/styles/recovery/recovery.module.css'
import { useAjax } from "@/hooks/ajax"

export default function EmailSent({isLogged, user, email}){
    const {sendData} = useAjax()

    function sendAgain(){

        console.log(email)

        sendData('/api/v1/forgot-password', {email}, (res)=>{
        })
    }

    return(
        <>
            <Head>
                <title>Veuillez vérifier vos mails</title>
            </Head>
    
            <Header isLogged={isLogged} user={user} active="login"/>
    
            <div className={styles.mainWrapper}>
                <div className={styles.inboxCheck}>
                    <div className={styles.heading}>
                        <img src="/attention-envelope-icon.png" alt="" />
                        <h1>Veuillez vérifier vos mails</h1>
                    </div>
                    <div className={styles.bottom}>
                        Votre adresse mail a été enregistrée avec succès. Veuillez vérifier vos mails pour réinitialiser votre mot de passe.
                    </div>
                </div>
    
                <div className={styles.resendEmail}>
                    <p>
                        Le mail peut mettre plusieurs minutes à arriver dans votre boîte de réception.
                        <br />
                        Vous ne l'avez toujours pas reçu ?
                    </p>
    
                    <p className={styles.sendAgain} onClick={()=> sendAgain()}>
                        RENVOYER L'EMAIL
                    </p>
                </div>
                    
                <Link href="/">Retourner à la page d'accueil</Link>
                {/* <div className={styles.sentSuccessfully}>
                    {sent}
                </div> */}
            </div>
    
            <Footer />
        </>
    )
}