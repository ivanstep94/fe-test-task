import React, {useEffect} from 'react';
import './ScoreTable.scss';
import { useDispatch, useSelector } from 'react-redux';
import {fetchScore} from "../../store/actoin-creators/score";

export default function ScoreTable() {
    const { list = [], ai = 0, player = 0, X = 0, O = 0, error } = useSelector(state => state.score);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchScore());
    }, []);

    return(
        <div className="score-page">
            <div className="result-message">
                { error || '' }
            </div>
            <div className="score-table">
                <h3>Total wins</h3>
                <div className="table-row">
                    <div className="table-cell">AI</div>
                    <div className="table-cell">Player</div>
                </div>
                <div className="table-row">
                    <div className="table-cell">{ai}</div>
                    <div className="table-cell">{player}</div>
                </div>
            </div>
            <div className="score-table">
                <div className="table-row">
                    <div className="table-cell">X</div>
                    <div className="table-cell">O</div>
                </div>
                <div className="table-row">
                    <div className="table-cell">{X}</div>
                    <div className="table-cell">{O}</div>
                </div>
            </div>
            {
                Array.isArray(list) && !!list.length ?
                <div className="score-table">
                    <h3>Games</h3>
                    <div className="table-row">
                        <div className="table-cell">winner</div>
                        <div className="table-cell">team</div>
                        <div className="table-cell">time</div>
                    </div>
                    {
                        list.map(({ winner, team, ts }) => {
                            let [date] = new Date(ts).toLocaleDateString("ru-Ru").split("/");
                            let [time] = new Date(ts).toLocaleTimeString("ru-Ru").split("/");
                            return (
                                <div className="table-row" key={ts}>
                                    <div className="table-cell">{winner || 'draw'}</div>
                                    <div className="table-cell">{team || '-'}</div>
                                    <div className="table-cell">{`${date} ${time}`}</div>
                                </div>
                            );
                        })
                    }
                </div>: null
            }
        </div>
    );
}