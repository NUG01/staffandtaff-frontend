import { FaBars } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Header({active, isLogged, user, logout}) {
    const [expanded, setExpanded] = useState(false);
    const [scrl, setScroll] = useState(0)


    useEffect(()=>{
        onscroll = ()=>{
            setScroll(scrollY)
        }
    })

    return (
    <>
        <header className={scrl > 5 || expanded ? 'scrolled' : ''} id={active === "home" || active === "job" ? 'home' : ''}>
            <h1>
                <Link href="/jobs">
                    <img src="/logo-sm.png" alt="" />
                </Link>
            </h1>

            <div className="nav">
                <Link href="/jobs" className={active == "home" || active == "job" || active == 'singleJob' ? "active" : ""}>Jobs</Link>
                <Link href="/about" className={active == "about" ? "active" : ""}>About Us</Link>
                <Link href="/tips" className={active == "tips" ? "active" : ""}>Tips</Link>
                <Link href="/faq" className={active == "faq" ? "active" : ""}>F.A.Q</Link>
            </div>
            
            {isLogged === 0 &&(
                <Link href="/login" className={`${active === 'login' || active === 'register' ? 'hide-nav' : 'auth-nav'}`} >
                    <p className={isLogged === 1 ? 'hide-nav' : ''}>LOG IN / REGISTER</p>
                </Link>
            )}

            {isLogged === 1 &&(
                <div className={`${active === 'login' || active === 'register' ? 'hide-nav' : 'auth-nav'}`} onClick={logout}>
                    <p>LOG OUT</p>
                </div>
            )}

            <FaBars className='menu-toggler' onClick={() => setExpanded(!expanded)} />
            <div className={`mobile-nav ${expanded ? 'expanded' : ''}`}>
                <Link href="/">Jobs</Link>
                <Link href="/about">About Us</Link>
                <Link href="/tips">Tips</Link>
                <Link href="/faq">F.A.Q</Link>
            </div>
        </header>

        {isLogged === 0 &&(
            <div className={`${active === 'login' || active === 'register' ? 'hide-nav' : 'mobile-auth-nav'}`} >
                <Link href="/login#loginView" >LOG IN / </Link>
                <Link href="/login#registerView">REGISTER</Link>
            </div>
        )}

        {isLogged === 1 &&(
            <div className={`${active === 'login' || active === 'register' ? 'hide-nav' : 'mobile-auth-nav'}`} onClick={logout}>
                <p>LOG OUT</p>
            </div>
        )}
    </>
    );
}