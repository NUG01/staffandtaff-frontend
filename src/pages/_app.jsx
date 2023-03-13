import '@/styles/globals.css';
import '@/styles/footer.css'
import Loader from '@/components/loader';
import Router from 'next/router';
import { useState } from 'react';
import { useAuth } from '@/hooks/auth';
import Head from 'next/head';

const App = ({ Component, pageProps }) => {
    const { user, isLogged } = useAuth()

    const [loading, setLoading] = useState(false)
    
    if (isLogged === undefined){
        return <Loader />
    }
    Router.events.on('routeChangeStart', ()=>{
        setLoading(true)
    })

    Router.events.on('routeChangeComplete', ()=>{
        setLoading(false)
    })

    if(loading) return <Loader />

    console.log(isLogged)
    console.log(user)
    if(isLogged){
        return(
            <>
                {Router.asPath === '/stripe' ? <Head><script src="https://js.stripe.com/v3/"></script></Head> : ''}
                <Component isLogged={isLogged} user={user} {...pageProps} />
            </>
        )
    }else{
        return(
            <>
                {Router.asPath === '/stripe' ? <Head><script src="https://js.stripe.com/v3/"></script></Head> : ''}
                <Component isLogged={isLogged} {...pageProps} />
            </>
        )
    }
}

export default App
