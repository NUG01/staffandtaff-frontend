import { FaBars } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux'
import { setAuthData } from '@/redux/userAuth';
import { useAjax } from '@/hooks/ajax';
import AccountPanelIcon from '@/components/Icons'

export default function Header({active, isLogged, user, isMobile}) {
    const {sendData} = useAjax()

    const userAuthCheck = useSelector(state => state.userAuthData.value)
    
    const dispatch = useDispatch()
    
    const [expanded, setExpanded] = useState(false);
    const [scrl, setScroll] = useState(0)

    useEffect(()=>{
        setScroll(scrollY)
        onscroll = ()=>{
            setScroll(scrollY)
        }
        
        if(isLogged === 1) {
            dispatch(setAuthData(true))
        }else{
            dispatch(setAuthData(false))
        }
    })

    function logout (){
        document.body.classList.add('disabledSection')
        sendData('/api/v1/logout', {}, ()=>{

            dispatch(setAuthData(false))
            window.location.pathname = '/';

        }, (error)=>{

            console.log(error)
            document.body.classList.remove('disabledSection')

        })
    }

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
            
            {!userAuthCheck &&(
                <Link href="/login" className={`${active === 'login' || active === 'register' ? 'hide-nav' : 'auth-nav'}`} >
                    <p className={userAuthCheck ? 'hide-nav' : ''}>SE CONNECTER / S'INSCRIRE</p>
                </Link>
            )}

            {userAuthCheck && user &&(
                <>
                    <div className={`${active === 'login' || active === 'register' ? 'hide-nav' : 'account-panel'}`}>
                        <div className='account-panel-wrapper'>
                            <AccountPanelIcon /> <span>Bonjour, {user.data.name}</span>
                            <div className='hover-panel'>
                                <Link href="/jobs">
                                    <img src="profile.png" alt="" /> My Profile
                                </Link>
                                <Link href="/jobs">
                                    <img src="submissions.png" alt="" /> My Submissions
                                </Link>
                                <Link href="/jobs">
                                    <img src="settings.png" alt="" /> My Settings
                                </Link>
                                <div>
                                    <img src="power-icon.png" alt="" onClick={logout}/> Log Out
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            <FaBars className='menu-toggler' onClick={() => setExpanded(!expanded)} />
            <div className={`mobile-nav ${expanded ? 'expanded' : ''}`}>
                <Link href="/jobs">Emplois</Link>
                <Link href="/about">À propos de nous</Link>
                <Link href="/tips">Conseils</Link>
                <Link href="/faq">F.A.Q</Link>
            </div>
        </header>

        {!userAuthCheck &&(
            <div className={`${active === 'login' || active === 'register' ? 'hide-nav' : 'mobile-auth-nav'}`} >
                <Link href="/login#loginView">SE CONNECTER</Link>
                <Link href="/login#registerView">S'INSCRIRE</Link>
            </div>
        )}

        {userAuthCheck &&(
            <div className={`${active === 'login' || active === 'register' ? 'hide-nav' : 'mobile-auth-nav logout-auth-nav'}`} onClick={logout}>
                <p>DÉCONNEXION</p>
            </div>
        )}
    </>
    );
}