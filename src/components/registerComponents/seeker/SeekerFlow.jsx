import { useState, useRef } from 'react'
import styles from '../../../styles/register/register.module.css'
import axios from '@/lib/axios'
import Axios from 'axios'

export default function SeekerFlow({ stepOneUpdate }) {
    const [fullname, setFullname] = useState('')
    const [date, setDate] = useState('')
    const [gender, setGender] = useState('')
    const [desiredPosition, setDesiredPosition] = useState('')
    const [currentPosition, setCurrentPosition] = useState('')

    const [stepOneData, setStepOneData] = useState(null)
    const [stepTwoData, setStepTwoData] = useState(null)
    const [stepThreeData, setStepThreeData] = useState(null)

    const [searching, setSearching] = useState(false)
    const [words, setWords] = useState('')

    const cityInp = useRef()
    const cityMainInp = useRef()
    const countrySelect = useRef()
    const lastRequest = useRef(null)

    const [country, setCurrCountry] = useState('')

    const [cities, setCities] = useState()
    const [citySelected, setCitySelected] = useState()

    const [currentPositions, setCurrentPositions] = useState(null)
    const [desiredPositions, setDesiredPositions] = useState(null)

    const [socialLinks, setSocialLinks] = useState({
        facebook: '',
        pinterest: '',
        website: '',
        linkedin: '',
        instagram: '',
        youtube: '',
        tiktok: '',
        twitter: '',
    })

    const [experiencePosition, setExperiencePosition] = useState(null)
    const [experiencePositions, setExperiencePositions] = useState(null)

    const [establishment, setEstablishment] = useState('')
    const [wordsTwo, setWordsTwo] = useState('')

    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')

    function searchCities(e) {
        setCitySelected(undefined)
        setCities([])

        let city_name = e.target.value
        let country_code = countrySelect.current.value

        if (city_name.length > 2) {
            if (lastRequest.current != null) lastRequest.current.cancel()

            lastRequest.current = Axios.CancelToken.source()

            setSearching(true)
            axios
                .post(
                    '/api/v1/cities',
                    { city_name, country_code },
                    {
                        cancelToken: lastRequest.current.token,
                    },
                )
                .then(function (res) {
                    setCities(res.data.data)
                    setCitySelected(false)
                    setSearching(false)
                })
        }
    }

    function setCountry(e) {
        setCurrCountry(e.target.value)
        // jobData.country_code = e.target.value
        // companyData.country = e.target.value
        setCitySelected(undefined)
        cityInp.current.value = ''
        cityMainInp.current.value = ''
    }

    function submitHandler(ev) {
        ev.preventDefault()
        const data = {
            fullname,
            birthdate: date,
            gender,
            desired_position: desiredPosition,
            current_position: currentPosition,
            desired_city: cityInp.current.value,
            desired_country: country,
            more_info: words,
            social_links: socialLinks,
        }
        console.log(data)
        setStepOneData(data)
        stepOneUpdate(data)
    }

    function submitHandlerTwo(ev) {
        ev.preventDefault()
        const data = {
            experience_position: experiencePosition,
            establishment,
            date: {
                day,
                month,
                year,
            },
            experience_info: wordsTwo,
        }
        console.log(data)
    }

    function setCityFunc(item, city_name) {
        // jobData.longitude = item.longitude
        // jobData.latitude = item.latitude
        // jobData.city_name = item.id
        setCitySelected(true)
        setCities([])
        cityInp.current.value = item.id
        cityMainInp.current.value = city_name
        // setNewData('city', item.id)
        // document.querySelector('.shown-city-inp').classList.remove('input-error')
    }

    async function fetchPositions(pos, type) {
        if (!pos && type == 'current') setCurrentPositions(null)
        if (!pos && type == 'desired') setDesiredPositions(null)
        if (!pos && type == 'experience') setExperiencePositions(null)
        if (!pos) return
        try {
            const res = await axios.get('api/v1/positions/' + pos)
            if (type == 'current') setCurrentPositions(res.data)
            if (type == 'desired') setDesiredPositions(res.data)
            if (type == 'experience') setExperiencePositions(res.data)
        } catch (error) {}
    }

    let max = new Date().getFullYear()
    let min = max - 100
    let years = []
    for (let index = min; index < max; index++) {
        years.push(<option value={index}>{index}</option>)
    }
    const months = [
        'Jan',
        'Feb',
        'March',
        'April',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ]

    let days = []
    for (let index = 1; index <= 31; index++) {
        days.push(<option value={index}>{index}</option>)
    }

    return (
        <>
            {!stepOneData && (
                <form
                    onSubmit={submitHandler}
                    className={`${styles.form}`}
                    encType="multipart/form-data">
                    <section className={styles.section}>
                        <h4>
                            Quel est votre nom complet ?
                            <span className={styles.redSpan}>*</span>
                        </h4>
                        <div className={styles.inputParent}>
                            <input
                                style={{ marginBottom: '30px' }}
                                type="text"
                                placeholder="Nom complet"
                                value={fullname}
                                onChange={ev => setFullname(ev.target.value)}
                            />
                        </div>
                    </section>
                    <section className={styles.section}>
                        <h4>Quelle est votre date de naissance ?</h4>
                        <div className={styles.inputParent}>
                            <input
                                style={{ marginBottom: '30px' }}
                                type="date"
                                placeholder="Date de naissance"
                                value={date}
                                onChange={ev => setDate(ev.target.value)}
                            />
                        </div>
                    </section>
                    <section
                        className={`${styles.section} ${styles.locationSelect}`}>
                        <h4>Quelle est votre identité de genre ?</h4>
                        <div className={styles.inputParent}>
                            <select
                                style={{ marginBottom: '30px' }}
                                className="required-record"
                                onChange={ev => setGender(ev.target.value)}
                                defaultValue={''}>
                                <option value="" disabled selected>
                                    Identité de genre
                                </option>
                                <option value="Male">Male</option>
                                <option value="Female">Male but with Fe</option>
                            </select>
                        </div>
                    </section>
                    <section className={styles.section}>
                        <h4>
                            Quel poste recherchez-vous ?*
                            <span className={styles.redSpan}>*</span>
                        </h4>
                        <div
                            className={styles.inputParent}
                            style={{ position: 'relative' }}>
                            <input
                                style={{ marginBottom: '30px' }}
                                type="text"
                                placeholder="Intitulé du poste"
                                value={desiredPosition}
                                onChange={ev => {
                                    if (ev.target.value.length > 1)
                                        fetchPositions(
                                            ev.target.value,
                                            'desired',
                                        )
                                    if (ev.target.value.length == 0)
                                        setDesiredPositions(null)
                                    setDesiredPosition(ev.target.value)
                                }}
                            />
                            {desiredPositions && desiredPositions.length > 0 && (
                                <div className={styles.positionsInput}>
                                    {desiredPositions.map(pos => {
                                        return (
                                            <div
                                                onClick={() => {
                                                    setDesiredPositions(null)
                                                    setDesiredPosition(pos.name)
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
                        <h4>Quel est votre poste actuel ?</h4>
                        <div
                            className={styles.inputParent}
                            style={{ position: 'relative' }}>
                            <input
                                style={{ marginBottom: '30px' }}
                                type="text"
                                placeholder="Poste actuel"
                                value={currentPosition}
                                onChange={ev => {
                                    if (ev.target.value.length > 1)
                                        fetchPositions(
                                            ev.target.value,
                                            'current',
                                        )
                                    if (ev.target.value.length == 0)
                                        setCurrentPositions(null)
                                    setCurrentPosition(ev.target.value)
                                }}
                            />
                            {currentPositions && currentPositions.length > 0 && (
                                <div className={styles.positionsInput}>
                                    {currentPositions.map(pos => {
                                        return (
                                            <div
                                                onClick={() => {
                                                    setCurrentPositions(null)
                                                    setCurrentPosition(pos.name)
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
                    <section
                        className={`${styles.section} ${styles.locationSelect}`}>
                        <h4>Où cherchez-vous un emploi ?</h4>
                        <div className={styles.inputParent}>
                            <select
                                ref={countrySelect}
                                onInput={e => setCountry(e)}
                                className="required-record"
                                onChange={e =>
                                    e.target.classList.remove('input-error')
                                }
                                defaultValue={''}>
                                <option value="" disabled>
                                    Pays
                                </option>
                                <option value="CH">Suisse</option>
                                <option value="FR">France</option>
                            </select>

                            <div
                                className={`${styles.cityListHolder} ${styles.filterInputParent}`}>
                                <input
                                    ref={cityMainInp}
                                    className={`shown-city-inp required-record ${
                                        styles.cityInputPadding
                                    } ${
                                        country.length === 0
                                            ? styles.disabledInput
                                            : ''
                                    }`}
                                    type="text"
                                    onInput={e => {
                                        cityInp.current.value = ''
                                        searchCities(e)
                                    }}
                                />
                                <input
                                    id="city"
                                    type="hidden"
                                    ref={cityInp}
                                    className="required-record hidden-city-inp"
                                />
                                <div
                                    className={`${styles.cityList} ${
                                        !citySelected &&
                                        citySelected != undefined &&
                                        cities.length != 0
                                            ? styles.showCityList
                                            : ''
                                    }`}>
                                    {cities != undefined &&
                                        cities.length != 0 &&
                                        cities.map((item, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    onClick={e =>
                                                        setCityFunc(
                                                            item,
                                                            item.city_name,
                                                        )
                                                    }>
                                                    {item.city_name}
                                                </div>
                                            )
                                        })}
                                </div>
                                <img
                                    src="/load-spinner.gif"
                                    alt=""
                                    className={`${styles.loadSpinner} ${
                                        !searching ? 'd-none' : ''
                                    }`}
                                />
                            </div>
                        </div>
                    </section>
                    <section className={styles.section}>
                        <h4>
                            Donnez plus d'informations sur vous aux recruteurs
                        </h4>
                        <div className={styles.textareaParent}>
                            <textarea
                                placeholder="Plus d'informations"
                                className="required-record"
                                onChange={ev => {
                                    setWords(ev.target.value)
                                    // e.target.parentNode.classList.remove('input-error')
                                    // e.target.classList.remove('input-error')
                                }}></textarea>
                            <div className={styles.wordCount}>
                                {words.length} / 1000
                            </div>
                        </div>
                    </section>
                    <section
                        className={`${styles.section} ${styles.socialInputs}`}>
                        <h4>
                            Aidez les chercheurs d'emplois à vous trouver sur
                            les médias sociaux
                        </h4>
                        <div className={styles.inputParent}>
                            <div>
                                <i className="fa-solid fa-earth-americas"></i>
                                <input
                                    type="text"
                                    placeholder="Site web"
                                    value={socialLinks.website}
                                    onChange={ev =>
                                        setSocialLinks({
                                            ...socialLinks,
                                            website: ev.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div>
                                <i className="fa-brands fa-instagram"></i>
                                <input
                                    type="text"
                                    placeholder="Instagram"
                                    value={socialLinks.instagram}
                                    onChange={ev =>
                                        setSocialLinks({
                                            ...socialLinks,
                                            instagram: ev.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div>
                                <i className="fa-brands fa-linkedin"></i>
                                <input
                                    type="text"
                                    placeholder="Linkedin"
                                    value={socialLinks.linkedin}
                                    onChange={ev =>
                                        setSocialLinks({
                                            ...socialLinks,
                                            linkedin: ev.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div>
                                <i className="fa-brands fa-facebook"></i>
                                <input
                                    type="text"
                                    placeholder="Facebook"
                                    value={socialLinks.facebook}
                                    onChange={ev =>
                                        setSocialLinks({
                                            ...socialLinks,
                                            facebook: ev.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div>
                                <i className="fa-brands fa-twitter"></i>
                                <input
                                    type="text"
                                    placeholder="Twitter"
                                    value={socialLinks.twitter}
                                    onChange={ev =>
                                        setSocialLinks({
                                            ...socialLinks,
                                            twitter: ev.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div>
                                <i className="fa-brands fa-pinterest"></i>
                                <input
                                    type="text"
                                    placeholder="Pinterest"
                                    value={socialLinks.pinterest}
                                    onChange={ev =>
                                        setSocialLinks({
                                            ...socialLinks,
                                            pinterest: ev.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div>
                                <i className="fa-brands fa-youtube"></i>
                                <input
                                    type="text"
                                    placeholder="Youtube"
                                    value={socialLinks.youtube}
                                    onChange={ev =>
                                        setSocialLinks({
                                            ...socialLinks,
                                            youtube: ev.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div>
                                <i className="fa-brands fa-tiktok"></i>
                                <input
                                    type="text"
                                    placeholder="TikTok"
                                    value={socialLinks.tiktok}
                                    onChange={ev =>
                                        setSocialLinks({
                                            ...socialLinks,
                                            tiktok: ev.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>
                    </section>
                    <button type="submit">submit</button>
                </form>
            )}
            {stepOneData && !stepTwoData && (
                <form onSubmit={submitHandlerTwo} className={`${styles.form}`}>
                    <section className={styles.section}>
                        <h4>
                            Quel était l'intitulé de votre poste ?{' '}
                            <span className={styles.redSpan}>*</span>
                        </h4>

                        <div
                            className={styles.inputParent}
                            style={{ position: 'relative' }}>
                            <input
                                style={{ marginBottom: '30px' }}
                                type="text"
                                placeholder="Intitulé du poste"
                                value={experiencePosition}
                                onChange={ev => {
                                    if (ev.target.value.length > 1)
                                        fetchPositions(
                                            ev.target.value,
                                            'experience',
                                        )
                                    if (ev.target.value.length == 0)
                                        setExperiencePositions(null)
                                    setExperiencePosition(ev.target.value)
                                }}
                            />
                            {experiencePositions &&
                                experiencePositions.length > 0 && (
                                    <div className={styles.positionsInput}>
                                        {experiencePositions.map(pos => {
                                            return (
                                                <div
                                                    onClick={() => {
                                                        setExperiencePositions(
                                                            null,
                                                        )
                                                        setExperiencePosition(
                                                            pos.name,
                                                        )
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
                            Quel est le nom de l'établissement pour lequel vous
                            avez travaillé ?{' '}
                            <span className={styles.redSpan}>*</span>
                        </h4>
                        <div className={styles.inputParent}>
                            <input
                                style={{ marginBottom: '30px' }}
                                type="text"
                                placeholder="Nom de l'établissement"
                                value={establishment}
                                onChange={ev =>
                                    setEstablishment(ev.target.value)
                                }
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
                                    value={day}
                                    onChange={ev => setDay(ev.target.value)}
                                    style={{
                                        marginBottom: '30px',
                                        width: '100%',
                                    }}
                                    className="required-record"
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
                                    value={month}
                                    onChange={ev => setMonth(ev.target.value)}
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
                                    {months.map((m, i) => (
                                        <option value={i + 1}>{m}</option>
                                    ))}
                                </select>
                            </div>
                            <div
                                className={styles.inputParent}
                                style={{ width: '30%' }}>
                                <select
                                    style={{
                                        marginBottom: '30px',
                                        width: '100%',
                                    }}
                                    className="required-record"
                                    value={year}
                                    onChange={ev => setYear(ev.target.value)}
                                    // onChange={ev => setGender(ev.target.value)}
                                >
                                    <option value="" disabled selected>
                                        AAAA
                                        <span className={styles.redSpan}>
                                            *
                                        </span>
                                    </option>
                                    {years.map(y => y)}
                                </select>
                            </div>
                        </div>
                    </section>
                    <section className={styles.section}>
                        <h4>
                            Souhaitez-vous ajouter plus d'informations sur votre
                            expérience avec l'établissement ?
                        </h4>
                        <div className={styles.textareaParent}>
                            <textarea
                                placeholder="Expérience avec l'établissement"
                                className="required-record"
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
                    <button type="submit">submit</button>
                </form>
            )}
            {stepOneData && stepTwoData && !stepThreeData && <div>heeh3</div>}
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
