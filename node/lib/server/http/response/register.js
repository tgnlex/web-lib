 let users = [];
 async function register(req, res, next) => {  
  const user = {};
  user.id = Users.length + 1;
  user.username = req.body.username;
  user.email = req.body.email;
  user.password = req.body.password;
  if (user.username == true && user.email == true && user.password == true) {
    users.push(user);
    res.status(200).send('User created successfully!')
  } else {
    console.error('Failed to create user, please specify a valid password');
    res.status(500).send('Registration failed.')
  }
}
