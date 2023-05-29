import { useState, useEffect } from 'react'
import useCheckRequired from '@/hooks/requiredInputs'
import axios from '@/lib/axios'
import styles from '../../../../styles/register/register.module.css'
import AddExperienceIcon from './AddExperienceIcon'

export default function ExperienceForm({ stepTwoUpdateEmit, index }) {
    const [experiencePosition, setExperiencePosition] = useState(null)
    const [experiencePositions, setExperiencePositions] = useState(null)

    const [establishment, setEstablishment] = useState('')
    const [wordsTwo, setWordsTwo] = useState('')

    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')

    const [finishDay, setFinishDay] = useState('')
    const [finishMonth, setFinishMonth] = useState('')
    const [finishYear, setFinishYear] = useState('')

    const [stepTwoData, setStepTwoData] = useState(null)

    const [workingStatus, setWorkingStatus] = useState(false)

    async function fetchPositions(pos) {
        setExperiencePositions(null)
        if (!pos) return
        try {
            const res = await axios.get('api/v1/positions/' + pos)
            setExperiencePositions(res.data)
        } catch (error) {}
    }

    let max = new Date().getFullYear()
    let min = max - 100
    let years = []
    for (let index = min; index < max; index++) {
        years.push(<option value={index}>{index}</option>)
    }
    const monthData = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]

    let months = []
    for (let index = 0; index < monthData.length; index++) {
        months.push(<option value={index + 1}>{monthData[index]}</option>)
    }

    let days = []
    for (let index = 1; index <= 31; index++) {
        days.push(<option value={index}>{index}</option>)
    }
    return (
        <form
            key={index}
            id={`experience-${index}`}
            // onSubmit={submitHandlerTwo}
            className={`${styles.form} seeker-step-two-register-${index}`}>
            <section className={styles.section}>
                <h4>
                    Quel était l'intitulé de votre poste ?{' '}
                    <span className={styles.redSpan}>*</span>
                </h4>

                <div
                    className={styles.inputParent}
                    style={{ position: 'relative' }}>
                    <input
                        identification="experience-inputs"
                        code={`experience-${index}`}
                        style={{ marginBottom: '30px' }}
                        type="text"
                        name="position"
                        className="required-record"
                        placeholder="Intitulé du poste"
                        value={experiencePosition}
                        onChange={ev => {
                            ev.target.classList.remove('input-error')
                            if (ev.target.value.length > 1)
                                fetchPositions(ev.target.value)
                            if (ev.target.value.length == 0)
                                setExperiencePositions(null)
                            setExperiencePosition(ev.target.value)
                        }}
                    />
                    {experiencePositions && experiencePositions.length > 0 && (
                        <div className={styles.positionsInput}>
                            {experiencePositions.map(pos => {
                                return (
                                    <div
                                        onClick={() => {
                                            setExperiencePositions(null)
                                            setExperiencePosition(pos.name)
                                        }}
                                        className={styles.position}>
                                        {pos.name}
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>
            </section>
            <section className={styles.section}>
                <h4>
                    Quel est le nom de l'établissement pour lequel vous avez
                    travaillé ? <span className={styles.redSpan}>*</span>
                </h4>
                <div className={styles.inputParent}>
                    <input
                        code={`experience-${index}`}
                        identification="experience-inputs"
                        name="establishment"
                        style={{ marginBottom: '30px' }}
                        type="text"
                        className="required-record"
                        placeholder="Nom de l'établissement"
                        value={establishment}
                        onChange={ev => {
                            ev.target.classList.remove('input-error')
                            setEstablishment(ev.target.value)
                        }}
                    />
                </div>
            </section>
            <section
                className={styles.section}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <h4>Quelle est la date du début du contrat ? </h4>
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '20px',
                    }}>
                    <div
                        className={styles.inputParent}
                        style={{
                            width: '30%',
                        }}>
                        <select
                            code={`experience-${index}`}
                            identification="experience-inputs"
                            name="day"
                            value={day}
                            onChange={ev => setDay(ev.target.value)}
                            style={{
                                marginBottom: '30px',
                                width: '100%',
                            }}
                            // onChange={ev => setGender(ev.target.value)}
                            defaultValue={''}>
                            <option value="" disabled selected>
                                JJ
                            </option>
                            {days.map(d => d)}
                        </select>
                    </div>
                    <div
                        className={styles.inputParent}
                        style={{ width: '30%' }}>
                        <select
                            code={`experience-${index}`}
                            name="month"
                            identification="experience-inputs"
                            value={month}
                            onChange={ev => {
                                ev.target.classList.remove('input-error')
                                setMonth(ev.target.value)
                            }}
                            style={{
                                marginBottom: '30px',
                                width: '100%',
                            }}
                            className="required-record"
                            // onChange={ev => setGender(ev.target.value)}
                            defaultValue={''}>
                            <option value="" disabled selected>
                                MM*
                            </option>
                            {months.map(m => m)}
                        </select>
                    </div>
                    <div
                        className={styles.inputParent}
                        style={{ width: '30%' }}>
                        <select
                            code={`experience-${index}`}
                            identification="experience-inputs"
                            name="year"
                            style={{
                                marginBottom: '30px',
                                width: '100%',
                            }}
                            className="required-record"
                            value={year}
                            onChange={ev => {
                                ev.target.classList.remove('input-error')
                                setYear(ev.target.value)
                            }}
                            // onChange={ev => setGender(ev.target.value)}
                        >
                            <option value="" disabled selected>
                                AAAA
                                <span className={styles.redSpan}>*</span>
                            </option>
                            {years.map(y => y)}
                        </select>
                    </div>
                </div>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'start',
                        justifyContent: 'start',
                        paddingLeft: '20px',
                    }}>
                    <div className={styles['checkbox-wrapper-18']}>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px',
                            }}>
                            <p>Currently work here</p>
                            <div className={styles.round}>
                                <input
                                    code={`experience-${index}`}
                                    identification="experience-inputs"
                                    onClick={() =>
                                        setWorkingStatus(!workingStatus)
                                    }
                                    type="checkbox"
                                    id={`checkbox-18-${index}`}
                                />
                                <label htmlFor={`checkbox-18-${index}`}></label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {!workingStatus && (
                <section
                    className={styles.section}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <h4>Quelle est la date de la fin du contrat ?</h4>
                    <div
                        style={{
                            display: 'flex',
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '20px',
                        }}>
                        <div
                            className={styles.inputParent}
                            style={{
                                width: '30%',
                            }}>
                            <select
                                code={`experience-${index}`}
                                identification="experience-inputs"
                                name="finishDay"
                                value={finishDay}
                                onChange={ev => setFinishDay(ev.target.value)}
                                style={{
                                    marginBottom: '30px',
                                    width: '100%',
                                }}
                                // onChange={ev => setGender(ev.target.value)}
                                defaultValue={''}>
                                <option value="" disabled selected>
                                    JJ
                                </option>
                                {days.map(d => d)}
                            </select>
                        </div>
                        <div
                            className={styles.inputParent}
                            style={{ width: '30%' }}>
                            <select
                                code={`experience-${index}`}
                                identification="experience-inputs"
                                value={finishMonth}
                                name="finishMonth"
                                onChange={ev => {
                                    ev.target.classList.remove('input-error')
                                    setFinishMonth(ev.target.value)
                                }}
                                style={{
                                    marginBottom: '30px',
                                    width: '100%',
                                }}
                                className="required-record"
                                // onChange={ev => setGender(ev.target.value)}
                                defaultValue={''}>
                                <option value="" disabled selected>
                                    MM*
                                </option>
                                {months.map(m => m)}
                            </select>
                        </div>
                        <div
                            className={styles.inputParent}
                            style={{ width: '30%' }}>
                            <select
                                code={`experience-${index}`}
                                identification="experience-inputs"
                                name="finishYear"
                                style={{
                                    marginBottom: '30px',
                                    width: '100%',
                                }}
                                className="required-record"
                                value={finishYear}
                                onChange={ev => {
                                    ev.target.classList.remove('input-error')
                                    setFinishYear(ev.target.value)
                                }}
                                // onChange={ev => setGender(ev.target.value)}
                            >
                                <option value="" disabled selected>
                                    AAAA
                                    <span className={styles.redSpan}>*</span>
                                </option>
                                {years.map(y => y)}
                            </select>
                        </div>
                    </div>
                </section>
            )}
            <section className={styles.section}>
                <h4>
                    Souhaitez-vous ajouter plus d'informations sur votre
                    expérience avec l'établissement ?
                </h4>
                <div className={styles.textareaParent}>
                    <textarea
                        code={`experience-${index}`}
                        identification="experience-inputs"
                        name="info"
                        placeholder="Expérience avec l'établissement"
                        onChange={ev => {
                            setWordsTwo(ev.target.value)
                            // e.target.parentNode.classList.remove('input-error')
                            // e.target.classList.remove('input-error')
                        }}></textarea>
                    <div className={styles.wordCount}>
                        {wordsTwo.length} / 1000
                    </div>
                </div>
            </section>
            {/* <div>
                <AddExperienceIcon addExperience={() => emitExperienceAdd()} />
            </div> */}

            {/* <button
                type="submit"
                className={styles.nextButton}
                // onClick={() => sendJobData()}
            >
                suivant
                <i className="fa-solid fa-chevron-right"></i>
            </button> */}
        </form>
    )
}
