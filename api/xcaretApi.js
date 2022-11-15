import axios from 'axios';


export const xcaretApi = axios.create({
    baseURL: 'https://raw.githubusercontent.com/javialcocer/test-json/main/data.json'
});