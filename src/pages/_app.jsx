import '@/styles/globals.css';
import '@/styles/footer.css'
import Loader from '@/components/loader';
import Router from 'next/router';
import { useState } from 'react';

const App = ({ Component, pageProps }) => {
    
    const [loading, setLoading] = useState(false)

    Router.events.on('routeChangeStart', ()=>{
        setLoading(true)
    })

    Router.events.on('routeChangeComplete', ()=>{
        setLoading(false)
    })

    if(loading) return <Loader />
    
    return(
        <Component {...pageProps} />
    )
}

export default App
