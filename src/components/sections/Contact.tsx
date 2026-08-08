"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Send } from "lucide-react";

type FormData = {
  fullName: string;
  businessName: string;
  phone: string;
  whatsapp: string;
  email: string;
  industry: string;
  revenue: string;
  budget: string;
  description: string;
  goals: string;
};

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (data: FormData) => {
    try {
      // 1. Format WhatsApp message
      const whatsappText = `New Lead\n\nFull Name: ${data.fullName}\nBusiness Name: ${data.businessName}\nPhone: ${data.phone}\nWhatsApp: ${data.whatsapp}\nEmail: ${data.email}\nIndustry: ${data.industry}\nMonthly Revenue: ${data.revenue}\nMarketing Budget: ${data.budget}\nBusiness Description: ${data.description}\nGoals: ${data.goals}`;
      
      const whatsappUrl = `https://wa.me/0656965432?text=${encodeURIComponent(whatsappText)}`;
      
      // 2. Open WhatsApp in new tab
      window.open(whatsappUrl, "_blank");

      // 3. Send Email via API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    }
  };

  const inputClasses = "w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all";

  return (
    <section id="contact" className="py-32 relative z-10 bg-gradient-to-b from-transparent to-[#00f0ff]/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Prêt à Passer à <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#b026ff]">l'Échelle ?</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/70 text-lg mb-8"
            >
              Remplissez le formulaire pour demander votre plan de croissance gratuit. Notre équipe analysera votre entreprise et vous montrera exactement comment nous pouvons multiplier vos revenus.
            </motion.p>
          </div>

          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input {...register("fullName", { required: true })} placeholder="Prénom & Nom" className={inputClasses} />
                    {errors.fullName && <span className="text-red-500 text-sm mt-1">Requis</span>}
                  </div>
                  <div>
                    <input {...register("businessName", { required: true })} placeholder="Nom de l'Entreprise" className={inputClasses} />
                  </div>
                  <div>
                    <input {...register("phone")} placeholder="Numéro de Téléphone" className={inputClasses} />
                  </div>
                  <div>
                    <input {...register("whatsapp", { required: true })} placeholder="Numéro WhatsApp" className={inputClasses} />
                  </div>
                  <div>
                    <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} placeholder="Adresse Email" type="email" className={inputClasses} />
                  </div>
                  <div>
                    <input {...register("industry")} placeholder="Secteur d'Activité" className={inputClasses} />
                  </div>
                  <div>
                    <select {...register("revenue")} className={inputClasses + " appearance-none"}>
                      <option value="" disabled selected>Chiffre d'Affaires Mensuel (MAD)</option>
                      <option value="<100k">Moins de 100,000 MAD</option>
                      <option value="100k-500k">100,000 - 500,000 MAD</option>
                      <option value="500k-1M">500,000 - 1,000,000 MAD</option>
                      <option value="1M+">1,000,000 MAD+</option>
                    </select>
                  </div>
                  <div>
                    <select {...register("budget")} className={inputClasses + " appearance-none"}>
                      <option value="" disabled selected>Budget Marketing Mensuel (MAD)</option>
                      <option value="<5k">Moins de 5,000 MAD</option>
                      <option value="5k-15k">5,000 - 15,000 MAD</option>
                      <option value="15k-50k">15,000 - 50,000 MAD</option>
                      <option value="50k+">50,000 MAD+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <textarea {...register("description")} placeholder="Décrivez Votre Entreprise" rows={3} className={inputClasses} />
                </div>
                <div>
                  <textarea {...register("goals", { required: true })} placeholder="Quels sont vos objectifs principaux ?" rows={3} className={inputClasses} />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#25D366] hover:bg-[#20b858] text-black font-bold text-lg rounded-xl flex items-center justify-center gap-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Envoi en cours..." : "Obtenir Mon Plan de Croissance Gratuit"}
                  <Send className="w-5 h-5" />
                </button>

                {submitStatus === "success" && (
                  <div className="text-emerald-400 text-center font-medium">Demande envoyée avec succès ! Redirection vers WhatsApp...</div>
                )}
                {submitStatus === "error" && (
                  <div className="text-red-400 text-center font-medium">Une erreur est survenue, mais WhatsApp s'ouvrira quand même.</div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
