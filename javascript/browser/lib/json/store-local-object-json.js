const object_data = { 
  id: 1,
  user: "test",  
  email: "test@email.test",
  password: "test",
  privelage: "ADMIN",
  avatar_url: null,
}

const json_data = JSON.stringify(object_data);
localStorage.setItem("test_data", json_data)