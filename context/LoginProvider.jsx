import { useState, useContext, createContext, useCallback } from "react";
import { LoginForm } from "components/LoginForm";
import { sleep } from "utils";
import { encodeText, decodeText } from "utils/encodeText";

const encodedPassword = encodeText(process.env.NEXT_PUBLIC_ADMIN_PASSWORD);

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  const login = useCallback(async (password) => {
    await sleep(1000);
    if (password === decodeText(encodedPassword)) {
      return { success: true };
    }
    return { error: "Błędne hasło" };
  }, []);

  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin, login }}>
      {isLogin ? children : <LoginForm />}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
