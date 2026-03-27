import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-brand-red p-1.5 rounded-lg">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase italic">
              Alpha <span className="text-brand-red">J</span> Fitness
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Premium fitness destination for those who demand the best. Spacious, clean, and equipped with world-class machinery.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-black uppercase tracking-widest mb-6 text-brand-red">Quick Links</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/facilities" className="hover:text-white transition-colors">Facilities</Link></li>
            <li><Link to="/memberships" className="hover:text-white transition-colors">Membership Plans</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact & Location</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black uppercase tracking-widest mb-6 text-brand-red">Contact Info</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-red shrink-0" />
              <span>123 Alpha Street, Fitness District, NY 10001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-brand-red shrink-0" />
              <span>+1 (555) 000-ALPHA</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-brand-red shrink-0" />
              <span>info@alphajfitness.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-black uppercase tracking-widest mb-6 text-brand-red">Opening Hours</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex justify-between">
              <span>Mon - Fri:</span>
              <span className="text-white font-bold">5:00 AM - 11:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday:</span>
              <span className="text-white font-bold">6:00 AM - 9:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday:</span>
              <span className="text-white font-bold">8:00 AM - 4:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Alpha J Fitness & Cross Studio. All rights reserved.</p>
      </div>
    </footer>
  );
};
