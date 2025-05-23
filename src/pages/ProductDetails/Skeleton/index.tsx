import { SkeletonImageContainer } from "../../../components/ProductImageContainer/Skeleton/styles";

import * as S from "./styles";

import { useWindowSize } from "../../../hooks/useWindowSize";

export function ProductDetailsSkeleton() {

    const { isMobile } = useWindowSize();
    
    return (
        <S.SkeletonDetailsWrapper>
            <SkeletonImageContainer size="large" />
            <S.SkeletonContentContainer>
                <S.SkeletonTitle />
                <S.SkeletonDescription />
                <S.SkeletonDescription style={{ width: isMobile ? "90%" : "80%" }} />
                <S.SkeletonDescription style={{ width: isMobile ? "85%" : "75%" }} />
                <S.SkeletonPrice />
                <S.SkeletonActions>
                    <S.SkeletonButton style={{ width: isMobile ? "100%" : "9rem" }} />
                    <S.SkeletonButton style={{ width: isMobile ? "100%" : "13rem" }} />
                </S.SkeletonActions>
            </S.SkeletonContentContainer>
        </S.SkeletonDetailsWrapper>
    );

}
