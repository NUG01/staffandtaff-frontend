import useCheckRequired from '@/hooks/requiredInputs'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import BasicAxios from '../../../lib/axios'
import styles from '../../../styles/register/register.module.css'
import EducationForm from './EducationComponents/EducationForm'
import AddExperienceIcon from './ExperienceComponents/AddExperienceIcon'
import ExperienceForm from './ExperienceComponents/ExperienceForm'
import InformationForm from './InformationComponents/InformationForm'

export default function SeekerFlow({
    stepOneUpdate,
    stepTwoUpdate,
    stepThreeUpdate,
    stepFourUpdate,
    setStep,
    step,
}) {
    const [date, setDate] = useState('')
    const [expCount, setExpCount] = useState(1)
    const [experienceArray, setExperienceArray] = useState([])

    const [eduCount, setEduCount] = useState(1)
    const [educationArray, setEducationArray] = useState([])

    const [stepOneData, setStepOneData] = useState(null)
    const [stepTwoData, setStepTwoData] = useState(null)
    const [stepThreeData, setStepThreeData] = useState(null)
    const [stepFourData, setStepFourData] = useState(null)

    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)

    const [startPickerDate, setStartPickerDate] = useState(null)
    const [endPickerDate, setEndPickerDate] = useState(null)

    const [coverLetter, setCoverLetter] = useState('')

    const [submitProp, setSubmitProp] = useState(false)
    const [submitEduProp, setSubmitEduProp] = useState(false)

    let dataArray = []
    let eduDataArray = []

    const router = useRouter()

    useEffect(() => {
        setStep(2)
    }, [])

    let data = {
        position: '',
        establishment: '',
        date: {
            day: '',
            month: '',
            year: '',
        },
        finishDate: {
            day: '',
            month: '',
            year: '',
        },
        info: '',
    }
    let dataExtra = {
        position: '',
        establishment: '',
        date: {
            day: '',
            month: '',
            year: '',
        },
        finishDate: {
            day: '',
            month: '',
            year: '',
        },
        info: '',
    }
    let eduData = {
        studyField: '',
        establishment: '',
        date: {
            day: '',
            month: '',
            year: '',
        },
        certification: '',
    }
    let eduDataExtra = {
        studyField: '',
        establishment: '',
        date: {
            day: '',
            month: '',
            year: '',
        },
        certification: '',
    }

    function collectData() {
        const inputs = document.querySelectorAll('input')
        const selects = document.querySelectorAll('select')
        const textarea = document.querySelectorAll('textarea')

        const nodes = [...inputs, ...selects, ...textarea]

        for (let k = 0; k <= experienceArray.length; k++) {
            data = {
                position: '',
                establishment: '',
                date: {
                    day: '',
                    month: '',
                    year: '',
                },
                finishDate: {
                    day: '',
                    month: '',
                    year: '',
                },
                info: '',
            }

            for (let index = 0; index < nodes.length; index++) {
                let attr = nodes[index].closest('form').getAttribute('id')
                collectInformation(data, dataExtra, nodes, index)

                if (
                    nodes[index].getAttribute('identification') !=
                        'experience-inputs' ||
                    nodes[index].getAttribute('code') != attr ||
                    nodes[index].getAttribute('code') !=
                        `experience-${experienceArray[k]?.key}`
                ) {
                    continue
                }

                collectInformation(data, dataExtra, nodes, index, 1)
            }
            dataArray.push(data)
            let mainData = dataArray
                .filter(x => x.position != '')
                .filter(y => y.establishment != '')
                .filter(d => d.date.month != '')
                .filter(m => m.date.year != '')
            mainData.push(dataExtra)
            setStepTwoData(mainData)
        }
    }

    function collectEduData() {
        const inputs = document.querySelectorAll('input')
        const selects = document.querySelectorAll('select')
        const textarea = document.querySelectorAll('textarea')

        const nodes = [...inputs, ...selects, ...textarea]
        for (let k = 0; k <= educationArray.length; k++) {
            eduData = {
                studyField: '',
                establishment: '',
                date: {
                    day: '',
                    month: '',
                    year: '',
                },
                certification: '',
            }

            for (let index = 0; index < nodes.length; index++) {
                let attr = nodes[index].closest('form').getAttribute('id')
                collectEducationInformation(eduData, eduDataExtra, nodes, index)

                if (
                    nodes[index].getAttribute('identification') !=
                        'education-inputs' ||
                    nodes[index].getAttribute('code') != attr ||
                    nodes[index].getAttribute('code') !=
                        `education-${educationArray[k]?.key}`
                ) {
                    continue
                }

                collectEducationInformation(
                    eduData,
                    eduDataExtra,
                    nodes,
                    index,
                    1,
                )
            }
            eduDataArray.push(eduData)
            console.log(eduDataArray)

            let mainEduData = eduDataArray
                .filter(x => x.studyField != '')
                .filter(y => y.establishment != '')
            mainEduData.push(eduDataExtra)

            setStepThreeData(mainEduData)
        }
    }

    async function finalSubmitHandler(ev) {
        ev.preventDefault()

        try {
            const res = await BasicAxios.post(
                'api/v1/seeker-information/store',
                {
                    information: stepOneData,
                    experience: stepTwoData,
                    education: stepThreeData,
                    letter: coverLetter,
                },
            )
            router.push('/jobs')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {!stepOneData && (
                <InformationForm
                    stepOneUpdateEmit={data => {
                        setStepOneData(data)
                        stepOneUpdate(data)
                    }}
                />
            )}
            {stepOneData && !stepTwoData && (
                <div className={styles.form}>
                    <ExperienceForm
                        key={1}
                        index="1"
                        submitted={submitProp}
                        stepTwoUpdateEmit={data => {
                            setStepTwoData(data)
                            stepTwoUpdate(data)
                        }}
                    />

                    {experienceArray.map(exp => {
                        return exp
                    })}
                    <div
                        style={{ marginLeft: '42.5px' }}
                        onClick={() => {
                            setExpCount(oldValue => oldValue + 1)
                            setExperienceArray(oldArray => [
                                ...oldArray,
                                <ExperienceForm
                                    submitted={submitProp}
                                    key={expCount + 1}
                                    index={expCount + 1}
                                />,
                            ])
                        }}>
                        <AddExperienceIcon />
                    </div>
                    <button
                        onClick={() => {
                            const validated = useCheckRequired({
                                parentClass: 'seeker-step-two-register-1',
                            })

                            if (!validated) {
                                scrollTo(0, 0)
                                return
                            } else {
                                collectData()
                                setStep(4)
                                scrollTo(0, 0)
                            }
                        }}
                        type="button"
                        className={styles.nextButton}>
                        suivant
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            )}
            {stepOneData && stepTwoData && !stepThreeData && (
                <div className={styles.form}>
                    <EducationForm
                        key={1}
                        index="1"
                        submitted={submitEduProp}
                    />
                    {educationArray.map(edu => {
                        return edu
                    })}
                    <div
                        style={{ marginLeft: '42.5px' }}
                        onClick={() => {
                            setEduCount(oldValue => oldValue + 1)
                            setEducationArray(oldArray => [
                                ...oldArray,
                                <EducationForm
                                    submitted={submitEduProp}
                                    key={eduCount + 1}
                                    index={eduCount + 1}
                                />,
                            ])
                        }}>
                        <AddExperienceIcon />
                    </div>
                    <button
                        onClick={() => {
                            const validated = useCheckRequired({
                                parentClass: 'seeker-step-three-register-1',
                            })

                            if (!validated) {
                                scrollTo(0, 0)
                                return
                            } else {
                                collectEduData()
                                setStep(5)
                                scrollTo(0, 0)
                            }
                        }}
                        type="button"
                        className={styles.nextButton}>
                        suivant
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            )}
            {stepOneData && stepTwoData && stepThreeData && !stepFourData && (
                <form
                    onSubmit={finalSubmitHandler}
                    className={`${styles.form} seeker-step-four-register`}>
                    <section className={styles.section}>
                        <h4>Ajouter une lettre de motivation</h4>
                        <div className={styles.textareaParent}>
                            <textarea
                                placeholder="Lettre de motivation"
                                onChange={ev => {
                                    setCoverLetter(ev.target.value)
                                }}></textarea>
                            <div className={styles.wordCount}>
                                {coverLetter.length} / 1000
                            </div>
                        </div>
                    </section>

                    <button className={styles.nextButton} type="submit">
                        suivant
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </form>
            )}
        </>
    )
}

