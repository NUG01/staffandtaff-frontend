import { useState, useEffect } from 'react'
import styles from '../../../../styles/register/register.module.css'
import useCheckRequired from '@/hooks/requiredInputs'
import styles2 from '@/styles/about/about.module.css'

export default function EducationForm({ index }) {
    const [studyField, setStudyField] = useState('')
    const [establishment, setEstablishment] = useState('')
    const [certification, setCertification] = useState('')
    const [graduationStatus, setGraduationStatus] = useState(false)

    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')

    async function submitHandler(ev) {
        ev.preventDefault()
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
            onSubmit={submitHandler}
            key={index}
            id={`education-${index}`}
            className={`${styles.form} seeker-step-three-register-${index}`}
            style={{ marginTop: '20px' }}
            encType="multipart/form-data">
            <section className={styles.section}>
                <h4>Quel est votre domaine d'étude ?</h4>
                <div className={styles.inputParent}>
                    <input
                        code={`education-${index}`}
                        identification="education-inputs"
                        name="field_study"
                        className="required-record"
                        style={{ marginBottom: '30px' }}
                        type="text"
                        placeholder="Domaine d'étude"
                        value={studyField}
                        onChange={ev => {
                            ev.target.classList.remove('input-error')
                            setStudyField(ev.target.value)
                        }}
                    />
                </div>
            </section>
            <section className={styles.section}>
                <h4>Quel établissement d'enseignement avez-vous fréquenté ?</h4>
                <div className={styles.inputParent}>
                    <input
                        style={{ marginBottom: '30px' }}
                        type="text"
                        code={`education-${index}`}
                        identification="education-inputs"
                        name="edu_establishment"
                        className="required-record"
                        placeholder="Lycée, faculté, école, etc."
                        value={establishment}
                        onChange={ev => {
                            ev.target.classList.remove('input-error')
                            setEstablishment(ev.target.value)
                        }}
                    />
                </div>
            </section>
            <section className={styles.section}>
                <h4>Quel est votre type de certification ?</h4>
                <div className={styles.inputParent}>
                    <input
                        style={{ marginBottom: '30px' }}
                        type="text"
                        code={`education-${index}`}
                        identification="education-inputs"
                        name="certification"
                        placeholder="Diplôme, certificat, etc."
                        value={certification}
                        onChange={ev => {
                            setCertification(ev.target.value)
                        }}
                    />
                </div>
            </section>
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'start',
                    justifyContent: 'start',
                    paddingLeft: '20px',
                    marginTop: '0',
                }}
                className={styles2.checkbox}>
                <input
                    className={styles2.checkboxInput}
                    code={`education-${index}`}
                    identification="education-inputs"
                    onClick={() => setGraduationStatus(!graduationStatus)}
                    type="checkbox"
                    id={`checkbox-18-${index}`}
                    style={{ display: 'inline-block', width: '20px' }}
                />
                <label htmlFor={`checkbox-18-${index}`}>
                    Already Graduated
                </label>
            </div>
            {!graduationStatus && (
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
                                code={`education-${index}`}
                                identification="education-inputs"
                                name="day"
                                value={day}
                                onChange={ev => setDay(ev.target.value)}
                                style={{
                                    marginBottom: '30px',
                                    width: '100%',
                                }}
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
                                code={`education-${index}`}
                                name="month"
                                identification="education-inputs"
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
                                code={`education-${index}`}
                                identification="education-inputs"
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
                                }}>
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
        </form>
    )
}
