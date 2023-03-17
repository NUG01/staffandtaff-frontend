import styles from '../../styles/homepage/homepage.module.css'
import Link from 'next/link'

export default function Banner() {
    return (
        <div className={styles.generalInformation}>
            <div className={styles.counts}>
                <div className={styles.count}>
                    <div className={styles.number}>
                        <img src="/horn.png" alt="" />
                        <p>23,000</p>
                    </div>
                    <p>Offres d'emploi publiées</p>
                </div>
                <div className={styles.count}>
                    <div className={styles.number}>
                        <img src="/cv.png" alt="" />
                        <p>55,000</p>
                    </div>
                    <p>CV téléchargés</p>
                </div>
                <div className={styles.count}>
                    <div className={styles.number}>
                        <img src="/sign.png" alt="" />
                        <p>23,000</p>
                    </div>
                    <p>Recrutements</p>
                </div>
            </div>
            <div className={styles.explanation}>
                <h1>DEVENIR UN RECRUTEUR SUR STAFF&TAFF</h1>
                <div className={styles.explanationCards}>
                    <div className={styles.explanationCard}>
                        <img src="/exp-1.png" alt="" />
                        <h1 className={styles.expalnationHeading}>
                        Présentez Votre Entreprise
                        </h1>
                        <div className="explanation-tex">
                            Inscrivez-vous sur Staff&Taff, présentez votre entreprise et obtenez la meilleure note.
                        </div>
                    </div>
                    <div className={styles.explanationCard}>
                        <img src="/exp-2.png" alt="" />
                        <h1 className={styles.expalnationHeading}>
                            Matchez
                        </h1>
                        <div className="explanation-tex">
                            Recherchez des talents selon des critères précis et matchez.
                        </div>
                    </div>
                    <div className={styles.explanationCard}>
                        <img src="/exp-3.png" alt="" />
                        <h1 className={styles.expalnationHeading}>
                            Ayez La Meilleure Des Équipes
                        </h1>
                        <div className="explanation-tex">
                            Embauchez les meilleurs talents et créez votre équipe de rêve.
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.registerNow}>
                <div className={styles.txt}>
                    <img src="/starship.png" alt="" />
                    Toujours pas de compte recruteur?
                </div>
                <Link className={styles.button} href="">INSCRIVEZ-VOUS DÈS MAINTENANT</Link>
            </div>
        </div>
    );
}
