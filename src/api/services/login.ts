import axios from "axios";

interface LoginData {
  email: string;
  password: string;
}

export const login = async ({ email, password }: LoginData) => {
  const response = await axios.get(
    `http://localhost:3001/users?email=${email}`
  );
  const users = response.data;

  if (users.length > 0 && users[0].password === password) {
    return users[0];
  } else {
    throw new Error("Usuário ou senha incorretos");
  }
};
