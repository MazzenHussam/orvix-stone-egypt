import { Box, type BoxProps } from '@mui/material';
import { motion as fm, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from '@/theme/motion';

type PageWrapperProps = {
  children: ReactNode;
} & BoxProps;

/** Page shell with a quiet route fade (keyed by pathname). */
export function PageWrapper({ children, sx, ...props }: PageWrapperProps) {
  const { pathname } = useLocation();
  const reduceMotion = useReducedMotion();

  return (
    <Box
      component="main"
      sx={{
        flex: 1,
        pt: { xs: 10, md: 12 },
        pb: { xs: 6, md: 10 },
        minHeight: '50vh',
        ...sx,
      }}
      {...props}
    >
      <fm.div
        key={pathname}
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: motion.seconds.page,
          ease: motion.easeFramer,
        }}
      >
        {children}
      </fm.div>
    </Box>
  );
}

export default PageWrapper;
