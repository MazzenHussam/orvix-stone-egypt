import { Button, Stack } from '@mui/material';
import type { ProductFilterValue, ProductsContent } from '@/types/content';

type ProductFiltersProps = {
  content: ProductsContent;
  value: ProductFilterValue;
  onChange: (value: ProductFilterValue) => void;
};

export function ProductFilters({ content, value, onChange }: ProductFiltersProps) {
  const options: { id: ProductFilterValue; label: string }[] = [
    { id: 'all', label: content.filterAllLabel },
    { id: 'marble', label: content.filterMarbleLabel },
    { id: 'granite', label: content.filterGraniteLabel },
  ];

  return (
    <Stack
      direction="row"
      component="nav"
      aria-label={content.pageTitle}
      useFlexGap
      sx={{
        justifyContent: 'center',
        flexWrap: 'wrap',
        columnGap: { xs: 2.5, sm: 3.5 },
        rowGap: { xs: 1.75, sm: 1.5 },
      }}
    >
      {options.map((option) => {
        const active = value === option.id;
        return (
          <Button
            key={option.id}
            onClick={() => onChange(option.id)}
            disableRipple
            sx={{
              px: 0.5,
              py: 0.75,
              minWidth: 0,
              borderRadius: 0,
              color: active ? '#111111' : '#555555',
              bgcolor: 'transparent',
              borderBottom: active ? '1px solid #B9985A' : '1px solid transparent',
              letterSpacing: '0.08em',
              fontSize: '0.875rem',
              fontWeight: active ? 500 : 400,
              transition:
                'color 280ms cubic-bezier(0.25, 0.1, 0.25, 1), border-color 280ms cubic-bezier(0.25, 0.1, 0.25, 1)',
              '&:hover': {
                bgcolor: 'transparent',
                color: '#111111',
                borderBottomColor: '#B9985A',
                transform: 'none',
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
