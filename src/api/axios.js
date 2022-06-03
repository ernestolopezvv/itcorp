import axios from 'axios';

export default axios.create({
    baseURL: 'https://itcorp-back.herokuapp.com/'
});