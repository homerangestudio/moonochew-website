import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content');

export function getPageContent<T>(pageName: string): T {
  const filePath = path.join(contentDir, 'pages', `${pageName}.json`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents) as T;
}

export function getGlobalSettings() {
  const filePath = path.join(contentDir, 'global', 'settings.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

// Type definitions for page content
export interface HomePageContent {
  seo: { title: string; description: string };
  hero: {
    badge: string;
    headline: string;
    headlineHighlight: string;
    subheadline: string;
    image: string;
    imageAlt: string;
    primaryCtaText: string;
    primaryCtaLink: string;
    secondaryCtaText: string;
    secondaryCtaLink: string;
    stats: { value: string; label: string }[];
  };
  problem: {
    headline: string;
    headlineHighlight: string;
    subheadline: string;
    cards: { icon: string; title: string; description: string }[];
  };
  solution: {
    headline: string;
    headlineHighlight: string;
    subheadline: string;
    image: string;
    imageAlt: string;
    features: { title: string; description: string }[];
    ctaText: string;
    ctaLink: string;
  };
  benefits: {
    headline: string;
    headlineHighlight: string;
    subheadline: string;
    stats: { value: string; label: string; description: string }[];
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  cta: {
    headline: string;
    headlineHighlight: string;
    subheadline: string;
    primaryCtaText: string;
    primaryCtaLink: string;
    secondaryCtaText: string;
    secondaryCtaLink: string;
    tagline: string;
  };
}

export interface HowItWorksPageContent {
  seo: { title: string; description: string };
  hero: { headline: string; subheadline: string };
  installation: {
    headline: string;
    subheadline: string;
    steps: { number: string; title: string; description: string; image: string; imageAlt: string }[];
  };
  features: {
    headline: string;
    subheadline: string;
    items: { title: string; description: string; image: string; imageAlt: string; points: string[] }[];
  };
  synergy: {
    headline: string;
    subheadline: string;
    quote: { text: string; author: string };
  };
  cta: {
    headline: string;
    subheadline: string;
    primaryCtaText: string;
    primaryCtaLink: string;
    secondaryCtaText: string;
    secondaryCtaLink: string;
  };
}

export interface AboutPageContent {
  seo: { title: string; description: string };
  hero: {
    headline: string;
    subheadline: string;
    image: string;
    imageAlt: string;
    stats: { value: string; label: string }[];
  };
  story: {
    headline: string;
    quote: { text: string; author: string };
    paragraphs: string[];
    philosophy: string;
  };
  values: {
    headline: string;
    subheadline: string;
    items: { title: string; description: string }[];
  };
  australianMade: {
    headline: string;
    badge: string;
    image: string;
    imageAlt: string;
    paragraphs: string[];
    features: { title: string; description: string }[];
  };
  vision: {
    quote: string;
    tagline: string;
  };
  cta: {
    headline: string;
    subheadline: string;
    primaryCtaText: string;
    primaryCtaLink: string;
    secondaryCtaText: string;
    secondaryCtaLink: string;
  };
}

export interface OrderPageContent {
  seo: { title: string; description: string };
  hero: { headline: string; headlineHighlight: string; subheadline: string };
  product: {
    name: string;
    tagline: string;
    price: number;
    currency: string;
    priceNote: string;
    mainImage: string;
    mainImageAlt: string;
    galleryImages: { image: string; alt: string }[];
    included: string[];
    specifications: { label: string; value: string }[];
  };
  orderForm: { headline: string; subheadline: string };
  bulkOrders: {
    headline: string;
    headlineHighlight: string;
    subheadline: string;
    ctaText: string;
    ctaLink: string;
  };
  benefits: {
    headline: string;
    headlineHighlight: string;
    items: { title: string; description: string }[];
  };
}

export interface ContactPageContent {
  seo: { title: string; description: string };
  hero: { headline: string; subheadline: string };
  contact: {
    headline: string;
    subheadline: string;
    details: {
      location: { city: string; country: string };
      email: string;
      responseTime: { typical: string; hours: string };
    };
    quickLinks: { text: string; link: string }[];
  };
  form: { headline: string };
  faqs: {
    headline: string;
    items: { question: string; answer: string }[];
    ctaText: string;
    ctaButtonText: string;
    ctaEmail: string;
  };
}
