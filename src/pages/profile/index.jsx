import React from 'react'
import Header from '../header'
import styles from '../../styles/header/header.module.css'

export default function index({ isLogged, user }) {
    return (
        <div>
            <Header isLogged={isLogged} user={user} profile={true} />
            <div className={styles.fakeHeader}></div>
            <div>SEarch bar here</div>
        </div>
    )
}
