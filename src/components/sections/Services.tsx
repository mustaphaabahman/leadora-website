"use client";

import { motion } from "framer-motion";
import { ShopifyLogo, YouCanLogo } from "@/components/ui/Logos";

const services = [
  {
    title: "Génération de Leads",
    description: "Générez des clients qualifiés en utilisant Meta Ads et la publicité payante.",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-cyan-500/50",
    Reel: () => (
      <motion.div 
        animate={{ x: ["0%", "-50%"] }} 
        transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        className="flex gap-4 items-center h-full w-[200%]"
      >
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center gap-4 flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-cyan-400" />
            </div>
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-500/50 to-transparent" />
            <div className="w-16 h-12 rounded-lg bg-blue-500/20 border border-blue-500/50" />
            <div className="h-1 w-12 bg-gradient-to-r from-blue-500/50 to-transparent" />
          </div>
        ))}
      </motion.div>
    )
  },
  {
    title: "Production Créative",
    description: "Créatifs vidéo à fort taux de conversion. UGC. Reels. Vidéos de produits. Montage commercial.",
    color: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-purple-500/50",
    Reel: () => (
      <motion.div 
        animate={{ y: ["0%", "-50%"] }} 
        transition={{ duration: 10, ease: "linear", repeat: Infinity }}
        className="grid grid-cols-2 gap-3 w-full h-[200%] p-2"
      >
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-white/5 rounded-xl border border-white/10 aspect-[9/16] relative overflow-hidden flex items-center justify-center">
             <div className="w-8 h-8 rounded-full bg-pink-500/40 flex items-center justify-center backdrop-blur-sm">
                <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-white border-b-4 border-b-transparent ml-1" />
             </div>
          </div>
        ))}
      </motion.div>
    )
  },
  {
    title: "Développement de Sites Web",
    description: "Sites Web professionnels haut de gamme (services locaux, immobilier, cliniques).",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/50",
    Reel: () => (
      <motion.div 
        animate={{ x: ["0%", "-50%"] }} 
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        className="flex gap-6 items-center h-full w-[200%] px-4"
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-4 items-end flex-shrink-0">
            <div className="w-40 h-28 bg-white/5 rounded-t-lg border border-white/10 p-2 flex flex-col gap-2">
              <div className="w-full h-4 bg-white/10 rounded" />
              <div className="w-2/3 h-12 bg-white/5 rounded" />
              <div className="w-full h-8 bg-emerald-500/20 rounded" />
            </div>
            <div className="w-12 h-20 bg-white/5 rounded-t-xl border border-white/10 p-1 flex flex-col gap-1">
               <div className="w-full h-8 bg-teal-500/20 rounded-sm" />
               <div className="w-full h-4 bg-white/10 rounded-sm" />
               <div className="w-full h-4 bg-white/10 rounded-sm" />
            </div>
          </div>
        ))}
      </motion.div>
    )
  },
  {
    title: "Pages de Destination",
    description: "Pages de destination optimisées pour les conversions.",
    color: "from-orange-500/20 to-red-500/20",
    border: "group-hover:border-orange-500/50",
    Reel: () => (
      <motion.div 
        animate={{ y: ["0%", "-50%"] }} 
        transition={{ duration: 12, ease: "linear", repeat: Infinity }}
        className="flex flex-col gap-4 w-full h-[200%] p-4"
      >
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-full h-32 bg-white/5 rounded-xl border border-white/10 p-3 flex flex-col gap-2 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-red-500/30 to-transparent blur-xl" />
            <div className="absolute left-1/4 bottom-0 w-12 h-12 bg-orange-500/40 blur-xl rounded-full" />
            <div className="w-3/4 h-4 bg-white/20 rounded" />
            <div className="w-1/2 h-4 bg-white/10 rounded" />
            <div className="w-full h-12 bg-white/5 rounded mt-auto flex items-center justify-center">
               <div className="w-1/3 h-6 bg-red-500/40 rounded-full" />
            </div>
          </div>
        ))}
      </motion.div>
    )
  },
  {
    title: "Boutiques Shopify",
    description: "Boutiques e-commerce Shopify professionnelles.",
    color: "from-green-500/20 to-emerald-500/20",
    border: "group-hover:border-green-500/50",
    Reel: () => (
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
          className="absolute inset-0 flex gap-4 items-center w-[200%] opacity-20"
        >
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-24 h-32 bg-white/10 rounded-lg flex-shrink-0" />
          ))}
        </motion.div>
        <div className="relative z-10 w-20 h-20 bg-black/50 backdrop-blur-md rounded-2xl border border-green-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.3)]">
          <ShopifyLogo className="w-12 h-12 text-[#95BF47]" />
        </div>
      </div>
    )
  },
  {
    title: "Boutiques YouCan",
    description: "Boutiques YouCan modernes optimisées pour les ventes.",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/50",
    Reel: () => (
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div 
          animate={{ y: ["0%", "-50%"] }} 
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
          className="absolute inset-0 flex flex-col gap-4 items-center w-full h-[200%] opacity-20 py-4"
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-3/4 h-20 bg-white/10 rounded-lg flex-shrink-0" />
          ))}
        </motion.div>
        <div className="relative z-10 w-20 h-20 bg-black/50 backdrop-blur-md rounded-2xl border border-blue-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(16,84,251,0.3)]">
          <YouCanLogo className="w-14 h-14" />
        </div>
      </div>
    )
  },
  {
    title: "Gestion des Réseaux Sociaux",
    description: "Instagram, Facebook, TikTok, LinkedIn. Stratégie de contenu.",
    color: "from-blue-500/20 to-indigo-500/20",
    border: "group-hover:border-indigo-500/50",
    Reel: () => (
      <motion.div 
        animate={{ y: ["0%", "-50%"] }} 
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        className="flex flex-col gap-6 w-full h-[200%] p-6"
      >
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-full bg-white/5 rounded-xl border border-white/10 p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-indigo-500/30" />
              <div className="w-24 h-3 bg-white/20 rounded" />
            </div>
            <div className="w-full h-32 bg-white/10 rounded-lg mb-4" />
            <div className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-white/20" />
              <div className="w-6 h-6 rounded-full bg-white/20" />
              <div className="w-6 h-6 rounded-full bg-white/20" />
            </div>
          </div>
        ))}
      </motion.div>
    )
  },
  {
    title: "Conseil en Marketing",
    description: "Analyse d'entreprise. Audits marketing. Stratégie de croissance. Augmenter le ROI.",
    color: "from-rose-500/20 to-pink-500/20",
    border: "group-hover:border-rose-500/50",
    Reel: () => (
      <motion.div 
        animate={{ x: ["0%", "-50%"] }} 
        transition={{ duration: 12, ease: "linear", repeat: Infinity }}
        className="flex gap-6 items-end h-full w-[200%] p-6"
      >
        {[...Array(12)].map((_, i) => {
          const heights = [40, 60, 30, 80, 50, 90, 70, 100, 85, 65, 45, 75];
          return (
            <div key={i} className="flex-shrink-0 flex flex-col items-center gap-2">
              <div 
                className="w-8 bg-gradient-to-t from-rose-500/40 to-pink-500/80 rounded-t-sm"
                style={{ height: `${heights[i]}px` }}
              />
            </div>
          );
        })}
      </motion.div>
    )
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Nos Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto text-lg"
          >
            Tout ce dont vous avez besoin pour dominer votre marché et augmenter vos revenus.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className={`group glass-card overflow-hidden hover:bg-white/5 transition-all duration-500 ${service.border} flex flex-col h-[400px]`}
            >
              {/* Visual Reel Top Section */}
              <div className="h-[220px] w-full bg-black/40 border-b border-white/5 relative overflow-hidden flex-shrink-0">
                <service.Reel />
                {/* Fade Overlays for smooth scrolling edges */}
                <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black to-transparent z-10" />
                <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black to-transparent z-10" />
                <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black to-transparent z-10" />
              </div>
              
              {/* Text Bottom Section */}
              <div className="p-6 flex-1 flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-white transition-colors">{service.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
