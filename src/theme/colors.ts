export const colors = {
  primary: '#111111',
  background: '#F8F6F3',
  secondary: '#E9E6E2',
  accent: '#B9985A',
  text: {
    primary: '#111111',
    /** Body / muted copy — single muted tone sitewide */
    secondary: '#555555',
    inverse: '#F8F6F3',
  },
  border: '#E2DED8',
  white: '#FFFFFF',
  black: '#000000',
} as const;

export type Colors = typeof colors;
