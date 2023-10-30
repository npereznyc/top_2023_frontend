import sendRequest from './send-request';

const BASE_URL = 'https://top-back.fly.dev/api/cards';

export function getAll() {
    // default HTTP method is "GET", so no need to declare it as an argument
    return sendRequest(BASE_URL)
}