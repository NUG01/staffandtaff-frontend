import '@/styles/globals.css';
import '@/styles/footer.css'
import Loader from '@/components/Loader';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/auth';
import store from '@/redux/store'
import { Provider } from 'react-redux'
import { useAjax } from '@/hooks/ajax';

const App = ({ Component, pageProps }) => {
    const [user, setUser] = useState()
    const [isLogged, setLogged] = useState()
    
    const {getData} = useAjax()

    useEffect(()=>{
        getData('/api/v1/user', (res)=>{
            setUser(res.data)
            setLogged(1)
        },(error)=>{
            setLogged(0)
            return
        })    
    }, [])

    const [loading, setLoading] = useState(false)
    Router.events.on('routeChangeStart', () => {
        setLoading(true)
    })

    Router.events.on('routeChangeComplete', () => {
        setLoading(false)
    })


    if (loading) return <Loader className="show-loader" />

    // console.log(isLogged)
    // console.log(user)
    if (isLogged) {
        return (
            <Provider store={store}>
                <Loader className={isLogged === undefined ? 'show-loader' : ''} />
                <Component isLogged={isLogged} user={user} {...pageProps} />
            </Provider>
        )
    } else {
        return (
            <Provider store={store}>
                <Loader className={isLogged === undefined ? 'show-loader' : ''} />
                <Component isLogged={isLogged} {...pageProps} />
            </Provider>
        )
    }
}

export default App
