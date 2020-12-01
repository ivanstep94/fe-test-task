import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getGame, nextGame, resetGame} from "../../store/actoin-creators/game";
import Block from '../Block/Block';
import './Game.scss';
import {game, next, reset} from "../../api/api";

function Game() {
    const { board = [], winner, log = [], error = '', view = 'game', end = false } = useSelector(state => state.game);
    const dispatch = useDispatch();
    const filledBoard = [];

    useEffect(() => {
        dispatch(getGame(game));
    }, []);

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const value = board[i] ? board[i][j]: '';
            filledBoard.push(<Block value={value} key={`${i}${j}`}/>);
        }
    }

    return (
        <div className='game-page'>
            <div className="game-container">
                <div className="game-board">
                    {
                        filledBoard.map(item => item)
                    }
                </div>
                <div className="logs-container">
                    <div className="logs-title">Log</div>
                    { log.map(item => {
                        return(
                            <div key={`log-${item}`}>{`Player moved to cell ${item}`}</div>)
                    }) }
                </div>
            </div>
            <div className="btn-container">
                {
                    view === 'game' ?
                        <button onClick={() => dispatch(resetGame(reset))}>Reset</button>: null
                }
                {
                    end ?
                        <button onClick={() => dispatch(nextGame(next))}>Next Game</button>: null
                }
            </div>
            <div className="result-message">
                {   error ? error:
                    end && winner ? `${winner} wins!`: end ? 'draw!': null
                }
            </div>
        </div>
    )
}

export default Game;