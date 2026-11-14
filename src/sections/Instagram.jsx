import React from 'react';
import { motion } from 'framer-motion';
import { Instagram as InstagramIcon, ExternalLink, Heart } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { BUSINESS_CONFIG } from '../config/business';

export default function Instagram() {
  const feedItems = [
    {
      id: 1,
      image: "/images/instagram/insta-01.webp",
      alt: "Muhurtham Bridal Artistry by Silambarasi",
      tag: "#BridalMuhurtham"
    },
    {
      id: 2,
      image: "/images/instagram/insta-02.webp",
      alt: "Radiant South Indian Bride SS Beauty Parlour",
      tag: "#SouthIndianBride"
    },
    {
      id: 3,
      image: "/images/instagram/insta-03.webp",
      alt: "Temple Bridal Styling & Antique Jewelry",
      tag: "#TempleBride"
    },
    {
      id: 4,
      image: "/images/instagram/insta-04.webp",
      alt: "Daytime Engagement Soft Glam",
      tag: "#EngagementGlam"
    },
    {
      id: 5,
      image: "/images/instagram/insta-05.webp",
      alt: "Artisan Hair Jasmine Poola Jada",
      tag: "#PoolaJada"
    },
    {
      id: 6,
      image: "/images/instagram/insta-06.webp",
      alt: "HD Makeup Cosmetics & Brushes",
      tag: "#MakeupArtistry"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="STAY CONNECTED"
          title="Follow Our Beauty Journey"
          subtitle="Explore behind-the-scenes transformations, wedding day bridal looks, and beauty inspirations on Instagram."
        />

        {/* Instagram Grid (6 items) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-10">
          {feedItems.map((item, index) => (
            <motion.a
              key={item.id}
              href={BUSINESS_CONFIG.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative aspect-square rounded-xl overflow-hidden border border-gold/30 bg-beige-soft shadow-sm block"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
                loading="lazy"
              />

              {/* Hover overlay with icon & tag */}
              <div className="absolute inset-0 bg-espresso/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-white text-center">
                <InstagramIcon className="w-6 h-6 text-gold mb-1 transform -translate-y-1 group-hover:translate-y-0 transition-transform" />
                <span className="text-[10px] font-sans font-medium text-ivory/90 uppercase tracking-wider">
                  {item.tag}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BUSINESS_CONFIG.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-sans text-xs uppercase tracking-widest font-medium shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Follow {BUSINESS_CONFIG.contact.instagramHandle}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>
      </div>
    </section>
  );
}
