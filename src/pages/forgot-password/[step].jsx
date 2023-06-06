import { useRouter } from 'next/router'
import Router from 'next/router'
import styles from '@/styles/recovery/recovery.module.css'
import { useEffect } from 'react'
import Header from '@/pages/header'
import Footer from '@/pages/footer'
import Head from 'next/head'
import Link from 'next/link'
import EmailSent from '@/components/passwordRestore/EmailSent'
import NewPasswords from '@/components/passwordRestore/NewPasswords'
import PasswordsSuccess from '@/components/passwordRestore/PasswordsSuccess'

export default function Job({ isLogged, user }) {
    const router = useRouter()
    const step = router.query.step

    useEffect(() => {
        if (step > 3) {
            Router.replace(`/forgot-password`)
            return
        } else if (step < 1) {
            Router.replace(`/forgot-password`)
            return
        } else if (isNaN(Number(step))) {
            Router.replace(`/forgot-password`)
            return
        }
    })

    if (step == 1)
        return (
            <EmailSent
                styles={styles}
                isLogged={isLogged}
                user={user}
                email={router.query.email}
            />
        )

    if (step == 2)
        return <NewPasswords styles={styles} isLogged={isLogged} user={user} />

    if (step == 3)
        return (
            <PasswordsSuccess styles={styles} isLogged={isLogged} user={user} />
        )
}

export async function getServerSideProps(context) {
    return {
        props: {
            query: context.query,
        },
    }
}
