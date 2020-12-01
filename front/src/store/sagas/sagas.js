import { call, put, takeEvery } from 'redux-saga/effects'
import { move, score } from '../../api/api';


function* fetchMove(action) {
    try {
        const gameData = yield call(move, { index: action.index });
        yield put({type: "FETCH_MOVE_SUCCEED", payload: gameData});
        yield put({type: "LOG_MOVE", payload: [action.index]});

    } catch (e) {
        console.log(e);
    }
}

function* fetchScore() {
    try {
        const scoreData = yield call(score, {});
        yield put({type: "STORE_SCORE", payload: scoreData});
    } catch (e) {
        console.log(e);
    }
}


function* storeGame({ method }) {
    try {
        const gameData = yield call(method, {});
        yield put({type: "STORE_GAME", payload: gameData});
    } catch (e) {
        console.log('error', e)
    }
}

function* mySaga() {
    yield takeEvery("FETCH_MOVE_REQUESTED", fetchMove);
    yield takeEvery("FETCH_SCORE_REQUESTED", fetchScore);
    yield takeEvery("RESET_GAME", storeGame);
    yield takeEvery("GET_GAME", storeGame);
    yield takeEvery("NEXT_GAME", storeGame);
}


export default mySaga;