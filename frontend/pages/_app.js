// pages/_app.js
import "../styles/globals.css"; // Adjust the path if `globals.css` is in a different directory

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
