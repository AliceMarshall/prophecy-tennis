import React, { useCallback } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { content } from './content';

import '../../styles/home.css';

const Home = () => {
    const { howItWorks, rules, topTips } = content;
    return (
        <div className='home'>
            <div
                className='home-background'
                style={{
                    // backgroundImage: `url('https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                    // backgroundImage: `url('https://images.unsplash.com/photo-1621156796362-55c1b1438fed?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                    backgroundImage: `url('https://images.unsplash.com/photo-1540470174401-f25e9eb17c1c?q=80&w=3567&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                }}
            />
            <div className='home-header'>
                <div className='home-logo'>
                    <img
                        src='/assets/LOGO_wimbledon.png'
                        alt='Prophecy Tennis - Wimbledon Logo'
                    />
                </div>
            </div>
            <div className='home-content'>
                <div className='content-wrapper'>
                    <div className='content-outer'>
                        <div className='content-inner'>
                            <div className='content-profile'>
                                <div className='content-profile-info'>
                                    Prophecy Tennis is a fantasy game run by
                                    friends, for friends of our East London
                                    Tennis community and beyond, as a way to
                                    engage players off the court and promote
                                    more social interaction. Everyone is welcome
                                    and we hope to get together to watch some of
                                    the Grand Slam finals together from now on.
                                </div>
                                <div className='content-profile-subinfo'>
                                    Prophecy Tennis is a not for profit
                                    initiative and all funds received are spent
                                    in running the game and purchasing winner
                                    prizes.
                                </div>
                            </div>
                            <div className='content-header'>
                                <div className='content-header-title'>
                                    Wimbledon 2024 Edition
                                </div>
                                <div className='content-header-sub'>
                                    <span className='content-header-line' />
                                    <img src='/assets/wimbledon.svg' alt='' />
                                    <span className='content-header-line' />
                                </div>
                                <a
                                    className='cta'
                                    href='https://forms.gle/QgznktgvqFtj9wR29'
                                    target='_blank'
                                >
                                    Enter
                                </a>
                            </div>
                            {/* <div className='shadow' /> */}
                            {/* </div> */}
                            <div className='content-all'>
                                {/* <div className='cover' /> */}
                                <div className='content-description'>
                                    We just completed our first Prophecy Tennis,
                                    Roland Garros Edition, and this time we'll
                                    be running two Prophecy games, both Men's
                                    and Women's draw. You can choose to take
                                    part on either one or both of the games.
                                    This year's Wimbledon will run from{' '}
                                    <strong>1st to 14th July 2024</strong>.
                                    Draws will be out on Friday 28th June.
                                </div>
                                <div className='content-infobox'>
                                    <div className='content-infobox-inner'>
                                        <div className='content-infobox-text'>
                                            How it works :
                                        </div>
                                    </div>
                                </div>
                                <div className='content-bullets'>
                                    {/* {howItWorks.bullets.map(({ text }, i) => (
                                        <div
                                            className='content-bullet-wrapper'
                                            key={`${i}-how-it-works`}
                                        >
                                            <div className='content-bullet'></div>
                                            <div className='content-bullet-text'>
                                                {ReactHtmlParser(text)}
                                            </div>
                                        </div>
                                    ))} */}
                                </div>
                                <div className='content-infobox'>
                                    <div className='content-infobox-inner'>
                                        <div className='content-infobox-text'>
                                            Rules :
                                        </div>
                                    </div>
                                </div>
                                <div className='content-bullets'>
                                    {/* {rules.bullets.map(({ text }, i) => (
                                        <div
                                            className='content-bullet-wrapper'
                                            key={`${i}-rules`}
                                        >
                                            <div className='content-bullet'></div>
                                            <div className='content-bullet-text'>
                                                {ReactHtmlParser(text)}
                                            </div>
                                        </div>
                                    ))} */}
                                </div>
                                <div className='content-special'>
                                    <div className='content-infobox'>
                                        <div className='content-infobox-text'>
                                            Top tips :
                                        </div>
                                    </div>
                                    <div className='content-bullets'>
                                        {/* {topTips.bullets.map(({ text }, i) => (
                                            <div
                                                className='content-bullet-wrapper'
                                                key={`${i}-top-tips
                                                `}
                                            >
                                                <div className='content-bullet'></div>
                                                <div className='content-bullet-text'>
                                                    {ReactHtmlParser(text)}
                                                </div>
                                            </div>
                                        ))} */}
                                    </div>
                                </div>
                                <div className='content-space'></div>
                                <div className='signature'>by Fab & Alice</div>
                                <div className='content-space'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
