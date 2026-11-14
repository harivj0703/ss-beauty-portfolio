/**
 * SS BEAUTY PARLOUR - Services Data
 * 
 * Centralized services catalog for SS Beauty Parlour.
 * NOTE: As per business standards, prices are not invented. 
 * Clients can request personalized consultation & quotation via WhatsApp or Booking Form.
 */

export const SERVICES_DATA = [
  {
    id: "bridal-makeup",
    title: "Bridal Makeup",
    category: "Signature Bridal",
    shortDescription:
      "Comprehensive bridal beauty transformation designed for South Indian traditions, muhurtham, and grand ceremonies.",
    features: [
      "Custom skin preparation & priming",
      "High-definition, camera-ready bridal base",
      "Waterproof & long-wearing formulation",
      "Jewelry setting & veil placement",
      "Traditional South Indian styling"
    ],
    duration: "2.5 - 3 Hours",
    image: "/images/services/bridal-makeup.webp",
    isSignature: true,
    badge: "Most Requested"
  },
  {
    id: "engagement-makeup",
    title: "Engagement Makeup",
    category: "Bridal Suite",
    shortDescription:
      "Radiant, fresh, and romantic makeup crafted to glow under natural daylight and evening stage lights.",
    features: [
      "Luminous dewy or soft-matte finish",
      "Custom eye makeup complementary to attire",
      "Subtle sculpting and blush harmony",
      "Long-lasting lip shade and setting",
      "Hair styling coordination"
    ],
    duration: "2 - 2.5 Hours",
    image: "/images/services/engagement-makeup.webp",
    isSignature: false,
    badge: "Popular"
  },
  {
    id: "reception-makeup",
    title: "Reception Makeup",
    category: "Evening Glam",
    shortDescription:
      "Contemporary, glamorous evening makeup with captivating eyes, dimensional sculpting, and statement radiance.",
    features: [
      "Full glam or modern editorial aesthetic",
      "Smokey, shimmer, or cut-crease eye artistry",
      "Precision contouring & highlight",
      "Transfer-resistant, night-long wear",
      "Modern reception hairdo pairing"
    ],
    duration: "2 - 2.5 Hours",
    image: "/images/services/reception-makeup.webp",
    isSignature: true,
    badge: "Signature Glam"
  },
  {
    id: "hd-makeup",
    title: "HD Makeup",
    category: "High Definition",
    shortDescription:
      "Micro-fine pigments that diffuse light flawlessly, ensuring seamless perfection in 4K photography and videography.",
    features: [
      "Ultra-fine HD pigment foundation",
      "Poreless, natural second-skin texture",
      "Zero flashback under professional flash",
      "Ideal for weddings, shoots & stages",
      "Featherlight, breathable wear"
    ],
    duration: "2 Hours",
    image: "/images/services/hd-makeup.webp",
    isSignature: false,
    badge: "Studio Finish"
  },
  {
    id: "party-makeup",
    title: "Party Makeup",
    category: "Celebration",
    shortDescription:
      "Chic and sophisticated beauty styling for bridesmaids, family members, festivals, birthdays, and celebrations.",
    features: [
      "Customized to your outfit and event mood",
      "Radiant base with flattering eye accent",
      "Comfortable, long-lasting products",
      "Quick touch-up recommendations",
      "Suitable for all age groups"
    ],
    duration: "1.5 Hours",
    image: "/images/services/party-makeup.webp",
    isSignature: false
  },
  {
    id: "hairstyling",
    title: "Hairstyling",
    category: "Artisan Hair",
    shortDescription:
      "Expert traditional South Indian poola jada, jasmine braid styling, textured buns, and contemporary Hollywood waves.",
    features: [
      "Traditional bridal braid & poola jada setting",
      "Messy chic buns & elegant French twists",
      "Soft waves & voluminous curls",
      "Hair extension styling & accessory pinning",
      "All-day structural hold without stiffness"
    ],
    duration: "1 - 1.5 Hours",
    image: "/images/services/hairstyling.webp",
    isSignature: false
  },
  {
    id: "saree-draping",
    title: "Saree Draping",
    category: "Draping Art",
    shortDescription:
      "Crisp, picture-perfect pleating and secure pin-work for Kanjivaram silk sarees, tissue silks, and designer lehengas.",
    features: [
      "Traditional South Indian box pleating",
      "Iron-pressed, sharp shoulder drape",
      "Comfortable movement & zero slipping",
      "Waist-sculpting pleat placement",
      "Dupatta setting for lehengas"
    ],
    duration: "30 - 45 Mins",
    image: "/images/services/saree-draping.webp",
    isSignature: false
  },
  {
    id: "other-beauty-services",
    title: "Other Beauty Services",
    category: "Personalized Care",
    shortDescription:
      "Pre-bridal skin prep consultations, personalized trials, and customized event packages tailored to your schedule.",
    features: [
      "Pre-event skin care consultation",
      "Bridal look planning & shade matching",
      "Mother-of-the-bride makeup packages",
      "On-location service in Thiruvannamalai & Chengam",
      "Customizable group bookings"
    ],
    duration: "Flexible",
    image: "/images/services/other-services.webp",
    isSignature: false
  }
];
