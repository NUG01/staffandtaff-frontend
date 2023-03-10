import Header from '../header';
import Footer from '../footer';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/about/about.module.css'

export default function About() {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>

            <Header active="about"/>
            
            <main className={styles.main}>
                <div className={styles.box}>
                    <h1 className={styles.title}><span>À propos</span>de la Plateforme</h1>
                    <p className={styles.desc}>Il est convenu que le client souhaite commercialiser une nouvelle plateforme permettant aux recruteurs et candidats du secteur de la restauration et de l'hôtellerie de s'inscrire et de proposer leurs offres d'emploi en ligne ou de postuler à une offre d'emploi. Ainsi, il sera possible pour les candidats de rechercher sur la plateforme une offre d'emploi précise selon des critères prédéfinis et d'y postuler.<br /><br />
                    Un système de notation tant pour les candidats que pour les employeurs sera développé afin d'offrir un service sérieux et de faire gagner du temps et de l'énergie à tous les acteurs du marché. L'administrateur du site devra pouvoir effectuer certaines actions comme supprimer un utilisateur ou une annonce ou résilier un abonnement payant. Cela sera possible grâce au back-office de gestion qui sera développé. Les marchés visés sont la Suisse et la France.<br /><br />
                    Il est convenu que le client souhaite commercialiser une nouvelle plateforme permettant aux recruteurs et candidats du secteur de la restauration et de l'hôtellerie de s'inscrire et de proposer leurs offres d'emploi en ligne ou de postuler à une offre d'emploi.
                    </p>
                </div>
                <div class={styles.vl}></div>
                <div className={styles.formContent}>
                    <h3>Contactez-Nous</h3>
                    <h4>Do you have any questions or suggestions? Reach us out.</h4>
                    <form className={styles.formController}>
                        <div className={styles.inputControl}>
                            <svg width="20" height="16" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z"
                                    fill="#757575" />
                            </svg>
                            <input placeholder='Full Name' className={styles.singleInput} type="text" name='name' id='name'/>
                            {/* <input type="email" placeholder="Email" className={styles.singleInput} required name="log-email" onChange={event => setEmail(event.target.value)} value={email}/> */}
                        </div>
                        <div className={styles.inputControl}>
                            <svg width="20" height="16" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z"
                                    fill="#757575" />
                            </svg>
                            <input placeholder='E-mail' className={styles.singleInput} type="email" name='email' id='email'/>
                        </div>
                        <div className={styles.inputControl}>
                            <textarea placeholder='Message' className={styles.singleInput} name="message" id={styles.message}></textarea>
                        </div>
                        
                        <div className={styles.checkbox}>
                            <input type="checkbox" />
                            <p>I agree to the <Link href="/terms">Terms and Conditions</Link> and the <Link href="/privacy">Privacy Policy</Link> *</p>
                        </div>
                        <input type="submit" value="SEND" className={styles.submitInput}/>
                    </form>
                </div>
            </main>

            <Footer />
        </>
    );
}
