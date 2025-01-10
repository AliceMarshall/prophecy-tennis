import React from 'react';

import '../../css/base.css';
import '../../styles/profile.css';
import MensResults from '../sections/mens';

// const API_URL = process.env.REACT_APP_API_URL;

const Results = () => {
    return (
        <>
            <div className='profile'>
                <div className='profile-logo'>
                    <img src='/assets/LOGO.png' alt='Prophecy Tennis Logo' />
                </div>
                <div className='profile-header'>
                    <div className='title'>
                        <p className='title-top'>
                            Australian Open 2025 Edition
                        </p>
                        <p className='title-bottom'>
                            Men&apos;s Singles Draw : Results
                        </p>
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
            <div className='too-small'>
                <div className='profile-logo'>
                    <img src='/assets/LOGO.png' alt='Prophecy Tennis Logo' />
                </div>
                <div className='profile-header'>
                    <div className='title'>
                        <p className='title-bottom'>
                            Please view this page on a wider screen
                        </p>
                        <div className='profile-icon'>
                            <img
                                src='/assets/australian-open.png'
                                alt='Australian Open Icon'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Results;
