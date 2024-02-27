import { api } from "../../api/index";

const authenticateUser = async (email, senha) => {
  try {
    const response = await api.get("/users", {
      params: {
        email,
        senha,
      },
    });

    const user = response.data[0];

    if (user) {
      return user;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Erro de autenticação:", error);
    return null;
  }
};

export default authenticateUser;
