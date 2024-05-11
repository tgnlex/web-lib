const {data} = await axios.post('/user', document.querySelector('#my-form'), {
    headers: {
        'Content-Type':'application/json'
    }
})