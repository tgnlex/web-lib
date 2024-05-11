const axios = require("axios")

// Make a request for  user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  });
  .catch(function (error) {
    // handle error
    console.log(error);
  });
  .finally(function () {
    // always executed
