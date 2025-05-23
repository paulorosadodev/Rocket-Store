import * as S from "./styles";

import { SkeletonImageContainer } from "../../ProductImageContainer/Skeleton/styles";

export function ProductCardSkeleton() {
    return (
        <S.SkeletonCardWrapper>
            <SkeletonImageContainer size="medium" />
            <S.SkeletonTitle />
            <S.SkeletonPrice />
            <S.SkeletonButtonsContainer>
                <S.SkeletonBuyNowButton />
                <S.SkeletonAddToCartButton />
            </S.SkeletonButtonsContainer>
        </S.SkeletonCardWrapper>
    );
}
