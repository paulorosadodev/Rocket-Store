import * as S from "./styles";

interface ProductImageContainerProps {
    src: string;
    alt: string;
    size?: "small" | "medium" | "large";
    loading?: "lazy" | "eager";
}

export function ProductImageContainer({ src, alt, size = "medium", loading }: ProductImageContainerProps) {
    return (
        <S.ProductImageWrapper size={size}>
            <S.ProductImage src={src} alt={alt} loading={loading} />
        </S.ProductImageWrapper>
    );
}
