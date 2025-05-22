import { SkeletonCardWrapper, SkeletonImage, SkeletonLine } from "./styles";

export function ProductCardSkeleton() {
    return (
        <SkeletonCardWrapper>
            <SkeletonImage />
            <SkeletonLine width="90%" height="1.2rem" />
            <SkeletonLine width="60%" height="1.1rem" />
            <SkeletonLine width="70%" height="1.1rem" style={{ marginTop: "auto" }} />
        </SkeletonCardWrapper>
    );
}

