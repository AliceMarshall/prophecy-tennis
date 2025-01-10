import React, { useEffect, useState } from 'react';

import { baseDraw, createDraw } from '../../utils/defaultMatches';

import '../../css/base.css';
import '../../styles/mens.css';
import { TournamentDraw } from './draw';

const API_URL = process.env.REACT_APP_API_URL;

const MensResults = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [draw, setDraw] = useState(baseDraw);
    // const dispatch = useDispatch<AppDispatch>();

    const getMensRoundOne = async () => {
        return fetch(`${API_URL}/mens`, {
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            method: 'GET',
        })
            .then((response) => response.json())
            .then(async (response) => {
                if (response) {
                    const drawMapping = createDraw(response);
                    console.log(drawMapping);
                    setDraw(drawMapping);
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
                await getMensRoundOne();
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

    return (
        <>
            <div className='mens-draw'>
                <TournamentDraw draw={draw} />
            </div>
        </>
    );
};

export default MensResults;
