import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-e64b8.firebaseio.com/'
});

export default instance;