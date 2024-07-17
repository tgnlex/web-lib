const Users = [];

const registrationHandler = async (req, res, next) => {
  const user = new Object;
  user.id = Users.length + 1;
  user.username = req.params.username;
  user.email = req.params.email;
  user.password = req.params.password;
  if (user.username == true) {
    if (user.email == true) {
      if (user.password == true) {
        Users.push(user);
        res.status(200).send('User created successfully!')
      } else {
        let error = new Error('Failed to create user, please specify a valid password');
        console.error(error.message);
        res.send(error.message)
        throw error;
      } 
    } else {
      let error = new Error('Failed to create user, please specify a valid email');
      console.error(error/message)
      res.send(error.message);
      throw error;
    }
  } else {
    let error = new Error('Failed to create user, please specify a valid username');
    console.error(error.message)
    res.send(error.message);
    throw error;
  }
}
