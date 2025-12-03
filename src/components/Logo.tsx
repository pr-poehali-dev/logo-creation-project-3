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
    sm: 24,
    md: 36,
    lg: 56
  };

  const variantClasses = {
    light: "text-white",
    dark: "text-gray-900",
    gradient: "bg-gradient-to-r from-[#60A5FA] to-[#EC4899] bg-clip-text text-transparent"
  };

  return (
    <div className={cn("flex items-center gap-3 group", className)}>
      {showIcon && (
        <div 
          className="relative transition-transform duration-300 group-hover:scale-110"
          style={{ width: iconSizes[size], height: iconSizes[size] }}
        >
          {/* Круглый фон с градиентом */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#60A5FA] to-[#EC4899] opacity-90" />
          
          {/* Звёздочка внутри */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="absolute inset-0 w-full h-full p-1.5"
          >
            {/* Центральная звезда */}
            <path
              d="M12 2L14.09 8.26L20 9.27L15.45 13.14L16.91 19L12 15.77L7.09 19L8.55 13.14L4 9.27L9.91 8.26L12 2Z"
              fill="white"
              className="drop-shadow-sm"
            />
            {/* Маленькая звёздочка */}
            <circle cx="18" cy="6" r="2" fill="white" className="animate-pulse" />
          </svg>
        </div>
      )}
      
      <div className="flex flex-col leading-none">
        <span className={cn("font-bold tracking-tight transition-all duration-300", sizeClasses[size], variantClasses[variant])}>
          SANDRA
        </span>
        <span className={cn("font-semibold tracking-widest", 
          size === "sm" ? "text-xs" : size === "md" ? "text-sm" : "text-lg",
          variant === "gradient" ? "text-gray-600" : variant === "light" ? "text-white/80" : "text-gray-500"
        )}>
          KIDS
        </span>
      </div>
    </div>
  );
};

export default Logo;
