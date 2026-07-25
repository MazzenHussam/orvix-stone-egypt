import { Box } from '@mui/material';
import type { Product, ProductsContent } from '@/types/content';
import { ProductEditorialRow } from './ProductEditorialRow';

type ProductEditorialListProps = {
  products: Product[];
  content: ProductsContent;
};

export function ProductEditorialList({ products, content }: ProductEditorialListProps) {
  return (
    <Box component="section">
      {products.map((product, index) => (
        <ProductEditorialRow
          key={product.id}
          product={product}
          content={content}
          index={index}
        />
      ))}
    </Box>
  );
}
