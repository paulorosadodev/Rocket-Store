import * as S from "./styles";

import { SkeletonImageContainer } from "../../ProductImageContainer/Skeleton/styles";

export function ProductCardSkeleton() {
    return (
        <S.SkeletonCardWrapper>
            <SkeletonImageContainer size="small" />
            <S.SkeletonLine width="90%" height="1.2rem" />
            <S.SkeletonLine width="60%" height="1.1rem" />
            <S.SkeletonLine width="70%" height="1.1rem" style={{ marginTop: "auto" }} />
            <S.SkeletonButton />
            <S.SkeletonButton style={{ marginBottom: 0 }} />
        </S.SkeletonCardWrapper>
    );
}
