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

  // Contact Information (Exact details provided)
  contact: {
    phone: "+91 9751972900",
    phoneRaw: "+919751972900",
    whatsappNumber: "919751972900",
    email: "ssbeautyparlour2528@gmail.com",
    instagramHandle: "@silambu_makeup_artist_chengam",
    instagramUrl: "https://www.instagram.com/silambu_makeup_artist_chengam/",
    instagramButtonText: "FOLLOW ON INSTAGRAM",
    googleMapsUrl: "https://maps.google.com/?q=SS+Beauty+Parlour+Thiruvannamalai",
    bookingApiEndpoint: ""
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
 */
export function generateWhatsAppBookingUrl({
  name = "",
  phone = "",
  service = "",
  eventType = "",
  date = "",
  location = "",
  message = ""
} = {}) {
  const number = BUSINESS_CONFIG.contact.whatsappNumber.replace(/[^0-9]/g, "");
  
  let text = `Hello Silambarasi, I would like to inquire about booking an appointment with SS Beauty Parlour.\n\n`;
  if (name) text += `*Name:* ${name}\n`;
  if (phone) text += `*Phone:* ${phone}\n`;
  if (service) text += `*Service:* ${service}\n`;
  if (eventType) text += `*Event Type:* ${eventType}\n`;
  if (date) text += `*Date:* ${date}\n`;
  if (location) text += `*Location:* ${location}\n`;
  if (message) text += `*Message:* ${message}\n`;
  text += `\nPlease let me know your availability. Thank you!`;

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
