import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

const images = [
  // Hero
  {
    url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1000&auto=format&fit=crop&q=85',
    dest: 'public/images/hero/hero-bride.webp'
  },
  // Artist portrait
  {
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=85',
    dest: 'public/images/artist/silambarasi-portrait.webp'
  },
  // Bridal
  {
    url: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=85',
    dest: 'public/images/bridal/bridal-01.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=85',
    dest: 'public/images/bridal/bridal-02.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1610030469668-9653a99eb2a7?w=800&auto=format&fit=crop&q=85',
    dest: 'public/images/bridal/bridal-03.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&auto=format&fit=crop&q=85',
    dest: 'public/images/bridal/bridal-04.webp'
  },
  // Engagement
  {
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=85',
    dest: 'public/images/engagement/engagement-01.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=85',
    dest: 'public/images/engagement/engagement-02.webp'
  },
  // Reception
  {
    url: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&auto=format&fit=crop&q=85',
    dest: 'public/images/reception/reception-01.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=85',
    dest: 'public/images/reception/reception-02.webp'
  },
  // Party & Hairstyling
  {
    url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=85',
    dest: 'public/images/party/party-01.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&auto=format&fit=crop&q=85',
    dest: 'public/images/party/hairstyling-01.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1522337094346-290f268723bb?w=800&auto=format&fit=crop&q=85',
    dest: 'public/images/party/hairstyling-02.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&auto=format&fit=crop&q=85',
    dest: 'public/images/party/hairstyling-03.webp'
  },
  // Transformations
  {
    url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=85',
    dest: 'public/images/transformations/before-01.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=85',
    dest: 'public/images/transformations/after-01.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=85',
    dest: 'public/images/transformations/before-02.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&auto=format&fit=crop&q=85',
    dest: 'public/images/transformations/after-02.webp'
  },
  // Services
  {
    url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=85',
    dest: 'public/images/services/bridal-makeup.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=85',
    dest: 'public/images/services/engagement-makeup.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&auto=format&fit=crop&q=85',
    dest: 'public/images/services/reception-makeup.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&auto=format&fit=crop&q=85',
    dest: 'public/images/services/hd-makeup.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=85',
    dest: 'public/images/services/party-makeup.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&auto=format&fit=crop&q=85',
    dest: 'public/images/services/hairstyling.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1610030469668-9653a99eb2a7?w=800&auto=format&fit=crop&q=85',
    dest: 'public/images/services/saree-draping.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=85',
    dest: 'public/images/services/other-services.webp'
  },
  // Instagram feed items
  {
    url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=85',
    dest: 'public/images/instagram/insta-01.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop&q=85',
    dest: 'public/images/instagram/insta-02.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&auto=format&fit=crop&q=85',
    dest: 'public/images/instagram/insta-03.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=85',
    dest: 'public/images/instagram/insta-04.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&auto=format&fit=crop&q=85',
    dest: 'public/images/instagram/insta-05.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&auto=format&fit=crop&q=85',
    dest: 'public/images/instagram/insta-06.webp'
  }
];

async function downloadAll() {
  console.log(`Starting download of ${images.length} curated images...`);
  for (const item of images) {
    const fullPath = path.resolve(root, item.dest);
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    try {
      const res = await fetch(item.url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buffer = await res.arrayBuffer();
      fs.writeFileSync(fullPath, Buffer.from(buffer));
      console.log(`Downloaded: ${item.dest} (${(buffer.byteLength / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`Failed ${item.dest}: ${err.message}`);
    }
  }
  console.log('Finished downloading assets.');
}

downloadAll();
