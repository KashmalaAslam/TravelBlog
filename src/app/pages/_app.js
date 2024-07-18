// pages/_app.js or pages/_app.tsx
import Transition from "../components/transition";

function MyApp({ Component, pageProps }) {
  return <Transition Component={Component} pageProps={pageProps} />;
}

export default MyApp;
