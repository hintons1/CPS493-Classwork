import data from "../data/users.json";

export interface User {
  id?: number,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  role: "admin" | "user",
  token?: string
}

export function getUsers(): User[] {
  return data.users.map( x => ({ ...x, role: x.id <= 5 ? 'admin' : 'user' }) ) 
}

/*do not do this await and async on the final */
export async function getUserByEmail(email: string): Promise<User | undefined> {
  /*await unwraps a promise. takes the promise of a user and returns the actual user. first execute get users. anything to the left and below is broken into a separate function that only gets executed when the getUsers function is completed */
  const users = await getUsers();
  return users.find( x => x.email === email );
}