import type { Product } from "../../@types";

import { HomeWrapper } from "./styles";

import { ProductCarousel } from "../../components/ProductCarousel";

import { useProducts } from "../../hooks/useProducts";

export const Home = () => {
    const { products, loading, error } = useProducts();

    const groupedProducts: Record<string, Product[]> = {
        "Vestuário": [],
        "Eletrônicos": [],
        "Joalheria": [],
    };

    products.forEach((product) => {
        if (
            product.category === "men's clothing" ||
            product.category === "women's clothing"
        ) {
            groupedProducts["Vestuário"].push(product);
        } else if (product.category === "electronics") {
            groupedProducts["Eletrônicos"].push(product);
        } else if (product.category === "jewelery") {
            groupedProducts["Joalheria"].push(product);
        }
    });

    const orderedCategories = ["Vestuário", "Eletrônicos", "Joalheria"];

    return (
        <HomeWrapper>
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
                        />
                    ) : null
                )
            }
        </HomeWrapper>
    );
};
