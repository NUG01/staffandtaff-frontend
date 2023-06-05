import { useState, useEffect } from 'react'
import Header from '../../pages/header'
import styles from '../../styles/profile/profile.module.css'
import { FaSearch } from 'react-icons/fa'
import Filter from '../../components/jobsComponents/Filter.jsx'
import ThreeDotsIcon from '@/icons/ThreeDotsIcon'
import SocialLinks from '../../components/profileComponents/SocialLinks'
import FeedbackStars from '../../components/profileComponents/FeedbackStars'
import Footer from '@/pages/footer'
import BuildingIcon from '@/icons/BuildingIcon'
import useCheckRequired from '@/hooks/requiredInputs'
import FranceIcon from '@/icons/FranceIcon'
import SwitzerlandIcon from '@/icons/SwitzerlandIcon'
import axios from '@/lib/axios'
import EmptyStarIcon from '@/icons/EmptyStarIcon'
import GalleryIcon from '@/icons/GalleryIcon'

export default function index({ isLogged, user, profile }) {
    const [expanded, setExpanded] = useState(false)
    const [chosen, setChosenCity] = useState(null)
    const [feedbackCount, setFeedbackCount] = useState(0)

    console.log(user)

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

    // useEffect(() => {
    //     axios.get('api/v1/seeker-information/' + user.data.id).then(res => {
    //         setData(res.data.data)
    //         setSocialLinks(res.data.social_links[0])
    //         setIsFetched(true)
    //     })
    // }, [])
    function convertDate(date, day = 1) {
        let parts = date.split('-')
        let formattedDate
        if (day) formattedDate = parts[2] + '/' + parts[1] + '/' + parts[0]
        if (!day) formattedDate = parts[1] + '/' + parts[0]
        return formattedDate
    }

    // if (!isFetched) return
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
                        <span style={{ color: '#472E23' }}>
                            {' '}
                            Restaurant Gourmet
                        </span>
                    </p>
                </div>
                <div className={styles.candidatName}>
                    <div>Restaurant Gourmet</div>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '10px',
                        }}>
                        <FeedbackStars rating={4} />
                    </div>
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
                            Détails de l'offre d'emploi
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
                                    {true ? (
                                        <FranceIcon />
                                    ) : (
                                        <SwitzerlandIcon />
                                    )}
                                </span>
                                <p>{true ? 'France' : 'Switzerland'}, Paris</p>
                            </div>
                        </div>
                        <div className={styles.candidatDetailsSmallBox}>
                            <p style={{ fontWeight: '700' }}>Salaire</p>
                            <p>€3200-3500</p>
                        </div>
                        <div className={styles.candidatDetailsSmallBox}>
                            <p style={{ fontWeight: '700' }}>Type de contrat</p>
                            <p>Présentiel</p>
                        </div>
                        <div className={styles.candidatDetailsSmallBox}>
                            <p style={{ fontWeight: '700', opacity: '0' }}>
                                Temps plein
                            </p>
                            <p>Temps plein</p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`${styles.experience} ${styles.borderBottomHalf}`}
                style={{ gap: '40px' }}>
                {/* <SocialLinks data={socialLinks} /> */}
                <div style={{ marginBottom: '30px' }}>
                    <p
                        style={{
                            color: '#000',
                            fontWeight: '700',
                            fontSize: '18px',
                            marginBottom: '20px',
                        }}>
                        Description
                    </p>
                    <p
                        style={{
                            color: '#000',
                            fontSize: '14px',
                        }}>
                        Restaurant Gourmet est une véritable brasserie
                        Française, chaleureuse et vivante. Animée tout au long
                        de la journée, on s’y retrouve pour déjeuner ou dîner
                        dans la grande salle au design Française et déguster le
                        célèbre saumon, ou pour siroter un cocktail autour de
                        l’immense bar central en marbre vert. Aux beaux jours,
                        on profite de la terrasse cachée pour un repas Française
                        à l'abri de l'agitation de l'avenue au sein de la Maison
                        du France. Un voiturier est à votre disposition. Le
                        restaurant est ouvert le dimanche.
                    </p>
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'start',
                        width: '100%',
                        flexDirection: 'column',
                        gap: '20px',
                    }}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                        }}>
                        <p
                            style={{
                                color: '#000',
                                fontWeight: '700',
                                fontSize: '18px',
                            }}>
                            Photos de l'établissement
                        </p>
                        <GalleryIcon></GalleryIcon>
                    </div>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(5, 1fr)',
                            gap: '10px',
                        }}>
                        <img
                            style={{ width: '100%' }}
                            src="/user2.png"
                            alt="Establishment images"
                        />
                        <img
                            style={{ width: '100%' }}
                            src="/user2.png"
                            alt="Establishment images"
                        />
                        <img
                            style={{ width: '100%' }}
                            src="/user2.png"
                            alt="Establishment images"
                        />
                        <img
                            style={{ width: '100%' }}
                            src="/user2.png"
                            alt="Establishment images"
                        />
                        <img
                            style={{ width: '100%' }}
                            src="/user2.png"
                            alt="Establishment images"
                        />
                        <img
                            style={{ width: '100%' }}
                            src="/user2.png"
                            alt="Establishment images"
                        />
                    </div>
                </div>
            </div>
            <div className={`${styles.experience} ${styles.borderBottomHalf}`}>
                very first hii
            </div>

            <form
                onSubmit={submitHandler}
                className={`${styles.reccommendations} seeker-profile`}>
                <div
                    className={styles.reccommenationName}
                    style={{ fontSize: '18px', fontWeight: '800' }}>
                    Laisser un commentaire
                </div>
                <p style={{ fontSize: '14px', marginBottom: '10px' }}>
                    Avez-vous travaillé avec Restaurant Gourmet ? Laissez un
                    commentaire sur votre expérience.
                </p>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px',
                        gap: '3px',
                    }}>
                    <EmptyStarIcon
                        clickStar={value => setFeedbackCount(value)}
                        id="1"
                        fill={feedbackCount >= 1}></EmptyStarIcon>
                    <EmptyStarIcon
                        clickStar={value => setFeedbackCount(value)}
                        id="2"
                        fill={feedbackCount >= 2}></EmptyStarIcon>
                    <EmptyStarIcon
                        clickStar={value => setFeedbackCount(value)}
                        id="3"
                        fill={feedbackCount >= 3}></EmptyStarIcon>
                    <EmptyStarIcon
                        clickStar={value => setFeedbackCount(value)}
                        id="4"
                        fill={feedbackCount >= 4}></EmptyStarIcon>
                    <EmptyStarIcon
                        clickStar={value => setFeedbackCount(value)}
                        id="5"
                        fill={feedbackCount >= 5}></EmptyStarIcon>
                </div>
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
                            placeholder="Nom complet*"
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
                            placeholder="Message*"
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
