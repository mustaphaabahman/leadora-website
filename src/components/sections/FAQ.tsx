"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "À quelle vitesse puis-je voir des résultats ?",
    answer: "Généralement, nos clients voient les premiers résultats dans les 14 à 30 jours suivant le lancement de la campagne. Cependant, une mise à l'échelle et une optimisation significatives se produisent généralement au cours des mois 2 et 3."
  },
  {
    question: "Garantissez-vous les résultats ?",
    answer: "Bien que nous ne puissions pas garantir des chiffres spécifiques en raison des variables du marché, nous garantissons que nous mettrons en œuvre exactement les mêmes cadres qui ont généré plus de 100M MAD pour nos clients. Si nous n'atteignons pas nos KPI convenus, nous travaillons gratuitement jusqu'à ce que nous les atteignions."
  },
  {
    question: "Sur quelles plateformes diffusez-vous des annonces ?",
    answer: "Nous nous concentrons sur les plateformes où votre public spécifique est le plus actif. En général, cela inclut Meta (Facebook et Instagram), Google Ads, TikTok et LinkedIn."
  },
  {
    question: "De quel budget publicitaire ai-je besoin ?",
    answer: "Nous recommandons un budget publicitaire minimum de 5,000 MAD/mois pour recueillir suffisamment de données pour une optimisation appropriée, bien que nombre de nos clients évoluent à plus de 50,000 MAD/mois."
  },
  {
    question: "Créez-vous les éléments créatifs ?",
    answer: "Oui. Notre équipe créative interne rédige, édite et produit des ressources vidéo et image à fort taux de conversion adaptées aux réseaux sociaux payants."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Foire Aux Questions
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                <div className={`p-2 rounded-full border border-white/10 transition-transform duration-300 ${openIndex === i ? 'bg-[#00f0ff]/20 text-[#00f0ff] rotate-180' : 'bg-transparent text-white/50'}`}>
                  {openIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-white/70 leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
