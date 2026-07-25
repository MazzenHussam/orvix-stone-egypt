import { Box, Grid } from '@mui/material';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { FadeIn } from '@/components/home/FadeIn';
import { Container } from '@/components/layout/Container';
import { useLocale } from '@/hooks/useLocale';

export function ContactMain() {
  const { isRtl } = useLocale();

  return (
    <Box
      component="section"
      aria-label="contact-main"
      dir={isRtl ? 'rtl' : 'ltr'}
      sx={{
        bgcolor: '#FFFFFF',
        pb: { xs: 10, md: 16 },
        pt: { xs: 2, md: 4 },
      }}
    >
      <Container>
        <Grid container spacing={{ xs: 6, sm: 7, md: 8, lg: 12 }}>
          <Grid size={{ xs: 12, lg: 7 }}>
            <FadeIn>
              <ContactForm />
            </FadeIn>
          </Grid>
          <Grid size={{ xs: 12, lg: 5 }}>
            <FadeIn delay={0.08}>
              <ContactInfo />
            </FadeIn>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
