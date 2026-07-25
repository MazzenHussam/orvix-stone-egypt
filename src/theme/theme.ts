import { createTheme } from '@mui/material/styles';
import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { motion, transitions } from './motion';
import { spacing } from './spacing';
import { typography } from './typography';

export const theme = createTheme({
  spacing,
  breakpoints,
  typography,
  palette: {
    mode: 'light',
    primary: {
      main: colors.primary,
      contrastText: colors.text.inverse,
    },
    secondary: {
      main: colors.secondary,
      contrastText: colors.text.primary,
    },
    background: {
      default: colors.background,
      paper: colors.white,
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
    },
    divider: colors.border,
  },
  shape: {
    /** Matches control radius used on buttons / media frames (4px). */
    borderRadius: 4,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          overflowX: 'clip',
        },
        body: {
          backgroundColor: colors.background,
          color: colors.text.primary,
          overflowX: 'clip',
        },
        img: {
          maxWidth: '100%',
        },
        a: {
          color: 'inherit',
          textDecoration: 'none',
        },
        '*:focus-visible': {
          outline: `2px solid ${colors.accent}`,
          outlineOffset: 2,
        },
        '@media (prefers-reduced-motion: reduce)': {
          '*, *::before, *::after': {
            animationDuration: '0.01ms !important',
            animationIterationCount: '1 !important',
            transitionDuration: '0.01ms !important',
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: '4px',
          paddingInline: 22,
          paddingBlock: 11,
          textTransform: 'none',
          letterSpacing: '0.04em',
          boxShadow: 'none',
          transition: transitions.button,
          '&:hover': {
            transform: `scale(${motion.scaleHover})`,
            boxShadow: 'none',
          },
          '&:active': {
            transform: 'scale(1)',
          },
          '&:focus-visible': {
            outline: `2px solid ${colors.accent}`,
            outlineOffset: 2,
          },
        },
        contained: {
          backgroundColor: colors.black,
          color: colors.white,
          '&:hover': {
            backgroundColor: colors.primary,
            transform: `scale(${motion.scaleHover})`,
            boxShadow: 'none',
          },
        },
        outlined: {
          borderColor: colors.primary,
          color: colors.primary,
          backgroundColor: 'transparent',
          borderWidth: 1,
          '&:hover': {
            borderColor: colors.primary,
            backgroundColor: 'rgba(17, 17, 17, 0.04)',
            transform: `scale(${motion.scaleHover})`,
          },
        },
        text: {
          borderRadius: 0,
          '&:hover': {
            backgroundColor: 'transparent',
            opacity: 0.72,
            transform: 'none',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          transition: transitions.button,
          '&:hover': {
            transform: `scale(${motion.scaleHover})`,
          },
          '&:focus-visible': {
            outline: `2px solid ${colors.accent}`,
            outlineOffset: 2,
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderBottom: `1px solid ${colors.border}`,
          '&:before': { display: 'none' },
          '&.Mui-expanded': { margin: 0 },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          minHeight: 64,
          paddingInline: 0,
          '&.Mui-expanded': { minHeight: 64 },
        },
        content: {
          margin: '18px 0',
          '&.Mui-expanded': { margin: '18px 0' },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          paddingInline: 0,
          paddingBottom: 24,
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        color: 'transparent',
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
    },
  },
});

export default theme;
