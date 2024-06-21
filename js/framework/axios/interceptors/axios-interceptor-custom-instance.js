const axios = require('axios');
const instance = axios.create();
instance.interceptors.request.use(function ( {
    /* .... * /
}))