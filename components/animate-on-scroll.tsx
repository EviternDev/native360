"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimateOnScrollProps {
    children: ReactNode;
    className?: string;
    /** Animation variant */
    animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right";
    /** Delay in ms (stagger children) */
    delay?: number;
    /** IntersectionObserver threshold (0-1) */
    threshold?: number;
}

const animationClasses: Record<string, { hidden: string; visible: string }> = {
    "fade-up": {
        hidden: "opacity-0 translate-y-8",
        visible: "opacity-100 translate-y-0",
    },
    "fade-in": {
        hidden: "opacity-0",
        visible: "opacity-100",
    },
    "fade-left": {
        hidden: "opacity-0 translate-x-8",
        visible: "opacity-100 translate-x-0",
    },
    "fade-right": {
        hidden: "opacity-0 -translate-x-8",
        visible: "opacity-100 translate-x-0",
    },
};

export function AnimateOnScroll({
    children,
    className,
    animation = "fade-up",
    delay = 0,
    threshold = 0.15,
}: AnimateOnScrollProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(el);
                }
            },
            { threshold },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    const { hidden, visible } = animationClasses[animation];

    return (
        <div
            ref={ref}
            className={cn(
                "transition-all duration-700 ease-out",
                isVisible ? visible : hidden,
                className,
            )}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
