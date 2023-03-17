"use client"

import { useRef, useState } from "react";

export default function ({styles, nextButton, className, setStep, data}){
    console.log(data)
    const [wordCount, setWords] = useState(0)

    function setWordCount(e){
        if(e.target.value.length > 1000){
            e.target.value = e.target.value.substring(0, 1000);
        }
        setWords(e.target.value.length)
    }

    return(
        <form className={`${styles.form} ${className}`}>
            <div className={styles.intro}>
                Décrivez l'emploi pour lequel vous recrutez.
                <br />
                <p>Veuillez noter que les champs marqués de (<span>*</span>) sont obligatoires.</p>
            </div>

            <section className={styles.showCase}>
                <img src={data.logo.preview } alt="" />
                <div className={styles.showCaseInfo}>
                    <h1>{data.company_name}</h1>
                    <p>{data.industry === 0 ? 'Restaurant' : 'Hotel'}</p>
                    <div className={styles.showCaseLocation}>
                        <img src={data.country === 0 ? '/ch.svg' : '/fr.svg'} alt="" />
                        <p>
                            <span>
                                {data.city}, 
                            </span>
                            <span>
                                {data.country === 0 ? 'Suisse' : 'France'}
                            </span>
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h4>Votre établissement est-il un hôtel ou un restaurant ?</h4>
                <div className={styles.inputParent}>
                    <select>
                        <option value="">Poste</option>
                    </select>
                </div>
            </section>

            <section className={styles.section}>
                <h4>Quel salaire proposez-vous ?<span> *</span></h4>
                <div className={`${styles.inputParent} ${styles.multipleChild}`}>
                    <input type="text" placeholder="Salaire"/>
                    <select>
                        <option value="">Devise</option>
                    </select>
                    <select>
                        <option value="">Type de rémunération</option>
                    </select>
                </div>
            </section>

            <section className={styles.section}>
                <h4>Quel type de contrat proposez-vous ?</h4>
                <div className={`${styles.inputParent} ${styles.multipleChild}`}>
                    <select className={styles.selectF}>
                        <option value="">Sous-catégorie de l'établissement</option>
                    </select>
                    <div className={`${styles.dateInput} ${styles.inputF}`}>
                        <input type="date" id="start"/>
                    </div>
                    <div className={`${styles.dateInput} ${styles.inputS}`}>
                        <input type="date" id="end"/>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h4>Le poste à pourvoir est-il en présentiel ou distanciel ?<span>*</span></h4>
                <div className={styles.inputParent}>
                    <select>
                        <option value="">Sous-catégorie de l'établissement</option>
                    </select>
                </div>
            </section>

            <section className={styles.section}>
                <h4>Proposez-vous un contrat à temps plein ou à temps partiel ?<span>*</span></h4>
                <div className={styles.inputParent}>
                    <select>
                        <option value="">Sous-catégorie de l'établissement</option>
                    </select>
                </div>
            </section>

            <section className={styles.section}>
                <h4>Qui est le propriétaire de votre établissement ?</h4>
                <div className={styles.inputParent}>
                    <input type="number" placeholder="Nombre d'employés"/>
                </div>
            </section>

            <section className={styles.section}>
                <h4>Donnez plus d'informations concernant votre établissement</h4>
                <div className={styles.textareaParent}>
                    <textarea placeholder="Description de l'établissement" onChange={(e)=>setWordCount(e)}></textarea>
                    <div className={styles.wordCount}>{wordCount} / 1000</div>
                </div>
            </section>

            <div className={`${styles.goBack} ${styles.postGoBack}`}>
                <span onClick={()=> {setStep(2); scrollTo(0,0) }}>
                    <i className="fa-solid fa-chevron-left"></i> précédent
                </span>
            </div>

            {nextButton}
        </form>
    )

}