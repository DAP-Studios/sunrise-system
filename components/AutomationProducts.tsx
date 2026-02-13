import React from 'react';
import { motion } from 'framer-motion';
import { AUTOMATION_PRODUCTS } from '../constants';
import { ArrowRight, Box } from 'lucide-react';

const AutomationProducts: React.FC = () => {
  return (
    <section id="products" className="py-20 md:py-32 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Tech Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
           style={{ 
               backgroundImage: `linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)`, 
               backgroundSize: '40px 40px' 
           }}
      ></div>

    <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs md:text-sm mb-2">
                    <Box size={14} />
                    <span>Industrial Supply</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white">AUTOMATION <span className="text-primary">PRODUCTS</span></h2>
            </motion.div>
            
            <motion.p 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-slate-400 text-sm md:text-base max-w-md text-right hidden md:block"
            >
                Premium components from global leaders. <br/> Engineered for reliability and performance.
            </motion.p>
        </div>

        {/* Technical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-800 border border-slate-800">
            {AUTOMATION_PRODUCTS.map((item, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-slate-900 p-8 hover:bg-slate-800/50 transition-colors group relative overflow-hidden"
                >
                    {/* Hover Glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>

                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6">
                            <h3 className="text-xl font-bold font-display uppercase text-white group-hover:text-primary transition-colors">
                                {item.name}
                            </h3>
                            <div className="text-slate-600 group-hover:text-primary transition-colors">
                                <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                            </div>
                        </div>

                        <div className="mb-6 aspect-video w-full bg-slate-800/50 rounded-sm overflow-hidden border border-slate-800 group-hover:border-slate-700 transition-colors">
                            <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0"
                            />
                        </div>

                        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                            {item.description}
                        </p>

                        <div className="space-y-2 border-t border-slate-800 pt-4">
                            {item.specs.map((spec, sIdx) => (
                                <div key={sIdx} className="flex items-center gap-2 text-xs font-mono text-slate-500">
                                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                                    {spec}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
            
            {/* CTA Box in Grid */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-primary p-8 flex flex-col justify-center items-center text-center group cursor-pointer hover:bg-white hover:text-slate-900 transition-colors"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <h3 className="text-2xl font-bold font-display uppercase mb-2">Need a Quote?</h3>
                <p className="text-white/80 group-hover:text-slate-600 text-sm mb-6">Get competitive pricing for your automation requirements.</p>
                <div className="w-12 h-12 rounded-full border-2 border-white group-hover:border-slate-900 flex items-center justify-center">
                    <ArrowRight size={24} />
                </div>
            </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AutomationProducts;