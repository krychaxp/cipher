import "../styles/globals.css";
import { LoginProvider } from "context/LoginProvider";

function MyApp({ Component, pageProps }) {
  return (
    <LoginProvider>
      <Component {...pageProps} />
    </LoginProvider>
  );
}

export default MyApp;
