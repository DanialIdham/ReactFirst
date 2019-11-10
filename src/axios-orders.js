import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://testing-33afc.firebaseio.com/'
});

export default instance;