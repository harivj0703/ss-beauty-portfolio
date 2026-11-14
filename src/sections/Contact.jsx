import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, MessageCircle, ExternalLink, Clock, Sparkles } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import BookingForm from '../components/BookingForm';
import { BUSINESS_CONFIG, generateWhatsAppBookingUrl } from '../config/business';

export default function Contact({ selectedService }) {
  const openDirectWhatsApp = () => {
    const url = generateWhatsAppBookingUrl({
      message: "Hello Silambarasi, I would like to inquire about booking an appointment with SS Beauty Parlour."
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F0E8DE]/50 relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blush/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          eyebrow="RESERVATIONS & INQUIRIES"
          title="Connect with SS Beauty Parlour"
          subtitle="Reserve your bridal date or request a personalized beauty consultation with Silambarasi."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Business & Contact Information (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-8 text-left"
          >
            {/* Brand Card */}
            <div className="p-8 rounded-2xl bg-white/90 border border-gold/30 shadow-luxury">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full border border-gold/60 bg-gold/10 flex items-center justify-center font-display font-bold text-xl text-gold">
                  SS
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-espresso">
                    SS BEAUTY PARLOUR
                  </h3>
                  <p className="text-xs font-sans text-taupe uppercase tracking-widest">
                    Silambarasi · Makeup Artist
                  </p>
                </div>
              </div>

              <p className="text-sm text-taupe font-sans font-light leading-relaxed mb-6">
                "Beauty, Elevated." — Delivering specialized South Indian bridal looks, muhurtham styling, and personalized party glamour across Thiruvannamalai and Chengam.
              </p>

              {/* Service Locations Highlight */}
              <div className="p-4 rounded-xl bg-ivory border border-gold/20 mb-6">
                <div className="flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-espresso mb-2">
                  <MapPin className="w-4 h-4 text-gold" />
                  Primary Service Locations
                </div>
                <div className="space-y-1.5 text-xs text-taupe font-sans pl-6">
                  <div>• Thiruvannamalai, Tamil Nadu, India</div>
                  <div>• Chengam, Tamil Nadu, India</div>
                  <div className="text-[11px] text-gold font-medium mt-1">
                    Available for on-venue bridal travel
                  </div>
                </div>
              </div>

              {/* Contact List */}
              <div className="space-y-4 pt-2">
                {/* Phone */}
                <div className="flex items-center gap-3.5 text-sm text-espresso">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 text-gold flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-sans tracking-wider text-taupe">
                      Telephone / Mobile
                    </div>
                    <div className="font-sans font-medium text-xs sm:text-sm">
                      {BUSINESS_CONFIG.contact.phone}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3.5 text-sm text-espresso">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 text-gold flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-sans tracking-wider text-taupe">
                      Email Inquiries
                    </div>
                    <div className="font-sans font-medium text-xs sm:text-sm">
                      {BUSINESS_CONFIG.contact.email}
                    </div>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-center gap-3.5 text-sm text-espresso">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 text-gold flex items-center justify-center shrink-0">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-sans tracking-wider text-taupe">
                      Instagram Profile
                    </div>
                    <a
                      href={BUSINESS_CONFIG.contact.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-medium text-xs sm:text-sm text-gold hover:underline flex items-center gap-1"
                    >
                      {BUSINESS_CONFIG.contact.instagramHandle}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Instant Booking Card (Method 2) */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-xl">
              <span className="text-[10px] uppercase font-sans tracking-widest text-emerald-200 font-semibold">
                METHOD 2: INSTANT WHATSAPP CHAT
              </span>
              <h4 className="text-xl font-display font-medium text-white mt-1">
                Prefer Instant Chat?
              </h4>
              <p className="text-xs font-sans text-white/90 mt-1 leading-relaxed">
                Send a direct message on WhatsApp for instant date availability, bridal consultations, and quick responses.
              </p>
              <button
                onClick={openDirectWhatsApp}
                className="mt-5 w-full py-3.5 rounded-xl bg-white text-emerald-800 hover:bg-emerald-50 font-sans text-xs uppercase tracking-widest font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                Start WhatsApp Conversation
              </button>
            </div>
          </motion.div>

          {/* Right Column: Interactive Website Booking Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <BookingForm selectedService={selectedService} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
