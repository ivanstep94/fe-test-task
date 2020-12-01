import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Block.scss';
import {fetchMove} from "../../store/actoin-creators/game";

function Block(props) {
    const { value } = props;
    const dispatch = useDispatch();
    const isMoved = value === 'O' || value === 'X';

    const handleClick = () => {
        if (isMoved) {
            return;
        } else {
            dispatch(fetchMove({ index: value }))
        }
    };

    return(
        <div className="game-block" onClick={handleClick}>
            { isMoved ? value: '' }
        </div>
    )
}

export default Block;

