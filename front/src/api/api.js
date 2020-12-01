const api = (url, options) => {
    return fetch(url, options)
        .then(response => response.json())
        .then(({ ok, result, error: { message = '' } = {} }) => {
            if (ok) {
                return result;
            } else  {
                throw new Error(message);
            }
        });
};

const headers = { 'Content-Type': 'application/json' };
const baseUrl = 'http://localhost:3000/api/';

const post = (url, options) => api(`${baseUrl}${url}`, { ...options, method: 'POST' });

const get = (url, options) => api(`${baseUrl}${url}`, { ...options, method: 'GET' });

const move = (value) => post('game/move', { headers, body: JSON.stringify(value) });

const game = () => get('game', {});

const score = () => get('score', {});

const reset = () => post('game/reset', {});

const next = () => get('game/next', {});

export { move, game, reset, score, next };