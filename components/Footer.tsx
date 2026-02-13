import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
    <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Column 1: About */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                <h3 className="text-white font-bold uppercase tracking-widest text-lg mb-6 flex items-center gap-2">
                    <span className="w-8 h-1 bg-primary"></span> Sunrise System
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    A premier turnkey solution-provider in Electrical, Control, Automation and Instrumentation. We deliver the best services using products from leading manufacturers.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="w-8 h-8 flex items-center justify-center bg-slate-800 hover:bg-primary text-white transition-colors rounded-sm"><Facebook size={16} /></a>
                    <a href="#" className="w-8 h-8 flex items-center justify-center bg-slate-800 hover:bg-primary text-white transition-colors rounded-sm"><Twitter size={16} /></a>
                    <a href="#" className="w-8 h-8 flex items-center justify-center bg-slate-800 hover:bg-primary text-white transition-colors rounded-sm"><Linkedin size={16} /></a>
                </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
                <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h3>
                <ul className="space-y-3 text-sm">
                    <li><a href="#about" className="hover:text-primary transition-colors">About Company</a></li>
                    <li><a href="#services" className="hover:text-primary transition-colors">Engineering Services</a></li>
                    <li><a href="#products" className="hover:text-primary transition-colors">Instrumentation</a></li>
                    <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                </ul>
            </div>

            {/* Column 3: Solutions */}
            <div>
                <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Our Expertise</h3>
                <ul className="space-y-3 text-sm">
                    <li><a href="#" className="hover:text-primary transition-colors">Control & Automation</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Panel Cabinet Assembly</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Hardware Engineering</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">IoT Based Solutions</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Field Installation</a></li>
                </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div>
                <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Newsletter</h3>
                <p className="text-slate-400 text-sm mb-4">Subscribe for industrial updates.</p>
                <form className="flex flex-col gap-2">
                    <input type="email" placeholder="Your Email" className="bg-slate-800 border border-slate-700 px-4 py-3 text-sm focus:border-primary outline-none rounded-sm" />
                    <button className="bg-primary text-white font-bold uppercase text-xs py-3 hover:bg-white hover:text-slate-900 transition-colors rounded-sm">Subscribe</button>
                </form>
            </div>

        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-slate-950 py-6 border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 text-center text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Sunrise System. All Rights Reserved.</p>
            <p className="hidden md:block">Designed for Industrial Excellence</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;