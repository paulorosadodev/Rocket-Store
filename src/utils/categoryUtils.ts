
export const getCategoryLabel = (category: string): string => {

    if (category === "men's clothing" || category === "women's clothing") return "Vestuário";
    if (category === "electronics") return "Eletrônicos";
    if (category === "jewelery") return "Joalheria";
    return category;

};

export const orderedCategories = ["Vestuário", "Eletrônicos", "Joalheria"];

export const groupProductsByCategory = <T extends { category: string }>(products: T[]) => {

    const groupedProducts: Record<string, T[]> = {
        "Vestuário": [],
        "Eletrônicos": [],
        "Joalheria": [],
    };

    products.forEach((product) => {
        const categoryLabel = getCategoryLabel(product.category);
        if (groupedProducts[categoryLabel]) {
            groupedProducts[categoryLabel].push(product);
        }
    });

    return groupedProducts;

};
