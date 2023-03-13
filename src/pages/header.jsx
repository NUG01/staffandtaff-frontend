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
            
            <div className={active === 'login' || active === 'register' ? 'hide-nav' : 'auth-nav'}>
                <Link className={isLogged === 1 ? 'hide-nav' : ''} href="/login">LOG IN / </Link> 
                <Link className={isLogged === 1 ? 'hide-nav' : ''} href="/register">REGISTER</Link>
                <p className={isLogged === 0 || isLogged === 0 ? 'hide-nav' : ''} onClick={logout}>LOG OUT</p>
            </div>

            <FaBars className='menu-toggler' onClick={() => setExpanded(!expanded)} />
            <div className={`mobile-nav ${expanded ? 'expanded' : ''}`}>
                <Link href="/">Jobs</Link>
                <Link href="/about">About Us</Link>
                <Link href="/tips">Tips</Link>
                <Link href="/faq">F.A.Q</Link>
            </div>
        </header>
    );
}