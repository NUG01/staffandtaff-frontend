import { useState, useEffect } from 'react'
import Header from '../../pages/header'
import styles from '../../styles/profile/profile.module.css'
import { FaSearch } from 'react-icons/fa'
import Filter from '../../components/jobsComponents/Filter.jsx'
import ThreeDotsIcon from '@/icons/ThreeDotsIcon'
import SocialLinks from './SocialLinks'
import FeedbackStars from './FeedbackStars'
import Footer from '@/pages/footer'
import BuildingIcon from '@/icons/BuildingIcon'
import useCheckRequired from '@/hooks/requiredInputs'
import FranceIcon from '@/icons/FranceIcon'
import SwitzerlandIcon from '@/icons/SwitzerlandIcon'
import axios from '@/lib/axios'

export default function index({ isLogged, user, profile }) {
    const [expanded, setExpanded] = useState(false)
    const [chosen, setChosenCity] = useState(null)

    const [data, setData] = useState(null)
    const [socialLinks, setSocialLinks] = useState(null)
    const [isFetched, setIsFetched] = useState(false)

    const [establishmentInput, setEstablishmentInput] = useState('')
    const [reccommendationText, setReccommendationText] = useState('')
    const [terms, setTerms] = useState(false)
    const [termsClicked, setTermsClicked] = useState(0)

    function filterSubmit(ev) {
        ev.preventDEfault()
        console.log('ok')
    }

    console.log(data)

    function submitHandler(ev) {
        ev.preventDefault()
        setTermsClicked(terms + 1)
        const validated = useCheckRequired({
            parentClass: 'seeker-profile',
        })

        if (!validated || !terms || termsClicked == 0) {
            return
        } else {
            console.log('wow')
        }
    }

    useEffect(() => {
        axios.get('api/v1/seeker-information/' + user.data.id).then(res => {
            setData(res.data.data)
            setSocialLinks(res.data.social_links[0])
            setIsFetched(true)
        })
    }, [])
    function convertDate(date, day = 1) {
        let parts = date.split('-')
        let formattedDate
        if (day) formattedDate = parts[2] + '/' + parts[1] + '/' + parts[0]
        if (!day) formattedDate = parts[1] + '/' + parts[0]
        return formattedDate
    }

    if (!isFetched) return
    return (
        <div>
            <Header isLogged={isLogged} user={user} profile={profile} />
            <div className={styles.fakeHeader}></div>
            <div className={styles.mainWrapper}>
                <div className={styles.searchPlace}>
                    <p
                        style={{
                            textAlign: 'center',
                            wordBreak: 'break-word',
                        }}>
                        Texte énumérant tous les avantages de la plateforme et
                        invitant l'utilisateur à s'inscrire en ligne.
                    </p>
                    <form
                        onSubmit={filterSubmit}
                        className={styles.searchContainer}>
                        <div className={styles.filterHolder}>
                            <input
                                type="text"
                                placeholder="Trouver un emploi près de chez soi"
                                id="search"
                            />
                        </div>
                        <FaSearch className={styles.searchButton} />
                        <div
                            className={styles.filterButton}
                            // onClick={() => checkExpandedFilter()}
                        >
                            <img src="/filter.png" alt="" />
                        </div>
                        <button>
                            <span>RECHERCHE</span>
                            <FaSearch className={styles.mobileSearchButton} />
                        </button>
                        <Filter
                        // expanded={expanded}
                        // setChosenCity={setChosenCity}
                        />
                    </form>
                </div>
            </div>
            <div className={`${styles.candidat} ${styles.borderBottom}`}>
                <div className={styles.navigationPath}>
                    <p>
                        Chef de rangs &gt;
                        <span style={{ color: '#472E23' }}> Candidat</span>
                    </p>
                </div>
                <div className={styles.candidatName}>
                    {data.seeker_info.fullname}
                </div>
                <div style={{ width: '100%' }}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '30px',
                        }}>
                        <p style={{ fontSize: '18px' }}>
                            Informations Personnelles
                        </p>
                        <div>
                            <ThreeDotsIcon />
                        </div>
                    </div>
                    <div className={styles.candidatDetailsContainer}>
                        <div className={styles.candidatDetailsSmallBox}>
                            <p style={{ fontWeight: '700' }}>Ville, Pays</p>
                            <div
                                style={{
                                    display: 'flex',
                                }}>
                                <span
                                    style={{
                                        marginRight: '5px',
                                        alignItems: 'center',
                                    }}>
                                    {data.seeker_info.desired_country ==
                                    'FR' ? (
                                        <FranceIcon />
                                    ) : (
                                        <SwitzerlandIcon />
                                    )}
                                </span>
                                <p>
                                    {data.seeker_info.desired_country == 'FR'
                                        ? 'France'
                                        : 'Switzerland'}
                                    , {data.seeker_info.desired_city}
                                </p>
                            </div>
                        </div>
                        <div className={styles.candidatDetailsSmallBox}>
                            <p style={{ fontWeight: '700' }}>Poste</p>
                            <p>{data.seeker_info.current_position}</p>
                        </div>
                        <div className={styles.candidatDetailsSmallBox}>
                            <p style={{ fontWeight: '700' }}>
                                Date d'anniversaire
                            </p>
                            <p>{convertDate(data.seeker_info.birthdate)}</p>
                        </div>
                        <div className={styles.candidatDetailsSmallBox}>
                            <p style={{ fontWeight: '700' }}>
                                Identité de genre
                            </p>
                            <p>{data.seeker_info.gender}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`${styles.experience} ${styles.borderBottomHalf}`}
                style={{ gap: '40px' }}>
                <SocialLinks data={socialLinks} />
                <div className={styles.experienceName}>
                    EXPÉRIENCE PROFESSIONNELLE
                </div>
                {data.seeker_info.experiences.map(exp => {
                    return (
                        <div
                            style={{
                                alignSelf: 'start',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '40px',
                            }}>
                            <div className={styles.experienceSubConatainer}>
                                <p
                                    style={{
                                        fontWeight: '700',
                                        fontSize: '18px',
                                    }}>
                                    {exp.establishment}
                                </p>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '5px',
                                    }}>
                                    <div
                                        className={
                                            styles.experienceSubSubContainer
                                        }>
                                        <p>
                                            {convertDate(exp.start_date, 0)} -{' '}
                                            {convertDate(exp.end_date, 0)}
                                        </p>
                                        <p>{exp.position}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={`${styles.experience} ${styles.borderBottomHalf}`}>
                <div className={styles.experienceName}>ÉDUCATION</div>
                <div
                    style={{
                        alignSelf: 'start',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '40px',
                    }}>
                    {data.seeker_info.educations.map(edu => {
                        return (
                            <div className={styles.experienceSubConatainer}>
                                <p
                                    style={{
                                        fontWeight: '700',
                                        fontSize: '18px',
                                    }}>
                                    {edu.field_of_study}
                                </p>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '5px',
                                    }}>
                                    <div
                                        className={
                                            styles.experienceSubSubContainer
                                        }>
                                        <p>
                                            {convertDate(
                                                edu.graduation_date,
                                                0,
                                            )}
                                        </p>
                                        <p>{edu.certification_type}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={`${styles.experience}`}>
                <div className={styles.experienceName}>
                    {' '}
                    LETTRE DE MOTIVATION
                </div>
                <div
                    style={{
                        alignSelf: 'start',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '40px',
                    }}>
                    <div className={styles.experienceSubConatainer}>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginRight: '5px',
                            }}>
                            <p
                                style={{
                                    fontSize: '14px',
                                    wordBreak: 'break-word',
                                }}>
                                {data.seeker_info.cover_letter}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.reccommendations} ${styles.borderTop}`}>
                <div
                    className={styles.reccommenationName}
                    style={{ textTransform: 'uppercase' }}>
                    Recommandations
                </div>
                <p style={{ fontSize: '14px' }}>2 avis</p>
                <div
                    style={{
                        alignSelf: 'start',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '40px',
                    }}>
                    <div
                        className={`${styles.reccommenationItem} ${styles.borderBottom}`}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px',
                            }}>
                            <p style={{ fontWeight: '700' }}>
                                Restaurant Gourmet
                            </p>
                            <p style={{ fontSize: '14px' }}>
                                J'ai le plaisir de recommander Anna Augustin,
                                qui a travaillé comme cuisinier sous ma
                                supervision au restaurant ABC depuis son
                                ouverture en 2008. De notre collaboration, je
                                peux conclure que Robin a une forte motivation
                                pour les sciences culinaires et qu'il est
                                certainement le meilleur cuisinier polyvalent de
                                l'État !
                            </p>
                            <p
                                style={{
                                    color: '#757575',
                                    fontSize: '12px',
                                }}>
                                2023-04-27
                            </p>
                        </div>
                    </div>
                    <div
                        className={`${styles.reccommenationItem} ${styles.borderBottom}`}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px',
                            }}>
                            <p style={{ fontWeight: '700' }}>Hôtel Grandiose</p>
                            <FeedbackStars rating={4} />
                            <p style={{ fontSize: '14px' }}>
                                J'aimerais profiter de l'occasion pour
                                recommander Anna Augustin pour le personnel de
                                cuisine de votre organisation.
                                <br />
                                La cuisine n'est pas seulement son travail,
                                c'est aussi sa passion. Elle n'a jamais essayé
                                de rester des heures durant devant la flamme du
                                feu. Elle a une grande résistance et un esprit
                                fort. Elle n'a jamais abandonné son travail sous
                                les critiques des autres.
                                <br />
                                Elle possède toutes les qualités qui font d'elle
                                une bonne employée de cuisine. J'espère donc que
                                vous tiendrez compte de ma recommandation et que
                                vous lui donnerez une chance d'exprimer ses
                                compétences.
                            </p>
                            <p
                                style={{
                                    color: '#757575',
                                    fontSize: '12px',
                                }}>
                                2023-04-27
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <form
                onSubmit={submitHandler}
                className={`${styles.reccommendations} seeker-profile`}>
                <div
                    className={styles.reccommenationName}
                    style={{ fontSize: '18px', fontWeight: '800' }}>
                    Laisser une recommandation
                </div>
                <p style={{ fontSize: '14px', marginBottom: '10px' }}>
                    Avez-vous travaillé avec {data.seeker_info.fullname}?
                    Laissez un recommandation.
                </p>
                <div
                    style={{
                        alignSelf: 'start',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '40px',
                        width: '100%',
                    }}>
                    <div className={styles.inputContainer}>
                        <div className={styles.building}>
                            <BuildingIcon />
                        </div>
                        <input
                            value={establishmentInput}
                            onChange={ev => {
                                ev.target.classList.remove('input-error')
                                setEstablishmentInput(ev.target.value)
                            }}
                            placeholder="Nom de l'établissement*"
                            type="text"
                            className={`${styles.input} required-record`}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <textarea
                            value={reccommendationText}
                            onChange={ev => {
                                ev.target.classList.remove('input-error')
                                setReccommendationText(ev.target.value)
                            }}
                            placeholder="Recommandation*"
                            type="text"
                            className={`${styles.textarea} required-record`}
                        />
                    </div>
                </div>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'start',
                        justifyContent: 'start',

                        marginTop: '0',
                    }}
                    className={styles.checkbox}>
                    <input
                        className={`${styles.checkboxInput}`}
                        // onClick={() => setGraduationStatus(!graduationStatus)}
                        type="checkbox"
                        id={`checkbox-18`}
                        onChange={ev => setTerms(!terms)}
                        style={{ display: 'inline-block', width: '20px' }}
                    />
                    <label
                        htmlFor={`checkbox-18`}
                        style={{
                            color:
                                terms == false && termsClicked > 0
                                    ? '#D52B1E'
                                    : '#000',
                        }}>
                        J'accepte les{' '}
                        <span
                            style={{
                                fontWeight: '700',
                                textDecoration: 'underline',
                            }}>
                            Termes et Conditions
                        </span>{' '}
                        et la &nbsp;
                        <span
                            style={{
                                fontWeight: '700',
                                textDecoration: 'underline',
                            }}>
                            Politique de Confidentialité
                        </span>
                        <span style={{ color: '#D52B1E' }}>*</span>
                    </label>
                </div>
                <button type="submit" className={styles.button}>
                    ENVOYER
                </button>
            </form>
            <Footer />
        </div>
    )
}
