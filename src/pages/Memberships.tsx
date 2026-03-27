import React from 'react';
import { motion } from 'motion/react';
import { Check, X, Zap, Crown, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export const Memberships: React.FC = () => {
  const plans = [
    {
      name: "Basic Alpha",
      price: "49",
      desc: "Perfect for casual gym-goers looking for quality equipment.",
      icon: <Star className="w-8 h-8" />,
      features: {
        "Gym Access": true,
        "Locker Room": true,
        "Free WiFi": true,
        "Cross Training Zone": false,
        "Group Classes": false,
        "Personal Training": false,
        "Sauna & Steam": false,
      }
    },
    {
      name: "Pro Alpha",
      price: "79",
      desc: "Our most popular plan for dedicated fitness enthusiasts.",
      icon: <Zap className="w-8 h-8" />,
      popular: true,
      features: {
        "Gym Access": true,
        "Locker Room": true,
        "Free WiFi": true,
        "Cross Training Zone": true,
        "Group Classes": true,
        "Personal Training": "1 Session/mo",
        "Sauna & Steam": false,
      }
    },
    {
      name: "Elite Alpha",
      price: "129",
      desc: "The ultimate experience with full access and personal guidance.",
      icon: <Crown className="w-8 h-8" />,
      features: {
        "Gym Access": true,
        "Locker Room": true,
        "Free WiFi": true,
        "Cross Training Zone": true,
        "Group Classes": true,
        "Personal Training": "Unlimited",
        "Sauna & Steam": true,
      }
    }
  ];

  const featureList = [
    "Gym Access",
    "Locker Room",
    "Free WiFi",
    "Cross Training Zone",
    "Group Classes",
    "Personal Training",
    "Sauna & Steam"
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
            Membership <span className="text-brand-red">Plans</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Invest in your health. Choose the plan that fits your ambition. No hidden fees. No long-term contracts.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "glass-card p-10 rounded-[2.5rem] relative flex flex-col",
                plan.popular && "border-brand-red border-2 bg-brand-red/5 scale-105 z-10"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-red text-white text-[10px] font-black uppercase tracking-widest px-6 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="text-brand-red mb-6">{plan.icon}</div>
              <h3 className="text-3xl font-black uppercase italic mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-8">{plan.desc}</p>
              
              <div className="flex items-end gap-1 mb-10">
                <span className="text-4xl font-black">$</span>
                <span className="text-7xl font-black leading-none">{plan.price}</span>
                <span className="text-gray-400 font-bold">/mo</span>
              </div>

              <div className="flex-1 space-y-4 mb-10">
                {featureList.map((f, j) => {
                  const val = plan.features[f as keyof typeof plan.features];
                  return (
                    <div key={j} className="flex items-center gap-3">
                      {val === true ? (
                        <Check className="w-5 h-5 text-brand-red shrink-0" />
                      ) : val === false ? (
                        <X className="w-5 h-5 text-gray-600 shrink-0" />
                      ) : (
                        <Check className="w-5 h-5 text-brand-red shrink-0" />
                      )}
                      <span className={cn(
                        "text-sm font-bold",
                        val === false ? "text-gray-600 line-through" : "text-gray-200"
                      )}>
                        {f} {typeof val === 'string' && <span className="text-brand-red ml-1">({val})</span>}
                      </span>
                    </div>
                  );
                })}
              </div>

              <button className={cn(
                "w-full py-5 rounded-2xl font-black uppercase tracking-widest transition-all",
                plan.popular ? "bg-brand-red hover:bg-red-700 text-white red-glow" : "bg-white/10 hover:bg-white/20 text-white"
              )}>
                Join Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison Table (Desktop Only) */}
      <section className="py-24 px-6 bg-black hidden lg:block">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black uppercase italic mb-16 text-center">Plan <span className="text-brand-red">Comparison</span></h2>
          <div className="glass-card rounded-3xl overflow-hidden border-white/5">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-8 text-gray-400 uppercase tracking-widest text-xs font-black">Features</th>
                  {plans.map(p => (
                    <th key={p.name} className="p-8 text-center font-black uppercase italic text-xl">{p.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureList.map((f, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="p-8 font-bold text-gray-300">{f}</td>
                    {plans.map(p => {
                      const val = p.features[f as keyof typeof p.features];
                      return (
                        <td key={p.name} className="p-8 text-center">
                          {val === true ? (
                            <Check className="w-6 h-6 text-brand-red mx-auto" />
                          ) : val === false ? (
                            <X className="w-6 h-6 text-gray-700 mx-auto" />
                          ) : (
                            <span className="text-brand-red font-black text-sm">{val}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 px-6 bg-brand-dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black uppercase italic mb-12">Frequently Asked <span className="text-brand-red">Questions</span></h2>
          <div className="space-y-6 text-left">
            {[
              { q: "Is there a joining fee?", a: "No, we believe in transparent pricing. You only pay your monthly membership fee." },
              { q: "Can I cancel anytime?", a: "Yes, our plans are month-to-month. Just give us a 30-day notice." },
              { q: "Do you offer student discounts?", a: "Absolutely! Bring your valid student ID for a 20% discount on any plan." },
            ].map((faq, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl">
                <h4 className="font-black uppercase text-brand-red mb-2">{faq.q}</h4>
                <p className="text-gray-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
