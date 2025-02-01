import { createContext, ReactNode, useState } from "react";
import UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../services/Service";

interface AuthContextProps {
  usuario: UsuarioLogin;
  token: string;
  handleLogout(): void;
  handleLogin(usuario: UsuarioLogin): Promise<void>;
  isLoading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export function AuthProvider({ children }: AuthProviderProps) {
  const [usuario, setUsuario] = useState<UsuarioLogin>(() => {
    const storedUser = localStorage.getItem("usuario");
    return storedUser
      ? JSON.parse(storedUser)
      : {
          id: 0,
          nome: "",
          usuario: "",
          senha: "",
          foto: "",
          token: "",
        };
  });

  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(usuarioLogin: UsuarioLogin) {
    setIsLoading(true);
    try {
      await login(`/usuarios/logar`, usuarioLogin, setUsuario);
      localStorage.setItem("usuario", JSON.stringify(usuario));
      alert("O Usuário foi autenticado com sucesso!");
    } catch (error) {
      alert("Os Dados do usuário estão inconsistentes!");
    }
    setIsLoading(false);
  }

  function handleLogout() {
    setUsuario({
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      token: "",
    });
    localStorage.removeItem("usuario");
  }

  return (
    <AuthContext.Provider
      value={{
        usuario,
        token: usuario.token,
        handleLogin,
        handleLogout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}