import { Button, Stack } from '@mui/material';
import type { GalleryContent, GalleryFilterValue } from '@/types/content';
import { colors } from '@/theme/colors';

type GalleryFiltersProps = {
  content: GalleryContent;
  value: GalleryFilterValue;
  onChange: (value: GalleryFilterValue) => void;
};

export function GalleryFilters({ content, value, onChange }: GalleryFiltersProps) {
  const options: { id: GalleryFilterValue; label: string }[] = [
    { id: 'all', label: content.filterAllLabel },
    { id: 'marble', label: content.filterMarbleLabel },
    { id: 'granite', label: content.filterGraniteLabel },
    { id: 'projects', label: content.filterProjectsLabel },
    { id: 'factory', label: content.filterFactoryLabel },
    { id: 'quarry', label: content.filterQuarryLabel },
  ];

  return (
    <Stack
      direction="row"
      component="nav"
      aria-label={content.pageTitle}
      useFlexGap
      sx={{
        flexWrap: 'wrap',
        justifyContent: { xs: 'flex-start', sm: 'center' },
        columnGap: { xs: 1, sm: 1.25 },
        rowGap: { xs: 1.25, sm: 1.5 },
      }}
    >
      {options.map((option) => {
        const active = value === option.id;
        return (
          <Button
            key={option.id}
            onClick={() => onChange(option.id)}
            disableElevation
            sx={{
              px: 2.25,
              py: 1,
              minWidth: 0,
              borderRadius: '4px',
              color: active ? colors.text.inverse : colors.primary,
              bgcolor: active ? colors.primary : 'transparent',
              border: `1px solid ${active ? colors.primary : colors.border}`,
              letterSpacing: '0.06em',
              fontSize: '0.8125rem',
              transition:
                'background-color 280ms cubic-bezier(0.25, 0.1, 0.25, 1), border-color 280ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 280ms cubic-bezier(0.25, 0.1, 0.25, 1)',
              '&:hover': {
                bgcolor: active ? colors.black : colors.secondary,
                borderColor: active ? colors.black : colors.border,
                transform: 'scale(1.02)',
              },
            }}
          >
            {option.label}
          </Button>
        );
      })}
    </Stack>
  );
}
