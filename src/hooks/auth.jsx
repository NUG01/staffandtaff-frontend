import useSWR from 'swr';
import axios from '@/lib/axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
    const router = useRouter();
    const [user, setUser] = useState()
    const [isLogged, setLogged] = useState()

    const { error, mutate } = useSWR('/api/v1/user', () =>
        axios
            .get('/api/v1/user')
            .then(res => {
                console.log(res)
                setUser(res.data)
                setLogged(1)
            })
            .catch(error => {
                if (error.response.status === 401) {
                    setLogged(0)
                    return
                }
                if (error.response.status !== 409) throw error;

                router.push('/verify-email');
            }),
    );

    const csrf = () => axios.get('/sanctum/csrf-cookie');

    const register = async ({ setErrors, form, ...props }) => {
        await csrf();

        setErrors([]);

        axios
            .post('/api/v1/register', props)
            .then(() => {
                mutate()
            })
            .catch(error => {
                if (error.response.status !== 422) throw error;
                form.current.classList.remove('disabledSection')
                setErrors(error.response.data.errors);
            });
    };

    const login = async ({ setErrors, setStatus, form, ...props }) => {
        await csrf();

        setErrors([]);
        setStatus(null);

        axios
            .post('/api/v1/login', props)
            .then(() => {
                console.log('asd')
                router.push('/jobs')
                mutate()
            })
            .catch(error => {
                console.log(error)
                if (error.response.status !== 422) throw error;
                form.current.classList.remove('disabledSection')
                setErrors(error.response.data.errors);
            });
    };

    const forgotPassword = async ({ setErrors, setStatus, email, form }) => {
        await csrf();

        setErrors([]);
        setStatus(null);

        axios
            .post('/forgot-password', { email })
            .then(response => {
                setStatus(response.data.status)
                form.current.classList.remove('disabledSection')
            })
            .catch(error => {
                if (error.response.status !== 422) throw error;
                form.current.classList.remove('disabledSection')
                setErrors(error.response.data.errors);
            });
    };

    const resetPassword = async ({ setErrors, setStatus, ...props }) => {
        await csrf();

        setErrors([]);
        setStatus(null);

        axios
            .post('/reset-password', { token: router.query.token, ...props })
            .then(response =>
                router.push('/login?reset=' + btoa(response.data.status)),
            )
            .catch(error => {
                if (error.response.status !== 422) throw error;

                setErrors(error.response.data.errors);
            });
    };

    const resendEmailVerification = ({ setStatus }) => {
        axios
            .post('/email/verification-notification')
            .then(response => setStatus(response.data.status));
    };

    const logout = async () => {
        if (!error) {
            document.body.classList.add('disabledSection')
            await axios.post('/logout').then(() => mutate());
        }

        window.location.pathname = '/';
    };

    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user)
            router.push(redirectIfAuthenticated);
        if (
            window.location.pathname === '/verify-email' &&
            user?.email_verified_at
        )
            router.push(redirectIfAuthenticated);
        if (middleware === 'auth' && error) logout();
    }, [user, error]);

    return {
        user,
        isLogged,
        register,
        login,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout,
    };
};
