import React from 'react';
import { useDispatch, useSelector } from  'react-redux';
import { changeViewType } from "../../store/actoin-creators/game";
import './ViewSelector.scss';
import cx from 'classnames';

export default function ViewSelector() {
    const dispatch = useDispatch();
    const { view = 'game' } = useSelector(state => state.game);
    const handleClick = (type) => {
        dispatch(changeViewType(type));
    };

    return(
        <div className="view-selector">
            <button className={cx({['active']: view === 'game'})} onClick={() => handleClick('game')}>Game</button>
            <button className={cx({['active']: view === 'score'})} onClick={() => handleClick('score')}>Score</button>
        </div>
    );
}