import React from 'react'
import Header from '../header'
import styles from '../../styles/profile/profile.module.css'
import SeekerProfile from '../..//components/profileComponents/SeekerProfile'
import RecruiterProfile from '@/components/profileComponents/RecruiterProfile'

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
            {user.data.role == 'Recruiter' && (
                <RecruiterProfile
                    profile={true}
                    isLogged={isLogged}
                    user={user}></RecruiterProfile>
            )}
        </div>
    )
}
