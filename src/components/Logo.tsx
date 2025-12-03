import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark" | "gradient";
  showIcon?: boolean;
  className?: string;
}

const Logo = ({ size = "md", variant = "gradient", showIcon = true, className }: LogoProps) => {
  const sizeClasses = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-6xl"
  };

  const iconSizes = {
    sm: 40,
    md: 60,
    lg: 90
  };

  const variantClasses = {
    light: "text-white",
    dark: "text-gray-900",
    gradient: "bg-gradient-to-r from-[#A78BFA] via-[#EC4899] to-[#F59E0B] bg-clip-text text-transparent"
  };

  return (
    <div className={cn("flex items-center gap-3 group", className)}>
      {showIcon && (
        <div 
          className="relative transition-all duration-700 group-hover:scale-105"
          style={{ width: iconSizes[size], height: iconSizes[size] }}
        >
          {/* Круг с радужным градиентом */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#A78BFA] via-[#EC4899] to-[#F59E0B] shadow-xl" />
          
          {/* Внутренний белый круг */}
          <div className="absolute inset-[15%] rounded-full bg-white" />
          
          {/* Буква S стилизованная */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="absolute inset-0 w-full h-full p-3"
          >
            <path
              d="M16 8.5C16 6.5 14.5 5 12 5C9.5 5 8 6.5 8 8.5C8 10 9 10.5 11 11C13.5 11.7 16 12.5 16 15.5C16 17.5 14.5 19 12 19C9.5 19 8 17.5 8 15.5"
              stroke="url(#gradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="drop-shadow-sm"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A78BFA" />
                <stop offset="50%" stopColor="#EC4899" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Анимированные точки */}
          <div className="absolute top-0 right-2 w-2 h-2 bg-[#A78BFA] rounded-full animate-ping" />
          <div className="absolute bottom-2 left-0 w-2 h-2 bg-[#F59E0B] rounded-full animate-ping" style={{ animationDelay: "0.5s" }} />
        </div>
      )}
      
      <div className="flex flex-col leading-none justify-center">
        <span className={cn("font-black tracking-tighter transition-all duration-300", sizeClasses[size], variantClasses[variant])}>
          SANDRA
        </span>
        <div className="flex items-center gap-1 mt-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
          <span className={cn("font-bold tracking-[0.2em] uppercase", 
            size === "sm" ? "text-xs" : size === "md" ? "text-sm" : "text-xl",
            variant === "gradient" ? "text-gray-700" : variant === "light" ? "text-white/90" : "text-gray-700"
          )}>
            KIDS
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
        </div>
      </div>
    </div>
  );
};

export default Logo;