import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, MessageCircle, ExternalLink, Calendar } from 'lucide-react';
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
    <section id="contact" className="py-24 lg:py-32 bg-gradient-to-b from-[#FFF8F6] via-[#FBE8EC]/60 to-[#FFF8F6] relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-blob bg-blush/30 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-blob-alt bg-rose-dusty/20 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          eyebrow="RESERVATIONS & CONTACT"
          title="Connect with SS Beauty Parlour"
          subtitle="Reserve your bridal date or request a personalized beauty consultation directly with Silambarasi."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Business & Contact Information (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-8 text-left"
          >
            {/* Brand Card with Bubbly Corners */}
            <div className="p-8 sm:p-9 rounded-[2.5rem] bg-warmwhite border-2 border-blush shadow-bubbly">
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-burgundy to-rose-burgundy text-warmwhite flex items-center justify-center font-display font-bold text-xl shadow-sm">
                  SS
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-burgundy">
                    {BUSINESS_CONFIG.brandName}
                  </h3>
                  <p className="text-xs font-sans text-rose-burgundy uppercase tracking-widest font-semibold">
                    Silambarasi · Professional Makeup Artist
                  </p>
                </div>
              </div>

              <p className="font-serif italic text-base text-burgundy/90 leading-relaxed mb-6">
                "{BUSINESS_CONFIG.tagline}"
              </p>

              <p className="text-sm text-espresso/75 font-sans font-light leading-relaxed mb-6">
                Delivering bespoke bridal transformations, Muhurtham artistry, reception styling, and party glamour across Thiruvannamalai and Chengam.
              </p>

              {/* Service Locations Highlight */}
              <div className="p-5 rounded-2xl bg-cream-pink/50 border border-blush mb-6">
                <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-burgundy mb-2">
                  <MapPin className="w-4 h-4 text-rose-burgundy" />
                  Primary Service Locations
                </div>
                <div className="space-y-1 text-xs text-espresso/80 font-sans pl-6">
                  <div>• Thiruvannamalai, Tamil Nadu, India</div>
                  <div>• Chengam, Tamil Nadu, India</div>
                  <div className="text-[11px] text-rose-burgundy font-semibold mt-1.5">
                    Available for on-location wedding venue bookings
                  </div>
                </div>
              </div>

              {/* Contact List with Exact Details */}
              <div className="space-y-4 pt-2">
                {/* Phone & WhatsApp */}
                <div className="flex items-center gap-3.5 text-sm text-espresso">
                  <div className="w-10 h-10 rounded-full bg-cream-pink text-rose-burgundy flex items-center justify-center shrink-0 shadow-xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-sans tracking-wider text-espresso/60 font-semibold">
                      Phone / WhatsApp
                    </div>
                    <a
                      href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`}
                      className="font-sans font-semibold text-sm text-burgundy hover:underline"
                    >
                      {BUSINESS_CONFIG.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3.5 text-sm text-espresso">
                  <div className="w-10 h-10 rounded-full bg-cream-pink text-rose-burgundy flex items-center justify-center shrink-0 shadow-xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-sans tracking-wider text-espresso/60 font-semibold">
                      Email Inquiries
                    </div>
                    <a
                      href={`mailto:${BUSINESS_CONFIG.contact.email}`}
                      className="font-sans font-semibold text-sm text-burgundy hover:underline break-all"
                    >
                      {BUSINESS_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-center gap-3.5 text-sm text-espresso">
                  <div className="w-10 h-10 rounded-full bg-cream-pink text-rose-burgundy flex items-center justify-center shrink-0 shadow-xs">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-sans tracking-wider text-espresso/60 font-semibold">
                      Instagram Profile
                    </div>
                    <a
                      href={BUSINESS_CONFIG.contact.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-semibold text-sm text-rose-burgundy hover:underline flex items-center gap-1"
                    >
                      {BUSINESS_CONFIG.contact.instagramHandle}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Instant Booking Card (Method 2) */}
            <div className="p-7 rounded-[2.5rem] bg-gradient-to-br from-emerald-600 to-teal-800 text-white shadow-xl">
              <span className="text-[10px] uppercase font-sans tracking-widest text-emerald-200 font-bold">
                DIRECT WHATSAPP CHAT
              </span>
              <h4 className="text-2xl font-display font-medium text-white mt-1">
                Prefer Instant Chat?
              </h4>
              <p className="text-xs font-sans text-white/90 mt-1 leading-relaxed">
                Connect directly with Silambarasi on WhatsApp for date availability, bridal consultation, and quick confirmation.
              </p>
              <button
                onClick={openDirectWhatsApp}
                className="mt-6 w-full py-3.5 rounded-full bg-white text-emerald-900 hover:bg-emerald-50 font-sans text-xs uppercase tracking-widest font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
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
