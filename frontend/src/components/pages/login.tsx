import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { AppDispatch } from '../../redux/store';
import { setUser } from '../../redux/users/userSlice';
import { createSession, getSession } from '../../utils/session';

import '../../css/base.css';

const API_URL = process.env.REACT_APP_API_URL;

const Login = () => {
    const dispatch = useDispatch<AppDispatch>();
    const sessionExists = getSession();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [session, setSession] = useState<string | null>(sessionExists);

    const login = (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();
        return fetch(`${API_URL}/login`, {
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify({ email, password }),
        })
            .then((response) => response.json())
            .then(async (response) => {
                if (response.recordId) {
                    const { recordId: id, name, username, email } = response;
                    const session = await createSession(id, name);

                    dispatch(
                        setUser({
                            id,
                            username,
                            email,
                        })
                    );
                    setSession(session);
                    setLoading(false);
                }
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
            });
    };

    if (session) {
        return <Navigate to='/prophecy-profile' />;
    }

    return (
        <>
            <div className='base container'>
                <section>
                    <div className='bubble'>
                        <div>
                            <h4>Login</h4>
                        </div>
                        <p>
                            Use your email and the password provided in your
                            email invite.
                        </p>
                        <form onSubmit={(e) => login(e)}>
                            <label>Email:</label>
                            <input
                                className='input'
                                type='text'
                                value={email}
                                onChange={(e) => setEmail(e.target.value || '')}
                                placeholder={'your.name@email.com'}
                            />

                            <label>Password:</label>
                            <input
                                className='input'
                                type='password'
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value || '')
                                }
                            />
                            <br />
                            <button type='submit' disabled={loading}>
                                Login
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Login;
