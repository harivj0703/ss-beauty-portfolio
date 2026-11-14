# SS BEAUTY PARLOUR — Luxury Makeup Artist Portfolio

> **"Beauty, Elevated."**  
> Official bespoke portfolio website for **Silambarasi**, Professional Makeup Artist with over 6 years of experience serving **Thiruvannamalai** and **Chengam**, Tamil Nadu, India.

---

## 🌟 Visual Identity & Brand Concept

This website is designed with an editorial luxury bridal aesthetic, honoring South Indian Muhurtham traditions and contemporary reception glamour.

- **Primary Background:** Warm Ivory (`#FAF7F2`)
- **Secondary Background:** Soft Beige (`#F0E8DE`)
- **Primary Accent:** Champagne Gold (`#C6A36A`)
- **Secondary Accent:** Soft Blush (`#E8CFCB`)
- **Typography:** Playfair Display & Cormorant Garamond (Headings), Poppins (Body)

---

## 🚀 Key Features

1. **Editorial Hero Section:** High-impact split composition with serif typography, gold accents, and prominent bridal artwork.
2. **Experience Highlights:** Verified horizontal credential badges (6+ Years, Bridal Specialist, Personalized Looks, Thiruvannamalai & Chengam).
3. **About the Artist:** Narrative biography and makeup philosophy for Silambarasi with portrait placeholder.
4. **Curated Portfolio Gallery:** Masonry/editorial responsive grid with 6 category filters (`All`, `Bridal Makeup`, `Engagement Makeup`, `Reception Makeup`, `Party Makeup`, `Hairstyling`).
5. **Full-Screen Lightbox:** Modal viewer with zoom, previous/next controls, keyboard navigation (Escape, Arrow keys), and image details.
6. **Before & After Transformations:** Interactive dual-mode comparison featuring a draggable split slider and side-by-side view with clear transparent editorial labels.
7. **8 Beauty Services:** Dedicated cards for Bridal, Engagement, Reception, HD Makeup, Party Makeup, Hairstyling, Saree Draping, and Custom Packages. Clicking "Book Now" scrolls and auto-selects the service in the booking form.
8. **Why Choose SS Beauty Parlour:** Trust-building highlights with zero exaggerated or unverified claims.
9. **Client Testimonials:** Elegant card showcase with editable placeholder data clearly marked.
10. **Curated Instagram Showcase:** 6-grid editorial aesthetic with direct profile link.
11. **Dual Booking Methods:**
    - **Method 1:** Validated website inquiry form (Full Name, Phone, Event Type, Date, Location, Service, Message) with configurable API endpoint and instant WhatsApp fallback.
    - **Method 2:** Direct WhatsApp booking generator with structured pre-filled messages.
12. **Floating WhatsApp CTA:** Accessible on all screens with pulse glow and direct click-to-chat.
13. **SEO & Accessibility:** Open Graph metadata, Schema.org `BeautySalon` structured data, `robots.txt`, `sitemap.xml`, and reduced motion accessibility compliance.

---

## 📁 Project Structure

