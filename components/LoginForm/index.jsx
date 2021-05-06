import { useState, useCallback } from "react";
import styled from "styled-components";
import { Button, TextField, CircularProgress } from "@material-ui/core";
import { useLogin } from "context/LoginProvider";

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 200px;
`;

export const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState("");
  const { setIsLogin, login } = useLogin();

  const handleLogin = useCallback(async () => {
    try {
      setLoading(true);
      setErrorText("");
      const { success } = await login(password);
      if (success) {
        return setIsLogin(true);
      }
      setErrorText("Błędne hasło");
      setLoading(false);
    } catch (error) {
      setErrorText("Wystąpił nieoczekiwany błąd");
      setLoading(false);
    }
  }, [password]);

  return (
    <Form>
      <TextField
        label="Podaj hasło"
        name="name"
        margin="normal"
        variant="outlined"
        type="password"
        error={!!errorText}
        helperText={errorText}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        type="submit"
        disabled={loading}
        onClick={handleLogin}
        style={{ width: "100px" }}
      >
        {loading ? <CircularProgress size={25} /> : "Zaloguj"}
      </Button>
    </Form>
  );
};
