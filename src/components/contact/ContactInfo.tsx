import { Box, IconButton, Link, Stack, Typography } from '@mui/material';
import type { ReactNode } from 'react';
import { SocialIcon } from '@/components/common/SocialIcon';
import { company, getMailtoHref, getTelHref, getWhatsAppUrl } from '@/config/company';
import { useLocale } from '@/hooks/useLocale';

function InfoBlock({
  label,
  isRtl,
  children,
}: {
  label: string;
  isRtl: boolean;
  children: ReactNode;
}) {
  return (
    <Box sx={{ textAlign: isRtl ? 'right' : 'left' }}>
      <Typography
        component="p"
        sx={{
          color: '#B9985A',
          fontSize: '0.75rem',
          letterSpacing: isRtl ? '0.06em' : '0.14em',
          textTransform: isRtl ? 'none' : 'uppercase',
          fontWeight: 500,
          mb: 1.25,
          textAlign: isRtl ? 'right' : 'left',
        }}
      >
        {label}
      </Typography>
      <Box
        sx={{
          color: '#111111',
          fontSize: '1.05rem',
          lineHeight: 1.7,
          textAlign: isRtl ? 'right' : 'left',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export function ContactInfo() {
  const { contact, site, locale, isRtl } = useLocale();
  const { company: companyCopy } = contact;
  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';

  return (
    <Box dir={isRtl ? 'rtl' : 'ltr'} sx={{ textAlign: isRtl ? 'right' : 'left' }}>
      <Typography
        component="h2"
        sx={{
          fontFamily: displayFont,
          fontWeight: 400,
          fontSize: { xs: '1.75rem', md: '2.25rem' },
          color: '#111111',
          mb: { xs: 4, md: 5 },
          textAlign: isRtl ? 'right' : 'left',
        }}
      >
        {companyCopy.title}
      </Typography>

      <Stack spacing={4.5}>
        <InfoBlock label={companyCopy.phoneLabel} isRtl={isRtl}>
          <Stack spacing={0.75} sx={{ alignItems: isRtl ? 'flex-end' : 'flex-start' }}>
            {site.contact.phones.map((phone) => (
              <Link
                key={phone}
                href={getTelHref(phone)}
                underline="none"
                sx={{
                  color: 'inherit',
                  direction: 'ltr',
                  unicodeBidi: 'isolate',
                  '&:hover': { color: '#B9985A' },
                }}
              >
                {phone}
              </Link>
            ))}
          </Stack>
        </InfoBlock>

        <InfoBlock label={companyCopy.whatsappLabel} isRtl={isRtl}>
          <Link
            href={getWhatsAppUrl(locale)}
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            sx={{
              color: 'inherit',
              direction: 'ltr',
              unicodeBidi: 'isolate',
              '&:hover': { color: '#B9985A' },
            }}
          >
            {company.whatsapp.display}
          </Link>
        </InfoBlock>

        <InfoBlock label={companyCopy.emailLabel} isRtl={isRtl}>
          <Link
            href={getMailtoHref(site.contact.email)}
            underline="none"
            sx={{
              color: 'inherit',
              direction: 'ltr',
              unicodeBidi: 'isolate',
              '&:hover': { color: '#B9985A' },
            }}
          >
            {site.contact.email}
          </Link>
        </InfoBlock>

        <InfoBlock label={companyCopy.socialLabel} isRtl={isRtl}>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              mt: 0.5,
              justifyContent: isRtl ? 'flex-end' : 'flex-start',
            }}
          >
            {site.social.map((item) => (
              <IconButton
                key={item.label}
                component="a"
                href={item.href}
                aria-label={item.label}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#111111',
                  border: '1px solid #E2DED8',
                  borderRadius: '4px',
                  width: 40,
                  height: 40,
                  boxShadow: 'none',
                  transition:
                    'color 280ms cubic-bezier(0.25, 0.1, 0.25, 1), border-color 280ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 280ms cubic-bezier(0.25, 0.1, 0.25, 1)',
                  '&:hover': {
                    color: '#B9985A',
                    borderColor: '#B9985A',
                    bgcolor: 'transparent',
                    transform: 'scale(1.02)',
                  },
                }}
              >
                <SocialIcon name={item.icon} />
              </IconButton>
            ))}
          </Stack>
        </InfoBlock>

        <InfoBlock label={site.contact.officeLabel} isRtl={isRtl}>
          <Typography sx={{ color: '#555555', maxWidth: 280 }}>
            {site.contact.city}, {site.contact.country}
          </Typography>
        </InfoBlock>
      </Stack>
    </Box>
  );
}
