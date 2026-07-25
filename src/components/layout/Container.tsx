import { Container as MuiContainer, type ContainerProps } from '@mui/material';

type AppContainerProps = ContainerProps;

/** Content width capped at 1440px; padding tuned for 360 → 1440. */
export function Container({ children, sx, ...props }: AppContainerProps) {
  return (
    <MuiContainer
      maxWidth={false}
      sx={{
        width: '100%',
        maxWidth: 1440,
        px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiContainer>
  );
}

export default Container;
