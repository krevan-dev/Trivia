export const trivia = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=10&category=15&type=boolean',
    timeout: 3000
})