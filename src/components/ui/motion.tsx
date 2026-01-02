"use client";

import { useRef, useState, useEffect, type ReactNode, type FC, type HTMLAttributes } from "react";
import { motion, useInView, useScroll, useTransform, type Variants } from "framer-motion";
import { cx } from "@/utils/cx";

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }
    }
};

export const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -40 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }
    }
};

export const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }
    }
};

export const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }
    }
};

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }
    }
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

export const staggerContainerFast: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.05
        }
    }
};

// 3D Perspective animation for hero image
export const hero3DOpen: Variants = {
    hidden: { 
        opacity: 0, 
        rotateX: 25,
        y: 100,
        scale: 0.9,
        transformPerspective: 1200
    },
    visible: { 
        opacity: 1, 
        rotateX: 0,
        y: 0,
        scale: 1,
        transition: { 
            duration: 1.2, 
            ease: [0.25, 0.4, 0.25, 1],
            delay: 0.3
        }
    }
};

// Slide up with spring
export const slideUpSpring: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
            type: "spring",
            stiffness: 100,
            damping: 15,
            mass: 1
        }
    }
};

// Float animation for badges
export const floatIn: Variants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: { 
            duration: 0.5, 
            ease: [0.25, 0.4, 0.25, 1]
        }
    }
};

// Pop animation for icons
export const popIn: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
        opacity: 1, 
        scale: 1,
        transition: { 
            type: "spring",
            stiffness: 300,
            damping: 20
        }
    }
};

// Blur fade in
export const blurFadeIn: Variants = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { 
        opacity: 1, 
        filter: "blur(0px)",
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

// ============================================================================
// MOTION COMPONENTS
// ============================================================================

interface MotionWrapperProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    variants?: Variants;
    delay?: number;
    once?: boolean;
    amount?: number;
    className?: string;
}

// Basic fade in up on scroll
export const FadeInUp: FC<MotionWrapperProps> = ({ 
    children, 
    delay = 0, 
    once = true, 
    amount = 0.3,
    className,
    ...props 
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay }
                }
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

// Fade in from left
export const FadeInLeft: FC<MotionWrapperProps> = ({ 
    children, 
    delay = 0, 
    once = true, 
    amount = 0.3,
    className,
    ...props 
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0, x: -60 },
                visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1], delay }
                }
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

// Fade in from right
export const FadeInRight: FC<MotionWrapperProps> = ({ 
    children, 
    delay = 0, 
    once = true, 
    amount = 0.3,
    className,
    ...props 
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0, x: 60 },
                visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1], delay }
                }
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

// Scale in animation
export const ScaleIn: FC<MotionWrapperProps> = ({ 
    children, 
    delay = 0, 
    once = true, 
    amount = 0.3,
    className,
    ...props 
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { 
                    opacity: 1, 
                    scale: 1,
                    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1], delay }
                }
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

// Stagger children container
export const StaggerContainer: FC<MotionWrapperProps & { staggerDelay?: number }> = ({ 
    children, 
    delay = 0,
    staggerDelay = 0.1,
    once = true, 
    amount = 0.2,
    className,
    ...props 
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: staggerDelay,
                        delayChildren: delay
                    }
                }
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

// Stagger item (use inside StaggerContainer)
export const StaggerItem: FC<MotionWrapperProps> = ({ 
    children, 
    variants = fadeInUp,
    className,
    ...props 
}) => {
    return (
        <motion.div variants={variants} className={className} {...props}>
            {children}
        </motion.div>
    );
};

