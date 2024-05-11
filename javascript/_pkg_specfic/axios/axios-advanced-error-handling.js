axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      console.log('Error has occured while awaiting response.'
        console.log('Request Details;')
      console.log(error.response)
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.header)
    } else if (error.request) {
        console.log('Error occured while sending request.')
        console.log('Request Details:')
        console.log(error.request)
        console.log(error.request.data)
        console.log(error.request.status)
        console.log(error.request.header)
    }  
  }).then(() => {
    console.log('Error Message:')
    console.log(error.message)
  }).then(() => {
    console.log('Error Configuration:')
    console.log(error.config)
  })