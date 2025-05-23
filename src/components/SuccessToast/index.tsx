import { useEffect } from "react";
import { ToastWrapper } from "./styles";

interface SuccessToastProps {
    message: string;
    onClose: () => void;
    duration?: number;
}

export function SuccessToast({ message, onClose, duration = 3000 }: SuccessToastProps) {
    useEffect(() => {
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer);
    }, [onClose, duration]);

    return <ToastWrapper style={{
        // @ts-expect-error: Custom CSS property for animation duration
        "--toast-duration": `${duration}ms`
    }}>{message}</ToastWrapper>;
}
