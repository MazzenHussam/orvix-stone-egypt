import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import { ChevronDown } from 'lucide-react';
import { FadeIn } from '@/components/home/FadeIn';
import { Container } from '@/components/layout/Container';
import { useLocale } from '@/hooks/useLocale';
import { colors } from '@/theme/colors';
import { iconSize, iconStroke, sectionSx, sectionTitleSx, typeScale } from '@/theme/ui';

export function ExportFaq() {
  const { export: exportPage, isRtl } = useLocale();
  const { faq } = exportPage;
  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';

  return (
    <Box
      component="section"
      aria-labelledby="export-faq-title"
      sx={{ ...sectionSx, bgcolor: colors.background }}
    >
      <Container>
        <FadeIn>
          <Typography
            id="export-faq-title"
            component="h2"
            sx={{
              ...sectionTitleSx(displayFont),
              mb: { xs: 4, md: 6 },
              maxWidth: 720,
            }}
          >
            {faq.title}
          </Typography>
        </FadeIn>

        <Box sx={{ maxWidth: 860 }}>
          {faq.items.map((item, index) => (
            <FadeIn key={item.id} delay={Math.min(index * 0.04, 0.2)}>
              <Accordion disableGutters elevation={0} square sx={{ bgcolor: 'transparent' }}>
                <AccordionSummary
                  expandIcon={
                    <ChevronDown size={iconSize.md} strokeWidth={iconStroke} />
                  }
                >
                  <Typography
                    component="h3"
                    sx={{
                      fontFamily: displayFont,
                      fontSize: typeScale.cardTitle,
                      fontWeight: 400,
                      color: colors.text.primary,
                      pe: 2,
                    }}
                  >
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      color: colors.text.secondary,
                      lineHeight: 1.85,
                      maxWidth: 680,
                      fontSize: typeScale.body,
                    }}
                  >
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </FadeIn>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
