/**
 * EffyDesk Wildwood Landing Page - Brand Constants
 * Colors from official EffyDesk branding guidelines
 */

export const colors = {
  // Primary Brand Colors
  primary: {
    orange: '#BA4B1A',         // Primary brand color - burnt orange
    orangeHover: '#9E3F16',    // Darker orange for hover states
  },

  // Accent
  accent: {
    gold: '#D3841E',           // Gold/mustard for decorative elements (sparkles)
  },

  // Dark
  dark: {
    forest: '#2C2F21',         // Forest green - dark sections, text
    forestLight: '#3D4030',    // Lighter forest for hover
  },

  // Backgrounds
  bg: {
    cream: '#FDF5EF',          // Main background
    white: '#FFFFFF',
    lightGray: '#F5F5F0',
  },

  // Text
  text: {
    dark: '#2C2F21',           // Primary text (forest)
    medium: '#5C5F52',         // Secondary text
    light: '#FFFFFF',
    muted: '#8B8D85',
  },

  // Utility
  divider: '#E5E5E0',
} as const;

// Product Info
export const product = {
  name: 'Wildwood Solid Wood Desk',
  tagline: "Nature's Beauty. Engineering's Beast.",
  price: 1299,
  currency: 'CAD',
} as const;

// Scrollytelling Steps - Technical Deep Dive
export interface ScrollStep {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export const scrollytellingSteps: ScrollStep[] = [
  {
    id: 'dual-motors',
    title: 'Dual Motors',
    subtitle: '300lbs Lift Capacity',
    description: 'Industrial-grade dual motor system delivers smooth, powerful height adjustment. Lift your entire workspace effortlessly.',
    image: '/images/scrollytelling/motor-cutaway.png',
  },
  {
    id: 'whisper-quiet',
    title: 'Whisper Quiet',
    subtitle: '< 45dB Noise Level',
    description: 'Quieter than a library. Our precision-engineered motors operate at under 45 decibels—take calls while adjusting.',
    image: '/images/scrollytelling/noise-comparison.png',
  },
  {
    id: 'stability',
    title: 'Rock Solid',
    subtitle: 'Reinforced 3-Stage Columns',
    description: 'Military-grade steel construction with anti-wobble technology. Your monitors stay steady at any height.',
    image: '/images/scrollytelling/column-xray.png',
  },
];

// Exploded View Layers
export interface ExplodedLayer {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const explodedLayers: ExplodedLayer[] = [
  {
    id: 'top',
    name: '100% Solid Walnut',
    description: 'Hand-selected premium hardwood with natural grain patterns',
    image: '/images/exploded/walnut-top.png',
  },
  {
    id: 'frame',
    name: 'Steel Frame Core',
    description: 'Powder-coated steel reinforcement for ultimate durability',
    image: '/images/exploded/steel-frame.png',
  },
  {
    id: 'electronics',
    name: 'Smart Control Unit',
    description: 'Integrated electronics with memory presets and safety sensors',
    image: '/images/exploded/electronics-box.png',
  },
];

// Keypad Features
export const keypadFeatures = [
  {
    title: 'Wireless Charging',
    description: 'Built-in Qi wireless charging pad for phones and devices',
  },
  {
    title: '4 Memory Presets',
    description: 'Save your perfect sitting and standing heights',
  },
  {
    title: 'One-Touch Adjustment',
    description: 'Instant transitions between saved positions',
  },
  {
    title: 'LED Digital Display',
    description: 'Real-time height readout in inches or centimeters',
  },
  {
    title: 'Anti-Collision Sensor',
    description: 'Automatic stop when obstacles are detected',
  },
] as const;

// Comparison Data
export const comparison = {
  oldWay: {
    title: 'Standard Desk',
    points: [
      'Fixed height causes poor posture',
      'Particle board construction',
      'Visible cable clutter',
      'No ergonomic benefits',
    ],
    image: '/images/comparison/old-way.jpg',
  },
  newWay: {
    title: 'Wildwood',
    points: [
      'Adjustable height promotes movement',
      'Solid hardwood craftsmanship',
      'Integrated cable management',
      'Proven health benefits',
    ],
    image: '/images/comparison/wildwood-way.jpg',
  },
} as const;

// Hero image
export const heroImage = '/images/hero-lifestyle.webp';

// Keypad image
export const keypadImage = '/images/lifestyle-setup.webp';

// Footer trust badges
export const trustBadges = [
  { icon: 'truck', label: 'Fast & Free Shipping' },
  { icon: 'calendar', label: '30 Day Trial' },
  { icon: 'shield', label: '10 Year Warranty' },
  { icon: 'maple-leaf', label: 'Designed in Canada' },
] as const;

// Footer links
export const footerLinks = {
  workWithWonder: {
    title: 'Work with Wonder',
    description: 'Effydesk: Designing ergonomic WFH solutions.',
    email: 'team@effydesk.ca',
    phone: '604-715-7577',
    address: '110-2440 Canoe Ave, Coquitlam BC',
  },
  shop: {
    title: 'Shop',
    links: ['Desks', 'Chairs', 'Accessories', 'Wonder Bundles', 'Installation Services', 'Gift Cards', 'Wholesale'],
  },
  wonderCare: {
    title: 'Wonder Care',
    links: ['Shipping & Returns', 'FAQ', 'Our Warranty', 'Warranty Registration', 'Installation Guide', 'About Us', 'Blog', 'Affiliates'],
  },
} as const;

// Social links
export const socialLinks = [
  { name: 'Facebook', url: 'https://facebook.com/effydesk' },
  { name: 'X', url: 'https://twitter.com/effydesk' },
  { name: 'Instagram', url: 'https://instagram.com/effydesk' },
  { name: 'Pinterest', url: 'https://pinterest.com/effydesk' },
  { name: 'YouTube', url: 'https://youtube.com/effydesk' },
  { name: 'LinkedIn', url: 'https://linkedin.com/company/effydesk' },
] as const;

// ============================================
// NEW SECTION DATA (Premium Expansion)
// ============================================

// Product Meta - Rating & Pricing
export const productMeta = {
  rating: 4.9,
  reviewCount: 247,
  originalPrice: 1599,
  currentPrice: 1299,
  savings: 300,
  promoCode: 'NEWYEAR25',
  promoDiscount: '20%',
} as const;

// What's Included - Bundle Items
export const bundleItems = [
  {
    name: 'Walnut Desktop',
    detail: '60" x 30" solid wood',
    icon: 'desk',
  },
  {
    name: 'Steel Frame',
    detail: 'Dual motor system',
    icon: 'frame',
  },
  {
    name: 'Smart Keypad',
    detail: 'Wireless charging built-in',
    icon: 'keyboard',
  },
  {
    name: 'Accessories',
    detail: 'Cables & grommets',
    icon: 'cable',
  },
] as const;

// Specifications - Technical Details
export const specifications = {
  dimensions: {
    title: 'Dimensions',
    items: [
      { label: 'Desktop Size', value: '60" x 30" x 1"' },
      { label: 'Height Range', value: '24.4" - 50"' },
      { label: 'Weight Capacity', value: '300 lbs' },
      { label: 'Frame Weight', value: '85 lbs' },
      { label: 'Total Weight', value: '130 lbs' },
    ],
  },
  motor: {
    title: 'Motor System',
    items: [
      { label: 'Motor Type', value: 'Dual Motor' },
      { label: 'Lift Capacity', value: '300 lbs' },
      { label: 'Lift Speed', value: '1.5"/sec' },
      { label: 'Noise Level', value: '< 45dB' },
      { label: 'Duty Cycle', value: '10% (6 min/hr)' },
    ],
  },
  materials: {
    title: 'Materials',
    items: [
      { label: 'Desktop', value: 'Solid North American Walnut' },
      { label: 'Frame', value: 'Powder-coated Cold Rolled Steel' },
      { label: 'Finish', value: 'Natural Oil (Food-safe)' },
      { label: 'Edge Profile', value: 'Live Edge or Straight' },
    ],
  },
  electrical: {
    title: 'Electrical',
    items: [
      { label: 'Input Voltage', value: '120V AC, 60Hz' },
      { label: 'Power Consumption', value: '150W (active)' },
      { label: 'Standby Power', value: '< 0.5W' },
      { label: 'Cord Length', value: '6 ft' },
    ],
  },
  certifications: {
    title: 'Certifications',
    items: [
      { label: 'Safety', value: 'UL Listed, FCC Compliant' },
      { label: 'Quality', value: 'BIFMA Certified' },
      { label: 'Environmental', value: 'CARB Phase 2 Compliant' },
    ],
  },
} as const;

// FAQ Data
export const faqs = [
  {
    question: 'What wood finishes are available?',
    answer: 'We offer three premium solid wood options: Walnut (rich, dark chocolate tones), Oak (light, golden grain), and Maple (creamy white, subtle grain). Each desktop is hand-selected for exceptional grain patterns and character.',
  },
  {
    question: 'How much weight can the desk hold?',
    answer: 'The Wildwood desk supports up to 300 lbs evenly distributed across the desktop. This includes multiple monitors, computers, books, and all your workspace essentials with room to spare.',
  },
  {
    question: 'Is professional assembly available?',
    answer: 'Yes! Select our White Glove Installation service at checkout for $149. Our certified technicians will deliver, assemble, and set up your desk in your home office. Available in most major Canadian cities.',
  },
  {
    question: "What's covered under the warranty?",
    answer: 'Our industry-leading 10-year warranty covers the frame, motors, and electronics against manufacturing defects. The solid wood desktop is covered for 5 years. We also offer a 30-day satisfaction guarantee with free returns.',
  },
  {
    question: 'Can I customize the desktop size?',
    answer: 'Absolutely! We offer three standard sizes: 48" x 24" (compact), 60" x 30" (standard), and 72" x 30" (executive). Custom sizes are available for wholesale orders of 10+ units.',
  },
  {
    question: 'How quiet is the motor?',
    answer: 'The Wildwood operates at under 45 decibels—quieter than a normal conversation. You can comfortably take video calls while adjusting your desk height without disturbing colleagues.',
  },
  {
    question: 'Does the desk have anti-collision protection?',
    answer: 'Yes, our smart control unit includes anti-collision sensors that automatically stop and reverse the desk if it encounters an obstacle. This protects your furniture, pets, and anything in the desk\'s path.',
  },
] as const;

// Customer Reviews
export const reviews = [
  {
    id: 1,
    name: 'Sarah M.',
    location: 'Vancouver, BC',
    rating: 5,
    variant: 'Walnut 60"',
    title: 'Worth every penny',
    text: 'This desk changed my work-from-home life. The build quality is incredible—you can feel the difference solid wood makes. My back pain has significantly improved since I started alternating between sitting and standing.',
    verified: true,
    date: 'December 2024',
  },
  {
    id: 2,
    name: 'James T.',
    location: 'Toronto, ON',
    rating: 5,
    variant: 'Oak 72"',
    title: 'Executive quality',
    text: 'As someone who spends 10+ hours at my desk, this investment has been transformative. The whisper-quiet motors are a game-changer for video calls. My clients always comment on how beautiful the desk looks.',
    verified: true,
    date: 'November 2024',
  },
  {
    id: 3,
    name: 'Michelle K.',
    location: 'Calgary, AB',
    rating: 5,
    variant: 'Maple 48"',
    title: 'Perfect for small spaces',
    text: 'I was worried about finding a quality standing desk for my condo office. The 48" Maple fits perfectly and the light wood brightens up the whole room. Assembly was surprisingly easy—done in 25 minutes!',
    verified: true,
    date: 'January 2025',
  },
  {
    id: 4,
    name: 'David L.',
    location: 'Montreal, QC',
    rating: 5,
    variant: 'Walnut 60"',
    title: 'Finally, a desk that matches my furniture',
    text: 'After years of ugly office furniture, the Wildwood actually complements my mid-century modern living room. The walnut grain is stunning and the cable management keeps everything clean.',
    verified: true,
    date: 'October 2024',
  },
] as const;

// Press/Media Logos
export const pressLogos = [
  { name: 'TechCrunch', logo: '/press/techcrunch.svg' },
  { name: 'Globe & Mail', logo: '/press/globe-mail.svg' },
  { name: 'Wired', logo: '/press/wired.svg' },
  { name: 'HGTV Canada', logo: '/press/hgtv.svg' },
  { name: 'Forbes', logo: '/press/forbes.svg' },
  { name: 'Business Insider', logo: '/press/business-insider.svg' },
] as const;

// Awards & Certifications
export const certifications = [
  { name: 'BIFMA', label: 'Certified', description: 'Business & Institutional Furniture Manufacturers Association' },
  { name: 'UL', label: 'Listed', description: 'Underwriters Laboratories Safety Certified' },
  { name: 'FCC', label: 'Compliant', description: 'Federal Communications Commission Approved' },
  { name: 'Designed in Canada', label: '', description: 'Proudly designed in British Columbia' },
] as const;

export const awards = [
  { title: 'Best Standing Desk 2024', source: 'TechRadar' },
  { title: "Editor's Choice", source: 'WFH Magazine' },
  { title: 'Top Pick for Home Offices', source: 'Business Insider' },
] as const;

// How It Works Steps
export const howItWorksSteps = [
  {
    step: 1,
    title: 'Order',
    description: 'Choose your size and wood finish. Free shipping across Canada.',
    icon: 'package',
  },
  {
    step: 2,
    title: 'Assemble',
    description: '20-minute setup with included tools. No experience needed.',
    icon: 'wrench',
  },
  {
    step: 3,
    title: 'Enjoy',
    description: 'Save your heights and adjust with one touch. Transform your workday.',
    icon: 'smile',
  },
] as const;

// Materials Deep Dive
export const materialsInfo = {
  title: 'Solid Walnut',
  subtitle: 'The heart of Wildwood',
  description: 'Hand-selected from sustainable North American forests, each desktop tells a unique story through its natural grain patterns.',
  features: [
    'Live edge character available',
    'Natural grain variations',
    'Food-safe natural oil finish',
    'Zero particle board or MDF',
    'Sustainably sourced',
  ],
  image: '/images/materials-walnut.jpg',
} as const;

// Assembly Information
export const assemblyInfo = {
  time: '30-60 minutes',
  people: '2 recommended',
  tools: 'Included (Allen keys + wrench)',
  difficulty: 'Easy',
  pdfUrl: '/wildwood-assembly-guide.pdf',
  thumbnail: '/images/product-full.jpg',
  steps: [
    'Attach feet to legs',
    'Connect crossbar to legs',
    'Mount desktop to frame',
    'Connect control box and calibrate',
  ],
} as const;
