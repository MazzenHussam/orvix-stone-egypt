import { Box } from '@mui/material';
import { Wordmark } from '@/components/common/Wordmark';
import { colors } from '@/theme/colors';

/**
 * Initial boot screen — premium wordmark only (no icon).
 * Mounted until the app tree is ready, then faded out by BootGate.
 */
export function LoadingScreen() {
  return (
    <Box
      id="orvix-loading"
      role="status"
      aria-live="polite"
      aria-label="ORVIX STONE EGYPT"
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        display: 'grid',
        placeItems: 'center',
        bgcolor: colors.background,
        transition: 'opacity 420ms cubic-bezier(0.25, 0.1, 0.25, 1)',
      }}
    >
      <Wordmark
        variant="dark"
        sx={{
          height: { xs: 48, sm: 56 },
          width: 'auto',
        }}
      />
    </Box>
  );
}

export default LoadingScreen;
