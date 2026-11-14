/**
 * SS BEAUTY PARLOUR - Business Configuration
 * 
 * Central configuration file for all business, contact, artist, and location details.
 * Any update here will automatically reflect across the entire website.
 */

export const BUSINESS_CONFIG = {
  // Brand Identity
  brandName: "SS BEAUTY PARLOUR",
  brandMonogram: "SS",
  tagline: "Beauty is an Art. You are the Canvas.",
  description:
    "SS Beauty Parlour represents professional makeup artistry, elegance, confidence and personalized beauty experiences by Silambarasi.",
  establishedYear: 2020,
  
  // Artist Profile
  artist: {
    name: "Silambarasi",
    title: "Professional Makeup Artist",
    experience: "6+ Years",
    experienceLabel: "6+ Years of Artistry",
    bioIntro:
      "Every face has its own beauty, and every occasion deserves a special touch.",
    bioFull:
      "With over six years of experience in makeup artistry, Silambarasi believes in creating elegant, personalized looks that help every client feel confident and beautiful. At SS Beauty Parlour, every transformation is approached with care, creativity and attention to detail.",
    philosophy:
      "Beauty is an Art. You are the Canvas. Every brushstroke is dedicated to enhancing your natural charm and celebrating your authentic radiance."
  },

  // Service Locations (Strictly based on provided business info)
  locations: [
    {
      city: "Thiruvannamalai",
      state: "Tamil Nadu",
      country: "India",
      label: "Thiruvannamalai, Tamil Nadu"
    },
    {
      city: "Chengam",
      state: "Tamil Nadu",
      country: "India",
      label: "Chengam, Tamil Nadu"
    }
  ],
  locationsSummary: "Thiruvannamalai · Chengam",

  // Contact Information (Strictly WhatsApp, Direct Call & Instagram - No Email Bookings)
  contact: {
    phone: "+91 9751972900",
    phoneRaw: "+919751972900",
    callUrl: "tel:+919751972900",
    whatsappNumber: "+91 9751972900",
    whatsappRaw: "919751972900",
    whatsappUrl: "https://wa.me/919751972900",
    instagramHandle: "@silambu_makeup_artist_chengam",
    instagramUrl: "https://www.instagram.com/silambu_makeup_artist_chengam/",
    instagramButtonText: "FOLLOW ON INSTAGRAM",
    googleMapsUrl: "https://maps.google.com/?q=SS+Beauty+Parlour+Thiruvannamalai"
  },

  // Key Highlights
  highlights: [
    {
      metric: "6+ Years",
      title: "Professional Experience",
      description: "Dedicated makeup artistry crafted for every special occasion"
    },
    {
      metric: "Bridal Specialist",
      title: "Signature Styling",
      description: "Traditional, contemporary & luxury South Indian bridal looks"
    },
    {
      metric: "Personalized Looks",
      title: "Client-Centered Focus",
      description: "Customized palette tailored to your unique skin tone & features"
    },
    {
      metric: "Dual Locations",
      title: "Thiruvannamalai & Chengam",
      description: "Serving brides across key districts in Tamil Nadu"
    }
  ]
};

/**
 * Generates a pre-filled WhatsApp click-to-chat URL with structured booking details.
 * Exact format requested:
 * Hello SS Beauty Parlour!
 * 
 * I would like to enquire about a makeup booking.
 * 
 * Name:
 * Phone:
 * Service:
 * Event:
 * Date:
 * Location:
 * Additional Requirements:
 * 
 * Please contact me regarding availability and booking details.
 */
export function generateWhatsAppBookingUrl({
  name = "",
  phone = "",
  service = "",
  eventType = "",
  date = "",
  location = "",
  additionalRequirements = ""
} = {}) {
  const number = "919751972900";
  
  const text = `Hello SS Beauty Parlour!\n\nI would like to enquire about a makeup booking.\n\nName: ${name || '-'}\nPhone: ${phone || '-'}\nService: ${service || '-'}\nEvent: ${eventType || '-'}\nDate: ${date || '-'}\nLocation: ${location || '-'}\nAdditional Requirements: ${additionalRequirements || 'None'}\n\nPlease contact me regarding availability and booking details.`;

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

/**
 * General quick-chat WhatsApp link
 */
export function getGeneralWhatsAppUrl(message = "Hello SS Beauty Parlour! I would like to enquire about your makeup artistry services.") {
  const number = "919751972900";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
