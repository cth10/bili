interface MascotProps {
  type: "22" | "33";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  useImage?: boolean;
}

export function Mascot({ type, size = "md", className = "", useImage = false }: MascotProps) {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-20 h-20", 
    lg: "w-24 h-24",
    xl: "w-32 h-32"
  };

  if (useImage) {
    const imageSizeClasses = {
      sm: "w-16 h-16",
      md: "w-24 h-24", 
      lg: "w-32 h-32",
      xl: "w-40 h-40"
    };
    
    return (
      <img 
        src="/2233bilibili.webp"
        alt={`Mascote ${type}`}
        className={`${imageSizeClasses[size]} ${className} object-contain`}
        title={`Mascote ${type}`}
      />
    );
  }

  // Use bilibili-22.gif for mascot 22, CSS animation for mascot 33
  if (type === "22") {
    const imageSizeClasses = {
      sm: "w-12 h-12",
      md: "w-20 h-20", 
      lg: "w-24 h-24",
      xl: "w-32 h-32"
    };
    
    return (
      <img 
        src="/bilibili-22.gif"
        alt="Mascote 22"
        className={`${imageSizeClasses[size]} ${className} object-contain`}
        title="Mascote 22"
      />
    );
  }

  // Use bilibili-33-.gif for mascot 33
  const imageSizeClasses = {
    sm: "w-12 h-12",
    md: "w-20 h-20", 
    lg: "w-24 h-24",
    xl: "w-32 h-32"
  };
  
  return (
    <img 
      src="/bilibili-33-.gif"
      alt="Mascote 33"
      className={`${imageSizeClasses[size]} ${className} object-contain`}
      title="Mascote 33"
    />
  );
}

export function MascotPair({ size = "xl", className = "" }: { size?: "sm" | "md" | "lg" | "xl"; className?: string; }) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <img 
        src="/2233bilibili.webp"
        alt="Mascote 22"
        className="w-96 h-96 object-contain"
        title="Mascote 22"
      />
    </div>
  );
}
