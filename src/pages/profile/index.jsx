import React from 'react'
import Header from '../header'
import styles from '../../styles/profile/profile.module.css'
import SeekerProfile from '../..//components/profileComponents/SeekerProfile'

export default function index({ isLogged, user }) {
    console.log(user)
    if (!user) return
    return (
        <div>
            {user.data.role == 'Seeker' && (
                <SeekerProfile
                    profile={true}
                    isLogged={isLogged}
                    user={user}></SeekerProfile>
            )}
            {user.data.role != 'Seeker' && <div>Not seeker</div>}
        </div>
    )
}
