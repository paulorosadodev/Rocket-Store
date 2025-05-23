import { SkeletonCardWrapper, SkeletonLine, SkeletonButton } from "./styles";
import { SkeletonImageContainer } from "../../ProductImageContainer/skeleton";

export function ProductCardSkeleton() {
    return (
        <SkeletonCardWrapper>
            <SkeletonImageContainer size="small" />
            <SkeletonLine width="90%" height="1.2rem" />
            <SkeletonLine width="60%" height="1.1rem" />
            <SkeletonLine width="70%" height="1.1rem" style={{ marginTop: "auto" }} />
            <SkeletonButton />
            <SkeletonButton style={{ marginBottom: 0 }} />
        </SkeletonCardWrapper>
    );
}

