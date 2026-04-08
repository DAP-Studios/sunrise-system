// SEO Configuration & Best Practices Guide

export const SEO_CONFIG = {
  siteName: 'Sunrise System',
  siteUrl: 'https://sunrisesystem.co.in',
  defaultTitle: 'Sunrise System - Industrial Automation & PLC SCADA Solutions in Vapi, Gujarat',
  defaultDescription: 'Leading industrial automation company in Vapi, Gujarat. Turnkey PLC, SCADA, DCS solutions, panel manufacturing (MCC/PCC), VFD, HMI, instrumentation. Serving Vapi GIDC, Silvassa, Daman, South Gujarat industries.',
  defaultKeywords: 'industrial automation Vapi, PLC programming Vapi, SCADA solutions Gujarat, panel manufacturers Vapi GIDC',
  defaultImage: 'https://sunrisesystem.co.in/assets/logo.png',
  
  // Social Media
  social: {
    facebook: '',
    twitter: '',
    linkedin: '',
    instagram: '',
  },
  
  // Contact Information
  contact: {
    phone: '+919712958901',
    email: 'sunrisesys.service@gmail.com',
    address: '27, 2nd Floor, Pramukh Commercial Complex, Nr. Cine Park, Vapi Silvassa Road, Vapi, Gujarat 396195',
  },
  
  // Business Hours
  businessHours: {
    weekdays: '09:00 - 18:00',
    saturday: '09:00 - 18:00',
    sunday: 'Closed',
  },
  
  // Service Areas
  serviceAreas: ['Vapi', 'Silvassa', 'Daman', 'Surat', 'Gujarat', 'South Gujarat', 'Vapi GIDC'],
  
  // Core Services
  services: [
    'PLC Programming & SCADA',
    'Panel Manufacturing (MCC/PCC)',
    'DCS & Control Systems',
    'VFD & HMI Solutions',
    'Instrumentation',
    'Installation & Commissioning',
    'IoT Solutions',
    'Industrial Automation',
  ],
};

// Page-specific SEO data
export const PAGE_SEO = {
  home: {
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    keywords: SEO_CONFIG.defaultKeywords,
    url: SEO_CONFIG.siteUrl,
  },
  about: {
    title: 'About Us - Sunrise System | Industrial Automation Experts in Vapi',
    description: 'Learn about Sunrise System, your trusted partner for industrial automation solutions in Vapi, Gujarat. Expert team with years of experience in PLC, SCADA, and control systems.',
    keywords: 'about sunrise system, automation company vapi, industrial automation experts gujarat',
    url: `${SEO_CONFIG.siteUrl}/#about`,
  },
  services: {
    title: 'Our Services - Industrial Automation Solutions | Sunrise System Vapi',
    description: 'Comprehensive industrial automation services including PLC programming, SCADA systems, panel manufacturing, DCS, VFD, HMI, and instrumentation solutions in Vapi, Gujarat.',
    keywords: 'automation services vapi, plc programming services, scada solutions, panel manufacturing services',
    url: `${SEO_CONFIG.siteUrl}/#services`,
  },
  products: {
    title: 'Products & Solutions - Industrial Automation Equipment | Sunrise System',
    description: 'Wide range of industrial automation products including PLCs, SCADA systems, HMIs, VFDs, sensors, and control panels from top brands like Siemens, Schneider, ABB.',
    keywords: 'automation products vapi, plc suppliers, scada products, industrial equipment gujarat',
    url: `${SEO_CONFIG.siteUrl}/#products`,
  },
  contact: {
    title: 'Contact Us - Get Industrial Automation Solutions | Sunrise System Vapi',
    description: 'Contact Sunrise System for industrial automation solutions in Vapi, Gujarat. Call +919712958901 or email for PLC, SCADA, panel manufacturing inquiries. 24/7 support available.',
    keywords: 'contact sunrise system, automation company vapi contact, industrial automation inquiry',
    url: `${SEO_CONFIG.siteUrl}/#contact`,
  },
};

// Structured Data Helpers
export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};

// SEO Best Practices Checklist
export const SEO_CHECKLIST = {
  technical: [
    '✓ Sitemap.xml created and submitted to Google Search Console',
    '✓ Robots.txt configured properly',
    '✓ SSL certificate installed (HTTPS)',
    '✓ Mobile-responsive design',
    '✓ Fast page load speed (< 3 seconds)',
    '✓ Structured data (Schema.org) implemented',
    '✓ Canonical URLs set',
    '✓ XML sitemap includes all important pages',
  ],
  onPage: [
    '✓ Unique title tags (50-60 characters)',
    '✓ Meta descriptions (150-160 characters)',
    '✓ Header tags (H1, H2, H3) properly structured',
    '✓ Alt text for all images',
    '✓ Internal linking strategy',
    '✓ Keyword optimization',
    '✓ Clean URL structure',
    '✓ Mobile-first design',
  ],
  content: [
    '✓ High-quality, original content',
    '✓ Regular content updates',
    '✓ Local SEO optimization (Vapi, Gujarat)',
    '✓ Service pages optimized',
    '✓ Blog/resources section (optional)',
    '✓ Customer testimonials',
    '✓ Clear call-to-actions',
  ],
  local: [
    '✓ Google My Business profile optimized',
    '✓ Local citations (directories)',
    '✓ NAP consistency (Name, Address, Phone)',
    '✓ Location-specific keywords',
    '✓ Local structured data',
    '✓ Customer reviews',
  ],
};

export default SEO_CONFIG;
