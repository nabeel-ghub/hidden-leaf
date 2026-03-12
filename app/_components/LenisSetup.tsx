"use client"; // Required for Next.js App Router

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ProviderProps {
  children: React.ReactNode;
}

export default function SmoothScrollProvider({ children }: ProviderProps) {
  useEffect(() => {
    // 1. Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,   // Speed of the scroll (seconds)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Classic "smooth" curve
      smoothWheel: true,
      wheelMultiplier: 1,
      lerp: 0.1,       // Linear interpolation (0.1 is very smooth)
    });

    window.lenisInstance = lenis

    window.dispatchEvent(new Event("lenis-ready"));

    // 2. Sync ScrollTrigger with Lenis
    // This tells GSAP to use Lenis's scroll position instead of the native one
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Convert GSAP's seconds to milliseconds for Lenis
    });

    // 3. Optional: Disable lag smoothing to prevent "jumping"
    gsap.ticker.lagSmoothing(0);

    return () => {
      // Cleanup on unmount
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return <>{children}</>;
}