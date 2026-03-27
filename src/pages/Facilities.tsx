import React from 'react';
import { motion } from 'motion/react';
import { Dumbbell, Zap, Maximize, Sparkles, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

export const Facilities: React.FC = () => {
  const zones = [
    {
      title: "Strength Training Zone",
      desc: "Our core area featuring Hammer Strength racks, elite barbells, and over 5000kg of free weights. Designed for serious lifters.",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
      features: ["10 Power Racks", "Dumbbells up to 80kg", "Specialized Platforms"]
    },
    {
      title: "Cardio Performance Deck",
      desc: "High-end treadmills, ellipticals, and stairmasters with integrated entertainment systems and performance tracking.",
      img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop",
      features: ["Matrix Treadmills", "Concept2 Rowers", "Assault Bikes"]
    },
    {
      title: "Cross-Training Arena",
      desc: "A dedicated 2000 sqft zone with specialized turf, functional rigs, kettlebells, and battle ropes for high-intensity training.",
      img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
      features: ["Custom Rig System", "Sled Tracks", "Olympic Lifting Zone"]
    },
    {
      title: "Recovery & Hygiene",
      desc: "Hospital-grade cleanliness with dedicated cleaning staff on rotation. Modern locker rooms with sauna and steam facilities.",
      img: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=1928&auto=format&fit=crop",
      features: ["Infrared Sauna", "Luxury Showers", "Hourly Sanitization"]
    }
  ];

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase italic mb-6"
          >
            The <span className="text-brand-red">Alpha</span> Facility
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            15,000 square feet of pure performance. We don't just provide equipment; we provide the ultimate environment for growth.
          </p>
        </div>
      </section>

      {/* Zones */}
      <section className="py-24 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto space-y-32">
          {zones.map((zone, i) => (
            <div key={i} className={cn(
              "flex flex-col gap-12 items-center",
              i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            )}>
              <div className="flex-1 space-y-8">
                <div className="inline-flex items-center gap-2 text-brand-red font-black uppercase tracking-widest text-sm">
                  <Zap className="w-5 h-5" /> Zone 0{i + 1}
                </div>
                <h2 className="text-4xl md:text-5xl font-black uppercase italic">{zone.title}</h2>
                <p className="text-gray-400 text-lg leading-relaxed">{zone.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {zone.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-white font-bold">
                      <CheckCircle2 className="w-5 h-5 text-brand-red" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full">
                <div className="relative group overflow-hidden rounded-3xl aspect-video lg:aspect-square">
                  <img 
                    src={zone.img} 
                    alt={zone.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-red/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Standards */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto glass-card p-12 rounded-[3rem] border-brand-red/20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-4xl font-black uppercase italic">Our <span className="text-brand-red">Alpha Standards</span></h2>
              <p className="text-gray-400">
                We take hygiene and maintenance seriously. Our equipment is serviced weekly, 
                and our facility is deep-cleaned every night to ensure you train in a safe, 
                professional environment.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/5 px-6 py-3 rounded-full flex items-center gap-2 border border-white/10">
                  <Sparkles className="w-4 h-4 text-brand-red" /> 24/7 Air Filtration
                </div>
                <div className="bg-white/5 px-6 py-3 rounded-full flex items-center gap-2 border border-white/10">
                  <Maximize className="w-4 h-4 text-brand-red" /> Spacious Layout
                </div>
                <div className="bg-white/5 px-6 py-3 rounded-full flex items-center gap-2 border border-white/10">
                  <Dumbbell className="w-4 h-4 text-brand-red" /> Pro-Grade Gear
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-48 h-48 rounded-full border-4 border-brand-red flex items-center justify-center text-center p-6">
                <div className="font-black uppercase italic leading-none">
                  <span className="text-5xl">100%</span><br />
                  <span className="text-sm">Hygienic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
