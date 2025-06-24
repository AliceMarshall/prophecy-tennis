import parse from 'html-react-parser';
import React from 'react';
import { content } from './content';

import '../../css/base.css';

const Home = () => {
    const { howItWorks, rules, topTips } = content;

    return (
        <>
            <div className='base container'>
                <section className='header'>
                    <div className='row'>
                        <div className='base-logo'>
                            {/* <img
                                src='/assets/LOGO_australianopen.png'
                                alt='Prophecy Tennis Logo - Australian Open'
                            /> */}
                            {/* <img
                                src='/assets/LOGO.png'
                                alt='Prophecy Tennis Logo'
                            /> */}
                            <img
                                src='/assets/LOGO_wimbledon.png'
                                alt='Prophecy Tennis - Wimbledon Logo'
                            />
                            {/* <img
                                src='/assets/LOGO_us-open.png'
                                alt='Prophecy Tennis - Olympics Logo'
                            /> */}
                            {/* <img
                                src='/assets/LOGO_olympics_2024.png'
                                alt='Prophecy Tennis - US Open Logo'
                            /> */}
                        </div>
                    </div>
                    <h6 className='title'>
                        Prophecy Tennis is a fantasy game created for friends of
                        our East London Tennis community and beyond, as a way to
                        engage players off the court and promote more social
                        interaction. Everyone is welcome and we hope to get
                        together to watch some of the Grand Slam finals from now
                        on.
                    </h6>
                    <p className='subtitle'>
                        Prophecy Tennis is a not for profit initiative and all
                        funds received are spent in running the game and
                        purchasing winner prizes.
                    </p>
                </section>
                <nav className='navbar has-docked-nav'>
                    <div className='base-nav-title'>
                        Wimbledon 2025 Edition
                    </div>
                    <div className='base-nav-logo aus'>
                        <span className='base-nav-line' />
                        {/* <img
                            src='/assets/australian-open.png'
                            alt=''
                            className='nav-logo-aus'
                        /> */}
                        <img
                            src='/assets/wimbledon.svg'
                            alt=''
                            className='nav-logo-wimbledon'
                        />
                        {/* <img
                            src='/assets/us-open.png'
                            alt=''
                            className='nav-logo-us-open'
                        /> */}
                        <span className='base-nav-line' />
                    </div>
                </nav>
                <div className='base-nav-actions'>
                    <a
                        className='button button-primary base-cta'
                        href='https://forms.gle/UZew2QWgrJPA9Gi79'
                        target='_blank'
                        rel='noreferrer'
                    >
                        Enter
                    </a>
                </div>
                <div className='shadow' />
                <div className='cover' />
                <div className='docs-section'>
                    <div className='docs-description'>
                        This Edition will be for Men and
                        Women&apos;s Singles Tournaments.
                    </div>
                </div>
                <div className='docs-section'>
                    <h6 className='docs-header'>How it works :</h6>
                    <div className='row docs-bullets'>
                        {howItWorks.row1.map(({ text }, i) => (
                            <div
                                className='columns six docs-bullet'
                                key={`${i}-how-it-works-row1`}
                            >
                                <ul className='docs-bullet-wrapper'>
                                    <li className='docs-bullet-text'>
                                        {parse(text)}
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className='row docs-bullets'>
                        {howItWorks.row2.map(({ text }, i) => (
                            <div
                                className='columns six docs-bullet'
                                key={`${i}-how-it-works-row1`}
                            >
                                <ul className='docs-bullet-wrapper'>
                                    <li className='docs-bullet-text'>
                                        {parse(text)}
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className='row docs-bullets'>
                        {howItWorks.row3.map(({ text }, i) => (
                            <div
                                className='columns six docs-bullet'
                                key={`${i}-how-it-works-row1`}
                            >
                                <ul className='docs-bullet-wrapper bottom'>
                                    <li className='docs-bullet-text'>
                                        {parse(text)}
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='docs-section'>
                    <h6 className='docs-header'>Rules :</h6>
                    <div className='row docs-bullets'>
                        {rules.row1.map(({ text }, i) => (
                            <div
                                className='columns twelve docs-bullet'
                                key={`${i}-how-it-works-row1`}
                            >
                                <ul className='docs-bullet-wrapper'>
                                    <li className='docs-bullet-text'>
                                        {parse(text)}
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='docs-section'>
                    <h6 className='docs-header'>Top tips :</h6>
                    <div className='row docs-bullets'>
                        {topTips.row1.map(({ text }, i) => (
                            <div
                                className='columns six docs-bullet'
                                key={`${i}-how-it-works-row1`}
                            >
                                <ul className='docs-bullet-wrapper'>
                                    <li className='docs-bullet-text'>
                                        {parse(text)}
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className='row docs-bullets'>
                        {topTips.row2.map(({ text }, i) => (
                            <div
                                className='columns six docs-bullet'
                                key={`${i}-how-it-works-row1`}
                            >
                                <ul className='docs-bullet-wrapper bottom'>
                                    <li className='docs-bullet-text'>
                                        {parse(text)}
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <h3 className='docs-signature'>by Fab & Alice</h3>
                <div className='docs-section'>
                    <p>
                        For any questions, please contact us at{' '}
                        <a
                            target='_blank'
                            href='mailto:prophecytennis@gmail.com'
                            rel='noreferrer'
                        >
                            prophecytennis@gmail.com
                        </a>{' '}
                        or <a href='callto:+447592530789'>07592 530789</a>
                    </p>
                </div>
            </div>
            <div className='docs-grass'>
                <img
                    className='docs-grass-img'
                    src='/assets/grass.png'
                    alt=''
                />
                {/* <img
                    className='docs-grass-img'
                    src='/assets/hard-court-us.jpg'
                    alt=''
                /> */}
                {/* <img className='docs-clay-img' src='/assets/clay.jpg' alt='' /> */}
            </div>
        </>
    );
};

export default Home;
