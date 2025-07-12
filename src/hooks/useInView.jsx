import { useEffect, useRef, useState } from "react";

export const useInView = (options = {}) => {
    const ref = useRef(null);
    const [isvisible, setIsvisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsvisible(entry.isIntersecting),
            { threshold: 0.1, ...options}
        );

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect();
    }, [options]);

    return [ref, isvisible]
}

