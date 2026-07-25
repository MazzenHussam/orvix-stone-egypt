import { Box, Fab, Tooltip } from '@mui/material';
import { company, getWhatsAppUrl } from '@/config/company';
import { useLocale } from '@/hooks/useLocale';
import { motion, transitions } from '@/theme/motion';

function WhatsAppGlyph() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden fill="#25D366">
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.97.52 3.8 1.43 5.4L2 22l4.95-1.52a9.9 9.9 0 0 0 5.09 1.38h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 13.99c-.24.68-1.4 1.25-1.93 1.33-.5.08-1.12.11-1.81-.11-.41-.13-.94-.31-1.62-.61-2.85-1.23-4.71-4.11-4.85-4.3-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.09 1-2.37.24-.26.64-.38 1.02-.38.12 0 .23 0 .33.01.29.01.44.03.63.49.24.58.81 2 .88 2.15.07.15.12.32.02.52-.09.19-.14.31-.28.48-.14.16-.29.36-.42.49-.14.14-.29.29-.12.56.16.27.73 1.2 1.57 1.95 1.08.96 1.98 1.26 2.26 1.4.28.14.44.12.6-.07.17-.2.71-.82.9-1.1.19-.28.38-.23.64-.14.26.09 1.66.78 1.95.92.28.14.47.21.54.33.07.12.07.69-.17 1.37z" />
    </svg>
  );
}

/** Global floating WhatsApp CTA — visible on every page. */
export function WhatsAppFab() {
  const { locale, isRtl } = useLocale();
  const href = getWhatsAppUrl(locale);
  const label = company.whatsappButton.ariaLabel[locale];

  return (
    <Tooltip title={label} placement={isRtl ? 'right' : 'left'}>
      <Fab
        component="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        sx={{
          position: 'fixed',
          bottom: { xs: 16, sm: 20, md: 28 },
          insetInlineEnd: { xs: 16, sm: 20, md: 28 },
          zIndex: (theme) => theme.zIndex.tooltip + 1,
          width: 56,
          height: 56,
          bgcolor: 'rgba(255,255,255,0.72)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          border: '1px solid rgba(255,255,255,0.55)',
          boxShadow: 'none',
          transition: `${transitions.background}, ${transitions.transform}`,
          '&:hover': {
            bgcolor: 'rgba(255,255,255,0.9)',
            transform: `scale(${motion.scaleHover})`,
            boxShadow: 'none',
          },
          '&:focus-visible': {
            outline: '2px solid #B9985A',
            outlineOffset: 3,
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <WhatsAppGlyph />
        </Box>
      </Fab>
    </Tooltip>
  );
}
