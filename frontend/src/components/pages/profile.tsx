import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router';

import type { RootState } from '../../redux/store';
import { AppDispatch } from '../../redux/store';
import { setUser } from '../../redux/users/userSlice';
import { getValidSession } from '../../utils/session';

import '../../css/base.css';
import '../../styles/profile.css';
import MensResults from '../sections/mens';

const API_URL = process.env.REACT_APP_API_URL;

const Profile = () => {
    const [loading, setLoading] = useState<boolean>(true);

    const dispatch = useDispatch<AppDispatch>();
    const { username } = useSelector((state: RootState) => state.user);

    const getUser = async (userId: string) => {
        return fetch(`${API_URL}/session-user/${userId}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            method: 'GET',
        })
            .then((response) => response.json())
            .then(async (response) => {
                if (response.recordId) {
                    const { recordId: id, username, email } = response;
                    dispatch(
                        setUser({
                            id,
                            username,
                            email,
                        })
                    );
                    setLoading(false);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        async function callback() {
            try {
                const userSession = await getValidSession();
                if (userSession) {
                    await getUser(userSession.recordId);
                } else {
                    setLoading(false);
                }
            } catch (e) {
                console.log(e);
            }
        }
        callback();
    }, []);

    // ------------------------------------

    if (loading) {
        return null;
    }

    if (!username) {
        return <Navigate to='/login' />;
    }

    return (
        <>
            <div className='profile'>
                <div className='profile-logo'>
                    <img src='/assets/LOGO.png' alt='Prophecy Tennis Logo' />
                </div>
                <div className='profile-header'>
                    <div className='title'>
                        <p>Welcome, {username}</p>
                        <div className='profile-icon'>
                            <img
                                src='/assets/australian-open.png'
                                alt='Australian Open Icon'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <MensResults />
        </>
    );
};

export default Profile;
