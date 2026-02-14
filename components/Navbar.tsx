import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

// Add animation styles
const animationStyles = `
  @keyframes deepMove1 {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
  }
  @keyframes deepMove2 {
    0% { transform: translateY(0%); }
    100% { transform: translateY(200%); }
  }
  @keyframes deepMove3 {
    0% { transform: translateY(50%); }
    100% { transform: translateY(-50%); }
  }
  .nav-bg-layer {
    animation: deepMove1 20s linear infinite;
  }
  .nav-bg-layer-2 {
    animation: deepMove2 30s linear infinite;
  }
  .nav-bg-layer-3 {
    animation: deepMove3 25s linear infinite;
  }
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', href);
    }
  };

  const visibleItems = NAV_ITEMS.filter((item) => item.label !== 'IoT');
  const leftItems = visibleItems.slice(0, 3);
  const rightItems = visibleItems.slice(3);

  return (
    <>
      {/* Inverted corner ears — only visible when notch is wide */}
      <div
        className={`fixed top-0 z-49 transition-all duration-500 pointer-events-none
          ${scrolled || isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
        `}
        style={{
          // Positioned to sit exactly where the notch left edge meets the top
          left: '50%',
          transform: 'translateX(-50%)',
          width: isOpen ? 'min(90%, 600px)' : scrolled ? 'min(850px, 100%)' : '180px',
          transition: 'width 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.3s',
        }}
      >
        {/* Left ear */}
        <svg
          className="absolute top-0 right-full"
          width="20" height="20" viewBox="0 0 20 20" fill="none"
        >
          <path d="M20 0 Q20 20 0 20 L20 20 Z" fill="rgba(255,255,255,0.70)" />
        </svg>
        {/* Right ear */}
        <svg
          className="absolute top-0 left-full"
          width="20" height="20" viewBox="0 0 20 20" fill="none"
        >
          <path d="M0 0 Q0 20 20 20 L0 20 Z" fill="rgba(255,255,255,0.70)" />
        </svg>
      </div>

      <nav
        className={`fixed top-0 left-1/2 -translate-x-1/2 z-50
          bg-white/70 backdrop-blur-2xl
          border-x border-b border-white/60
          border-t-0
          shadow-[0_10px_40px_rgba(15,23,42,0.12)]
          group overflow-hidden
          transition-[width,height,padding] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          rounded-t-none
          ${isOpen
            ? 'w-[90%] md:w-[600px] h-auto rounded-b-[28px] py-8'
            : scrolled
              ? 'w-[320px] md:w-[850px] h-[64px] rounded-b-[28px]'
              : 'w-[160px] md:w-[180px] h-[64px] rounded-b-[28px] hover:w-[300px] md:hover:w-[850px]'
          }
        `}
      >
        <style>{animationStyles}</style>
        
        {/* Animated depth layers */}
        <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none rounded-b-[28px]">
          <div className="nav-bg-layer absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent"></div>
          <div className="nav-bg-layer-2 absolute inset-0 bg-gradient-to-t from-blue-400/10 to-transparent"></div>
          <div className="nav-bg-layer-3 absolute inset-0 bg-gradient-to-r from-purple-400/10 via-transparent to-purple-400/10"></div>
        </div>
        
        <div className="relative w-full h-full flex items-center justify-center px-4 sm:px-6 z-10">

          {/* Brand Logo - Always Centered */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 relative">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                  <circle cx="50" cy="50" r="25" stroke="#EA580C" strokeWidth="8" />
                  <path d="M50 25V15M50 85V75M85 50H75M25 50H15" stroke="#D97706" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
              <span className="font-display font-bold text-slate-800 text-lg tracking-tight">
                SUNRISE SYSTEM
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
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

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden absolute right-4 text-slate-800 p-2 rounded-full hover:bg-slate-100 transition-colors z-30"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Mobile Menu */}
          <div className={`
            md:hidden absolute top-20 left-0 w-full flex flex-col items-center gap-6
            transition-all duration-300
            ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}
          `}>
            {visibleItems.map((item) => (
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

      {/* Mobile overlay */}
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