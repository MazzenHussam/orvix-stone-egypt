import { Box, type BoxProps } from '@mui/material';
import { motion as fm, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { motion } from '@/theme/motion';

type FadeInProps = {
  children: ReactNode;
  delay?: number;
} & Omit<BoxProps, 'children'>;

/** Premium in-view fade only — no slide, bounce, or scale. */
export function FadeIn({ children, delay = 0, sx, ...props }: FadeInProps) {
  const reduceMotion = useReducedMotion();

  return (
    <Box sx={sx} {...props}>
      <fm.div
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: motion.seconds.fade,
          ease: motion.easeFramer,
          delay: Math.min(delay, 0.2),
        }}
      >
        {children}
      </fm.div>
    </Box>
  );
}
