import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { LoadingScreen } from '@/components/common/LoadingScreen';
import { LocaleProvider, useLocale } from '@/hooks/useLocale';
import { AppRouter } from '@/routes/AppRouter';
import { theme as baseTheme } from '@/theme';

function ThemedApp() {
  const { isRtl, locale } = useLocale();
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const showMs = reduceMotion ? 0 : 700;
    const fadeMs = reduceMotion ? 0 : 420;
    const showTimer = window.setTimeout(() => {
      const el = document.getElementById('orvix-loading');
      if (el) el.style.opacity = '0';
      window.setTimeout(() => setBooting(false), fadeMs);
    }, showMs);
    return () => window.clearTimeout(showTimer);
  }, []);

  const theme = useMemo(
    () =>
      createTheme(baseTheme, {
        direction: isRtl ? 'rtl' : 'ltr',
        typography:
          locale === 'ar'
            ? {
                fontFamily: '"IBM Plex Sans Arabic", "Inter", system-ui, sans-serif',
                h1: { fontFamily: '"IBM Plex Sans Arabic", "Cormorant Garamond", serif' },
                h2: { fontFamily: '"IBM Plex Sans Arabic", "Cormorant Garamond", serif' },
                h3: { fontFamily: '"IBM Plex Sans Arabic", "Cormorant Garamond", serif' },
                h4: { fontFamily: '"IBM Plex Sans Arabic", "Cormorant Garamond", serif' },
                h5: { fontFamily: '"IBM Plex Sans Arabic", "Cormorant Garamond", serif' },
                h6: { fontFamily: '"IBM Plex Sans Arabic", "Cormorant Garamond", serif' },
                button: { fontFamily: '"IBM Plex Sans Arabic", "Inter", sans-serif' },
                body1: { fontFamily: '"IBM Plex Sans Arabic", "Inter", sans-serif' },
                body2: { fontFamily: '"IBM Plex Sans Arabic", "Inter", sans-serif' },
                overline: { fontFamily: '"IBM Plex Sans Arabic", "Inter", sans-serif' },
                caption: { fontFamily: '"IBM Plex Sans Arabic", "Inter", sans-serif' },
              }
            : {},
      }),
    [isRtl, locale],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {booting ? <LoadingScreen /> : null}
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

function App() {
  return (
    <HelmetProvider>
      <LocaleProvider>
        <ThemedApp />
      </LocaleProvider>
    </HelmetProvider>
  );
}

export default App;
