"use client";

import { useEffect, useRef, useState } from "react";

interface AnimateOnScrollProps {
    children: React.ReactNode;
    animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right";
    delay?: number;
    className?: string;
}

const animationStyles: Record<string, { hidden: string; visible: string }> = {
    "fade-up": {
        hidden: "opacity-0 translate-y-8",
        visible: "opacity-100 translate-y-0",
    },
    "fade-in": {
        hidden: "opacity-0",
        visible: "opacity-100",
    },
    "fade-left": {
        hidden: "opacity-0 -translate-x-8",
        visible: "opacity-100 translate-x-0",
    },
    "fade-right": {
        hidden: "opacity-0 translate-x-8",
        visible: "opacity-100 translate-x-0",
    },
};

export const AnimateOnScroll = ({
    children,
    animation = "fade-in",
    delay = 0,
    className = "",
}: AnimateOnScrollProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.12 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const styles = animationStyles[animation];

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${styles.hidden} ${visible ? styles.visible : ""} ${className}`}
            style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
        >
            {children}
        </div>
    );
};
