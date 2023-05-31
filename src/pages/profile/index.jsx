import React from 'react'
import Header from '../header'
import styles from '../../styles/profile/profile.module.css'
import SeekerProfile from '../..//components/profileComponents/SeekerProfile'

export default function index({ isLogged, user }) {
    console.log(user)
    return (
        <div>
            <SeekerProfile
                profile={true}
                isLogged={isLogged}
                user={user}></SeekerProfile>
        </div>
    )
}
