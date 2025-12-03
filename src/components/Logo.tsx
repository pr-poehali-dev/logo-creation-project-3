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
    sm: 32,
    md: 48,
    lg: 72
  };

  const variantClasses = {
    light: "text-white",
    dark: "text-gray-900",
    gradient: "text-[#FF6B9D]"
  };

  return (
    <div className={cn("flex items-center gap-4 group", className)}>
      {showIcon && (
        <div 
          className="relative transition-all duration-500 group-hover:rotate-12 group-hover:scale-110"
          style={{ width: iconSizes[size], height: iconSizes[size] }}
        >
          {/* Фон в виде скруглённого квадрата */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FFB6D9] via-[#FF6B9D] to-[#C94277] shadow-lg" />
          
          {/* Милое сердечко */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="absolute inset-0 w-full h-full p-2"
          >
            <path
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              fill="white"
              className="drop-shadow-md"
            />
          </svg>
          
          {/* Декоративные кружочки */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FFE66D] rounded-full animate-pulse" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#4ECDC4] rounded-full animate-pulse" style={{ animationDelay: "0.3s" }} />
        </div>
      )}
      
      <div className="flex flex-col leading-none">
        <span className={cn("font-black tracking-tight transition-all duration-300 relative", sizeClasses[size], variantClasses[variant])}>
          Sandra
          <span className="absolute -top-1 -right-3 text-[0.4em] animate-bounce">✨</span>
        </span>
        <span className={cn("font-bold tracking-[0.3em] uppercase", 
          size === "sm" ? "text-[10px]" : size === "md" ? "text-xs" : "text-base",
          variant === "gradient" ? "text-[#4ECDC4]" : variant === "light" ? "text-white/90" : "text-gray-700"
        )}>
          KIDS
        </span>
      </div>
    </div>
  );
};

export default Logo;