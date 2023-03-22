import '@/styles/globals.css';
import '@/styles/footer.css'
import Loader from '@/components/Loader';
import Router from 'next/router';
import { useState } from 'react';
import { useAuth } from '@/hooks/auth';
import store from '@/redux/store'
import { Provider } from 'react-redux'

const App = ({ Component, pageProps }) => {
    const { user, isLogged, logout, login, register } = useAuth()


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
                <Component isLogged={isLogged} user={user} {...pageProps} logout={logout} />
            </Provider>
        )
    } else {
        return (
            <Provider store={store}>
                <Loader className={isLogged === undefined ? 'show-loader' : ''} />
                <Component isLogged={isLogged} login={login} {...pageProps} register={register} />
            </Provider>
        )
    }
}

export default App
