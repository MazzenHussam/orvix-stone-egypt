import type { SxProps, Theme } from '@mui/material/styles';
import { colors } from './colors';
import { transitions } from './motion';

/** Single source of truth for polish — keep pages feeling one-team. */
export const radii = {
  /** Media frames, buttons, chips, icon buttons */
  control: '4px',
  none: 0,
} as const;

export const iconStroke = 1.25;
export const iconSize = {
  sm: 16,
  md: 18,
  lg: 22,
} as const;

/** Vertical rhythm for page sections */
export const sectionPy = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 16,
} as const;

/** Slightly taller editorial home sections */
export const sectionPyTall = {
  xs: 8,
  sm: 10,
  md: 16,
  lg: 18,
} as const;

export const pageHeroPt = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
} as const;

export const typeScale = {
  display: {
    xs: '1.875rem',
    sm: '2.5rem',
    md: '3.25rem',
    lg: '3.75rem',
  },
  section: {
    xs: '1.875rem',
    sm: '2.25rem',
    md: '2.75rem',
    lg: '3.25rem',
  },
  sectionLg: {
    xs: '1.875rem',
    sm: '2.25rem',
    md: '2.75rem',
    lg: '3.5rem',
  },
  cardTitle: '1.35rem',
  body: { xs: '1rem', md: '1.0625rem' },
  bodySm: '0.9375rem',
  eyebrow: { xs: '0.8125rem', md: '0.75rem' },
} as const;

export const textMuted = colors.text.secondary;

export const sectionSx = {
  py: sectionPy,
} as const;

export const sectionTallSx = {
  py: sectionPyTall,
} as const;

export const mediaFrameSx: SxProps<Theme> = {
  overflow: 'hidden',
  borderRadius: radii.control,
  bgcolor: colors.secondary,
};

export const eyebrowSx = (isRtl: boolean): SxProps<Theme> => ({
  color: colors.accent,
  fontSize: typeScale.eyebrow,
  letterSpacing: isRtl ? '0.06em' : '0.14em',
  textTransform: isRtl ? 'none' : 'uppercase',
  fontWeight: 500,
  mb: { xs: 2.5, md: 3 },
});

export const sectionTitleSx = (displayFont: string): SxProps<Theme> => ({
  fontFamily: displayFont,
  fontWeight: 400,
  fontSize: typeScale.section,
  lineHeight: 1.15,
  color: colors.text.primary,
});

export const sectionTitleLgSx = (displayFont: string): SxProps<Theme> => ({
  fontFamily: displayFont,
  fontWeight: 400,
  fontSize: typeScale.sectionLg,
  lineHeight: 1.15,
  color: colors.text.primary,
});

export const bodySx: SxProps<Theme> = {
  color: textMuted,
  fontSize: typeScale.body,
  lineHeight: 1.8,
};

export const buttonPrimarySx: SxProps<Theme> = {
  bgcolor: colors.black,
  color: colors.white,
  px: { xs: 2.5, sm: 3.5 },
  py: 1.4,
  borderRadius: radii.control,
  boxShadow: 'none',
  transition: transitions.button,
  '&:hover': {
    bgcolor: colors.primary,
    boxShadow: 'none',
    transform: 'scale(1.02)',
  },
};

export const buttonOutlinedSx: SxProps<Theme> = {
  borderColor: colors.primary,
  color: colors.primary,
  bgcolor: 'transparent',
  px: { xs: 2.5, sm: 3.5 },
  py: 1.4,
  borderRadius: radii.control,
  transition: transitions.button,
  '&:hover': {
    borderColor: colors.primary,
    bgcolor: 'rgba(17, 17, 17, 0.04)',
    transform: 'scale(1.02)',
  },
};

/** Light CTA on dark photographic band */
export const buttonOnDarkSx: SxProps<Theme> = {
  bgcolor: colors.white,
  color: colors.primary,
  px: 4,
  py: 1.5,
  borderRadius: radii.control,
  boxShadow: 'none',
  transition: transitions.button,
  '&:hover': {
    bgcolor: colors.secondary,
    boxShadow: 'none',
    transform: 'scale(1.02)',
  },
};

export const ctaBandMinHeight = { xs: 420, md: 520 } as const;

export const ctaOverlaySx: SxProps<Theme> = {
  position: 'absolute',
  inset: 0,
  bgcolor: 'rgba(0,0,0,0.55)',
};

export const socialIconButtonSx: SxProps<Theme> = {
  border: `1px solid ${colors.border}`,
  borderRadius: radii.control,
  width: 40,
  height: 40,
  color: colors.primary,
  transition: transitions.button,
  '&:hover': {
    color: colors.accent,
    borderColor: colors.accent,
    bgcolor: 'transparent',
    transform: 'scale(1.02)',
  },
};
