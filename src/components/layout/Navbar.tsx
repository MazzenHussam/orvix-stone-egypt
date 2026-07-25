import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Menu, X } from 'lucide-react';
import { Link as RouterLink, NavLink, useLocation } from 'react-router-dom';
import { SocialIcon } from '@/components/common/SocialIcon';
import { Wordmark } from '@/components/common/Wordmark';
import { useLocale } from '@/hooks/useLocale';
import { useScrolled } from '@/hooks/useScrolled';
import { routes } from '@/routes/paths';
import type { LocaleCode } from '@/types/content';
import { colors } from '@/theme/colors';
import { Container } from './Container';

export function Navbar() {
  const theme = useTheme();
  /** Desktop nav from tablet landscape (992px); below uses drawer. */
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const scrolled = useScrolled(20);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { site, mainNavigation, locale, setLocale, isRtl } = useLocale();

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.75)',
          color: colors.primary,
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(17,17,17,0.08)',
          boxShadow: 'none',
          transition: 'background-color 280ms cubic-bezier(0.25, 0.1, 0.25, 1)',
        }}
      >
        <Container>
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 64, sm: 72, lg: 88 },
              justifyContent: 'space-between',
              gap: { xs: 1, sm: 1.5, lg: 2 },
            }}
          >
            <Box
              component={RouterLink}
              to={routes.home}
              onClick={closeMobile}
              sx={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0, maxWidth: '42%' }}
              aria-label={site.name}
            >
              <Wordmark
                variant="dark"
                sx={{
                  height: { xs: 30, sm: 34, lg: 40 },
                  width: 'auto',
                  maxWidth: '100%',
                }}
              />
            </Box>

            {isDesktop ? (
              <Stack
                direction="row"
                spacing={{ lg: 0.25, xl: 0.75 }}
                sx={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  minWidth: 0,
                  px: 1,
                }}
              >
                {mainNavigation.map((item) => (
                  <Button
                    key={item.path}
                    component={NavLink}
                    to={item.path}
                    end={item.path === '/'}
                    sx={{
                      color: colors.primary,
                      px: { lg: 1, xl: 1.5 },
                      minWidth: 0,
                      fontSize: { lg: '0.75rem', xl: '0.8125rem' },
                      letterSpacing: isRtl ? 0 : '0.04em',
                      opacity: location.pathname === item.path ? 1 : 0.78,
                      borderBottom:
                        location.pathname === item.path
                          ? `1px solid ${colors.accent}`
                          : '1px solid transparent',
                      borderRadius: 0,
                      whiteSpace: 'nowrap',
                      transition:
                        'color 280ms cubic-bezier(0.25, 0.1, 0.25, 1), opacity 280ms cubic-bezier(0.25, 0.1, 0.25, 1), border-color 280ms cubic-bezier(0.25, 0.1, 0.25, 1)',
                      '&:hover': {
                        opacity: 1,
                        color: colors.accent,
                        bgcolor: 'transparent',
                        transform: 'none',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Stack>
            ) : (
              <Box sx={{ flex: 1, minWidth: 8 }} />
            )}

            <Stack
              direction="row"
              spacing={{ xs: 0.5, sm: 1 }}
              sx={{ alignItems: 'center', flexShrink: 0 }}
            >
              <Button
                size="small"
                onClick={() => setLocale(locale === 'en' ? 'ar' : 'en')}
                aria-label={site.languageSwitcherLabel}
                sx={{
                  color: colors.primary,
                  minWidth: 40,
                  px: 1,
                  display: { xs: 'none', sm: 'inline-flex' },
                  borderRadius: '4px',
                  transition: 'color 280ms cubic-bezier(0.25, 0.1, 0.25, 1)',
                  '&:hover': {
                    color: colors.accent,
                    bgcolor: 'transparent',
                    transform: 'none',
                  },
                }}
              >
                {site.languages.find((lang) => lang.code !== locale)?.label ??
                  site.languages[0]?.label}
              </Button>

              <Button
                component={RouterLink}
                to={routes.contactForm}
                variant="contained"
                size="medium"
                sx={{
                  display: { xs: 'none', xl: 'inline-flex' },
                  bgcolor: colors.black,
                  color: colors.white,
                  borderRadius: '4px',
                  px: { xl: 2 },
                  fontSize: { xl: '0.8125rem' },
                  whiteSpace: 'nowrap',
                  transition:
                    'background-color 280ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 280ms cubic-bezier(0.25, 0.1, 0.25, 1)',
                  '&:hover': {
                    bgcolor: colors.primary,
                    transform: 'scale(1.02)',
                  },
                }}
              >
                {site.requestQuoteLabel}
              </Button>

              {!isDesktop && (
                <IconButton
                  aria-label={mobileOpen ? site.closeMenuLabel : site.openMenuLabel}
                  onClick={() => setMobileOpen((open) => !open)}
                  sx={{ color: colors.primary, ms: { xs: 0, sm: 0.5 } }}
                >
                  {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </IconButton>
              )}
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor={isRtl ? 'left' : 'right'}
        open={mobileOpen}
        onClose={closeMobile}
        ModalProps={{ keepMounted: true }}
        slotProps={{
          paper: {
            sx: {
              width: 'min(calc(100vw - 24px), 320px)',
              maxWidth: '100%',
              bgcolor: colors.background,
              pt: 2,
            },
          },
        }}
      >
        <Stack spacing={2.5} sx={{ px: 2.5, pb: 3 }}>
          <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography
              variant="overline"
              sx={{
                color: colors.text.secondary,
                fontSize: '0.75rem',
                letterSpacing: isRtl ? '0.04em' : '0.12em',
              }}
            >
              {site.name}
            </Typography>
            <IconButton aria-label={site.closeMenuLabel} onClick={closeMobile}>
              <X size={20} />
            </IconButton>
          </Stack>

          <List disablePadding>
            {mainNavigation.map((item) => (
              <ListItemButton
                key={item.path}
                component={NavLink}
                to={item.path}
                end={item.path === '/'}
                onClick={closeMobile}
                sx={{ px: 1, py: 1.75, borderBottom: `1px solid ${colors.border}` }}
              >
                <ListItemText
                  primary={item.label}
                  slotProps={{
                    primary: {
                      sx: {
                        fontFamily: isRtl
                          ? '"IBM Plex Sans Arabic", sans-serif'
                          : '"Cormorant Garamond", Georgia, serif',
                        fontSize: { xs: '1.25rem', sm: '1.35rem' },
                        color: colors.primary,
                      },
                    },
                  }}
                />
              </ListItemButton>
            ))}
          </List>

          <Stack direction="row" spacing={1.25} useFlexGap sx={{ flexWrap: 'wrap' }}>
            {site.languages.map((lang) => (
              <Button
                key={lang.code}
                variant={locale === lang.code ? 'contained' : 'outlined'}
                size="small"
                onClick={() => setLocale(lang.code as LocaleCode)}
                sx={{
                  borderRadius: '4px',
                  minWidth: 52,
                  ...(locale === lang.code
                    ? { bgcolor: colors.black, color: colors.white }
                    : { borderColor: colors.primary, color: colors.primary }),
                }}
              >
                {lang.label}
              </Button>
            ))}
          </Stack>

          <Button
            component={RouterLink}
            to={routes.contactForm}
            variant="contained"
            onClick={closeMobile}
            fullWidth
            sx={{
              borderRadius: '4px',
              bgcolor: colors.black,
              color: colors.white,
              py: 1.35,
              transition:
                'background-color 280ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 280ms cubic-bezier(0.25, 0.1, 0.25, 1)',
              '&:hover': {
                bgcolor: colors.primary,
                transform: 'scale(1.02)',
              },
            }}
          >
            {site.requestQuoteLabel}
          </Button>

          <Stack
            direction="row"
            spacing={1.25}
            useFlexGap
            sx={{ pt: 0.5, flexWrap: 'wrap' }}
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
                  color: colors.primary,
                  border: `1px solid ${colors.border}`,
                  borderRadius: '4px',
                  width: 44,
                  height: 44,
                  '&:hover': {
                    color: colors.accent,
                    borderColor: colors.accent,
                    bgcolor: 'transparent',
                  },
                }}
              >
                <SocialIcon name={item.icon} />
              </IconButton>
            ))}
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
}

export default Navbar;
