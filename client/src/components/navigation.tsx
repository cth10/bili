import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [currentSection, setCurrentSection] = useState("inicio");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "#inicio", label: "Início", section: "inicio" },
    { href: "#sobre", label: "Sobre", section: "sobre" },
    { href: "#mascotes", label: "Mascotes", section: "mascotes" },
    { href: "#funcionalidades", label: "Recursos", section: "funcionalidades" },
    { href: "#jogos", label: "Jogos", section: "jogos" },
    { href: "#internacional", label: "Bilibili.tv", section: "internacional" },
    { href: "#tutorial", label: "Tutorial", section: "tutorial" },
    { href: "#comunidade", label: "Comunidade", section: "comunidade" }
  ];

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));

    // Smooth scrolling for navigation links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target.getAttribute('href') || '');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          setIsMobileMenuOpen(false); // Close mobile menu after clicking
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      sections.forEach(section => observer.unobserve(section));
      document.removeEventListener('click', handleClick);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector('nav');
      if (nav && !nav.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 w-full z-50 bili-card shadow-lg">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <img 
              src="/logo.png" 
              alt="Bilibili Logo" 
              className="w-8 h-8 object-contain"
            />
            <h1 className="text-lg sm:text-xl font-bold gradient-text whitespace-nowrap">
              Bilibili Brasil
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-4">
            {navItems.map((item) => (
              <a
                key={item.section}
                href={item.href}
                className={`
                  px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap
                  hover:bg-bili-light hover:scale-105 hover:shadow-sm
                  ${currentSection === item.section 
                    ? 'bili-blue bg-bili-light font-semibold shadow-sm' 
                    : 'bili-dark hover:bili-blue'
                  }
                `}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bili-dark hover:bg-bili-light transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`
          lg:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="py-4 space-y-2 border-t border-bili-blue/20">
            {navItems.map((item) => (
              <a
                key={item.section}
                href={item.href}
                className={`
                  block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                  hover:bg-bili-light hover:translate-x-2
                  ${currentSection === item.section 
                    ? 'bili-blue bg-bili-light font-semibold border-l-4 border-bili-blue' 
                    : 'bili-dark hover:bili-blue'
                  }
                `}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}