import { useState, useEffect } from "react";

interface WindowSize {
    width: number;
    height: number;
    isMobile: boolean;
}

export function useWindowSize(): WindowSize {

    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: 0,
        height: 0,
        isMobile: false
    });

    useEffect(() => {

        function handleResize() {
            const width = window.innerWidth;
            const height = window.innerHeight;
            setWindowSize({
                width,
                height,
                isMobile: width <= 768
            });
        }

        window.addEventListener("resize", handleResize);

        handleResize();
        
        return () => window.removeEventListener("resize", handleResize);

    }, []);

    return windowSize;

}
