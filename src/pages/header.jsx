import { FaBars } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from '@/lib/axios'

export default function Header({active, isLogged, user, isMobile}) {
    const [expanded, setExpanded] = useState(false);
    const [scrl, setScroll] = useState(0)

    useEffect(()=>{
        setScroll(scrollY)
        onscroll = ()=>{
            setScroll(scrollY)
        }
    })

    const logout = async () => {
        document.body.classList.add('disabledSection')
        await axios.post('/api/v1/logout').then(() => {
            window.location.pathname = '/';
        });
    };

    return (
    <>
        <header className={scrl > 5 || expanded ? 'scrolled' : ''} id={active === "home" || active === "job" ? 'home' : ''}>
            <h1 className={isMobile ? 'hide-nav' : ''}>
                <Link href="/jobs">
                    <img src="/logo-sm.png" alt="" />
                </Link>
            </h1>

            <div className="nav">
                <Link href="/jobs" className={active == "home" || active == "job" || active == 'singleJob' ? "active" : ""}>Emplois</Link>
                <Link href="/about" className={active == "about" ? "active" : ""}>À propos de nous</Link>
                <Link href="/tips" className={active == "tips" ? "active" : ""}>Conseils</Link>
                <Link href="/faq" className={active == "faq" ? "active" : ""}>F.A.Q</Link>
            </div>
            
            {isLogged === 0 &&(
                <Link href="/login" className={`${active === 'login' || active === 'register' ? 'hide-nav' : 'auth-nav'}`} >
                    <p className={isLogged === 1 ? 'hide-nav' : ''}>SE CONNECTER / S'INSCRIRE</p>
                </Link>
            )}

            {isLogged === 1 &&(
                <div className={`${active === 'login' || active === 'register' ? 'hide-nav' : 'auth-nav'}`} onClick={logout}>
                    <p>DÉCONNEXION</p>
                </div>
            )}

            <FaBars className='menu-toggler' onClick={() => setExpanded(!expanded)} />
            <div className={`mobile-nav ${expanded ? 'expanded' : ''}`}>
                <Link href="/">Emplois</Link>
                <Link href="/about">À propos de nous</Link>
                <Link href="/tips">Conseils</Link>
                <Link href="/faq">F.A.Q</Link>
            </div>
        </header>

        {isLogged === 0 &&(
            <div className={`${active === 'login' || active === 'register' ? 'hide-nav' : 'mobile-auth-nav'}`} >
                <Link href="/login#loginView">SE CONNECTER</Link>
                <Link href="/login#registerView">S'INSCRIRE</Link>
            </div>
        )}

        {isLogged === 1 &&(
            <div className={`${active === 'login' || active === 'register' ? 'hide-nav' : 'mobile-auth-nav logout-auth-nav'}`} onClick={logout}>
                <p>DÉCONNEXION</p>
            </div>
        )}
    </>
    );
}