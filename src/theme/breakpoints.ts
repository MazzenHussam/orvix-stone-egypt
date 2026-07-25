import type { ThemeOptions } from '@mui/material/styles';

/**
 * Responsive audit targets:
 * - Small Mobile: 360
 * - Mobile: 576
 * - Tablet Portrait: 768
 * - Tablet: 992
 * - Laptop: 1200
 * - Desktop content: 1440 (Container maxWidth)
 */
export const breakpoints: ThemeOptions['breakpoints'] = {
  values: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
};
