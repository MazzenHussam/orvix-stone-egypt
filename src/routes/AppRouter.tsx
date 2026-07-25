import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import ExportPage from '@/pages/ExportPage';
import GalleryPage from '@/pages/GalleryPage';
import HomePage from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';
import ProductDetailsPage from '@/pages/ProductDetailsPage';
import ProductsPage from '@/pages/ProductsPage';
import { routes } from './paths';

export function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.about} element={<AboutPage />} />
        <Route path={routes.products} element={<ProductsPage />} />
        <Route path={routes.productDetails} element={<ProductDetailsPage />} />
        <Route path={routes.gallery} element={<GalleryPage />} />
        <Route path={routes.export} element={<ExportPage />} />
        <Route path={routes.contact} element={<ContactPage />} />
        <Route path={routes.notFound} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
