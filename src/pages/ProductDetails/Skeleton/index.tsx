import { SkeletonDetailsWrapper, SkeletonTitle, SkeletonDescription, SkeletonPrice, SkeletonActions, SkeletonButton } from "./styles";
import { SkeletonImageContainer } from "../../../components/ProductImageContainer/skeleton";
import { useWindowSize } from "../../../hooks/useWindowSize";

export function ProductDetailsSkeleton() {
    const { isMobile } = useWindowSize();
    
    return (
        <SkeletonDetailsWrapper>
            <SkeletonImageContainer size="large" />
            <div style={{ flex: 1, width: "100%" }}>
                <SkeletonTitle />
                <SkeletonDescription />
                <SkeletonDescription style={{ width: isMobile ? "90%" : "80%" }} />
                <SkeletonDescription style={{ width: isMobile ? "85%" : "75%" }} />
                <SkeletonPrice />
                <SkeletonActions>
                    <SkeletonButton style={{ width: isMobile ? "100%" : "9rem" }} />
                    <SkeletonButton style={{ width: isMobile ? "100%" : "13rem" }} />
                </SkeletonActions>
            </div>
        </SkeletonDetailsWrapper>
    );
}
