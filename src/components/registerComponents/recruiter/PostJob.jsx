"use client"

import { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

export default function ({styles, nextButton, className, setStep, companyData, jobData, setNewJobData, positions}){

    const [wordCount, setWords] = useState(0)
    
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    
    const [startPickerDate, setStartPickerDate] = useState(null)
    const [endPickerDate, setEndPickerDate] = useState(null)

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

    let jobPositions = []
    
    if(companyData.logo != undefined){
        
        if(companyData.industry[0].name.toLowerCase() == 'restauration'){
    
            for(var i=0; i < positions.length; i++){
                if(positions[i].restaurant == 1) jobPositions.push(positions[i])
            }

        }else{

            for(var i=0; i < positions.length; i++){
                if(positions[i].hotel == 1) jobPositions.push(positions[i])
            }

        }
    }

    function setDate(date, end){
        var dateObj = new Date(date);
        var month = dateObj.getMonth() + 1;
        var day = dateObj.getDate();
        var year = dateObj.getFullYear();
        var newData = Date.parse(date);

        // Generates timestamp
        // var newDated = new Date( year, month - 1, day);
        // console.log(newDated.getTime());

        if(day.toString().length == 1) day = `0${day}`
        if(month.toString().length == 1) month = `0${month}`    

        
        end ? setEndDate(year + "-" + month + "-" + day) : setStartDate(year + "-" + month + "-" + day)
        end ? setEndPickerDate(date) : setStartPickerDate(date)
    }

    return(
        <form className={`${styles.form} ${className}`}>
            <div className={styles.intro}>
                Décrivez l'emploi pour lequel vous recrutez.
                <br />
                <p>Veuillez noter que les champs marqués de (<span>*</span>) sont obligatoires.</p>
            </div>

            
            {companyData.logo != undefined && (
                <section className={styles.showCase}>
                    <img src={`http://localhost:8000/storage/${companyData.logo}`} alt="" />
                    <div className={styles.showCaseInfo}>
                        <h1>{companyData.name}</h1>
                        <p className={styles.industryName}>{companyData.industry[0].name}</p>
                        <div className={styles.showCaseLocation}>
                            <img src={companyData.country === 'CH' ? '/ch.svg' : '/fr.svg'} alt="" />
                            <p>
                                <span>
                                    {companyData.city[0].city_name}, 
                                </span>
                                <span>
                                    {companyData.country === 'CH' ? 'Suisse' : 'France'}
                                </span>
                            </p>
                        </div>
                    </div>
                </section>
            )}

            <section className={styles.section}>
                <h4>Quel est le poste pour lequel vous recrutez ?<span>*</span>)</h4>
                <div className={styles.inputParent}>
                    <select defaultValue={""} onChange={e => e.target.classList.remove('input-error')} onInput={(e)=> setNewJobData('position', e.target.value)} className='required-record'>
                        <option value="" disabled>Poste</option>
                        {jobPositions.map(item =>{
                            return(
                                <option key={item.id} value={item.id}>{item.name}</option>
                            )
                        })}
                    </select>
                </div>
            </section>

            <section className={styles.section}>
                <h4>Quel salaire proposez-vous ?<span> *</span></h4>
                <div className={`${styles.inputParent} ${styles.multipleChild}`}>
                    <input type="number" placeholder="Salaire" onChange={e => e.target.classList.remove('input-error')} onInput={(e)=> setNewJobData('salary', e.target.value)} className='required-record'/>
                    <select defaultValue={""} onChange={e => e.target.classList.remove('input-error')} onInput={(e)=> setNewJobData('currency', e.target.value)} className='required-record'>
                        <option value="" disabled>Devise</option>
                        <option value="1">CHF</option>
                        <option value="2">EUR</option>
                    </select>
                    <select defaultValue={""} onChange={e => e.target.classList.remove('input-error')} onInput={(e)=> setNewJobData('period_type', e.target.value)} className='required-record'>
                        <option value="" disabled>Type de rémunération</option>
                        <option value="1">Par heure</option>
                        <option value="2">Par mois</option>
                        <option value="3">Par an</option>
                    </select>
                </div>
            </section>

            <section className={styles.section}>
                <h4>Quel type de contrat proposez-vous ?</h4>
                <div className={`${styles.inputParent} ${styles.multipleChild}`}>
                    <select defaultValue={""} className={styles.selectF} onChange={e => e.target.classList.remove('input-error')} onInput={(e)=> setNewJobData('type_of_contract', e.target.value)}>
                        <option value="" disabled>Type de contrat</option>
                        <option value="1">Contrat à durée déterminé</option>
                        <option value="2">Contrat à durée indéterminé</option>
                    </select>
                    <div className={styles.datePickerHolder}>
                        <DatePicker 
                            selected={startPickerDate}
                            onKeyDown={(e) => {
                              e.preventDefault();
                            }}
                            onChange={date => setDate(date)}
                            dateFormat='dd/MM/yyyy'
                            showYearDropdown
                            scrollableMonthYearDropdown
                            placeholderText="jj/mm/aaaa"
                        />
                        <img src="/datepicker.png" alt="" className={styles.datePickerImg}/>
                    </div>
                    <div className={styles.datePickerHolder}>
                        <DatePicker 
                            selected={endPickerDate}
                            onKeyDown={(e) => {
                              e.preventDefault();
                            }}
                            onChange={date => setDate(date, true)}
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
                    <select defaultValue={""} onChange={e => e.target.classList.remove('input-error')} onInput={(e)=> setNewJobData('type_of_attendance', e.target.value)} className='required-record'>
                        <option value="" disabled>Type de poste</option>
                        <option value="1">Présentiel</option>
                        <option value="2">Distanciel </option>
                    </select>
                </div>
            </section>

            <section className={styles.section}>
                <h4>Proposez-vous un contrat à temps plein ou à temps partiel ?<span>*</span></h4>
                <div className={styles.inputParent}>
                    <select defaultValue={""} onChange={e => e.target.classList.remove('input-error')} onInput={(e)=> setNewJobData('availability', e.target.value)} className='required-record'>
                        <option value="" disabled>Type de contrat</option>
                        <option value="1">Temps plein</option>
                        <option value="2">Temps partiel </option>
                    </select>
                </div>
            </section>

            <section className={styles.section}>
                <h4>Donnez plus d'informations concernant votre établissement</h4>
                <div className={styles.textareaParent}>
                    <textarea onChange={(e) => {e.target.parentNode.classList.remove('input-error'); e.target.classList.remove('input-error');} } placeholder="Description du poste à pourvoir" onInput={(e)=>setWordCount(e)} className='required-record'></textarea>
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