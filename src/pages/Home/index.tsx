import { useOutletContext } from "react-router-dom";

import type { Product } from "../../@types";

import * as S from "./styles";

import { ProductCarousel } from "../../components/ProductCarousel";

import { useProducts } from "../../hooks/useProducts";

import { groupProductsByCategory, orderedCategories } from "../../utils/categoryUtils";

export const Home = () => {

    const { products, loading, error } = useProducts();

    const outletContext = useOutletContext<{ setToast: (msg: string) => void }>();

    const groupedProducts: Record<string, Product[]> = groupProductsByCategory(products);

    return (
        <S.HomeWrapper>
            {loading && (
                <>
                    {[...Array(3)].map((_, i) => (
                        <ProductCarousel
                            key={i}
                            title={" "}
                            products={[]}
                            skeleton
                        />
                    ))}
                </>
            )}
            {error && <p>{error}</p>}
            {!loading && !error &&
                orderedCategories.map((category) =>
                    groupedProducts[category].length > 0 ? (
                        <ProductCarousel
                            key={category}
                            title={category}
                            products={groupedProducts[category]}
                            outletContext={outletContext}
                        />
                    ) : null
                )
            }
        </S.HomeWrapper>
    );

};
