import { IRoundProps } from 'react-brackets';

export type MatchStatus = 'UNPLAYED' | 'PLAYED' | 'WALKOVER';

export interface Participant {
    id: string;
    name: string;
    country: string;
    isWinner: boolean;
}

export interface SingleMatch {
    id: string;
    name: string;
    nextMatchId: string | null;
    tournamentRoundText: string;
    status: MatchStatus | null;
    score: number[];
    participants: Participant[] | [];
}

export interface Draw {
    matches: SingleMatch[];
}

type Player = {
    id: number;
    matches: string[];
    player: string;
    country: string;
    seed?: number;
    type?: string;
};

export const baseDraw: IRoundProps[] = [
    {
        title: 'Round 1',
        seeds: [
            {
                id: 'R1-1',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-2',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-3',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-4',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-5',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-6',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-7',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-8',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-9',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-10',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-11',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-12',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-13',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-14',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-15',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-16',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-17',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-18',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-19',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-20',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-21',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-22',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-23',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-24',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-25',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-26',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-27',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-28',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-29',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-30',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-31',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-32',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-33',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-34',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-35',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-36',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-37',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-38',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-39',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-40',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-41',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-42',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-43',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-44',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-45',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-46',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-47',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-48',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-49',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-50',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-51',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-52',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-53',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-54',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-55',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-56',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-57',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-58',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-59',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-60',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-61',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-62',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-63',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R1-64',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
        ],
    },
    {
        title: 'Round 2',
        seeds: [
            {
                id: 'R2-1',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R2-2',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R2-3',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R2-4',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R2-5',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R2-6',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R2-7',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R2-8',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R2-9',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R2-10',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R2-11',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R2-12',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R2-13',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R2-14',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R2-15',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R2-16',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R2-17',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R2-18',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R2-19',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R2-20',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R2-21',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R2-22',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R2-23',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R2-24',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R2-25',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R2-26',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R2-27',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R2-28',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R2-29',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R2-30',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R2-31',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R2-32',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
        ],
    },
    {
        title: 'Round 3',
        seeds: [
            {
                id: 'R3-1',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R3-2',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R3-3',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R3-4',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R3-5',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R3-6',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R3-7',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R3-8',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R3-9',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R3-10',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R3-11',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R3-12',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R3-13',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R3-14',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R3-15',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R3-16',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
        ],
    },
    {
        title: 'Round 4',
        seeds: [
            {
                id: 'R4-1',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R4-2',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R4-3',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R4-4',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R4-5',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R4-6',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R4-7',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'R4-8',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
        ],
    },
    {
        title: 'Quarterfinal',
        seeds: [
            {
                id: 'QF-1',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'QF-2',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'QF-3',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'QF-4',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
        ],
    },
    {
        title: 'Semifinal',
        seeds: [
            {
                id: 'SF-1',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
            {
                id: 'SF-2',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
        ],
    },
    {
        title: 'Final',
        seeds: [
            {
                id: 'F',
                teams: [
                    {
                        name: '',
                    },
                    {
                        name: '',
                    },
                ],
            },
        ],
    },
    {
        title: 'Winner',
        seeds: [
            {
                id: 'W',
                teams: [
                    {
                        name: 'WINNER',
                    },
                ],
            },
        ],
    },
];

const truncatePLayerName = (player: string) => {
    const name = player.split(' ');
    const firstLetter = name[0].substring(0, 1);
    const surname = name.slice(1);
    return `${firstLetter}. ${surname?.join(' ')}`;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createDraw = (mens: any) => {
    baseDraw[0].seeds.forEach((match) => {
        const matchedPlayers = mens.filter((player: Player) =>
            player.matches.includes(match.id.toString())
        );

        match.teams = matchedPlayers.map((player: Player) => ({
            name: `${truncatePLayerName(player.player)} (${player.country}) ${
                player?.seed ? player?.seed : ''
            } ${player?.type ? player?.type : ''}`,
        }));
    });

    return baseDraw;
};

export const draw: IRoundProps[] = [
    {
        title: 'Round 1',
        seeds: [
            {
                id: 1,
                teams: [
                    {
                        name: 'Novak Djokovic',
                    },
                    {
                        name: 'Rafael Nadal',
                    },
                ],
            },
            {
                id: 2,
                teams: [
                    {
                        name: 'Novak Djokovic',
                    },
                    {
                        name: 'Rafael Nadal',
                    },
                ],
            },
        ],
    },
    {
        title: 'Round 2',
        seeds: [
            {
                id: 3,
                // date: new Date().toDateString(),
                teams: [
                    {
                        name: 'Novak Djokovic',
                    },
                    {
                        name: 'Rafael Nadal',
                    },
                ],
            },
        ],
    },
];
