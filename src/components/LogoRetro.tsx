import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark" | "gradient";
  showIcon?: boolean;
  className?: string;
}

const LogoRetro = ({ size = "md", variant = "gradient", showIcon = true, className }: LogoProps) => {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-3xl",
    lg: "text-5xl"
  };

  const iconSizes = {
    sm: 44,
    md: 66,
    lg: 96
  };

  const variantClasses = {
    light: "text-white",
    dark: "text-[#D2691E]",
    gradient: "text-[#D2691E]"
  };

  return (
    <div className={cn("flex items-center gap-3 group", className)}>
      {showIcon && (
        <div 
          className="relative transition-all duration-500 group-hover:rotate-6 group-hover:scale-110"
          style={{ width: iconSizes[size], height: iconSizes[size] }}
        >
          {/* Винтажный значок с солнцем */}
          <svg
            viewBox="0 0 100 100"
            fill="none"
            className="w-full h-full"
          >
            {/* Фон - кремовый круг */}
            <circle cx="50" cy="50" r="48" fill="#FFF8DC" stroke="#D2691E" strokeWidth="3" />
            
            {/* Солнце в центре */}
            <circle cx="50" cy="50" r="18" fill="#FFD700" />
            
            {/* Лучи солнца */}
            <line x1="50" y1="20" x2="50" y2="28" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" />
            <line x1="50" y1="72" x2="50" y2="80" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" />
            <line x1="20" y1="50" x2="28" y2="50" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" />
            <line x1="72" y1="50" x2="80" y2="50" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" />
            <line x1="30" y1="30" x2="35" y2="35" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" />
            <line x1="65" y1="65" x2="70" y2="70" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" />
            <line x1="70" y1="30" x2="65" y2="35" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" />
            <line x1="35" y1="65" x2="30" y2="70" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" />
            
            {/* Декоративные точки */}
            <circle cx="50" cy="12" r="2.5" fill="#FF6B6B" />
            <circle cx="88" cy="50" r="2.5" fill="#4ECDC4" />
            <circle cx="50" cy="88" r="2.5" fill="#95E1D3" />
            <circle cx="12" cy="50" r="2.5" fill="#F38181" />
          </svg>
        </div>
      )}
      
      <div className="flex flex-col leading-none justify-center">
        <span 
          className={cn("font-black tracking-tight transition-all duration-300", sizeClasses[size], variantClasses[variant])}
          style={{ 
            fontFamily: "'Cooper Black', serif",
            textShadow: "2px 2px 0px #FFD700"
          }}
        >
          SANDRA
        </span>
        <div className="flex items-center gap-1.5 mt-1">
          <div className="h-px flex-1 bg-[#D2691E]" style={{ maxWidth: "20px" }} />
          <span className={cn("font-bold tracking-[0.25em] uppercase", 
            size === "sm" ? "text-[10px]" : size === "md" ? "text-xs" : "text-base",
            variant === "gradient" ? "text-[#FF6B6B]" : variant === "light" ? "text-white/90" : "text-[#FF6B6B]"
          )}>
            KIDS
          </span>
          <div className="h-px flex-1 bg-[#D2691E]" style={{ maxWidth: "20px" }} />
        </div>
      </div>
    </div>
  );
};

export default LogoRetro;
