/** Base spacing unit in pixels. MUI uses theme.spacing(n) => n * 8 by default. */
export const spacing = 8;

export const layoutSpacing = {
  sectionY: { xs: 8, sm: 10, md: 14, lg: 16 },
  sectionYTall: { xs: 8, sm: 10, md: 16, lg: 18 },
  pageTop: { xs: 12, sm: 14, md: 16, lg: 18 },
  containerX: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
} as const;
