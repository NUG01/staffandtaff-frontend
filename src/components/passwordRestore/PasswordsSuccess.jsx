import Head from "next/head"
import Header from "@/pages/header"
import Footer from "@/pages/footer"
import Link from "next/link"

export default function PasswordsSuccess({styles, isLogged, user}){
    return(
        <>
            <Head>
                <title>Réinitialisation du mot de passe réussie !</title>
            </Head>

            <Header isLogged={isLogged} user={user} active="login"/>

                <div className={`${styles.last} ${styles.mainWrapper}`}>
                    <div className={styles.inboxCheck}>
                        <img src="/success-star.png" alt="" />
                        <div className={styles.side}>
                            <h1>Réinitialisation du mot de passe réussie !</h1>
                            Vous pouvez maintenant utiliser votre nouveau mot de passe pour vous connecter à votre compte.
                        </div>
                    </div>

                    <Link href="/login">CONNEXION</Link>
                </div>
                
            <Footer />
        </>
    )
}