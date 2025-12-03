import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark" | "gradient";
  showIcon?: boolean;
  className?: string;
}

const Logo = ({ size = "md", variant = "gradient", showIcon = true, className }: LogoProps) => {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-3xl",
    lg: "text-5xl"
  };

  const iconSizes = {
    sm: 36,
    md: 54,
    lg: 80
  };

  const variantClasses = {
    light: "text-white",
    dark: "text-[#2C3E50]",
    gradient: "text-[#2C3E50]"
  };

  return (
    <div className={cn("flex items-center gap-2 group", className)}>
      {showIcon && (
        <div 
          className="relative transition-all duration-500 group-hover:-translate-y-1"
          style={{ width: iconSizes[size], height: iconSizes[size] }}
        >
          {/* Минималистичный контур */}
          <svg
            viewBox="0 0 100 100"
            fill="none"
            className="w-full h-full"
          >
            {/* Три перекрывающихся круга - символ детства */}
            <circle cx="30" cy="40" r="18" fill="#E8F5E9" stroke="#66BB6A" strokeWidth="2.5" />
            <circle cx="50" cy="30" r="18" fill="#FFF3E0" stroke="#FFA726" strokeWidth="2.5" />
            <circle cx="70" cy="40" r="18" fill="#F3E5F5" stroke="#AB47BC" strokeWidth="2.5" />
            
            {/* Маленькая птичка сверху */}
            <path d="M45 18 Q50 15 55 18" stroke="#2C3E50" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M47 18 L45 22" stroke="#2C3E50" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M53 18 L55 22" stroke="#2C3E50" strokeWidth="1.5" strokeLinecap="round" />
            
            {/* Линия основания */}
            <line x1="20" y1="75" x2="80" y2="75" stroke="#2C3E50" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      )}
      
      <div className="flex flex-col leading-none justify-center">
        <span className={cn("font-light tracking-wider transition-all duration-300 italic", sizeClasses[size], variantClasses[variant])}>
          Sandra
        </span>
        <div className="flex items-center gap-2 mt-0.5">
          <span className={cn("font-semibold tracking-[0.15em] uppercase", 
            size === "sm" ? "text-[11px]" : size === "md" ? "text-sm" : "text-lg",
            variant === "gradient" ? "text-[#66BB6A]" : variant === "light" ? "text-white/90" : "text-[#66BB6A]"
          )}>
            kids
          </span>
          <div className="w-1 h-1 rounded-full bg-[#FFA726]" />
        </div>
      </div>
    </div>
  );
};

export default Logo;