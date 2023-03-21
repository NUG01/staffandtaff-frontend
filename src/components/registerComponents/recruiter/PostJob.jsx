"use client"

import { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

export default function ({styles, nextButton, className, setStep, data, jobData, setNewJobData}){
    const [wordCount, setWords] = useState(0)

    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)

    useEffect(()=>{
        setNewJobData('start_date', startDate)
        setNewJobData('end_date', endDate)
    })

    function setWordCount(e){
        if(e.target.value.length > 1000){
            e.target.value = e.target.value.substring(0, 1000);
        }
        setWords(e.target.value.length)
        setNewJobData('description', e.target.value)
    }

    return(
        <form className={`${styles.form} ${className}`}>
            <div className={styles.intro}>
                Décrivez l'emploi pour lequel vous recrutez.
                <br />
                <p>Veuillez noter que les champs marqués de (<span>*</span>) sont obligatoires.</p>
            </div>

            <section className={styles.showCase}>
                <img src={data.preview } alt="" />
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
                    <select defaultValue={""} onInput={(e)=> setNewJobData('first', e.target.value)}>
                        <option value="" disabled>Poste</option>
                        <option value="1">value</option>
                    </select>
                </div>
            </section>

            <section className={styles.section}>
                <h4>Quel salaire proposez-vous ?<span> *</span></h4>
                <div className={`${styles.inputParent} ${styles.multipleChild}`}>
                    <input type="text" placeholder="Salaire" onInput={(e)=> setNewJobData('second', e.target.value)}/>
                    <select defaultValue={""} onInput={(e)=> setNewJobData('third', e.target.value)}>
                        <option value="" disabled>Devise</option>
                        <option value="1">value</option>
                    </select>
                    <select defaultValue={""} onInput={(e)=> setNewJobData('fourth', e.target.value)}>
                        <option value="" disabled>Type de rémunération</option>
                        <option value="1">value</option>
                    </select>
                </div>
            </section>

            <section className={styles.section}>
                <h4>Quel type de contrat proposez-vous ?</h4>
                <div className={`${styles.inputParent} ${styles.multipleChild}`}>
                    <select defaultValue={""} className={styles.selectF} onInput={(e)=> setNewJobData('fifth', e.target.value)}>
                        <option value="" disabled>Sous-catégorie de l'établissement</option>
                        <option value="1">value</option>
                    </select>
                    <div className={styles.datePickerHolder}>
                        <DatePicker 
                            selected={startDate}
                            onKeyDown={(e) => {
                              e.preventDefault();
                            }}
                            onChange={date => setStartDate(date)}
                            dateFormat='dd/MM/yyyy'
                            showYearDropdown
                            scrollableMonthYearDropdown
                            placeholderText="jj/mm/aaaa"
                        />
                        <img src="/datepicker.png" alt="" className={styles.datePickerImg}/>
                    </div>
                    <div className={styles.datePickerHolder}>
                        <DatePicker 
                            selected={endDate}
                            onKeyDown={(e) => {
                              e.preventDefault();
                            }}
                            onChange={date => setEndDate(date)}
                            onInput={date => setNewJobData('end_date', date)}
                            dateFormat='dd/MM/yyyy'
                            showYearDropdown
                            scrollableMonthYearDropdown
                            placeholderText="jj/mm/aaaa"
                        />
                        <img src="/datepicker.png" alt="" className={styles.datePickerImg}/>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h4>Le poste à pourvoir est-il en présentiel ou distanciel ?<span>*</span></h4>
                <div className={styles.inputParent}>
                    <select defaultValue={""} onInput={(e)=> setNewJobData('sixth', e.target.value)}>
                        <option value="" disabled>Sous-catégorie de l'établissement</option>
                        <option value="1">value</option>
                    </select>
                </div>
            </section>

            <section className={styles.section}>
                <h4>Proposez-vous un contrat à temps plein ou à temps partiel ?<span>*</span></h4>
                <div className={styles.inputParent}>
                    <select defaultValue={""} onInput={(e)=> setNewJobData('seventh', e.target.value)}>
                        <option value="" disabled>Sous-catégorie de l'établissement</option>
                        <option value="1">value</option>
                    </select>
                </div>
            </section>

            <section className={styles.section}>
                <h4>Qui est le propriétaire de votre établissement ?</h4>
                <div className={styles.inputParent}>
                    <input type="number" placeholder="Nombre d'employés" onInput={(e)=> setNewJobData('eighth', e.target.value)}/>
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