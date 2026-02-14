import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Settings } from 'lucide-react';
import HeroImage from '../assets/images/hero.png';

// Add animation styles for depth effect
const animationStyles = `
  @keyframes deepMove1 {
    0% { transform: translateY(-150%); }
    100% { transform: translateY(150%); }
  }
  @keyframes deepMove2 {
    0% { transform: translateY(0%); }
    100% { transform: translateY(250%); }
  }
  @keyframes deepMove3 {
    0% { transform: translateY(100%); }
    100% { transform: translateY(-100%); }
  }
  .hero-depth-layer {
    animation: deepMove1 25s linear infinite;
  }
  .hero-depth-layer-2 {
    animation: deepMove2 35s linear infinite;
  }
  .hero-depth-layer-3 {
    animation: deepMove3 30s linear infinite;
  }
`;

const Hero: React.FC = () => {
  const headlineVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: 'easeOut' }
    })
  };

  const particles = Array.from({ length: 18 }, (_, idx) => idx);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      
      {/* Background Image: Industrial Process */}
      <div className="absolute inset-0 z-0">
        <style>{animationStyles}</style>
        
        {/* Animated depth layers - deep moving effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="hero-depth-layer absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent"></div>
          <div className="hero-depth-layer-2 absolute inset-0 bg-gradient-to-t from-cyan-400/5 to-transparent"></div>
          <div className="hero-depth-layer-3 absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-purple-500/5"></div>
        </div>
        
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          className="w-full h-full"
        >
            <div 
                className="w-full h-full bg-cover bg-center opacity-40"
                style={{ 
                  backgroundImage: `url(${HeroImage})`
                }}
            ></div>
        </motion.div>
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-900/90"></div>
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
        {/* Lightning + Particle Flow */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.svg
            viewBox="0 0 300 600"
            className="absolute -right-10 top-10 h-[70%] w-auto opacity-40"
            initial={{ opacity: 0.1 }}
            animate={{ opacity: [0.1, 0.6, 0.2, 0.8, 0.1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path
              d="M160 20 L120 180 L190 180 L110 380 L180 360 L130 560"
              fill="none"
              stroke="#F97316"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lightning-stroke"
            />
            <path
              d="M170 60 L140 190 L210 190 L130 360 L200 340 L150 520"
              fill="none"
              stroke="#FDBA74"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lightning-stroke-alt"
            />
          </motion.svg>

          <div className="absolute inset-0">
            {particles.map((particle) => (
              <span
                key={particle}
                className="particle"
                style={{
                  left: `${(particle * 13) % 100}%`,
                  animationDelay: `${(particle * 0.35).toFixed(2)}s`,
                  animationDuration: `${8 + (particle % 5)}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-24 md:pt-0">
        <div className="max-w-5xl mx-auto md:mx-0">

            {/* Ambient Orbs */}
            <motion.div
              className="absolute -top-24 -left-10 w-48 h-48 rounded-full bg-primary/20 blur-3xl"
              animate={{ x: [0, 24, 0], y: [0, -12, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute top-20 -right-16 w-56 h-56 rounded-full bg-cyan-400/10 blur-3xl"
              animate={{ x: [0, -18, 0], y: [0, 16, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />
            
            <motion.div 
                initial="hidden"
                animate="visible"
                custom={0.1}
                variants={headlineVariants}
                className="flex items-center justify-center md:justify-start gap-3 mb-6"
            >
                <div className="h-0.5 w-12 bg-primary"></div>
                <div className="flex items-center gap-2 text-white/90 font-sans font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
                    <Settings size={14} className="text-primary" />
                    <span>Integrated Engineering Solutions</span>
                </div>
            </motion.div>

            <motion.h1 
              initial="hidden"
              animate="visible"
              custom={0.3}
              variants={headlineVariants}
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.15] mb-6 text-center md:text-left"
            >
                <span className="text-white drop-shadow-2xl">Premier Industrial</span><br/>
                <span className="text-primary drop-shadow-2xl">Automation Solutions</span><br/>
                <span className="text-white drop-shadow-2xl text-2xl sm:text-3xl md:text-4xl font-normal opacity-90">in Vapi, Gujarat</span>
            </motion.h1>
            
            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.5}
              variants={headlineVariants}
              className="text-slate-300 text-base sm:text-lg md:text-xl mb-10 max-w-2xl leading-relaxed text-center md:text-left"
            >
                Turnkey PLC, SCADA & DCS Solutions | Panel Manufacturing | Instrumentation & Control Systems | Serving Vapi GIDC, Silvassa, Daman & South Gujarat Industries
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.7}
              variants={headlineVariants}
                className="flex flex-col sm:flex-row gap-4 items-center sm:items-start"
            >
                <a href="#services" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 font-bold uppercase tracking-wider text-sm transition-all flex items-center justify-center gap-2 rounded-sm shadow-glow">
                    Our Solutions <ArrowRight size={16} />
                </a>
                <a href="#contact" className="border border-white/30 hover:bg-white hover:text-slate-900 text-white px-8 py-4 font-bold uppercase tracking-wider text-sm transition-all flex items-center justify-center rounded-sm">
                    Contact Us
                </a>
            </motion.div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
      </motion.div>

      <style>
        {`
          .lightning-stroke {
            stroke-dasharray: 10 8;
            animation: lightningDash 1.2s linear infinite;
            filter: drop-shadow(0 0 12px rgba(249, 115, 22, 0.4));
          }
          .lightning-stroke-alt {
            stroke-dasharray: 6 10;
            animation: lightningDashAlt 1.6s linear infinite;
            filter: drop-shadow(0 0 16px rgba(253, 186, 116, 0.35));
          }
          .particle {
            position: absolute;
            top: -10%;
            width: 3px;
            height: 3px;
            border-radius: 9999px;
            background: rgba(147, 197, 253, 0.7);
            box-shadow: 0 0 10px rgba(147, 197, 253, 0.35);
            animation: particleFlow linear infinite;
          }
          @keyframes lightningDash {
            0% { stroke-dashoffset: 0; opacity: 0.8; }
            50% { opacity: 1; }
            100% { stroke-dashoffset: -60; opacity: 0.6; }
          }
          @keyframes lightningDashAlt {
            0% { stroke-dashoffset: 0; opacity: 0.5; }
            50% { opacity: 0.9; }
            100% { stroke-dashoffset: -50; opacity: 0.4; }
          }
          @keyframes particleFlow {
            0% { transform: translateY(-10%) translateX(0); opacity: 0; }
            10% { opacity: 0.6; }
            100% { transform: translateY(130%) translateX(-20px); opacity: 0; }
          }
          @media (prefers-reduced-motion: reduce) {
            .lightning-stroke,
            .lightning-stroke-alt,
            .particle {
              animation: none;
            }
          }
        `}
      </style>
      
    </section>
  );
};

export default Hero;