import type { ThemeOptions } from '@mui/material/styles';
import { colors } from './colors';

export const typography: ThemeOptions['typography'] = {
  fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
  h1: {
    fontFamily: '"Cormorant Garamond", Georgia, serif',
    fontWeight: 400,
    letterSpacing: '0.01em',
    color: colors.text.primary,
  },
  h2: {
    fontFamily: '"Cormorant Garamond", Georgia, serif',
    fontWeight: 400,
    letterSpacing: '0.01em',
    color: colors.text.primary,
  },
  h3: {
    fontFamily: '"Cormorant Garamond", Georgia, serif',
    fontWeight: 400,
    color: colors.text.primary,
  },
  h4: {
    fontFamily: '"Cormorant Garamond", Georgia, serif',
    fontWeight: 400,
    color: colors.text.primary,
  },
  h5: {
    fontFamily: '"Cormorant Garamond", Georgia, serif',
    fontWeight: 400,
    color: colors.text.primary,
  },
  h6: {
    fontFamily: '"Cormorant Garamond", Georgia, serif',
    fontWeight: 400,
    color: colors.text.primary,
  },
  subtitle1: {
    fontFamily: '"Inter", system-ui, sans-serif',
    fontWeight: 500,
  },
  subtitle2: {
    fontFamily: '"Inter", system-ui, sans-serif',
    fontWeight: 500,
  },
  body1: {
    fontFamily: '"Inter", system-ui, sans-serif',
    fontWeight: 400,
    color: colors.text.primary,
  },
  body2: {
    fontFamily: '"Inter", system-ui, sans-serif',
    fontWeight: 400,
    color: colors.text.secondary,
  },
  button: {
    fontFamily: '"Inter", system-ui, sans-serif',
    fontWeight: 500,
    textTransform: 'none',
    letterSpacing: '0.04em',
  },
  caption: {
    fontFamily: '"Inter", system-ui, sans-serif',
  },
  overline: {
    fontFamily: '"Inter", system-ui, sans-serif',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
  },
};
