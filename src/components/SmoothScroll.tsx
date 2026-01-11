'use client';

interface SmoothScrollProps {
  children: React.ReactNode;
}

// Lenis disabled for cold Meta ad traffic - native scroll is faster and expected
export default function SmoothScroll({ children }: SmoothScrollProps) {
  return <>{children}</>;
}
