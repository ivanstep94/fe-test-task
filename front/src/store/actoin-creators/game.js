const fetchMove = (data) => ({ type: 'FETCH_MOVE_REQUESTED', index: data.index });
const resetGame = (method) => ({ type: 'RESET_GAME', method });
const getGame = (method) => ({ type: 'GET_GAME', method });
const nextGame = (method) => ({ type: 'NEXT_GAME', method });
const changeViewType = (view) => ({ type: 'CHANGE_VIEW_TYPE', payload: view });

export { fetchMove, resetGame, getGame, changeViewType, nextGame };