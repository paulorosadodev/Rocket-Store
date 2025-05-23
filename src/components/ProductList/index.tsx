import type { Product } from "../../@types";

import * as S from "./styles";

import { ProductCard } from "../ProductCard";

interface ProductListProps {
    products: Product[];
}

export function ProductList({ products }: ProductListProps) {
    return (
        <S.ProductListWrapper>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </S.ProductListWrapper>
    );
}
