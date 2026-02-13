import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger expansion earlier for smoother experience
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      window.history.pushState(null, '', href);
    }
  };

  // Split nav items for desktop layout (Centered Logo)
  const leftItems = NAV_ITEMS.slice(0, 3);
  const rightItems = NAV_ITEMS.slice(3);

  return (
    <>
      {/* 
         Dynamic Notch Container 
         - Mobile: Always compact unless open.
         - Desktop: Compact at top, expands on scroll or hover.
      */}
      <nav
        className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-spring
          bg-white/90 backdrop-blur-xl border border-slate-200 shadow-soft
          group
          ${isOpen 
             ? 'w-[90%] md:w-[600px] h-auto rounded-[32px] py-8' // Open State (Mobile/Desktop Menu)
             : scrolled 
                ? 'w-[320px] md:w-[850px] h-[64px] rounded-full' // Scrolled State (Wide Pill on Desktop)
                : 'w-[160px] md:w-[180px] h-[64px] rounded-full hover:w-[300px] md:hover:w-[850px]' // Top State (Compact, expand on hover)
           }
        `}
      >
        <div className="relative w-full h-full flex items-center justify-center px-4 sm:px-6">
          
          {/* Brand Logo - Always Centered */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
             <div className="flex items-center gap-2">
                 <div className="w-8 h-8 relative">
                    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                       <circle cx="50" cy="50" r="25" stroke="#EA580C" strokeWidth="8" />
                       <path d="M50 25V15M50 85V75M85 50H75M25 50H15" stroke="#D97706" strokeWidth="4" strokeLinecap="round"/>
                    </svg>
                 </div>
                 {/* Text only visible when compact or open, hidden when scrolled-expanded to avoid clutter? 
                     Actually, let's keep it but maybe fade out if we need space. 
                     For simplicity, we keep "SUNRISE" always but "Systems" hidden.
                 */}
                 <span className="font-display font-bold text-slate-800 text-lg tracking-tight">
                    SUNRISE
                 </span>
             </div>
          </div>

          {/* Desktop Navigation Links - Appear on Scroll or Hover */}
          <div className={`hidden md:flex w-full justify-between items-center transition-opacity duration-300 delay-100
             ${(scrolled || isOpen) ? 'opacity-100 pointer-events-auto' : 'opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto'}
          `}>
             <div className="flex items-center gap-8">
                {leftItems.map((item) => (
                    <a key={item.label} href={item.href} onClick={(e) => handleNavClick(e, item.href)} 
                       className="text-xs font-medium uppercase tracking-widest text-slate-500 hover:text-primary transition-colors">
                        {item.label}
                    </a>
                ))}
             </div>
             <div className="flex items-center gap-8">
                {rightItems.map((item) => (
                    <a key={item.label} href={item.href} onClick={(e) => handleNavClick(e, item.href)} 
                       className="text-xs font-medium uppercase tracking-widest text-slate-500 hover:text-primary transition-colors">
                        {item.label}
                    </a>
                ))}
             </div>
          </div>

          {/* Mobile Toggle Button */}
           <button 
            onClick={toggleMenu}
            className={`md:hidden absolute right-4 text-slate-800 p-2 rounded-full hover:bg-slate-100 transition-colors z-30`}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Mobile Menu Content */}
          <div className={`
             md:hidden absolute top-20 left-0 w-full flex flex-col items-center gap-6
             transition-all duration-300
             ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}
          `}>
             {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-serif text-2xl text-slate-800 hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
             ))}
          </div>

        </div>
      </nav>
      
      {/* Click outside overlay for mobile menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-white/20 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;