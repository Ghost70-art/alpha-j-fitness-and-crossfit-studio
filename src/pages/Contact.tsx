import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    goal: 'weight-loss',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for reaching out! An Alpha coach will contact you shortly.");
    setFormData({ name: '', phone: '', goal: 'weight-loss', message: '' });
  };

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
            Get in <span className="text-brand-red">Touch</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ready to start your transformation? Book a free trial or ask us anything. We're here to help you become your best self.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-black uppercase italic mb-8">Contact <span className="text-brand-red">Information</span></h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-red/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-sm mb-1">Our Location</h4>
                    <p className="text-gray-400">123 Alpha Street, Fitness District, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-red/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-sm mb-1">Phone Number</h4>
                    <p className="text-gray-400">+1 (555) 000-ALPHA</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-red/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-sm mb-1">Email Address</h4>
                    <p className="text-gray-400">info@alphajfitness.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl border-brand-red/20">
              <div className="flex items-center gap-4 mb-6">
                <MessageCircle className="w-8 h-8 text-brand-red" />
                <h3 className="text-xl font-black uppercase italic">WhatsApp Support</h3>
              </div>
              <p className="text-gray-400 mb-6">Need a quick answer? Chat with our team directly on WhatsApp for instant support.</p>
              <a 
                href="https://wa.me/15550002574" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-3 rounded-full font-black uppercase tracking-widest transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black uppercase italic flex items-center gap-2">
                <Clock className="w-6 h-6 text-brand-red" /> Peak Hours
              </h3>
              <p className="text-gray-400 text-sm">
                To avoid crowds, we recommend training during our off-peak hours:<br />
                <span className="text-white font-bold">10:00 AM - 4:00 PM</span> or <span className="text-white font-bold">9:00 PM - 11:00 PM</span>.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-10 rounded-[3rem] border-brand-red/20 relative">
            <div className="absolute -top-4 -right-4 bg-brand-red text-white text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full rotate-12 shadow-xl">
              Limited Slots!
            </div>
            <h2 className="text-3xl font-black uppercase italic mb-8">Book a <span className="text-brand-red">Free Trial</span></h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-red transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-red transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Fitness Goal</label>
                <select 
                  value={formData.goal}
                  onChange={e => setFormData({...formData, goal: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-red transition-colors appearance-none"
                >
                  <option value="weight-loss" className="bg-brand-dark">Weight Loss</option>
                  <option value="muscle-gain" className="bg-brand-dark">Muscle Gain</option>
                  <option value="cross-training" className="bg-brand-dark">Cross Training</option>
                  <option value="general-fitness" className="bg-brand-dark">General Fitness</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Message (Optional)</label>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your fitness journey..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-red transition-colors resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-brand-red hover:bg-red-700 text-white py-5 rounded-2xl font-black uppercase tracking-widest transition-all red-glow flex items-center justify-center gap-3"
              >
                Send Inquiry <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-white/5 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-brand-red mx-auto mb-4" />
            <p className="text-gray-400 font-bold uppercase tracking-widest">Interactive Map Loading...</p>
          </div>
        </div>
        {/* In a real app, you'd embed a Google Map here */}
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-20" />
      </section>
    </div>
  );
};
