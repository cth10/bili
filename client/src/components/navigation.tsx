import { useState, useEffect } from "react";

export default function Navigation() {
  const [currentSection, setCurrentSection] = useState("inicio");

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
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      sections.forEach(section => observer.unobserve(section));
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bili-card">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="Bilibili Logo" 
              className="w-8 h-8 object-contain"
            />
            <h1 className="text-xl font-bold gradient-text">Bilibili Brasil</h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <a 
              href="#inicio" 
              className={`transition-colors duration-300 ${
                currentSection === 'inicio' ? 'bili-blue font-medium' : 'bili-dark hover:bili-blue'
              }`}
            >
              Início
            </a>
            <a 
              href="#sobre" 
              className={`transition-colors duration-300 ${
                currentSection === 'sobre' ? 'bili-blue font-medium' : 'bili-dark hover:bili-blue'
              }`}
            >
              Sobre
            </a>
            <a 
              href="#mascotes" 
              className={`transition-colors duration-300 ${
                currentSection === 'mascotes' ? 'bili-blue font-medium' : 'bili-dark hover:bili-blue'
              }`}
            >
              Mascotes
            </a>
            <a 
              href="#funcionalidades" 
              className={`transition-colors duration-300 ${
                currentSection === 'funcionalidades' ? 'bili-blue font-medium' : 'bili-dark hover:bili-blue'
              }`}
            >
              Funcionalidades
            </a>
            <a 
              href="#comunidade" 
              className={`transition-colors duration-300 ${
                currentSection === 'comunidade' ? 'bili-blue font-medium' : 'bili-dark hover:bili-blue'
              }`}
            >
              Comunidade
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
