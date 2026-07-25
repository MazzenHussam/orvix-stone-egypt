import { Box, Skeleton, Stack } from '@mui/material';

type MediaSkeletonGridProps = {
  /** Number of skeleton tiles */
  count?: number;
  /** Aspect ratio for each tile */
  aspectRatio?: string;
  columns?: { xs?: number; sm?: number; md?: number };
};

/**
 * Lightweight grid of loading skeletons for media lists.
 * Layout-neutral — fills the same space as product/gallery grids.
 */
export function MediaSkeletonGrid({
  count = 6,
  aspectRatio = '4 / 5',
  columns = { xs: 1, sm: 2, md: 3 },
}: MediaSkeletonGridProps) {
  return (
    <Box
      aria-busy
      aria-label="Loading"
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: `repeat(${columns.xs ?? 1}, 1fr)`,
          sm: `repeat(${columns.sm ?? 2}, 1fr)`,
          md: `repeat(${columns.md ?? 3}, 1fr)`,
        },
        gap: { xs: 4, md: 5 },
      }}
    >
      {Array.from({ length: count }, (_, index) => (
        <Stack key={index} spacing={2}>
          <Skeleton
            variant="rectangular"
            animation="wave"
            sx={{
              width: '100%',
              aspectRatio,
              borderRadius: '4px',
              bgcolor: '#E9E6E2',
              transform: 'none',
            }}
          />
          <Skeleton
            variant="text"
            animation="wave"
            width="55%"
            sx={{ bgcolor: '#E9E6E2', transform: 'none' }}
          />
        </Stack>
      ))}
    </Box>
  );
}
