import { Box, type BoxProps } from '@mui/material';
import { colors } from '@/theme/colors';

type WordmarkProps = Omit<BoxProps<'svg'>, 'children' | 'ref'> & {
  /** Dark for light backgrounds; light for dark backgrounds. */
  variant?: 'dark' | 'light';
};

/**
 * Premium ORVIX STONE EGYPT typography wordmark (SVG).
 * Uses site-loaded Cormorant Garamond + Inter — no icon mark.
 */
export function Wordmark({ variant = 'dark', sx, ...rest }: WordmarkProps) {
  const primary = variant === 'dark' ? colors.primary : colors.text.inverse;
  const accent = colors.accent;

  return (
    <Box
      component="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 78"
      role="img"
      aria-label="ORVIX STONE EGYPT"
      focusable="false"
      sx={{
        display: 'block',
        width: 'auto',
        height: 36,
        flexShrink: 0,
        ...sx,
      }}
      {...rest}
    >
      <text
        x="160"
        y="38"
        textAnchor="middle"
        fill={primary}
        style={{
          fontFamily: '"Cormorant Garamond", Georgia, "Times New Roman", serif',
          fontWeight: 400,
          fontSize: 42,
          letterSpacing: '0.32em',
        }}
      >
        ORVIX
      </text>
      <text
        x="160"
        y="62"
        textAnchor="middle"
        fill={accent}
        style={{
          fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
          fontWeight: 500,
          fontSize: 11,
          letterSpacing: '0.42em',
        }}
      >
        STONE EGYPT
      </text>
    </Box>
  );
}

export default Wordmark;
