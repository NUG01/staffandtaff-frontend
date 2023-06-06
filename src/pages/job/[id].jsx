import ClockIcon from '@/icons/ClockIcon'
import FranceIcon from '@/icons/FranceIcon'
import HeartIcon from '@/icons/HeartIcon'
import LocationIcon from '@/icons/LocationIcon'
import MoneyIcon from '@/icons/MoneyIcon'
import SwitzerlandIcon from '@/icons/SwitzerlandIcon'
import ThreeDotsIcon from '@/icons/ThreeDotsIcon'
import Footer from '@/pages/footer'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import Filter from '../../components/jobsComponents/Filter.jsx'
import FeedbackStars from '../../components/profileComponents/FeedbackStars'
import Header from '../../pages/header'
import styles from '../../styles/profile/profile.module.css'

export default function index({ isLogged, user, profile }) {
    const [expanded, setExpanded] = useState(false)
    const [chosen, setChosenCity] = useState(null)
    const [feedbackCount, setFeedbackCount] = useState(0)

    const array = ['one', 'two', 'three', 'four', 'five']

    function filterSubmit(ev) {
        ev.preventDEfault()
        console.log('ok')
    }

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
                        Profil &gt; Mes établissements &gt;
                        <span style={{ color: '#472E23' }}> Chef de rang</span>
                    </p>
                </div>
                <div className={styles.candidatName}>
                    <div>Chef de rang</div>
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
                        <p style={{ fontSize: '18px', fontWeight: '700' }}>
                            Détails de l'offre d'emploi
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '20px',
                            }}>
                            <HeartIcon />
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
                className={styles.establishmentsGrid}
                style={{
                    backgroundColor: '#F8F0EB',
                    padding: '45px 35px',
                    width: '100%',
                }}>
                {array.map(est => {
                    return (
                        <div
                            className={styles.extablishmentItem}
                            style={{ padding: '20px', overflowX: 'hidden' }}>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}>
                                <p
                                    style={{
                                        color: '#000',
                                        fontWeight: '700',
                                        fontSize: '18px',
                                    }}>
                                    Chef de rang
                                </p>
                                <div>
                                    <HeartIcon />
                                </div>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'start',
                                    justifyContent: 'center',
                                    gap: '10px',
                                    marginTop: '6px',
                                }}>
                                <p style={{ fontSize: '14px' }}>
                                    Restaurant Gourmet
                                </p>
                            </div>
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gridTemplateRows: '1fr 1fr',
                                    marginTop: '20px',
                                    gap: '10px',
                                }}>
                                <div
                                    style={{
                                        display: 'flex',
                                    }}>
                                    <span
                                        style={{
                                            marginRight: '5px',
                                            alignItems: 'center',
                                        }}>
                                        {'FR' == 'FR' ? (
                                            <FranceIcon />
                                        ) : (
                                            <SwitzerlandIcon />
                                        )}
                                    </span>
                                    <p>
                                        {'FR' == 'FR'
                                            ? 'France'
                                            : 'Switzerland'}
                                        , {'Paris'}
                                    </p>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                    }}>
                                    <span
                                        style={{
                                            marginRight: '5px',
                                            alignItems: 'center',
                                        }}>
                                        <LocationIcon />
                                    </span>
                                    <p>Présentiel</p>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                    }}>
                                    <span
                                        style={{
                                            marginRight: '5px',
                                            alignItems: 'center',
                                        }}>
                                        <MoneyIcon />
                                    </span>
                                    <p>€3200-3500</p>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                    }}>
                                    <span
                                        style={{
                                            marginRight: '5px',
                                            alignItems: 'center',
                                        }}>
                                        <ClockIcon />
                                    </span>
                                    <p>Temps plein</p>
                                </div>
                            </div>
                            <p
                                style={{
                                    color: '#757575',
                                    fontSize: '12px',
                                    marginTop: '15px',
                                    marginBottom: '20px',
                                }}>
                                Il y a 2 jours
                            </p>
                        </div>
                    )
                })}
            </div>

            <Footer noMarginToP={true} />
        </div>
    )
}
