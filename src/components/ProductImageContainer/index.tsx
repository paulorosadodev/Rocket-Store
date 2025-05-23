import { ProductImageWrapper, ProductImage } from "./styles";

interface ProductImageContainerProps {
    src: string;
    alt: string;
    size?: "small" | "medium" | "large";
    loading?: "lazy" | "eager";
}

export function ProductImageContainer({ src, alt, size = "medium", loading }: ProductImageContainerProps) {
    return (
        <ProductImageWrapper size={size}>
            <ProductImage src={src} alt={alt} loading={loading} />
        </ProductImageWrapper>
    );
}
