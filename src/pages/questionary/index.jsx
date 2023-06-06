import Footer from '@/pages/footer'
import { useState } from 'react'
import Header from '../../pages/header'
import styles from '../../styles/profile/profile.module.css'

export default function index({ isLogged, user, profile }) {
    const [wordsOne, setWordsOne] = useState(0)
    return (
        <div>
            <div>
                <Header isLogged={isLogged} user={user} profile={profile} />
            </div>
            <div
                style={{ height: '60px', marginBottom: '10px' }}
                className={`${styles.fakeHeader} ${styles.borderBottom}`}></div>
            <div
                className={`${styles.candidat}`}
                style={{ backgroundColor: '#FFF8F4' }}>
                <div className={styles.navigationPath}>
                    <p>
                        Restaurant Gourmet &gt; Chef de rangs &gt;
                        <span style={{ color: '#472E23' }}>
                            {' '}
                            Envoyez votre CV
                        </span>
                    </p>
                </div>
                <div
                    style={{ marginBottom: '25px' }}
                    className={styles.candidatName}>
                    Questionnaire
                </div>
                <p style={{ fontSize: '14px' }}>
                    Ces réponses seront sauvegardées pour les futures
                    candidatures.
                </p>
            </div>

            <form
                id={`experience`}
                // onSubmit={submitHandlerTwo}
                className={`${styles.form} seeker-step-two-register`}>
                <section className={styles.section}>
                    <h4>
                        Souhaitez-vous ajouter plus d'informations sur votre
                        expérience avec l'établissement ?
                    </h4>
                    <div className={styles.textareaParent}>
                        <textarea
                            id={`textarea-1`}
                            name="info"
                            placeholder="Réponse"
                            onChange={ev => {
                                setWordsOne(ev.target.value)
                                // e.target.parentNode.classList.remove('input-error')
                                // e.target.classList.remove('input-error')
                            }}></textarea>
                        <div className={styles.wordCount}>
                            {wordsOne == 0 ? 0 : wordsOne.length} / 1000
                        </div>
                    </div>
                </section>
            </form>
            <Footer noMarginToP={true} />
        </div>
    )
}
