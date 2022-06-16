import axios from 'axios';

export default axios.create({
    baseURL: 'https://itcorp-backend.herokuapp.com'
});