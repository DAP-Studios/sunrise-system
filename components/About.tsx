import React, { useRef, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Check, Users, Target } from 'lucide-react';
import { STATS } from '../constants';
import AboutImage from '../assets/images/about.png';

const Counter = ({ value }: { value: string }) => {
    const match = value.match(/^(\d+)(.*)$/);
    
    // If not a number starting string, just return static
    if (!match) return <span>{value}</span>;

    const number = parseInt(match[1]);
    const suffix = match[2];
    
    const nodeRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-20%" });

    useEffect(() => {
        if (!isInView) return;

        const node = nodeRef.current;
        const controls = animate(0, number, {
            duration: 2,
            ease: "circOut",
            onUpdate(v) {
                if (node) {
                    node.textContent = Math.floor(v) + suffix;
                }
            }
        });

        return () => controls.stop();
    }, [isInView, number, suffix]);

    return <span ref={nodeRef}>0{suffix}</span>;
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
             
             {/* Left: Image & Badge */}
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative"
             >
                <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl">
                    <img 
                        src={AboutImage} 
                        alt="Automation Engineering" 
                        className="w-full h-auto object-cover"
                    />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-slate-100 -z-0 hidden md:block"></div>
                
                {/* Floating animated blob */}
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-blob"></div>

                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-0 bg-primary text-white p-6 shadow-xl z-20 max-w-[280px]">
                    <div className="text-xl font-bold mb-1 uppercase">Sunrise System</div>
                    <div className="text-sm opacity-90">Vapi, Gujarat</div>
                </div>
             </motion.div>

             {/* Right: Content */}
             <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
             >
                 <div className="mb-4">
                    <span className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm">Company Profile</span>
                 </div>
                 <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight uppercase">
                    Automation & <span className="text-primary">Electrical</span> Solution Provider
                 </h2>
                 <p className="text-slate-500 mb-6 leading-relaxed">
                    We established in Vapi with a new identity as Sunrise System. We are a rapidly expanding and highly dynamic team of young talented Engineers led by a team of professionals.
                 </p>
                 <p className="text-slate-500 mb-8 leading-relaxed">
                    Sunrise System is a premier turnkey solution-provider in Electrical, Control, Automation and Instrumentation. We deliver the best services and support in the industry by using products and services from the leading manufacturers in the world.
                 </p>

                 {/* Stats Row */}
                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-4 mb-10 border-y border-slate-100 py-8">
                    {STATS.map((stat, idx) => (
                        <div key={idx} className="text-center group hover:bg-slate-50 rounded-sm transition-colors p-2">
                            <div className="text-primary mb-2 flex justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                                <stat.icon size={24} strokeWidth={1.5} />
                            </div>
                            <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1 font-display">
                                <Counter value={stat.value} />
                            </div>
                            <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                 </div>

                 {/* Mission & Vision Cards */}
                 <div className="grid sm:grid-cols-2 gap-4 mb-10">
                    <div className="bg-slate-50 p-6 border-l-4 border-primary hover:shadow-lg transition-shadow">
                        <h4 className="flex items-center gap-2 font-bold text-slate-900 uppercase text-xs md:text-sm mb-3">
                            <Target size={18} className="text-primary" /> Our Mission
                        </h4>
                        <p className="text-sm text-slate-600 italic leading-relaxed">
                            "To be a world class Automation & electrical Solution provider with Global Presence"
                        </p>
                    </div>
                    <div className="bg-slate-50 p-6 border-l-4 border-slate-900 hover:shadow-lg transition-shadow">
                        <h4 className="flex items-center gap-2 font-bold text-slate-900 uppercase text-xs md:text-sm mb-3">
                            <Users size={18} className="text-slate-900" /> Our Vision
                        </h4>
                        <p className="text-sm text-slate-600 italic leading-relaxed">
                            "To exceed our customer’s expectations in quality, delivery, and cost through continuous improvement."
                        </p>
                    </div>
                 </div>

                 {/* Features List */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["Platform Independent", "Turnkey Solutions", "Control Cabinet Assembly", "Installation & Testing"].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                            <div className="mt-1 text-primary shrink-0"><Check size={18} strokeWidth={3} /></div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm">{item}</h4>
                            </div>
                        </div>
                    ))}
                 </div>

             </motion.div>
          </div>
       </div>
    </section>
  );
};

export default About;