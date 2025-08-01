export const CURRENCIES = {
  INR: { symbol: '₹', code: 'INR', name: 'Indian Rupee', rate: 1 },
  USD: { symbol: '$', code: 'USD', name: 'US Dollar', rate: 0.012 },
  EUR: { symbol: '€', code: 'EUR', name: 'Euro', rate: 0.011 },
  GBP: { symbol: '£', code: 'GBP', name: 'British Pound', rate: 0.0095 }
}

export const LANGUAGES = {
  en: { name: 'English', flag: '🇺🇸' },
  hi: { name: 'हिंदी', flag: '🇮🇳' }
}

export const MATERIALS = {
  fabrics: [
    // Traditional Indian Fabrics
    { id: 1, name: "Khadi Cotton", price: 320, color: "#F5F5DC", origin: "India", weight: "140gsm", category: "traditional" },
    { id: 2, name: "Chanderi Silk", price: 950, color: "#FFF8DC", origin: "Madhya Pradesh", weight: "70gsm", category: "traditional" },
    { id: 3, name: "Banarasi Silk", price: 2200, color: "#FFD700", origin: "Varanasi", weight: "120gsm", category: "traditional" },
    { id: 4, name: "Kanchipuram Silk", price: 2800, color: "#DC143C", origin: "Tamil Nadu", weight: "150gsm", category: "traditional" },
    { id: 5, name: "Pashmina", price: 3500, color: "#F0F8FF", origin: "Kashmir", weight: "60gsm", category: "luxury" },
    { id: 6, name: "Tussar Silk", price: 1800, color: "#D2B48C", origin: "Jharkhand", weight: "100gsm", category: "traditional" },
    { id: 7, name: "Muga Silk", price: 2500, color: "#FFD700", origin: "Assam", weight: "80gsm", category: "luxury" },
    { id: 8, name: "Jamdani", price: 1200, color: "#FFFFFF", origin: "Bengal", weight: "90gsm", category: "traditional" },
    { id: 9, name: "Bandhani", price: 480, color: "#FF69B4", origin: "Gujarat", weight: "110gsm", category: "traditional" },
    { id: 10, name: "Phulkari", price: 850, color: "#FF6347", origin: "Punjab", weight: "160gsm", category: "traditional" },

    // International Fabrics
    { id: 11, name: "Cotton", price: 450, color: "#F5F5DC", origin: "Global", weight: "150gsm", category: "basic" },
    { id: 12, name: "Silk", price: 1200, color: "#F8F8FF", origin: "Global", weight: "80gsm", category: "luxury" },
    { id: 13, name: "Denim", price: 800, color: "#6F8FAF", origin: "Global", weight: "320gsm", category: "casual" },
    { id: 14, name: "Leather", price: 2500, color: "#8B4513", origin: "Global", weight: "1.2mm", category: "luxury" },
    { id: 15, name: "Linen", price: 650, color: "#FAF0E6", origin: "Global", weight: "180gsm", category: "summer" },
    { id: 16, name: "Wool", price: 900, color: "#F5F5F5", origin: "Global", weight: "200gsm", category: "winter" },
    { id: 17, name: "Chiffon", price: 550, color: "#FFFAF0", origin: "Global", weight: "60gsm", category: "formal" },
    { id: 18, name: "Georgette", price: 480, color: "#FFF8DC", origin: "Global", weight: "80gsm", category: "formal" },
    { id: 19, name: "Velvet", price: 750, color: "#8B008B", origin: "Global", weight: "300gsm", category: "luxury" },
    { id: 20, name: "Satin", price: 680, color: "#FFF8DC", origin: "Global", weight: "120gsm", category: "formal" },
  ],

  accessories: [
    // Buttons
    { id: 1, name: "Plastic Buttons", type: "button", price: 15, color: "#FFFFFF", size: "12mm" },
    { id: 2, name: "Metal Buttons", type: "button", price: 25, color: "#C0C0C0", size: "15mm" },
    { id: 3, name: "Wooden Buttons", type: "button", price: 20, color: "#8B4513", size: "18mm" },
    { id: 4, name: "Shell Buttons", type: "button", price: 35, color: "#FFF8DC", size: "14mm" },
    { id: 5, name: "Horn Buttons", type: "button", price: 45, color: "#696969", size: "16mm" },

    // Zippers
    { id: 6, name: "Invisible Zipper", type: "zipper", price: 45, color: "#000000", length: "20cm" },
    { id: 7, name: "Metal Zipper", type: "zipper", price: 65, color: "#C0C0C0", length: "25cm" },
    { id: 8, name: "Plastic Zipper", type: "zipper", price: 35, color: "#FFFFFF", length: "30cm" },

    // Threads
    { id: 9, name: "Cotton Thread", type: "thread", price: 12, color: "#FFFFFF", length: "200m" },
    { id: 10, name: "Silk Thread", type: "thread", price: 35, color: "#FFD700", length: "100m" },
  ]
}

export const DESIGN_MODES = {
  SCRATCH: 'scratch',
  PARTS: 'parts', 
  TEMPLATES: 'templates'
} as const

export const CANVAS_CONFIG = {
  width: 800,
  height: 600,
  backgroundColor: '#ffffff'
}