function collectInformation(data, dataExtra, nodes, index, type = 0) {
    if (nodes[index].getAttribute('name') == 'position') {
        if (type == 1) {
            data.position = nodes[index].value
        } else {
            if (nodes[index].getAttribute('code') == 'experience-1') {
                dataExtra.position = nodes[index].value
            }
        }
    }
    if (nodes[index].getAttribute('name') == 'establishment') {
        if (type == 1) {
            data.establishment = nodes[index].value
        } else {
            if (nodes[index].getAttribute('code') == 'experience-1') {
                dataExtra.establishment = nodes[index].value
            }
        }
    }
    if (nodes[index].getAttribute('name') == 'day') {
        if (type == 1) {
            data.date.day = nodes[index].value
        } else {
            if (nodes[index].getAttribute('code') == 'experience-1') {
                dataExtra.date.day = nodes[index].value
            }
        }
    }
    if (nodes[index].getAttribute('name') == 'month') {
        if (type == 1) {
            data.date.month = nodes[index].value
        } else {
            if (nodes[index].getAttribute('code') == 'experience-1') {
                dataExtra.date.month = nodes[index].value
            }
        }
    }
    if (nodes[index].getAttribute('name') == 'year') {
        if (type == 1) {
            data.date.year = nodes[index].value
        } else {
            if (nodes[index].getAttribute('code') == 'experience-1') {
                dataExtra.date.year = nodes[index].value
            }
        }
    }
    if (nodes[index].getAttribute('name') == 'finishDay') {
        if (type == 1) {
            data.finishDate.day = nodes[index].value
        } else {
            if (nodes[index].getAttribute('code') == 'experience-1') {
                dataExtra.finishDate.day = nodes[index].value
            }
        }
    }
    if (nodes[index].getAttribute('name') == 'finishMonth') {
        if (type == 1) {
            data.finishDate.month = nodes[index].value
        } else {
            if (nodes[index].getAttribute('code') == 'experience-1') {
                dataExtra.finishDate.month = nodes[index].value
            }
        }
    }
    if (nodes[index].getAttribute('name') == 'finishYear') {
        if (type == 1) {
            data.finishDate.year = nodes[index].value
        } else {
            if (nodes[index].getAttribute('code') == 'experience-1') {
                dataExtra.finishDate.year = nodes[index].value
            }
        }
    }
    if (nodes[index].getAttribute('name') == 'info') {
        if (type == 1) {
            data.info = nodes[index].value
        } else {
            if (nodes[index].getAttribute('code') == 'experience-1') {
                dataExtra.info = nodes[index].value
            }
        }
    }
}

