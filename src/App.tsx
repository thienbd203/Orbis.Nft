/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Mail, 
  User, 
  Share2, 
  Terminal, 
  ChevronRight, 
  Satellite, 
  Activity, 
  Box,
  ChevronDown
} from "lucide-react";

const Navigation = () => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 liquid-glass border-b border-white/5"
    >
      <div className="max-w-[1831px] mx-auto px-10 h-24 flex justify-between items-center">
        <div className="font-h1 text-4xl tracking-tighter uppercase text-cream">Orbis.Nft</div>
        
        <nav className="hidden md:flex gap-12">
          {["Homepage", "Gallery", "Buy NFT", "FAQ", "Contact"].map((item, i) => (
            <a 
              key={item}
              href="#" 
              className={`font-h1 text-lg uppercase tracking-widest hover:text-neon transition-colors relative group ${i === 0 ? "text-neon" : "text-white/60"}`}
            >
              {item}
              {i === 0 && <motion.div layoutId="nav-underline" className="absolute -bottom-2 left-0 w-full h-[2px] bg-neon" />}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="liquid-glass p-3 rounded-full text-neon hover:scale-110 transition-transform">
            <Mail size={20} />
          </button>
          <button className="liquid-glass p-3 rounded-full text-neon hover:scale-110 transition-transform">
            <User size={20} />
          </button>
        </div>
      </div>
    </motion.header>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-60"
        >
          <source 
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4" 
            type="video/mp4" 
          />
        </video>
      </div>

      <div className="relative z-20 max-w-[1831px] mx-auto px-10 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-accent text-3xl text-neon text-shadow-neon mb-6 block"
        >
          Nft collection
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-h1 text-[8vw] leading-[0.85] uppercase tracking-tighter mb-12 mix-blend-screen"
        >
          Beyond Earth and<br />( Its ) Familiar<br />Boundaries
        </motion.h1>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-neon text-space-deep font-h1 text-2xl py-5 px-16 uppercase neon-glow hover:neon-glow-strong transition-all"
        >
          Mint Now
        </motion.button>
      </div>

      {/* Floating Side Socials */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
        {[Terminal, Share2, Mail].map((Icon, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="liquid-glass p-4 rounded-full text-neon hover:bg-neon hover:text-black cursor-pointer transition-all"
          >
            <Icon size={20} />
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-neon opacity-40">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="py-xxl relative overflow-hidden bg-space-deep">
      <div className="max-w-[1831px] mx-auto px-10 flex flex-col md:flex-row items-center gap-24">
        <div className="w-full md:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-accent text-3xl text-neon mb-4 block -rotate-6">Discover deep space</span>
            <h2 className="font-h1 text-8xl leading-none uppercase">
              Hello! <br />
              I'm <span className="text-neon">Orbis</span>
            </h2>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 liquid-glass p-16 relative"
        >
          <div className="absolute -top-1 px-4 py-2 bg-neon text-space-deep font-h1 text-sm uppercase -translate-y-1/2">
            Protocol Archive
          </div>
          <p className="text-xl text-white/70 leading-relaxed uppercase mb-12">
            ORBIS IS A CURATED ARCHIVE OF UNIDENTIFIED DIGITAL OBJECTS RECOVERED FROM THE OUTER EDGES OF THE METAVERSE. EACH ASSET IS A GEOMETRIC SINGULARITY, A MATHEMATICAL IMPOSSIBILITY RENDERED IN ETERNAL MOTION.
          </p>
          
          <div className="flex gap-12 border-t border-white/10 pt-12">
            <div>
              <div className="font-h1 text-5xl text-neon mb-1">10K</div>
              <div className="font-accent text-2xl text-white/50">Artifacts</div>
            </div>
            <div className="w-px bg-white/10" />
            <div>
              <div className="font-h1 text-5xl text-neon mb-1">0.08</div>
              <div className="font-accent text-2xl text-white/50">ETH Floor</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const NFTCard = ({ title, code, rarity, video, tier }: { title: string, code: string, rarity: number, video: string, tier: string }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="liquid-glass group overflow-hidden"
    >
      <div className="aspect-square relative overflow-hidden bg-black/20">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover transition-transform group-hover:scale-110">
          <source src={video} type="video/mp4" />
        </video>
        <div className="absolute top-4 right-4">
          <div className="liquid-glass px-3 py-1 font-mono text-[10px] text-neon border-neon/30">
            {tier}
          </div>
        </div>
      </div>
      <div className="p-8">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h3 className="font-h1 text-3xl mb-1 uppercase text-cream">{title}</h3>
            <p className="text-[10px] text-white/40 tracking-widest">{code}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-neon uppercase font-bold mb-1">Rarity</p>
            <p className="font-h1 text-2xl">{rarity}%</p>
          </div>
        </div>
        
        <div className="h-[2px] w-full bg-white/10 relative mb-8">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: `${rarity}%` }}
            className="absolute top-0 left-0 h-full bg-neon shadow-[0_0_10px_#6fff00]" 
          />
        </div>

        <div className="flex justify-between items-center">
          <button className="bg-neon text-space-deep font-h1 text-sm py-4 px-8 hover:bg-white transition-colors uppercase">
            Bid Now
          </button>
          <motion.button 
            whileHover={{ x: 5 }}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-800 flex items-center justify-center text-white"
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const Collection = () => {
  const nfts = [
    {
      title: "Nebula Core",
      code: "FRAGMENT-01-A",
      rarity: 98.2,
      tier: "RARE #442",
      video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4"
    },
    {
      title: "Void Sphere",
      code: "FRAGMENT-04-B",
      rarity: 99.8,
      tier: "LEGENDARY #102",
      video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4"
    },
    {
      title: "Pulse Grid",
      code: "FRAGMENT-07-Z",
      rarity: 94.5,
      tier: "EPIC #882",
      video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4"
    }
  ];

  return (
    <section className="py-xxl bg-space-deep">
      <div className="max-w-[1831px] mx-auto px-10">
        <div className="text-center mb-20">
          <h2 className="font-h1 text-7xl uppercase">
            Collection of <span className="font-accent text-neon lowercase">space</span> objects
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {nfts.map((nft, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <NFTCard {...nft} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-xxl relative">
      <div className="max-w-[1831px] mx-auto px-10">
        <div className="relative h-[600px] overflow-hidden group">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-40">
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-space-deep via-space-deep/60 to-transparent flex flex-col justify-center px-12 md:px-24">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="font-h1 text-5xl md:text-7xl uppercase leading-tight mb-12 max-w-2xl"
            >
              Reveal what's hidden.<br />
              Define what's next.<br />
              <span className="text-neon">Follow the signal.</span>
            </motion.h2>
            <div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="bg-neon text-space-deep font-h1 text-2xl py-5 px-12 uppercase neon-glow"
              >
                Enter the Void
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Tool Icons (Bottom Left) */}
      <div className="absolute bottom-10 left-10 hidden md:flex flex-col gap-4">
        <div className="liquid-glass p-3 flex flex-col gap-6 rounded-full">
          <Box size={24} className="text-neon cursor-pointer hover:scale-125 transition-transform" />
          <Activity size={24} className="text-neon cursor-pointer hover:scale-125 transition-transform" />
          <Satellite size={24} className="text-neon cursor-pointer hover:scale-125 transition-transform" />
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 border-t border-white/5 bg-space-deep">
      <div className="max-w-[1831px] mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="font-h1 text-3xl uppercase">Orbis.Nft</div>
        
        <div className="flex gap-8 text-[10px] text-white/40 uppercase tracking-widest font-bold">
          {["Privacy Policy", "Terms of Service", "Github", "Twitter"].map(item => (
            <a key={item} href="#" className="hover:text-neon transition-colors">{item}</a>
          ))}
        </div>
        
        <div className="text-[10px] text-white/20 uppercase tracking-widest">
          © 2024 ORBIS.NFT. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="relative selection:bg-neon selection:text-space-deep">
      <div className="grain-overlay" />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Collection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
