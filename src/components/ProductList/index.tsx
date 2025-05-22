import { ProductListWrapper } from "./styles";
import { ProductCard } from "../ProductCard";
import type { Product } from "../../@types";

interface ProductListProps {
    products: Product[];
}

export function ProductList({ products }: ProductListProps) {
    return (
        <ProductListWrapper>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </ProductListWrapper>
    );
}
