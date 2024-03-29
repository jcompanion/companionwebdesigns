import '../styles/globals.scss';
import 'animate.css';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme='dark' attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
