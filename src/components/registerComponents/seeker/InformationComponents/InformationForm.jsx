import { useState, useRef, useEffect } from 'react'
import styles from '../../../../styles/register/register.module.css'
import axios from '@/lib/axios'
import Axios from 'axios'
import useCheckRequired from '@/hooks/requiredInputs'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function InformationForm({ stepOneUpdateEmit }) {
    const [stepOneData, setStepOneData] = useState('')

    const [fullname, setFullname] = useState('')
    const [date, setDate] = useState('')
    const [gender, setGender] = useState('')
    const [desiredPosition, setDesiredPosition] = useState('')
    const [currentPosition, setCurrentPosition] = useState('')
    const [currentPositions, setCurrentPositions] = useState(null)
    const [desiredPositions, setDesiredPositions] = useState(null)
    const [country, setCurrCountry] = useState('')

    const [cities, setCities] = useState()
    const [citySelected, setCitySelected] = useState()

    const [words, setWords] = useState('')
    const [searching, setSearching] = useState(false)

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

    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)

    const [startPickerDate, setStartPickerDate] = useState(null)
    const [endPickerDate, setEndPickerDate] = useState(null)

    const cityInp = useRef()
    const cityMainInp = useRef()
    const countrySelect = useRef()
    const lastRequest = useRef(null)

    function setCountry(e) {
        setCurrCountry(e.target.value)
        // jobData.country_code = e.target.value
        // companyData.country = e.target.value
        setCitySelected(undefined)
        cityInp.current.value = ''
        cityMainInp.current.value = ''
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

    function submitHandler(ev) {
        ev.preventDefault()
        const validated = useCheckRequired({
            parentClass: 'seeker-step-one-register',
        })

        if (!validated) {
            scrollTo(0, 0)
            return
        }
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
        stepOneUpdateEmit(data)
    }

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

    async function fetchPositions(pos, type) {
        if (!pos && type == 'current') setCurrentPositions(null)
        if (!pos && type == 'desired') setDesiredPositions(null)
        if (!pos) return
        try {
            const res = await axios.get('api/v1/positions/' + pos)
            if (type == 'current') setCurrentPositions(res.data)
            if (type == 'desired') setDesiredPositions(res.data)
        } catch (error) {}
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

    return (
        <form
            onSubmit={submitHandler}
            className={`${styles.form} seeker-step-one-register`}
            encType="multipart/form-data">
            <section className={styles.section}>
                <h4>
                    Quel est votre nom complet ?
                    <span className={styles.redSpan}>*</span>
                </h4>
                <div className={styles.inputParent}>
                    <input
                        className="required-record"
                        style={{ marginBottom: '30px' }}
                        type="text"
                        placeholder="Nom complet"
                        value={fullname}
                        onChange={ev => {
                            ev.target.classList.remove('input-error')
                            setFullname(ev.target.value)
                        }}
                    />
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.datePickerHolder}>
                    <DatePicker
                        selected={endPickerDate}
                        onKeyDown={e => {
                            e.preventDefault()
                        }}
                        onChange={date => updateDate(date, true)}
                        dateFormat="dd/MM/yyyy"
                        showYearDropdown
                        scrollableMonthYearDropdown
                        placeholderText="jj/mm/aaaa"
                    />
                    <img
                        src="/datepicker.png"
                        alt=""
                        className={styles.datePickerImg}
                    />
                </div>
            </section>
            <section className={`${styles.section} ${styles.locationSelect}`}>
                <h4>Quelle est votre identité de genre ?</h4>
                <div className={styles.inputParent}>
                    <select
                        style={{ marginBottom: '30px' }}
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
                        className="required-record"
                        placeholder="Intitulé du poste"
                        value={desiredPosition}
                        onChange={ev => {
                            ev.target.classList.remove('input-error')
                            if (ev.target.value.length > 1)
                                fetchPositions(ev.target.value, 'desired')
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
                                fetchPositions(ev.target.value, 'current')
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
            <section className={`${styles.section} ${styles.locationSelect}`}>
                <h4>Où cherchez-vous un emploi ?</h4>
                <div className={styles.inputParent}>
                    <select
                        ref={countrySelect}
                        onInput={e => setCountry(e)}
                        className="required-record"
                        onChange={e => e.target.classList.remove('input-error')}
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
                                country.length === 0 ? styles.disabledInput : ''
                            }`}
                            type="text"
                            onChange={ev =>
                                ev.target.classList.remove('input-error')
                            }
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
                <h4>Donnez plus d'informations sur vous aux recruteurs</h4>
                <div className={styles.textareaParent}>
                    <textarea
                        placeholder="Plus d'informations"
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
            <section className={`${styles.section} ${styles.socialInputs}`}>
                <h4>
                    Aidez les chercheurs d'emplois à vous trouver sur les médias
                    sociaux
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
            {/* <button type="submit">submit</button> */}
            <button
                type="submit"
                className={styles.nextButton}
                // onClick={() => sendJobData()}
            >
                suivant
                <i className="fa-solid fa-chevron-right"></i>
            </button>
        </form>
    )
}
