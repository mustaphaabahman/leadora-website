"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ value, suffix = "", title }: { value: number; suffix?: string; title: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center p-6 glass rounded-2xl border border-white/5 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
        {count}{suffix}
      </div>
      <div className="text-[#00f0ff] font-medium">{title}</div>
    </div>
  );
}

export default function WhyChoose() {
  return (
    <section id="why-choose-us" className="py-32 relative z-10 bg-black/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Pourquoi Choisir Leadora ?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/70 text-lg mb-8 leading-relaxed"
            >
              Nous ne nous contentons pas de créer des sites Web ou de diffuser des annonces. Nous concevons des systèmes de croissance complets adaptés à votre entreprise. Notre approche basée sur les données garantit que chaque dollar dépensé multiplie vos revenus.
            </motion.p>
            <div className="grid grid-cols-2 gap-4">
              <Counter value={300} suffix="%" title="Augmentation du Chiffre d'Affaires" />
              <Counter value={5} suffix="x" title="Multiplication des Leads" />
              <Counter value={40} suffix="%" title="Baisse du Coût Par Lead" />
              <Counter value={95} suffix="%" title="Meilleur ROI" />
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden border border-white/10 aspect-square flex items-center justify-center bg-gradient-to-br from-[#050505] to-[#111]"
            >
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
              <div className="w-64 h-64 rounded-full bg-[#00f0ff]/20 blur-3xl absolute top-0 left-0 animate-pulse"></div>
              <div className="w-64 h-64 rounded-full bg-[#b026ff]/20 blur-3xl absolute bottom-0 right-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              {/* Premium Floating Dashboard UI */}
              <div className="relative z-10 w-full max-w-md p-6">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#b026ff] to-[#00f0ff]" />
                  
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <div className="text-white/50 text-sm font-medium mb-1">Croissance Totale du Revenu</div>
                      <div className="text-3xl font-bold text-white flex items-center gap-2">
                        24M MAD
                        <span className="text-xs bg-[#00f0ff]/20 text-[#00f0ff] px-2 py-1 rounded-full flex items-center">
                          +420%
                          <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                        </span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                    </div>
                  </div>

                  {/* Animated Line Chart SVG */}
                  <div className="h-32 w-full mt-4 relative">
                    <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path 
                        d="M0 50 L0 40 C10 35, 20 45, 30 35 C40 25, 50 30, 60 15 C70 0, 80 10, 100 5 L100 50 Z" 
                        fill="url(#chartGradient)" 
                        className="opacity-50"
                      />
                      <motion.path 
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        d="M0 40 C10 35, 20 45, 30 35 C40 25, 50 30, 60 15 C70 0, 80 10, 100 5" 
                        fill="none" 
                        stroke="#00f0ff" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                        className="drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]"
                      />
                    </svg>
                    {/* Glowing dots */}
                    <div className="absolute top-[10%] right-[0%] w-3 h-3 bg-[#00f0ff] rounded-full shadow-[0_0_15px_#00f0ff] border-2 border-white animate-pulse" />
                  </div>

                  {/* Secondary Metrics */}
                  <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/5">
                    <div>
                      <div className="text-white/40 text-xs mb-1">Taux de Conversion</div>
                      <div className="text-white font-semibold">6.8% <span className="text-[#00f0ff] text-xs ml-1">↑</span></div>
                    </div>
                    <div>
                      <div className="text-white/40 text-xs mb-1">Coût Par Lead</div>
                      <div className="text-white font-semibold">12 MAD <span className="text-[#00f0ff] text-xs ml-1">↓</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