function collectEducationInformation(data, dataExtra, nodes, index, type = 0) {
    if (nodes[index].getAttribute('name') == 'field_study') {
        if (type == 1) {
            data.studyField = nodes[index].value
        } else {
            if (nodes[index].getAttribute('code') == 'education-1') {
                dataExtra.studyField = nodes[index].value
            }
        }
    }
    if (nodes[index].getAttribute('name') == 'edu_establishment') {
        if (type == 1) {
            data.establishment = nodes[index].value
        } else {
            if (nodes[index].getAttribute('code') == 'education-1') {
                dataExtra.establishment = nodes[index].value
            }
        }
    }
    if (nodes[index].getAttribute('name') == 'certification') {
        if (type == 1) {
            data.certification = nodes[index].value
        } else {
            if (nodes[index].getAttribute('code') == 'education-1') {
                dataExtra.certification = nodes[index].value
            }
        }
    }
    if (nodes[index].getAttribute('name') == 'day') {
        if (type == 1) {
            data.date.day = nodes[index].value
        } else {
            if (nodes[index].getAttribute('code') == 'experience-1') {
                dataExtra.date.day = nodes[index].value
            }
        }
    }
    if (nodes[index].getAttribute('name') == 'month') {
        if (type == 1) {
            data.date.month = nodes[index].value
        } else {
            if (nodes[index].getAttribute('code') == 'experience-1') {
                dataExtra.date.month = nodes[index].value
            }
        }
    }
    if (nodes[index].getAttribute('name') == 'year') {
        if (type == 1) {
            data.date.year = nodes[index].value
        } else {
            if (nodes[index].getAttribute('code') == 'experience-1') {
                dataExtra.date.year = nodes[index].value
            }
        }
    }
}
