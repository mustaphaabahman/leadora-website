import React from "react";
import { motion } from "framer-motion";

export const metadata = {
  title: "About Us | Leadora",
  description: "Learn more about Leadora, the premium digital marketing and web development agency driving explosive growth for businesses.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#b026ff]">Leadora</span>
        </h1>
        
        <div className="space-y-8 text-lg text-white/70 leading-relaxed">
          <p>
            Welcome to Leadora. We are a premium digital marketing and web development agency committed to one single goal: 
            <strong className="text-white font-semibold"> multiplying your business growth</strong>.
          </p>
          
          <p>
            In today's highly competitive digital landscape, having a basic website and running generic ads is no longer enough. 
            Businesses need highly optimized, data-driven systems designed to convert visitors into loyal customers. 
            That is exactly what we build.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-12 mb-4">Our Mission</h2>
          <p>
            Our mission is to bridge the gap between incredible products and the customers who need them. We leverage cutting-edge 
            technology, advanced psychological marketing, and stunning aesthetics to create digital experiences that demand attention 
            and drive massive revenue.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-12 mb-4">What Sets Us Apart</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong className="text-white">Premium Aesthetics:</strong> We believe that design builds trust. Our websites and creatives look like they belong to top-tier tech giants, instantly elevating your brand's perceived value.
            </li>
            <li>
              <strong className="text-white">Data-Driven Decisions:</strong> We don't guess. Every campaign, every button color, and every headline is rigorously tested and optimized for maximum ROI.
            </li>
            <li>
              <strong className="text-white">Full-Stack Solutions:</strong> From building high-converting Shopify and YouCan stores to running profitable Meta Ads and managing your social presence, we handle the entire customer journey.
            </li>
          </ul>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 mt-12 backdrop-blur-md">
            <h3 className="text-xl font-semibold text-white mb-4">Ready to scale?</h3>
            <p className="mb-6">
              Stop leaving money on the table. Partner with Leadora and let's build the growth engine your business deserves.
            </p>
            <a href="/#contact" className="inline-block px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors">
              Work With Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
