import { useState, useRef, useEffect } from 'react'
import styles from '../../../styles/register/register.module.css'
import axios from '@/lib/axios'
import Axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import useCheckRequired from '@/hooks/requiredInputs'
import ExperienceForm from './ExperienceComponents/ExperienceForm'
import InformationForm from './InformationComponents/InformationForm'
import AddExperienceIcon from './ExperienceComponents/AddExperienceIcon'

export default function SeekerFlow({
    stepOneUpdate,
    stepTwoUpdate,
    stepThreeUpdate,
    stepFourUpdate,
    setStep,
}) {
    const [date, setDate] = useState('')
    const [expCount, setExpCount] = useState(1)
    const [experienceArray, setExperienceArray] = useState([])

    const [stepOneData, setStepOneData] = useState({ nugo: 'nugo' })
    const [stepTwoData, setStepTwoData] = useState(null)
    const [stepThreeData, setStepThreeData] = useState(null)
    const [stepFourData, setStepFourData] = useState(null)

    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)

    const [startPickerDate, setStartPickerDate] = useState(null)
    const [endPickerDate, setEndPickerDate] = useState(null)

    const [coverLetter, setCoverLettter] = useState('')

    const [submitProp, setSubmitProp] = useState(false)

    let dataArray = []

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

    function updateDate(date, end) {
        var dateObj = new Date(date)
        var month = dateObj.getMonth() + 1
        var day = dateObj.getDate()
        var year = dateObj.getFullYear()
        var newData = Date.parse(date)

        if (day.toString().length == 1) day = `0${day}`
        if (month.toString().length == 1) month = `0${month}`

        end
            ? setEndDate(year + '-' + month + '-' + day)
            : setStartDate(year + '-' + month + '-' + day)
        end ? setEndPickerDate(date) : setStartPickerDate(date)
        setDate(year + '-' + month + '-' + day)
    }

    useEffect(() => {
        setStep(2)
    }, [])

    function submitHandlerTHree(ev) {
        ev.preventDefault()
        const validated = useCheckRequired({
            parentClass: 'seeker-step-three-register',
        })

        if (!validated) {
            scrollTo(0, 0)
            return
        }
        const data = {
            cover_letter: coverLetter,
        }
        setStepThreeData(data)
        stepThreeUpdate(data)
    }

    function submitHandlerFour(ev) {
        ev.preventDefault()
        const validated = useCheckRequired({
            parentClass: 'seeker-step-four-register',
        })

        if (!validated) {
            scrollTo(0, 0)
            return
        }
        const data = {
            cover_letter: coverLetter,
        }
        setStepFourData(data)
        stepFourUpdate(data)
    }

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
            let mainData = dataArray.filter(x => x.position != '')
            mainData.push(dataExtra)
            console.log(mainData)
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
                                    stepTwoUpdateEmit={data => {
                                        setStepTwoData(data)
                                        stepTwoUpdate(data)
                                    }}
                                />,
                            ])
                        }}>
                        <AddExperienceIcon />
                    </div>
                    <button
                        onClick={() => {
                            setSubmitProp(true)
                            setTimeout(() => {
                                setSubmitProp(false)
                            }, 1200)

                            collectData()
                        }}
                        type="button"
                        className={styles.nextButton}
                        // onClick={() => sendJobData()}
                    >
                        suivant
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            )}
            {stepOneData && stepTwoData && !stepThreeData && <div>this</div>}
            {stepOneData && stepTwoData && stepThreeData && !stepFourData && (
                <form
                    onSubmit={submitHandlerFour}
                    className={`${styles.form} seeker-step-four-register`}>
                    <section className={styles.section}>
                        <h4>Ajouter une lettre de motivation</h4>
                        <div className={styles.textareaParent}>
                            <textarea
                                placeholder="Lettre de motivation"
                                onChange={ev => {
                                    setCoverLettter(ev.target.value)
                                    // e.target.parentNode.classList.remove('input-error')
                                    // e.target.classList.remove('input-error')
                                }}></textarea>
                            <div className={styles.wordCount}>
                                {coverLetter.length} / 1000
                            </div>
                        </div>
                    </section>
                </form>
            )}
            {/* <div
                className={styles.nextButton}
                onClick={() => {
                    sendEstablishmentData(3)
                }}
            >
                suivant
                <i className="fa-solid fa-chevron-right"></i>
            </div> */}
        </>
    )
}
