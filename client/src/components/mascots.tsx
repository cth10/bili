interface MascotProps {
  type: "22" | "33";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function Mascot({ type, size = "md", className = "" }: MascotProps) {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24", 
    lg: "w-32 h-32",
    xl: "w-40 h-40"
  };
  
  return (
    <img 
      src="/2233bilibili.webp"
      alt={`Mascote ${type}`}
      className={`${sizeClasses[size]} ${className} object-contain`}
      title={`Mascote ${type}`}
    />
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
