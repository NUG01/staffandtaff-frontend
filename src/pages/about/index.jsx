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
                <div className={styles.vl}></div>
                <div className={styles.formContent}>
                    <h3>Contactez-Nous</h3>
                    <h4>Do you have any questions or suggestions? Reach us out.</h4>
                    <form className={styles.formController}>
                        <div className={styles.inputControl}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0C9.06087 0 10.0783 0.421427 10.8284 1.17157C11.5786 1.92172 12 2.93913 12 4C12 5.06087 11.5786 6.07828 10.8284 6.82843C10.0783 7.57857 9.06087 8 8 8C6.93913 8 5.92172 7.57857 5.17157 6.82843C4.42143 6.07828 4 5.06087 4 4C4 2.93913 4.42143 1.92172 5.17157 1.17157C5.92172 0.421427 6.93913 0 8 0ZM8 2C7.46957 2 6.96086 2.21071 6.58579 2.58579C6.21071 2.96086 6 3.46957 6 4C6 4.53043 6.21071 5.03914 6.58579 5.41421C6.96086 5.78929 7.46957 6 8 6C8.53043 6 9.03914 5.78929 9.41421 5.41421C9.78929 5.03914 10 4.53043 10 4C10 3.46957 9.78929 2.96086 9.41421 2.58579C9.03914 2.21071 8.53043 2 8 2ZM8 9C10.67 9 16 10.33 16 13V16H0V13C0 10.33 5.33 9 8 9ZM8 10.9C5.03 10.9 1.9 12.36 1.9 13V14.1H14.1V13C14.1 12.36 10.97 10.9 8 10.9Z" fill="#757575"/>
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
                            <p>I agree to the <Link href="/terms">Terms and Conditions</Link> and the <Link href="/privacy">Privacy Policy</Link> <span>*</span></p>
                        </div>
                        <input type="submit" value="SEND" className={styles.submitInput}/>
                    </form>
                </div>
            </main>

            <Footer />
        </>
    );
}
