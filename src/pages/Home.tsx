import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Maximize, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            alt="Gym Background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-brand-red text-white text-xs font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full mb-6">
              Premium Fitness Experience
            </span>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-6 italic">
              Train <span className="text-brand-red">Bigger.</span><br />
              Train <span className="text-brand-red">Smarter.</span><br />
              Train Alpha.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-medium">
              Experience the most spacious, hygienic, and fully equipped gym in the city. 
              No crowding. No excuses. Just results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/memberships" 
                className="w-full sm:w-auto bg-brand-red hover:bg-red-700 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest transition-all red-glow flex items-center justify-center gap-2 group"
              >
                Join Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest transition-all backdrop-blur-md border border-white/10"
              >
                Book Free Trial
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-10 left-0 right-0 hidden lg:block">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-4 gap-8">
            {[
              { label: 'Spacious Area', value: '15,000+ sqft' },
              { label: 'Modern Machines', value: '100+ Units' },
              { label: 'Expert Trainers', value: '15+ Coaches' },
              { label: 'Happy Members', value: '2,000+' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="glass-card p-6 rounded-2xl text-center"
              >
                <div className="text-2xl font-black text-brand-red mb-1">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-24 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-4">
              Why Choose <span className="text-brand-red">Alpha J?</span>
            </h2>
            <div className="h-1.5 w-24 bg-brand-red mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Maximize className="w-8 h-8" />, 
                title: 'Massive Space', 
                desc: 'Never wait for a machine. Our layout is designed for maximum flow and comfort.' 
              },
              { 
                icon: <Zap className="w-8 h-8" />, 
                title: 'Elite Equipment', 
                desc: 'The latest from Hammer Strength, Life Fitness, and Rogue for peak performance.' 
              },
              { 
                icon: <Sparkles className="w-8 h-8" />, 
                title: 'Ultra Hygienic', 
                desc: 'We maintain hospital-grade cleanliness with hourly sanitization protocols.' 
              },
              { 
                icon: <ShieldCheck className="w-8 h-8" />, 
                title: 'Cross Zone', 
                desc: 'Dedicated functional fitness area with turf, rigs, and kettlebells.' 
              },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card p-8 rounded-3xl border-brand-red/10 hover:border-brand-red/40 transition-all"
              >
                <div className="text-brand-red mb-6">{feature.icon}</div>
                <h3 className="text-xl font-black uppercase mb-4">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-4">
                Real People. <span className="text-brand-red">Real Results.</span>
              </h2>
              <p className="text-gray-400">Join the hundreds of members who have transformed their lives at Alpha J Fitness.</p>
            </div>
            <Link to="/memberships" className="text-brand-red font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
              Start Your Journey <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Mark S.', 
                result: 'Lost 25lbs in 3 Months', 
                img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop' 
              },
              { 
                name: 'Sarah L.', 
                result: 'Gained 10lbs Muscle', 
                img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop' 
              },
              { 
                name: 'David K.', 
                result: 'Increased Bench by 50kg', 
                img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop' 
              },
            ].map((item, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl aspect-[4/5]">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <div className="text-2xl font-black italic uppercase">{item.name}</div>
                  <div className="text-brand-red font-bold text-sm uppercase tracking-widest">{item.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-16">
            Choose Your <span className="text-brand-red">Alpha Plan</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Basic', price: '49', features: ['Gym Access', 'Locker Room', 'Free WiFi'] },
              { name: 'Pro', price: '79', features: ['All Basic', 'Cross Training', 'Group Classes', '1 PT Session'], popular: true },
              { name: 'Elite', price: '129', features: ['All Pro', 'Unlimited PT', 'Nutrition Plan', 'Sauna Access'] },
            ].map((plan, i) => (
              <div 
                key={i} 
                className={cn(
                  "glass-card p-10 rounded-3xl relative",
                  plan.popular && "border-brand-red border-2 scale-105 z-10 bg-brand-red/5"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-red text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-black uppercase mb-2 italic">{plan.name}</h3>
                <div className="flex items-end justify-center gap-1 mb-8">
                  <span className="text-4xl font-black">$</span>
                  <span className="text-6xl font-black leading-none">{plan.price}</span>
                  <span className="text-gray-400 font-bold">/mo</span>
                </div>
                <ul className="space-y-4 mb-10 text-gray-300">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center justify-center gap-2">
                      <Zap className="w-4 h-4 text-brand-red" /> {f}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/memberships" 
                  className={cn(
                    "block w-full py-4 rounded-xl font-black uppercase tracking-widest transition-all",
                    plan.popular ? "bg-brand-red hover:bg-red-700 text-white" : "bg-white/10 hover:bg-white/20 text-white"
                  )}
                >
                  Select Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-brand-red relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-white blur-[100px]" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black uppercase italic leading-none mb-8">
            Stop Waiting.<br />Start Training.
          </h2>
          <p className="text-xl font-bold mb-12 text-white/90">
            Limited slots available for this month's intake. Join the Alpha community today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/memberships" 
              className="w-full sm:w-auto bg-black text-white px-12 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl"
            >
              Join Alpha Now
            </Link>
            <Link 
              to="/contact" 
              className="w-full sm:w-auto bg-white text-brand-red px-12 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl"
            >
              Book Free Trial
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
