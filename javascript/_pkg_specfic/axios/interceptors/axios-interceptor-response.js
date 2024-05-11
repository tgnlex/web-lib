axios.interceptors.response.use(function (response) {
    // Any status code within 2xx range triggers this funtion
    // Do something with response data
    return response;
}, function (error) {
        // any status code outside 2xx will cause func to trigger
        // Do something with response errorr
    return Promise.reject(error);
});