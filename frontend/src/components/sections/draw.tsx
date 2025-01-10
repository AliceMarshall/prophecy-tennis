import React from 'react';
import {
    Bracket,
    IRenderSeedProps,
    IRoundProps,
    Seed,
    SeedItem,
    SeedTeam,
} from 'react-brackets';

import '../../styles/draw.css';

interface Draw {
    draw: IRoundProps[];
}

export const SelectionSeed = ({ seed, breakpoint }: IRenderSeedProps) => {
    // mobileBreakpoint is required to be passed down to a seed
    const sets = [0, 0, 0];
    const showSets =
        seed.teams[0]?.name &&
        seed.teams[1]?.name &&
        seed.teams[0]?.name !== 'WINNER';
    return (
        <Seed
            mobileBreakpoint={breakpoint}
            style={{ fontSize: 14, minWidth: '315px' }}
        >
            <SeedItem
                style={{
                    backgroundColor: 'white',
                    borderColor: '#ebebeb',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.10)',
                    padding: '3px',
                    zIndex: 1,
                }}
            >
                <div>
                    <div>
                        <SeedTeam
                            style={{
                                color: '#0091D2',
                                backgroundColor: 'white',
                                borderRadius: '0',
                            }}
                        >
                            <div>{seed.teams[0]?.name || '---'}</div>
                            {showSets ? (
                                <div className='seed-games'>
                                    {sets.map((games, i) => (
                                        <div
                                            className='seed-game'
                                            key={`${seed.teams[0]?.name}-${i}`}
                                        >
                                            {games}
                                        </div>
                                    ))}
                                </div>
                            ) : null}
                        </SeedTeam>
                    </div>
                    <SeedTeam
                        style={{
                            color: '#000',
                            backgroundColor: 'white',
                            borderRadius: '0',
                        }}
                    >
                        <div>{seed.teams[1]?.name || '---'}</div>
                        {showSets ? (
                            <div className='seed-games'>
                                {sets.map((games, i) => (
                                    <div
                                        className='seed-game'
                                        key={`${seed.teams[1]?.name}-${i}`}
                                    >
                                        {games}
                                    </div>
                                ))}
                            </div>
                        ) : null}
                    </SeedTeam>
                </div>
            </SeedItem>
        </Seed>
    );
};

const ResultSeed = ({ seed, breakpoint }: IRenderSeedProps) => {
    // mobileBreakpoint is required to be passed down to a seed
    const sets = [0, 0, 0];
    const showSets =
        seed.teams[0]?.name &&
        seed.teams[1]?.name &&
        seed.teams[0]?.name !== 'WINNER';
    return (
        <Seed
            mobileBreakpoint={breakpoint}
            style={{ fontSize: 14, minWidth: '315px' }}
            className='seed-item'
        >
            <SeedItem
                style={{
                    backgroundColor: 'white',
                    borderColor: '#ebebeb',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    boxShadow: '0px 2px 4px rgba(255, 255, 255, 0.10)',
                    padding: '3px',
                    zIndex: 1,
                    fontWeight: 600,
                }}
            >
                <div>
                    <SeedTeam
                        style={{
                            color: '#0091D2',
                            backgroundColor: 'white',
                            borderRadius: '0',
                        }}
                    >
                        <div>{seed.teams[0]?.name || '---'}</div>
                        {showSets ? (
                            <div className='seed-games'>
                                {sets.map((games, i) => (
                                    <div
                                        className='seed-game'
                                        key={`${seed.teams[0]?.name}-${i}`}
                                    >
                                        {games}
                                    </div>
                                ))}
                            </div>
                        ) : null}
                    </SeedTeam>
                    <SeedTeam
                        style={{
                            color: '#000',
                            backgroundColor: 'white',
                            borderRadius: '0',
                        }}
                    >
                        <div>{seed.teams[1]?.name || '---'}</div>
                        {showSets ? (
                            <div className='seed-games'>
                                {sets.map((games, i) => (
                                    <div
                                        className='seed-game'
                                        key={`${seed.teams[1]?.name}-${i}`}
                                    >
                                        {games}
                                    </div>
                                ))}
                            </div>
                        ) : null}
                    </SeedTeam>
                </div>
            </SeedItem>
        </Seed>
    );
};

export const TournamentDraw = ({ draw }: Draw) => {
    return (
        <div className='tournament-draw'>
            <Bracket
                rounds={draw}
                renderSeedComponent={ResultSeed}
                roundTitleComponent={(title: React.ReactNode) => {
                    return (
                        <div
                            style={{
                                textAlign: 'center',
                                backgroundColor: 'rgba(255, 255, 255, 0.4',
                                color: '#fff',
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                width: '70%',
                                padding: '6px 0',
                                borderRadius: '6px',
                                margin: '0 auto 16px',
                            }}
                        >
                            {title}
                        </div>
                    );
                }}
            />
        </div>
    );
};
