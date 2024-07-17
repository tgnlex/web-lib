class User {
  avatar = undefined;
  constructor() {
    super()
    id = this.id;
    email = this.email;
    username = this.username;
    password = this.password;
  }
  setAvatar(image) {this.avatar = image}
}

const UserList = []
const createUser = (id, username, password, email ) => {
  const user = new User(id, username, password, email);
  UserList.push(user);
  return user;

}

export {createUser};