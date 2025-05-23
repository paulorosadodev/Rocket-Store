import { useEffect } from "react";

import * as S from "./styles";

interface SuccessToastProps {
    message: string;
    onClose: () => void;
    duration?: number;
    variant?: "success" | "cart";
}

export function SuccessToast({ message, onClose, duration = 3000, variant = "success" }: SuccessToastProps) {

    useEffect(() => {

        const timer = setTimeout(onClose, duration);

        return () => clearTimeout(timer);

    }, [onClose, duration]);

    return (
        <S.ToastWrapper $variant={variant} style={{
            // @ts-expect-error: Custom CSS property for animation duration
            "--toast-duration": `${duration}ms`
        }}>
            <S.ToastIcon $variant={variant} />
            {message}
        </S.ToastWrapper>
    );

}
