import { useState } from 'react'
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

export default function index({ isLogged, user, profile }) {
    const [expanded, setExpanded] = useState(false)
    const [chosen, setChosenCity] = useState(null)

    const [establishmentInput, setEstablishmentInput] = useState('')
    const [reccommendationText, setReccommendationText] = useState('')
    const [terms, setTerms] = useState(false)
    const [termsClicked, setTermsClicked] = useState(0)

    function filterSubmit(ev) {
        ev.preventDEfault()
        console.log('ok')
    }

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
    return (
        <div>
            <Header isLogged={isLogged} user={user} profile={profile} />
            <div className={styles.fakeHeader}></div>
            <div className={styles.mainWrapper}>
                <div className={styles.searchPlace}>
                    <p style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>
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
                <div className={styles.candidatName}>Lorem ipsum</div>
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
                            <p>
                                <span style={{ marginRight: '5px' }}>
                                    {' '}
                                    <ThreeDotsIcon />
                                </span>
                                Paris, France
                            </p>
                        </div>
                        <div className={styles.candidatDetailsSmallBox}>
                            <p style={{ fontWeight: '700' }}>Poste</p>
                            <p>Chef</p>
                        </div>
                        <div className={styles.candidatDetailsSmallBox}>
                            <p style={{ fontWeight: '700' }}>
                                Date d'anniversaire
                            </p>
                            <p>05/05/1991</p>
                        </div>
                        <div className={styles.candidatDetailsSmallBox}>
                            <p style={{ fontWeight: '700' }}>
                                Identité de genre
                            </p>
                            <p>Female</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.experience} ${styles.borderBottomHalf}`}>
                <SocialLinks />
                <div className={styles.experienceName}>
                    EXPÉRIENCE PROFESSIONNELLE
                </div>
                <div
                    style={{
                        alignSelf: 'start',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '40px',
                    }}>
                    <div className={styles.experienceSubConatainer}>
                        <p style={{ fontWeight: '700', fontSize: '18px' }}>
                            Au Pain Perdu
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginRight: '5px',
                            }}>
                            <div className={styles.experienceSubSubContainer}>
                                <p>09/2017 - 12/2022</p>
                                <p>Chef</p>
                            </div>
                        </div>
                    </div>
                </div>
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
                    <div className={styles.experienceSubConatainer}>
                        <p style={{ fontWeight: '700', fontSize: '18px' }}>
                            Le Cordon Bleu Paris
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginRight: '5px',
                            }}>
                            <div className={styles.experienceSubSubContainer}>
                                <p>07/2017</p>
                                <p>Diploma - Cuisine, Culinary Arts</p>
                            </div>
                        </div>
                    </div>
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
                            <p style={{ fontSize: '14px' }}>
                                J'ai une passion pour la cuisine et le travail
                                en équipe pour faire passer de délicieux
                                concepts de l'esprit d'un chef à l'assiette d'un
                                restaurant. Avec plusieurs années d'expérience
                                de formation auprès de grands chefs dans
                                plusieurs régions, j'ai appris une variété de
                                compétences et de plats nécessaires dans une
                                cuisine occupée. Je suis le candidat idéal pour
                                le poste de cuisinier à la chaîne disponible
                                dans votre restaurant. Un cuisinier à la chaîne
                                doit avoir d'excellentes capacités de
                                communication ainsi que de la créativité, de la
                                dextérité et de l'endurance. La capacité à
                                travailler en équipe est nécessaire dans une
                                cuisine efficace. Mon expérience professionnelle
                                m'a appris à gérer une variété de commandes, à
                                communiquer sur les besoins des clients et à
                                être un membre efficace d'une équipe tout en
                                exécutant les compétences nécessaires à la
                                réalisation de plats fantastiques. Mon permis et
                                ma formation en matière de sécurité sanitaire
                                sont tous à jour et je suis prêt à commencer à
                                travailler dans cet État immédiatement.
                                J'attends avec impatience votre réponse et je me
                                réjouis de pouvoir discuter de ma candidature
                                avec vous lors d'un entretien. Je vous remercie
                                de votre temps et de votre attention.
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
                            <FeedbackStars />
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
                    Avez-vous travaillé avec Anna Augustin ? Laissez un
                    recommandation.
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
                            placeholder="Nom de l'établissement*"
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
