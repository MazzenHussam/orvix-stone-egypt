import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { SeoHead } from '@/components/common/SeoHead';
import { WhatsAppFab } from '@/components/common/WhatsAppFab';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { PageWrapper } from './PageWrapper';

/** Root application shell: Navbar + page outlet + Footer. */
export function MainLayout() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default',
      }}
    >
      <SeoHead />
      <Navbar />
      <PageWrapper sx={{ pt: 0, pb: 0, minHeight: '100vh' }}>
        <Outlet />
      </PageWrapper>
      <Footer />
      <WhatsAppFab />
    </Box>
  );
}

export default MainLayout;
