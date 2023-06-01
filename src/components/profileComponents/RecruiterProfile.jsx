import React from 'react'
import Header from '@/pages/header'
import styles from '../../styles/profile/profile.module.css'
import MailIcon from '@/icons/MailIcon'
import Footer from '@/pages/footer'
import ThreeDotsIcon from '@/icons/ThreeDotsIcon'
import FeedbackStars from './FeedbackStars'
import FranceIcon from '@/icons/FranceIcon'
import SwitzerlandIcon from '@/icons/SwitzerlandIcon'
import ButtonPlusIcon from '@/icons/ButtonPlusIcon'
import MoneyIcon from '@/icons/MoneyIcon'
import LocationIcon from '@/icons/LocationIcon'
import ClockIcon from '@/icons/ClockIcon'
import IdCardIcon from '@/icons/IdCardIcon'

export default function RecruiterProfile({ isLogged, user, profile }) {
    return (
        <div>
            <Header isLogged={isLogged} user={user} profile={profile} />
            <div className={styles.fakeHeader}></div>
            <div
                className={`${styles.candidat} ${styles.borderBottom}`}
                style={{ backgroundColor: '#fff8f4' }}>
                <div className={styles.navigationPath}>
                    <p>
                        Emplois &gt;
                        <span style={{ color: '#472E23' }}> Mon profil</span>
                    </p>
                </div>
                <div
                    className={styles.candidatName}
                    style={{ marginBottom: '40px' }}>
                    Mon profil
                </div>
                <p
                    style={{
                        fontSize: '14px',
                        marginBottom: '10px',
                        textAlign: 'center',
                    }}>
                    Les dernières nouvelles vous seront communiquées par
                    <br /> le biais de cette adresse mail.
                </p>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        marginTop: '30px',
                        marginBottom: '20px',
                    }}>
                    <MailIcon></MailIcon>

                    <p
                        style={{
                            fontSize: '14px',
                            textAlign: 'center',
                            fontWeight: '700',
                        }}>
                        exemple@staffandtaff.com
                    </p>
                </div>
            </div>
            <div
                className={`${styles.establishments} ${styles.borderBottom}`}
                style={{ backgroundColor: '#fff8f4' }}>
                <div
                    className={`${styles.candidatName} ${styles.establishmentAfter}`}
                    style={{ marginBottom: '40px' }}>
                    Mes établissements
                </div>
                <div className={styles.establishmentsGrid}>
                    <div
                        className={styles.extablishmentItem}
                        style={{ padding: '20px' }}>
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
                                    textDecoration: 'underline',
                                }}>
                                Restaurant Gourmet
                            </p>
                            <div>
                                <ThreeDotsIcon />
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
                            <p style={{ fontSize: '14px' }}>Restaurant</p>
                            <FeedbackStars rating={4} />
                        </div>
                        <div style={{ marginTop: '20px' }}>
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
                                    {'FR' == 'FR' ? 'France' : 'Switzerland'},{' '}
                                    {'Paris'}
                                </p>
                            </div>
                            <p style={{ fontSize: '14px', marginTop: '10px' }}>
                                Restaurant Gourmet est un établissement pour les
                                personnes à la recherche d'un emploi, d'une
                                formation ou d'un conseil professionnel.
                            </p>
                        </div>
                        <button
                            className={styles.establishmentItemButton}
                            type="button">
                            <span>
                                <ButtonPlusIcon />
                            </span>
                            <p>PUBLIER UN EMPLOI</p>
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={`${styles.establishments}`}
                style={{ backgroundColor: '#fff8f4' }}>
                <div
                    className={`${styles.candidatName} ${styles.establishmentAfter}`}
                    style={{ marginBottom: '40px' }}>
                    Mes offres d’Emploi
                </div>
                <div className={styles.establishmentsGrid}>
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
                                    textDecoration: 'underline',
                                }}>
                                Chef de rang
                            </p>
                            <div>
                                <ThreeDotsIcon />
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
                            <FeedbackStars rating={2} />
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
                                    {'FR' == 'FR' ? 'France' : 'Switzerland'},{' '}
                                    {'Paris'}
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
                        <div
                            style={{
                                width: '130%',
                                height: '2px',
                                backgroundColor: '#EBEBEB',
                                transform: 'translate(-10%, 0)',
                            }}></div>
                        <div
                            // className={styles.borderTop}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'start',
                                gap: '10px',
                                paddingTop: '10px',
                            }}>
                            <IdCardIcon />

                            <p
                                style={{
                                    color: '#44C84A',
                                    fontWeight: '700',
                                    fontSize: '14px',
                                    textDecoration: 'underline',
                                    textDecorationColor: '#44C84A',
                                }}>
                                2 nouvelles demandes
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
