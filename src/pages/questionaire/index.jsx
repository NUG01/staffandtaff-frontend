import React from 'react'
import Header from '../header'
import styles from '../../styles/questionaire/questionaire.module.css'

export default function index({ isLogged, user }) {
    function finalSubmitHandler(ev) {
        ev.preventDefault()
    }
    return (
        <div>
            <Header isLogged={isLogged} user={user} profile={true} />
            <div className={styles.fakeHeader}></div>
            <div className={styles.navigationPath}>
                <p>
                    Restaurant Gourmet &gt; Chef de rangs &gt;
                    <span style={{ color: '#472E23' }}> Envoyez votre CV</span>
                </p>
            </div>
            <div className={`${styles.main}`} style={{ gap: '30px' }}>
                <div
                    className={styles.mainName}
                    style={{ textTransform: 'uppercase' }}>
                    Questionnaire
                </div>
                <p
                    style={{
                        fontSize: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    Ces réponses seront sauvegardées pour les futures
                    candidatures.
                </p>
                <form
                    onSubmit={finalSubmitHandler}
                    className={`${styles.form}`}>
                    <section className={styles.section}>
                        <h4>Ajouter une lettre de motivation</h4>
                        <div className={styles.textareaParent}>
                            <textarea
                                placeholder="Lettre de motivation"
                                // onChange={ev => {
                                //     setCoverLetter(ev.target.value)
                                // }}
                            ></textarea>
                            <div className={styles.wordCount}>
                                {'coverLetter.length'} / 1000
                            </div>
                        </div>
                    </section>

                    <button className={styles.nextButton} type="submit">
                        suivant
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </form>
            </div>
        </div>
    )
}
