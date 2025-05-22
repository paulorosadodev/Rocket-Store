import { SkeletonDetailsWrapper, SkeletonImageWrapper, SkeletonImage, SkeletonTitle, SkeletonDescription, SkeletonPrice, SkeletonActions, SkeletonButton } from "./styles";

export function ProductDetailsSkeleton() {
    return (
        <SkeletonDetailsWrapper>
            <SkeletonImageWrapper>
                <SkeletonImage />
            </SkeletonImageWrapper>
            <div style={{ flex: 1, width: "100%" }}>
                <SkeletonTitle />
                <SkeletonDescription />
                <SkeletonDescription style={{ width: "80%" }} />
                <SkeletonPrice />
                <SkeletonActions>
                    <SkeletonButton style={{ width: "9rem" }} />
                    <SkeletonButton style={{ width: "13rem" }} />
                </SkeletonActions>
            </div>
        </SkeletonDetailsWrapper>
    );
}
