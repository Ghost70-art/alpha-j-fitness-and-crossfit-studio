import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Users, Award, Sparkles, Zap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-20 px-6 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase italic mb-6"
          >
            Our <span className="text-brand-red">Story</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Founded in 2015, Alpha J Fitness was born out of a frustration with crowded, 
            unhygienic gyms. We set out to create a sanctuary for true fitness enthusiasts.
          </p>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="py-24 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glass-card p-12 rounded-3xl border-brand-red/20">
            <Target className="w-12 h-12 text-brand-red mb-6" />
            <h2 className="text-3xl font-black uppercase italic mb-6">Our Mission</h2>
            <p className="text-gray-400 leading-relaxed">
              To provide a premium, spacious, and scientifically-backed training environment 
              where members can push their limits without compromise. We believe in quality 
              over quantity, ensuring every member has the space and tools they need to succeed.
            </p>
          </div>
          <div className="glass-card p-12 rounded-3xl border-brand-red/20">
            <Eye className="w-12 h-12 text-brand-red mb-6" />
            <h2 className="text-3xl font-black uppercase italic mb-6">Our Vision</h2>
            <p className="text-gray-400 leading-relaxed">
              To become the gold standard for fitness centers globally, recognized for our 
              unwavering commitment to hygiene, modern equipment, and a community that 
              inspires greatness in every individual.
            </p>
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-4">
              Meet the <span className="text-brand-red">Alphas</span>
            </h2>
            <p className="text-gray-400">Our world-class trainers are here to guide your transformation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                name: 'Alex "The Beast" Rivera', 
                role: 'Head Strength Coach', 
                expertise: 'Bodybuilding & Powerlifting',
                img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fe?q=80&w=1974&auto=format&fit=crop'
              },
              { 
                name: 'Sarah Chen', 
                role: 'Cross-Training Lead', 
                expertise: 'Functional Fitness & HIIT',
                img: 'https://images.unsplash.com/photo-1548690312-e3b507d17a12?q=80&w=1974&auto=format&fit=crop'
              },
              { 
                name: 'Marcus Thorne', 
                role: 'Nutrition Specialist', 
                expertise: 'Weight Management & Prep',
                img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop'
              },
            ].map((trainer, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-3xl aspect-[3/4] mb-6">
                  <img 
                    src={trainer.img} 
                    alt={trainer.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-red/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-2xl font-black uppercase italic">{trainer.name}</h3>
                <div className="text-brand-red font-bold uppercase tracking-widest text-sm mb-2">{trainer.role}</div>
                <p className="text-gray-500 text-sm">{trainer.expertise}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: <Users className="w-10 h-10" />, label: 'Community', value: 'Supportive' },
            { icon: <Award className="w-10 h-10" />, label: 'Quality', value: 'Premium' },
            { icon: <Sparkles className="w-10 h-10" />, label: 'Hygiene', value: 'Spotless' },
            { icon: <Zap className="w-10 h-10" />, label: 'Energy', value: 'High' },
          ].map((v, i) => (
            <div key={i} className="space-y-4">
              <div className="text-brand-red flex justify-center">{v.icon}</div>
              <div className="text-2xl font-black uppercase italic">{v.value}</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">{v.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
