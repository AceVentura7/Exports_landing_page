import { cn } from "@/lib/utils";

export function CircleGrid({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={cn("w-full h-full opacity-50", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <pattern
        id="circleGrid"
        x="0"
        y="0"
        width="20"
        height="20"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="2" cy="2" r="1" className="fill-muted-foreground/20" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#circleGrid)" />
    </svg>
  );
}

export function WavePattern({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1000 1000"
      className={cn("w-full h-full opacity-30", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "rgb(37, 99, 235)", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "rgb(6, 182, 212)", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        d="M 0 1000 Q 250 900 500 1000 Q 750 1100 1000 1000 L 1000 1000 L 0 1000"
        className="fill-primary/10"
      />
      <path
        d="M 0 1000 Q 250 800 500 1000 Q 750 1200 1000 1000 L 1000 1000 L 0 1000"
        fill="url(#wave-gradient)"
        opacity="0.1"
      />
    </svg>
  );
}

export function Rings({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={cn("w-full h-full opacity-40", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "rgb(37, 99, 235)", stopOpacity: 0.2 }} />
          <stop offset="100%" style={{ stopColor: "rgb(6, 182, 212)", stopOpacity: 0.2 }} />
        </linearGradient>
      </defs>
      <circle cx="200" cy="200" r="150" stroke="url(#ring-gradient)" strokeWidth="1" fill="none" />
      <circle cx="200" cy="200" r="120" stroke="url(#ring-gradient)" strokeWidth="1" fill="none" />
      <circle cx="200" cy="200" r="90" stroke="url(#ring-gradient)" strokeWidth="1" fill="none" />
    </svg>
  );
}