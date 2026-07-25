import { Box, Divider, IconButton, Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { SocialIcon } from '@/components/common/SocialIcon';
import { Wordmark } from '@/components/common/Wordmark';
import { getMailtoHref, getTelHref } from '@/config/company';
import { useLocale } from '@/hooks/useLocale';
import { productDetailsPath } from '@/routes/paths';
import { colors } from '@/theme/colors';
import { Container } from './Container';

export function Footer() {
  const { site, footerNavigation, products } = useLocale();
  const year = new Date().getFullYear();
  const copyright = site.copyright.replace('{year}', String(year));
  const footerProducts = products.items.slice(0, 5);

  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        bgcolor: colors.primary,
        color: colors.text.inverse,
        pt: { xs: 8, md: 10 },
        pb: { xs: 5, md: 6 },
      }}
    >
      <Container>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 5, md: 8 }}
          sx={{ justifyContent: 'space-between' }}
        >
          <Stack spacing={2} sx={{ maxWidth: 360 }}>
            <Wordmark
              variant="light"
              sx={{
                height: 40,
                width: 'auto',
                alignSelf: 'flex-start',
              }}
            />
            <Typography variant="body2" sx={{ color: colors.secondary, maxWidth: 320 }}>
              {site.tagline}
            </Typography>
            <Typography variant="body2" sx={{ color: colors.secondary }}>
              {site.contact.officeLabel}
            </Typography>
            <Typography variant="body2" sx={{ color: colors.secondary }}>
              {site.contact.city}, {site.contact.country}
            </Typography>
            <Stack spacing={0.5}>
              {site.contact.phones.map((phone) => (
                <Link
                  key={phone}
                  href={getTelHref(phone)}
                  underline="none"
                  sx={{
                    color: colors.secondary,
                    fontSize: '0.875rem',
                    '&:hover': { color: colors.white },
                  }}
                >
                  {phone}
                </Link>
              ))}
            </Stack>
            <Link
              href={getMailtoHref(site.contact.email)}
              underline="none"
              sx={{
                color: colors.secondary,
                fontSize: '0.875rem',
                '&:hover': { color: colors.white },
              }}
            >
              {site.contact.email}
            </Link>
          </Stack>

          <Stack spacing={2}>
            <Typography variant="overline" sx={{ color: colors.accent, letterSpacing: '0.16em' }}>
              {site.footerNavigationTitle}
            </Typography>
            <Stack spacing={1.25}>
              {footerNavigation.map((item) => (
                <Link
                  key={item.path}
                  component={RouterLink}
                  to={item.path}
                  underline="none"
                  sx={{
                    color: colors.secondary,
                    fontSize: '0.95rem',
                    transition: 'color 280ms cubic-bezier(0.25, 0.1, 0.25, 1)',
                    '&:hover': { color: colors.white },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Stack>
          </Stack>

          <Stack spacing={2}>
            <Typography variant="overline" sx={{ color: colors.accent, letterSpacing: '0.16em' }}>
              {site.footerProductsTitle}
            </Typography>
            <Stack spacing={1.25}>
              {footerProducts.map((item) => (
                <Link
                  key={item.id}
                  component={RouterLink}
                  to={productDetailsPath(item.slug)}
                  underline="none"
                  sx={{
                    color: colors.secondary,
                    fontSize: '0.95rem',
                    transition: 'color 280ms cubic-bezier(0.25, 0.1, 0.25, 1)',
                    '&:hover': { color: colors.white },
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </Stack>
          </Stack>

          <Stack spacing={2}>
            <Typography variant="overline" sx={{ color: colors.accent, letterSpacing: '0.16em' }}>
              {site.footerConnectTitle}
            </Typography>
            <Stack direction="row" spacing={1}>
              {site.social.map((item) => (
                <IconButton
                  key={item.label}
                  component="a"
                  href={item.href}
                  aria-label={item.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: colors.secondary,
                    border: `1px solid ${colors.text.secondary}`,
                    borderRadius: '4px',
                    width: 40,
                    height: 40,
                    transition:
                      'color 280ms cubic-bezier(0.25, 0.1, 0.25, 1), border-color 280ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 280ms cubic-bezier(0.25, 0.1, 0.25, 1)',
                    '&:hover': {
                      color: colors.accent,
                      borderColor: colors.accent,
                      bgcolor: 'transparent',
                      transform: 'scale(1.02)',
                    },
                    '&:focus-visible': {
                      outline: `2px solid ${colors.accent}`,
                      outlineOffset: 2,
                    },
                  }}
                >
                  <SocialIcon name={item.icon} />
                </IconButton>
              ))}
            </Stack>
          </Stack>
        </Stack>

        <Divider sx={{ borderColor: 'rgba(247,245,242,0.12)', my: { xs: 4, md: 5 } }} />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1}
          sx={{ justifyContent: 'space-between' }}
        >
          <Typography variant="caption" sx={{ color: colors.secondary }}>
            {copyright}
          </Typography>
          <Typography variant="caption" sx={{ color: colors.secondary }}>
            {site.legalName}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
