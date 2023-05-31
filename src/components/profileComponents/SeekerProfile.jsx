import { useState } from 'react'
import Header from '../../pages/header'
import styles from '../../styles/profile/profile.module.css'
import { FaSearch } from 'react-icons/fa'
import Filter from '../../components/jobsComponents/Filter.jsx'
import ThreeDotsIcon from '@/icons/ThreeDotsIcon'

export default function index({ isLogged, user, profile }) {
    const [expanded, setExpanded] = useState(false)
    const [chosen, setChosenCity] = useState(null)

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
                    <p>Chef de rangs &gt Candidat</p>
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
        </div>
    )
}
