import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 pt-20 pb-10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#00f0ff]/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold mb-4">Leadora<span className="text-[#00f0ff]">.</span></h2>
            <p className="text-white/60 max-w-md mb-8">
              Multipliez la croissance de votre entreprise avec une génération de leads premium, des expériences Web époustouflantes et des stratégies marketing basées sur les données.
            </p>
            <Link 
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors"
            >
              Commencer à Grandir <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-3">
              {["Génération de Leads", "Développement Web", "Shopify & YouCan", "Production Créative"].map((item) => (
                <li key={item}>
                  <Link href="#services" className="text-white/60 hover:text-[#00f0ff] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Entreprise</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-white/60 hover:text-white transition-colors">À Propos de Nous</Link></li>
              <li><Link href="/#case-studies" className="text-white/60 hover:text-white transition-colors">Études de Cas</Link></li>
              <li><Link href="/#contact" className="text-white/60 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-white/60 hover:text-white transition-colors">Politique de Confidentialité</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Leadora. Tous droits réservés.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
