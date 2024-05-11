const { data } = await axios.post('http://httpbin.org/post', {
    firstName: 'Fred',
    lastName: 'Flinstone',
    orders: [1, 2, 3]
   }, {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})