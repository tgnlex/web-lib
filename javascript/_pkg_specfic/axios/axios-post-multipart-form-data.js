const {data} = await axios.post('https://httpbin.org/post', {
    firstName: 'Fred',
    lastName: 'Flinstone',
    orders: [1, 2, 3]
    photo: document.querySelector('#fileInput').files
})