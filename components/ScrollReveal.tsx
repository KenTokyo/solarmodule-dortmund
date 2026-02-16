import React, { useRef, useEffect, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number; // Delay in seconds
  animation?: "fade-up" | "fade-in" | "slide-in" | "scale-up";
  className?: string;
  duration?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  width = "fit-content", 
  delay = 0, 
  animation = "fade-up",
  className = "",
  duration = 0.8
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';
    switch (animation) {
      case "fade-up": return 'translate3d(0, 40px, 0)';
      case "slide-in": return 'translate3d(-40px, 0, 0)';
      case "scale-up": return 'scale(0.95)';
      default: return 'translate3d(0, 40px, 0)';
    }
  };

  const transitionStyles: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: getTransform(),
    filter: isVisible ? 'blur(0px)' : 'blur(10px)',
    transition: `opacity ${duration}s cubic-bezier(0.2, 0.8, 0.2, 1), transform ${duration}s cubic-bezier(0.2, 0.8, 0.2, 1), filter ${duration}s ease-out`,
    transitionDelay: `${delay}s`,
    willChange: 'opacity, transform, filter'
  };

  return (
    <div ref={ref} style={{ width, ...transitionStyles }} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;