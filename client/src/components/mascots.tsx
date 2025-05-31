interface MascotProps {
  type: "22" | "33";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function Mascot({ type, size = "md", className = "" }: MascotProps) {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-20 h-20", 
    lg: "w-24 h-24",
    xl: "w-32 h-32"
  };
  
  return (
    <div className={`${sizeClasses[size]} ${className} flex items-center justify-center`}>
      <img 
        src="/2233bilibili.webp"
        alt={`Mascote ${type}`}
        className="w-full h-full object-contain"
        title={`Mascote ${type}`}
      />
    </div>
  );
}

export function MascotPair({ size = "md", className = "" }: { size?: "sm" | "md" | "lg" | "xl"; className?: string; }) {
  return (
    <div className={`flex justify-center items-center space-x-6 ${className}`}>
      <Mascot type="22" size={size} />
      <div className="text-4xl animate-pulse">💙</div>
      <Mascot type="33" size={size} />
    </div>
  );
}