```
ss-beauty-portfolio/
├── public/
│   ├── favicon.svg               # Luxury gold SS monogram SVG icon
│   ├── robots.txt                # Search engine crawler directives
│   ├── sitemap.xml               # Canonical sitemap
│   └── images/
│       ├── hero/                 # Hero bridal portrait
│       ├── artist/               # Silambarasi professional portrait
│       ├── bridal/               # Traditional South Indian Muhurtham looks
│       ├── engagement/           # Daytime & pastel engagement looks
│       ├── reception/            # Modern evening reception looks
│       ├── party/                # Party makeup & artisan hairstyles
│       ├── transformations/      # Before & after paired photographs
│       ├── services/             # Visual cards for all 8 beauty services
│       └── instagram/            # Curated social showcase images
├── src/
│   ├── config/
│   │   └── business.js           # SINGLE SOURCE OF TRUTH for all contact/business info
│   ├── data/
│   │   ├── gallery.js            # Centralized portfolio items & categories
│   │   ├── services.js           # Centralized catalog of all 8 services
│   │   └── testimonials.js       # Editable testimonials file
│   ├── services/
│   │   └── bookingService.js     # Form dispatch & WhatsApp message generator
│   ├── components/
│   │   ├── Navbar.jsx            # Transparent glassmorphic nav & mobile drawer
│   │   ├── Hero.jsx              # Split editorial hero section
│   │   ├── ExperienceHighlights.jsx # Horizontal credentials bar
│   │   ├── SectionTitle.jsx      # Reusable luxury section heading
│   │   ├── Gallery.jsx           # Filterable portfolio grid
│   │   ├── Lightbox.jsx          # Full-screen modal viewer
│   │   ├── BeforeAfter.jsx       # Interactive drag comparison slider
│   │   ├── ServiceCard.jsx       # Individual service presentation card
│   │   ├── BookingForm.jsx       # Validated reservation form
│   │   ├── Testimonial.jsx       # Testimonial review card
│   │   ├── WhatsAppButton.jsx    # Floating WhatsApp CTA
│   │   └── Footer.jsx            # Comprehensive luxury footer
│   ├── sections/
│   │   ├── About.jsx             # Artist biography & philosophy
│   │   ├── Portfolio.jsx         # Portfolio gallery wrapper
│   │   ├── Transformations.jsx   # Before & After section wrapper
│   │   ├── Services.jsx          # Services section wrapper
│   │   ├── WhyChooseUs.jsx       # Trust & differentiator highlights
│   │   ├── Testimonials.jsx      # Reviews showcase wrapper
│   │   ├── Instagram.jsx         # Instagram visual grid
│   │   └── Contact.jsx           # Contact information & dual booking
│   ├── styles/
│   │   ├── global.css            # Tailwind layers, luxury scrollbar & typography
│   │   └── responsive.css        # Responsive constraints & slider styling
│   ├── App.jsx                   # Main layout coordinator
│   └── main.jsx                  # Application entry point
├── index.html                    # SEO meta tags, fonts, structured data
├── tailwind.config.js            # Custom luxury color palette & typography
├── vite.config.js                # Vite build configuration
├── vercel.json                   # Vercel SPA routing & caching headers
└── package.json                  # Dependencies & scripts
```

---

## 🛠️ Step-by-Step Customization Guide

### 1. Replacing Placeholder Photographs

All images are stored locally under `public/images/`.

- **Hero Bridal Photograph (To feature the artist's mother):**
  - Place your high-resolution portrait photograph into:  
    `public/images/hero/hero-bride.webp` (or `.jpg`)
  - If using a different file name or format, update the `src` attribute in `src/components/Hero.jsx`.
- **Artist Profile Photograph:**
  - Replace `public/images/artist/silambarasi-portrait.webp`.
- **Before & After Photographs:**
  - Replace `public/images/transformations/before-01.webp` and `after-01.webp`.

### 2. Updating Contact Information & Social Links

All business details are stored in one single file: **`src/config/business.js`**.  
Simply edit the fields in `BUSINESS_CONFIG.contact`:

```javascript
contact: {
  phone: "+91 98765 43210",              // Display phone
  whatsappNumber: "919876543210",          // WhatsApp number without '+'
  email: "contact@ssbeautyparlour.com",   // Email
  instagramHandle: "@ssbeautyparlour",   // Handle
  instagramUrl: "https://instagram.com/...", // Profile URL
  bookingApiEndpoint: ""                 // Optional form provider (Formspree/Web3Forms)
}
```

### 3. Adding or Updating Portfolio Images

Open **`src/data/gallery.js`** and append a new object to `GALLERY_ITEMS`:

```javascript
{
  id: 13,
  title: "Muhurtham Kanjivaram Bridal",
  category: "Bridal Makeup",
  image: "/images/bridal/bridal-05.webp",
  description: "Traditional temple jewelry with antique gold eyes",
  details: "Thiruvannamalai Wedding"
}
```

### 4. Updating Services

Open **`src/data/services.js`** to customize service descriptions, features, or duration.

### 5. Updating Testimonials

Open **`src/data/testimonials.js`** to replace placeholder reviews with actual client feedback.

---

## 💻 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 🚢 Deployment to GitHub & Vercel

### Step 1: Initialize Git & Commit
```bash
git init
git add .
git commit -m "feat: complete luxury portfolio website for SS Beauty Parlour"
```

### Step 2: Push to GitHub
Create a repository named `ss-beauty-portfolio` on GitHub, then:
```bash
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/ss-beauty-portfolio.git
git push -u origin main
```

### Step 3: Deploy on Vercel
1. Log in to [vercel.com](https://vercel.com).
2. Click **Add New...** -> **Project**.
3. Select the `ss-beauty-portfolio` repository.
4. Settings will automatically detect:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**.
