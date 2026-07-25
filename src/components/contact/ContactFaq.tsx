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

export function ContactFaq() {
  const { contact, isRtl } = useLocale();
  const { faq } = contact;
  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';

  return (
    <Box
      component="section"
      aria-labelledby="contact-faq-title"
      sx={{ ...sectionSx, bgcolor: colors.white }}
    >
      <Container>
        <FadeIn>
          <Typography
            id="contact-faq-title"
            component="h2"
            sx={{
              ...sectionTitleSx(displayFont),
              mb: { xs: 4, md: 6 },
              maxWidth: 720,
              textAlign: isRtl ? 'right' : 'left',
            }}
          >
            {faq.title}
          </Typography>
        </FadeIn>

        <Box sx={{ maxWidth: 860 }} dir={isRtl ? 'rtl' : 'ltr'}>
          {faq.items.map((item, index) => (
            <FadeIn key={item.id} delay={Math.min(index * 0.04, 0.2)}>
              <Accordion disableGutters elevation={0} square sx={{ bgcolor: 'transparent' }}>
                <AccordionSummary
                  expandIcon={
                    <ChevronDown size={iconSize.md} strokeWidth={iconStroke} />
                  }
                  sx={{
                    flexDirection: isRtl ? 'row-reverse' : 'row',
                    justifyContent: 'space-between',
                    gap: 2,
                    '& .MuiAccordionSummary-expandIconWrapper': {
                      marginLeft: 0,
                      marginRight: 0,
                    },
                    '& .MuiAccordionSummary-content': {
                      margin: '18px 0',
                      flexGrow: 1,
                      '&.Mui-expanded': { margin: '18px 0' },
                    },
                  }}
                >
                  <Typography
                    component="h3"
                    sx={{
                      fontFamily: displayFont,
                      fontSize: typeScale.cardTitle,
                      fontWeight: 400,
                      color: colors.text.primary,
                      textAlign: isRtl ? 'right' : 'left',
                      width: '100%',
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
                      textAlign: isRtl ? 'right' : 'left',
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
