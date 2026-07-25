import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Alert,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useLocale } from '@/hooks/useLocale';

type ContactFormValues = {
  name: string;
  company: string;
  country: string;
  phone: string;
  email: string;
  message: string;
  projectType: string;
};

const PHONE_PATTERN = /^[+]?[\d\s()-]{7,20}$/;

export function ContactForm() {
  const { contact, isRtl, locale } = useLocale();
  const { form } = contact;
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const displayFont = isRtl
    ? '"IBM Plex Sans Arabic", sans-serif'
    : '"Cormorant Garamond", Georgia, serif';

  const fieldSx = {
    '& .MuiInputLabel-root': {
      color: '#888888',
      fontSize: '0.8rem',
      letterSpacing: isRtl ? '0.04em' : '0.08em',
      textTransform: isRtl ? ('none' as const) : ('uppercase' as const),
      ...(isRtl
        ? {
            left: 'auto',
            right: 0,
            transformOrigin: 'top right',
            textAlign: 'right' as const,
            width: '100%',
          }
        : {}),
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#B9985A',
    },
    '& .MuiInput-root': {
      mt: 1,
      fontSize: '1.05rem',
      color: '#111111',
      ...(isRtl ? { direction: 'rtl' as const } : {}),
    },
    '& .MuiInputBase-input': {
      ...(isRtl
        ? {
            textAlign: 'right' as const,
            direction: 'rtl' as const,
          }
        : {}),
    },
    '& .MuiInputBase-input::placeholder': {
      ...(isRtl
        ? {
            textAlign: 'right' as const,
            opacity: 0.42,
          }
        : {}),
    },
    '& .MuiFormHelperText-root': {
      ...(isRtl
        ? {
            textAlign: 'right' as const,
            marginLeft: 0,
            marginRight: 0,
            mx: 0,
          }
        : {}),
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#E2DED8',
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottomColor: '#B9985A',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#B9985A',
    },
    ...(isRtl
      ? {
          '& .MuiSelect-select': {
            textAlign: 'right' as const,
            paddingLeft: 32,
            paddingRight: 0,
          },
          '& .MuiSelect-icon': {
            right: 'auto',
            left: 0,
          },
        }
      : {}),
  };

  const {
    register,
    handleSubmit,
    control,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: '',
      company: '',
      country: '',
      phone: '',
      email: '',
      message: '',
      projectType: '',
    },
  });

  useEffect(() => {
    clearErrors();
  }, [locale, clearErrors]);

  const onSubmit = (data: ContactFormValues) => {
    // TODO: Connect this form to the backend / CRM / email service.
    // Replace the console.log below with an API request (e.g. fetch/POST)
    // and handle success/error responses before showing the snackbar.
    console.log('[ORVIX Contact Form]', data);

    setSnackbarOpen(true);
    reset();
  };

  const requiredMsg = form.errors.required;
  const emailMsg = form.errors.email;
  const phoneMsg = form.errors.phone;

  return (
    <>
      <Box
        component="form"
        id="contact-form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        dir={isRtl ? 'rtl' : 'ltr'}
        sx={isRtl ? { textAlign: 'right' } : undefined}
      >
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
          {form.title}
        </Typography>

        <Stack spacing={3.5}>
          <TextField
            {...register('name', { required: requiredMsg })}
            label={form.name.label}
            placeholder={form.name.placeholder}
            variant="standard"
            fullWidth
            error={Boolean(errors.name)}
            helperText={errors.name?.message}
            slotProps={{ htmlInput: { dir: isRtl ? 'rtl' : 'ltr' } }}
            sx={fieldSx}
          />

          <TextField
            {...register('company', { required: requiredMsg })}
            label={form.company.label}
            placeholder={form.company.placeholder}
            variant="standard"
            fullWidth
            error={Boolean(errors.company)}
            helperText={errors.company?.message}
            slotProps={{ htmlInput: { dir: isRtl ? 'rtl' : 'ltr' } }}
            sx={fieldSx}
          />

          <TextField
            {...register('country', { required: requiredMsg })}
            label={form.country.label}
            placeholder={form.country.placeholder}
            variant="standard"
            fullWidth
            error={Boolean(errors.country)}
            helperText={errors.country?.message}
            slotProps={{ htmlInput: { dir: isRtl ? 'rtl' : 'ltr' } }}
            sx={fieldSx}
          />

          <TextField
            {...register('phone', {
              required: requiredMsg,
              pattern: {
                value: PHONE_PATTERN,
                message: phoneMsg,
              },
            })}
            label={form.phone.label}
            placeholder={form.phone.placeholder}
            type="tel"
            variant="standard"
            fullWidth
            error={Boolean(errors.phone)}
            helperText={errors.phone?.message}
            slotProps={{ htmlInput: { dir: isRtl ? 'rtl' : 'ltr' } }}
            sx={fieldSx}
          />

          <TextField
            {...register('email', {
              required: requiredMsg,
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: emailMsg,
              },
            })}
            label={form.email.label}
            placeholder={form.email.placeholder}
            type="email"
            variant="standard"
            fullWidth
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
            slotProps={{ htmlInput: { dir: isRtl ? 'rtl' : 'ltr' } }}
            sx={fieldSx}
          />

          <TextField
            {...register('message', { required: requiredMsg })}
            label={form.message.label}
            placeholder={form.message.placeholder}
            variant="standard"
            fullWidth
            multiline
            minRows={4}
            error={Boolean(errors.message)}
            helperText={errors.message?.message}
            slotProps={{ htmlInput: { dir: isRtl ? 'rtl' : 'ltr' } }}
            sx={fieldSx}
          />

          <FormControl
            variant="standard"
            fullWidth
            error={Boolean(errors.projectType)}
            sx={fieldSx}
            dir={isRtl ? 'rtl' : 'ltr'}
          >
            <InputLabel id="project-type-label" shrink>
              {form.projectType.label}
            </InputLabel>
            <Controller
              name="projectType"
              control={control}
              rules={{ required: requiredMsg }}
              render={({ field }) => (
                <Select
                  {...field}
                  labelId="project-type-label"
                  displayEmpty
                  MenuProps={{
                    slotProps: {
                      paper: {
                        sx: {
                          direction: isRtl ? 'rtl' : 'ltr',
                          textAlign: isRtl ? 'right' : 'left',
                        },
                      },
                    },
                  }}
                  sx={{
                    mt: 1,
                    '&:before': { borderBottomColor: '#E2DED8' },
                    '&:hover:not(.Mui-disabled):before': { borderBottomColor: '#B9985A' },
                    '&:after': { borderBottomColor: '#B9985A' },
                  }}
                >
                  <MenuItem value="" disabled sx={{ justifyContent: isRtl ? 'flex-end' : 'flex-start' }}>
                    {form.projectType.placeholder}
                  </MenuItem>
                  {form.projectType.options.map((option) => (
                    <MenuItem
                      key={option.id}
                      value={option.id}
                      sx={{ justifyContent: isRtl ? 'flex-end' : 'flex-start' }}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            {errors.projectType ? (
              <FormHelperText sx={isRtl ? { textAlign: 'right', mx: 0 } : undefined}>
                {errors.projectType.message}
              </FormHelperText>
            ) : null}
          </FormControl>

          <Box
            sx={{
              pt: { xs: 2.5, md: 2 },
              display: 'flex',
              justifyContent: 'flex-start',
            }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{
                bgcolor: '#111111',
                color: '#FFFFFF',
                px: 4,
                py: 1.5,
                borderRadius: '4px',
                boxShadow: 'none',
                letterSpacing: isRtl ? 0 : '0.04em',
                width: { xs: '100%', sm: 'auto' },
                transition:
                  'background-color 280ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 280ms cubic-bezier(0.25, 0.1, 0.25, 1)',
                '&:hover': {
                  bgcolor: '#111111',
                  boxShadow: 'none',
                  transform: 'scale(1.02)',
                  opacity: 0.92,
                },
              }}
            >
              {form.submitLabel}
            </Button>
          </Box>
        </Stack>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: isRtl ? 'left' : 'right' }}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={() => setSnackbarOpen(false)}
          sx={{
            bgcolor: '#111111',
            color: '#FFFFFF',
            boxShadow: 'none',
            direction: isRtl ? 'rtl' : 'ltr',
            textAlign: isRtl ? 'right' : 'left',
            '& .MuiAlert-icon': {
              marginRight: isRtl ? 0 : undefined,
              marginLeft: isRtl ? 0 : undefined,
              marginInlineEnd: 12,
            },
            '& .MuiAlert-action': {
              marginRight: isRtl ? 'auto' : undefined,
              marginLeft: isRtl ? -4 : undefined,
              paddingLeft: isRtl ? 0 : undefined,
              paddingRight: isRtl ? 0 : undefined,
              paddingInlineStart: isRtl ? 8 : undefined,
            },
          }}
        >
          {form.successMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
