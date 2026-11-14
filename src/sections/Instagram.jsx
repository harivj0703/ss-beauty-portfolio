import React from 'react';
import { motion } from 'framer-motion';
import { Instagram as InstagramIcon, ExternalLink } from 'lucide-react';
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
    <section className="py-24 lg:py-32 bg-[#FFF8F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="INSTAGRAM GALLERY"
          title="Follow Our Beauty Journey"
          subtitle="Explore behind-the-scenes transformations, bridal muhurthams, and artistry inspirations on Instagram."
        />

        {/* Bubbly Collage Grid with Organic Corners */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 mb-12">
          {feedItems.map((item, index) => {
            const cornerStyle = index % 2 === 0 ? 'rounded-[2rem]' : 'rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-tl-xl rounded-br-xl';
            return (
              <motion.a
                key={item.id}
                href={BUSINESS_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group relative aspect-square overflow-hidden border-2 border-blush/60 bg-cream-pink shadow-bubbly hover:shadow-bubbly-hover hover:-translate-y-1 transition-all duration-300 block ${cornerStyle}`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
                  loading="lazy"
                />

                {/* Hover overlay with icon & tag */}
                <div className="absolute inset-0 bg-burgundy/75 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-white text-center">
                  <InstagramIcon className="w-7 h-7 text-rose-soft mb-1.5 transform -translate-y-1 group-hover:translate-y-0 transition-transform" />
                  <span className="text-[10px] font-sans font-semibold text-warmwhite uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Follow Button */}
        <div className="flex justify-center">
          <a
            href={BUSINESS_CONFIG.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full bg-gradient-to-r from-burgundy via-rose-burgundy to-rose-dusty text-warmwhite font-sans text-xs uppercase tracking-widest font-semibold shadow-burgundy-glow hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>FOLLOW ON INSTAGRAM</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>
      </div>
    </section>
  );
}
