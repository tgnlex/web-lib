// Example: 
// app/items/route.ts
let passError = new Error('The passwords you sent do not match')

const USERS = []    
export async function POST(request: Request, error: Error) {
  const id = USERS.length + 1; 
    try {
    const formData = await request.formData()
    if (error) {
      console.error(error);
      return error;
    }
    const name = formData.get('name');
    const age = formData.get('age');
    const username = formData.get('username');
    const email = formData.get('email');
    const pass = formData.get('pass');
    const confirmed = formData.get('confirmed')
    if (pass != confirmed) {
      console.error(passError);
      return passError;
    }
    const newUser = {id: id, name: name, username: username, email: email pass: password }
    return Response.json({nessage: "User succesfully created"});
  } catch (err) {
    console.error(err);
    throw err;
  }
}