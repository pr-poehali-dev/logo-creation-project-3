import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark" | "gradient";
  showIcon?: boolean;
  className?: string;
}

const LogoFuturistic = ({ size = "md", variant = "gradient", showIcon = true, className }: LogoProps) => {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-4xl",
    lg: "text-6xl"
  };

  const iconSizes = {
    sm: 38,
    md: 58,
    lg: 86
  };

  const variantClasses = {
    light: "text-white",
    dark: "text-[#00F0FF]",
    gradient: "bg-gradient-to-r from-[#00F0FF] via-[#00D4FF] to-[#0096FF] bg-clip-text text-transparent"
  };

  return (
    <div className={cn("flex items-center gap-2.5 group", className)}>
      {showIcon && (
        <div 
          className="relative transition-all duration-700 group-hover:scale-110"
          style={{ width: iconSizes[size], height: iconSizes[size] }}
        >
          {/* Футуристичный гексагон */}
          <svg
            viewBox="0 0 100 100"
            fill="none"
            className="w-full h-full"
          >
            {/* Внешний гексагон с неоновым свечением */}
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00F0FF" />
                <stop offset="50%" stopColor="#00D4FF" />
                <stop offset="100%" stopColor="#0096FF" />
              </linearGradient>
            </defs>
            
            {/* Гексагон */}
            <path 
              d="M50 5 L85 27.5 L85 72.5 L50 95 L15 72.5 L15 27.5 Z" 
              fill="url(#neonGradient)" 
              fillOpacity="0.15"
              stroke="url(#neonGradient)" 
              strokeWidth="2.5"
              filter="url(#glow)"
            />
            
            {/* Внутренний треугольник */}
            <path 
              d="M50 30 L70 65 L30 65 Z" 
              fill="none"
              stroke="url(#neonGradient)" 
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-pulse"
            />
            
            {/* Центральная точка */}
            <circle cx="50" cy="50" r="4" fill="#00F0FF" className="animate-ping" />
            <circle cx="50" cy="50" r="4" fill="#00F0FF" />
            
            {/* Угловые точки */}
            <circle cx="50" cy="5" r="2" fill="#0096FF" />
            <circle cx="85" cy="27.5" r="2" fill="#00D4FF" />
            <circle cx="85" cy="72.5" r="2" fill="#00F0FF" />
          </svg>
        </div>
      )}
      
      <div className="flex flex-col leading-none justify-center">
        <span 
          className={cn("font-black tracking-[0.15em] uppercase transition-all duration-300", sizeClasses[size], variantClasses[variant])}
          style={{ 
            fontFamily: "'Orbitron', 'Rajdhani', sans-serif",
            textShadow: "0 0 20px rgba(0, 240, 255, 0.5)"
          }}
        >
          SANDRA
        </span>
        <div className="flex items-center gap-1.5 mt-1">
          <div className="flex gap-0.5">
            <div className="w-1 h-1 bg-[#00F0FF] rounded-full animate-pulse" />
            <div className="w-1 h-1 bg-[#00D4FF] rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
            <div className="w-1 h-1 bg-[#0096FF] rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
          </div>
          <span className={cn("font-bold tracking-[0.35em] uppercase", 
            size === "sm" ? "text-[9px]" : size === "md" ? "text-[11px]" : "text-sm",
            variant === "gradient" ? "text-[#00D4FF]" : variant === "light" ? "text-white/90" : "text-[#00D4FF]"
          )}
          style={{ 
            fontFamily: "'Rajdhani', sans-serif"
          }}
          >
            KIDS
          </span>
          <div className="flex gap-0.5">
            <div className="w-1 h-1 bg-[#0096FF] rounded-full animate-pulse" />
            <div className="w-1 h-1 bg-[#00D4FF] rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
            <div className="w-1 h-1 bg-[#00F0FF] rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoFuturistic;
