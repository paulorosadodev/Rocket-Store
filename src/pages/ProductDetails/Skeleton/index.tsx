import { SkeletonImageContainer } from "../../../components/ProductImageContainer/Skeleton/styles";

import * as S from "./styles";

export function ProductDetailsSkeleton() {
    return (
        <S.SkeletonDetailsWrapper>
            <SkeletonImageContainer size="large" />
            <S.SkeletonContentContainer>
                <S.SkeletonTitle />
                <S.SkeletonDescription />
                <S.SkeletonDescription style={{ width: "80%" }} />
                <S.SkeletonDescription style={{ width: "75%" }} />
            </S.SkeletonContentContainer>
            <S.SkeletonActionsWrapper>
                <S.SkeletonActions>
                    <S.SkeletonBuyButton />
                    <S.SkeletonAddToCartButton />
                </S.SkeletonActions>
            </S.SkeletonActionsWrapper>
        </S.SkeletonDetailsWrapper>
    );
}