// 3D Hero image animation
export const Hero3DImage: FC<MotionWrapperProps> = ({ 
    children, 
    delay = 0.3, 
    once = true,
    className,
    ...props 
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: 0.2 });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: { 
                    opacity: 0, 
                    rotateX: 25,
                    y: 100,
                    scale: 0.9,
                },
                visible: { 
                    opacity: 1, 
                    rotateX: 0,
                    y: 0,
                    scale: 1,
                    transition: { 
                        duration: 1.2, 
                        ease: [0.25, 0.4, 0.25, 1],
                        delay
                    }
                }
            }}
            style={{ transformPerspective: 1200, transformStyle: "preserve-3d" }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

// Parallax scroll effect
export const ParallaxScroll: FC<MotionWrapperProps & { offset?: number }> = ({ 
    children, 
    offset = 50,
    className,
    ...props 
}) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

    return (
        <motion.div
            ref={ref}
            style={{ y }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

// Blur fade in
export const BlurFadeIn: FC<MotionWrapperProps> = ({ 
    children, 
    delay = 0, 
    once = true, 
    amount = 0.3,
    className,
    ...props 
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0, filter: "blur(10px)" },
                visible: { 
                    opacity: 1, 
                    filter: "blur(0px)",
                    transition: { duration: 0.6, ease: "easeOut", delay }
                }
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

// Pop in animation (for icons, badges)
export const PopIn: FC<MotionWrapperProps> = ({ 
    children, 
    delay = 0, 
    once = true, 
    amount = 0.5,
    className,
    ...props 
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { 
                    opacity: 1, 
                    scale: 1,
                    transition: { 
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        delay
                    }
                }
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

// Counter animation for numbers
export const AnimatedCounter: FC<{ 
    value: number; 
    suffix?: string; 
    prefix?: string;
    duration?: number;
    className?: string;
}> = ({ value, suffix = "", prefix = "", duration = 2, className }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    
    return (
        <motion.span
            ref={ref}
            className={className}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        >
            {prefix}
            <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            >
                {isInView && (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <CountUp value={value} duration={duration} />
                    </motion.span>
                )}
            </motion.span>
            {suffix}
        </motion.span>
    );
};

// Simple count up component
const CountUp: FC<{ value: number; duration: number }> = ({ value, duration }) => {
    const ref = useRef<HTMLSpanElement>(null);
    
    return (
        <motion.span
            ref={ref}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
        >
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
            >
                {value.toLocaleString()}
            </motion.span>
        </motion.span>
    );
};

// Hover lift effect
export const HoverLift: FC<MotionWrapperProps & { lift?: number }> = ({ 
    children, 
    lift = -8,
    className,
    ...props 
}) => {
    return (
        <motion.div
            whileHover={{ 
                y: lift, 
                transition: { duration: 0.3, ease: "easeOut" } 
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

// Hover scale effect
export const HoverScale: FC<MotionWrapperProps & { scale?: number }> = ({ 
    children, 
    scale = 1.05,
    className,
    ...props 
}) => {
    return (
        <motion.div
            whileHover={{ 
                scale, 
                transition: { duration: 0.3, ease: "easeOut" } 
            }}
            whileTap={{ scale: 0.98 }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

// Text reveal animation (word by word)
export const TextReveal: FC<{ 
    text: string; 
    className?: string;
    delay?: number;
}> = ({ text, className, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const words = text.split(" ");

    return (
        <motion.span
            ref={ref}
            className={cx("inline-flex flex-wrap", className)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.05,
                        delayChildren: delay
                    }
                }
            }}
        >
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    className="inline-block mr-[0.25em]"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { 
                            opacity: 1, 
                            y: 0,
                            transition: { duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }
                        }
                    }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
};

// Line draw animation for SVG paths
export const DrawLine: FC<{ 
    className?: string;
    delay?: number;
    duration?: number;
}> = ({ className, delay = 0, duration = 1 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <motion.svg
            ref={ref}
            className={className}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration, delay, ease: "easeInOut" }}
        />
    );
};

// Magnetic hover effect
export const MagneticHover: FC<MotionWrapperProps> = ({ 
    children, 
    className,
    ...props 
}) => {
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        ref.current.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    };

    const handleMouseLeave = () => {
        if (!ref.current) return;
        ref.current.style.transform = "translate(0px, 0px)";
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cx("transition-transform duration-200 ease-out", className)}
            {...props}
        >
            {children}
        </motion.div>
    );
};

// ============================================================================
// ADVANCED PREMIUM ANIMATIONS
// ============================================================================

// Gradient text shimmer effect
export const GradientText: FC<{ 
    children: ReactNode; 
    className?: string;
    animate?: boolean;
}> = ({ children, className, animate = true }) => {
    return (
        <motion.span
            className={cx(
                "bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto]",
                animate && "animate-gradient",
                className
            )}
            initial={{ backgroundPosition: "0% 50%" }}
            animate={animate ? { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] } : {}}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        >
            {children}
        </motion.span>
    );
};

// Floating animation for elements
export const FloatingElement: FC<MotionWrapperProps & { 
    duration?: number; 
    distance?: number;
    delay?: number;
}> = ({ 
    children, 
    duration = 3, 
    distance = 10,
    delay = 0,
    className,
    ...props 
}) => {
    return (
        <motion.div
            animate={{ 
                y: [-distance, distance, -distance],
            }}
            transition={{ 
                duration, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

// Glow pulse effect
export const GlowPulse: FC<MotionWrapperProps & { color?: string }> = ({ 
    children, 
    color = "purple",
    className,
    ...props 
}) => {
    return (
        <motion.div
            className={cx("relative", className)}
            {...props}
        >
            <motion.div
                className={cx(
                    "absolute inset-0 rounded-full blur-xl opacity-50",
                    color === "purple" && "bg-purple-500",
                    color === "blue" && "bg-blue-500",
                    color === "green" && "bg-green-500"
                )}
                animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                }}
            />
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
};

// Typewriter effect
export const TypewriterText: FC<{ 
    text: string; 
    className?: string;
    speed?: number;
    delay?: number;
}> = ({ text, className, speed = 0.05, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    
    return (
        <motion.span ref={ref} className={className}>
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.1, delay: delay + (i * speed) }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.span>
    );
};

// Morphing blob background
export const MorphingBlob: FC<{ className?: string; color?: string }> = ({ 
    className,
    color = "purple" 
}) => {
    return (
        <motion.div
            className={cx(
                "absolute rounded-full blur-3xl opacity-30",
                color === "purple" && "bg-gradient-to-r from-purple-400 to-pink-400",
                color === "blue" && "bg-gradient-to-r from-blue-400 to-cyan-400",
                className
            )}
            animate={{
                scale: [1, 1.2, 1.1, 1],
                borderRadius: ["60% 40% 30% 70%", "30% 60% 70% 40%", "50% 60% 30% 60%", "60% 40% 30% 70%"],
            }}
            transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        />
    );
};

// Scroll-triggered number counter with smooth animation
export const AnimatedNumber: FC<{ 
    value: number; 
    suffix?: string; 
    prefix?: string;
    duration?: number;
    className?: string;
}> = ({ value, suffix = "", prefix = "", duration = 2, className }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [displayValue, setDisplayValue] = useState(0);
    
    useEffect(() => {
        if (!isInView) return;
        
        let startTime: number;
        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setDisplayValue(Math.floor(easeOut * value));
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [isInView, value, duration]);
    
    return (
        <span ref={ref} className={className}>
            {prefix}{displayValue.toLocaleString()}{suffix}
        </span>
    );
};


// Reveal on scroll with clip path
export const ClipReveal: FC<MotionWrapperProps & { direction?: "up" | "down" | "left" | "right" }> = ({ 
    children, 
    direction = "up",
    delay = 0,
    once = true,
    className,
    ...props 
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: 0.3 });
    
    const clipPaths = {
        up: { hidden: "inset(100% 0 0 0)", visible: "inset(0 0 0 0)" },
        down: { hidden: "inset(0 0 100% 0)", visible: "inset(0 0 0 0)" },
        left: { hidden: "inset(0 100% 0 0)", visible: "inset(0 0 0 0)" },
        right: { hidden: "inset(0 0 0 100%)", visible: "inset(0 0 0 0)" },
    };
    
    return (
        <motion.div
            ref={ref}
            initial={{ clipPath: clipPaths[direction].hidden, opacity: 0 }}
            animate={isInView ? { clipPath: clipPaths[direction].visible, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

// Magnetic button effect
export const MagneticButton: FC<MotionWrapperProps & { strength?: number }> = ({ 
    children, 
    strength = 0.3,
    className,
    ...props 
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const x = (e.clientX - centerX) * strength;
        const y = (e.clientY - centerY) * strength;
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

// Spotlight effect that follows cursor
export const SpotlightCard: FC<MotionWrapperProps> = ({ 
    children, 
    className,
    ...props 
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cx("relative overflow-hidden", className)}
            {...props}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
                }}
                animate={{ opacity: isHovered ? 1 : 0 }}
            />
            {children}
        </motion.div>
    );
};

// Scroll progress indicator
export const ScrollProgress: FC<{ className?: string }> = ({ className }) => {
    const { scrollYProgress } = useScroll();
    
    return (
        <motion.div
            className={cx("fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 origin-left z-50", className)}
            style={{ scaleX: scrollYProgress }}
        />
    );
};

// Staggered text reveal (letter by letter)
export const LetterReveal: FC<{ 
    text: string; 
    className?: string;
    delay?: number;
    staggerDelay?: number;
}> = ({ text, className, delay = 0, staggerDelay = 0.03 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <motion.span
            ref={ref}
            className={cx("inline-block", className)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    className="inline-block"
                    variants={{
                        hidden: { opacity: 0, y: 50, rotateX: -90 },
                        visible: { 
                            opacity: 1, 
                            y: 0, 
                            rotateX: 0,
                            transition: { 
                                duration: 0.5, 
                                delay: delay + (i * staggerDelay),
                                ease: [0.25, 0.4, 0.25, 1]
                            }
                        }
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.span>
    );
};

// Tilt card effect on hover
export const TiltCard: FC<MotionWrapperProps & { maxTilt?: number }> = ({ 
    children, 
    maxTilt = 10,
    className,
    ...props 
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const x = ((e.clientY - centerY) / (rect.height / 2)) * maxTilt;
        const y = ((e.clientX - centerX) / (rect.width / 2)) * -maxTilt;
        setTilt({ x, y });
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ rotateX: tilt.x, rotateY: tilt.y }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

// Infinite scroll marquee
export const InfiniteMarquee: FC<MotionWrapperProps & { 
    speed?: number; 
    direction?: "left" | "right";
    pauseOnHover?: boolean;
}> = ({ 
    children, 
    speed = 20,
    direction = "left",
    pauseOnHover = true,
    className,
    ...props 
}) => {
    const [isPaused, setIsPaused] = useState(false);
    
    return (
        <div 
            className={cx("overflow-hidden", className)}
            onMouseEnter={() => pauseOnHover && setIsPaused(true)}
            onMouseLeave={() => pauseOnHover && setIsPaused(false)}
            {...props}
        >
            <motion.div
                className="flex"
                animate={{ 
                    x: direction === "left" ? [0, -1000] : [-1000, 0]
                }}
                transition={{ 
                    duration: speed, 
                    repeat: Infinity, 
                    ease: "linear",
                    repeatType: "loop"
                }}
                style={{ animationPlayState: isPaused ? "paused" : "running" }}
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
};

// Export motion for direct use
export { motion, useInView, useScroll, useTransform };
