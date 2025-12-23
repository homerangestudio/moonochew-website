// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // Support both TINA_PUBLIC_CLIENT_ID (used by CLI) and NEXT_PUBLIC_TINA_CLIENT_ID (legacy)
  clientId: process.env.TINA_PUBLIC_CLIENT_ID || process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      // Home Page
      {
        name: "home",
        label: "Home Page",
        path: "content/pages",
        format: "json",
        match: {
          include: "home"
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false
          },
          router: () => "/"
        },
        fields: [
          {
            type: "object",
            name: "seo",
            label: "SEO Settings",
            fields: [
              { type: "string", name: "title", label: "Page Title" },
              { type: "string", name: "description", label: "Meta Description", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "string", name: "badge", label: "Badge Text" },
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "headlineHighlight", label: "Headline Highlight (colored)" },
              { type: "string", name: "headlineAccent", label: "Headline Accent Line" },
              { type: "string", name: "headlineAccentColor", label: "Accent Color (hex)", description: "e.g. #6B2D5B for Davidson plum" },
              { type: "string", name: "subheadline", label: "Subheadline", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Hero Image" },
              { type: "string", name: "imageAlt", label: "Image Alt Text" },
              { type: "string", name: "primaryCtaText", label: "Primary Button Text" },
              { type: "string", name: "primaryCtaLink", label: "Primary Button Link" },
              { type: "string", name: "secondaryCtaText", label: "Secondary Button Text" },
              { type: "string", name: "secondaryCtaLink", label: "Secondary Button Link" },
              {
                type: "object",
                name: "stats",
                label: "Stats",
                list: true,
                fields: [
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "label", label: "Label" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "problem",
            label: "Problem Section",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "headlineHighlight", label: "Headline Highlight" },
              { type: "string", name: "subheadline", label: "Subheadline", ui: { component: "textarea" } },
              {
                type: "object",
                name: "cards",
                label: "Problem Cards",
                list: true,
                fields: [
                  { type: "string", name: "icon", label: "Icon (fire, map, money)" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "solution",
            label: "Solution Section",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "headlineHighlight", label: "Headline Highlight" },
              { type: "string", name: "subheadline", label: "Subheadline", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageAlt", label: "Image Alt Text" },
              {
                type: "object",
                name: "features",
                label: "Features",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              },
              { type: "string", name: "ctaText", label: "CTA Button Text" },
              { type: "string", name: "ctaLink", label: "CTA Button Link" }
            ]
          },
          {
            type: "object",
            name: "benefits",
            label: "Benefits Section",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "headlineHighlight", label: "Headline Highlight" },
              { type: "string", name: "subheadline", label: "Subheadline", ui: { component: "textarea" } },
              {
                type: "object",
                name: "stats",
                label: "Stats",
                list: true,
                fields: [
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "testimonial",
            label: "Testimonial Section",
            fields: [
              { type: "string", name: "quote", label: "Quote", ui: { component: "textarea" } },
              { type: "string", name: "author", label: "Author Name" },
              { type: "string", name: "role", label: "Author Role" }
            ]
          },
          {
            type: "object",
            name: "cta",
            label: "CTA Section",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "headlineHighlight", label: "Headline Highlight" },
              { type: "string", name: "subheadline", label: "Subheadline", ui: { component: "textarea" } },
              { type: "string", name: "primaryCtaText", label: "Primary Button Text" },
              { type: "string", name: "primaryCtaLink", label: "Primary Button Link" },
              { type: "string", name: "secondaryCtaText", label: "Secondary Button Text" },
              { type: "string", name: "secondaryCtaLink", label: "Secondary Button Link" },
              { type: "string", name: "tagline", label: "Tagline" }
            ]
          }
        ]
      },
      // How It Works Page
      {
        name: "howItWorks",
        label: "How It Works Page",
        path: "content/pages",
        format: "json",
        match: {
          include: "how-it-works"
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false
          },
          router: () => "/how-it-works"
        },
        fields: [
          {
            type: "object",
            name: "seo",
            label: "SEO Settings",
            fields: [
              { type: "string", name: "title", label: "Page Title" },
              { type: "string", name: "description", label: "Meta Description", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "subheadline", label: "Subheadline", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "installation",
            label: "Installation Steps",
            fields: [
              { type: "string", name: "headline", label: "Section Headline" },
              { type: "string", name: "subheadline", label: "Section Subheadline" },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                fields: [
                  { type: "string", name: "number", label: "Step Number" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "imageAlt", label: "Image Alt Text" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "features",
            label: "Features Section",
            fields: [
              { type: "string", name: "headline", label: "Section Headline" },
              { type: "string", name: "subheadline", label: "Section Subheadline" },
              {
                type: "object",
                name: "items",
                label: "Feature Items",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "imageAlt", label: "Image Alt Text" },
                  { type: "string", name: "points", label: "Bullet Points", list: true }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "synergy",
            label: "Synergy Section",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "subheadline", label: "Subheadline", ui: { component: "textarea" } },
              {
                type: "object",
                name: "quote",
                label: "Quote",
                fields: [
                  { type: "string", name: "text", label: "Quote Text", ui: { component: "textarea" } },
                  { type: "string", name: "author", label: "Author" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "cta",
            label: "CTA Section",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "subheadline", label: "Subheadline", ui: { component: "textarea" } },
              { type: "string", name: "primaryCtaText", label: "Primary Button Text" },
              { type: "string", name: "primaryCtaLink", label: "Primary Button Link" },
              { type: "string", name: "secondaryCtaText", label: "Secondary Button Text" },
              { type: "string", name: "secondaryCtaLink", label: "Secondary Button Link" }
            ]
          }
        ]
      },
      // About Page
      {
        name: "about",
        label: "About Page",
        path: "content/pages",
        format: "json",
        match: {
          include: "about"
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false
          },
          router: () => "/about"
        },
        fields: [
          {
            type: "object",
            name: "seo",
            label: "SEO Settings",
            fields: [
              { type: "string", name: "title", label: "Page Title" },
              { type: "string", name: "description", label: "Meta Description", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "subheadline", label: "Subheadline", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageAlt", label: "Image Alt Text" },
              {
                type: "object",
                name: "stats",
                label: "Stats",
                list: true,
                fields: [
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "label", label: "Label" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "story",
            label: "Story Section",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              {
                type: "object",
                name: "quote",
                label: "Founder Quote",
                fields: [
                  { type: "string", name: "text", label: "Quote Text", ui: { component: "textarea" } },
                  { type: "string", name: "author", label: "Author" }
                ]
              },
              { type: "string", name: "paragraphs", label: "Story Paragraphs", list: true, ui: { component: "textarea" } },
              { type: "string", name: "philosophy", label: "Philosophy Statement", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "values",
            label: "Values Section",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "subheadline", label: "Subheadline", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Values",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "australianMade",
            label: "Australian Made Section",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "badge", label: "Badge Text" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "imageAlt", label: "Image Alt Text" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              {
                type: "object",
                name: "features",
                label: "Features",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "vision",
            label: "Vision Section",
            fields: [
              { type: "string", name: "quote", label: "Vision Quote", ui: { component: "textarea" } },
              { type: "string", name: "tagline", label: "Tagline" }
            ]
          },
          {
            type: "object",
            name: "cta",
            label: "CTA Section",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "subheadline", label: "Subheadline", ui: { component: "textarea" } },
              { type: "string", name: "primaryCtaText", label: "Primary Button Text" },
              { type: "string", name: "primaryCtaLink", label: "Primary Button Link" },
              { type: "string", name: "secondaryCtaText", label: "Secondary Button Text" },
              { type: "string", name: "secondaryCtaLink", label: "Secondary Button Link" }
            ]
          }
        ]
      },
      // Order Page
      {
        name: "order",
        label: "Order Page",
        path: "content/pages",
        format: "json",
        match: {
          include: "order"
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false
          },
          router: () => "/order"
        },
        fields: [
          {
            type: "object",
            name: "seo",
            label: "SEO Settings",
            fields: [
              { type: "string", name: "title", label: "Page Title" },
              { type: "string", name: "description", label: "Meta Description", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "headlineHighlight", label: "Headline Highlight" },
              { type: "string", name: "subheadline", label: "Subheadline" }
            ]
          },
          {
            type: "object",
            name: "product",
            label: "Product Details",
            fields: [
              { type: "string", name: "name", label: "Product Name" },
              { type: "string", name: "tagline", label: "Tagline" },
              { type: "number", name: "price", label: "Price (AUD)" },
              { type: "string", name: "currency", label: "Currency" },
              { type: "string", name: "priceNote", label: "Price Note (e.g. + shipping)" },
              { type: "image", name: "mainImage", label: "Main Product Image" },
              { type: "string", name: "mainImageAlt", label: "Main Image Alt Text" },
              {
                type: "object",
                name: "galleryImages",
                label: "Gallery Images",
                list: true,
                fields: [
                  { type: "image", name: "image", label: "Image" },
                  { type: "string", name: "alt", label: "Alt Text" }
                ]
              },
              { type: "string", name: "included", label: "What's Included", list: true },
              {
                type: "object",
                name: "specifications",
                label: "Specifications",
                list: true,
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "value", label: "Value" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "orderForm",
            label: "Order Form Section",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "subheadline", label: "Subheadline" }
            ]
          },
          {
            type: "object",
            name: "bulkOrders",
            label: "Bulk Orders Section",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "headlineHighlight", label: "Headline Highlight" },
              { type: "string", name: "subheadline", label: "Subheadline", ui: { component: "textarea" } },
              { type: "string", name: "ctaText", label: "CTA Button Text" },
              { type: "string", name: "ctaLink", label: "CTA Button Link" }
            ]
          },
          {
            type: "object",
            name: "benefits",
            label: "Benefits Section",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "headlineHighlight", label: "Headline Highlight" },
              {
                type: "object",
                name: "items",
                label: "Benefit Items",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          }
        ]
      },
      // Contact Page
      {
        name: "contact",
        label: "Contact Page",
        path: "content/pages",
        format: "json",
        match: {
          include: "contact"
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false
          },
          router: () => "/contact"
        },
        fields: [
          {
            type: "object",
            name: "seo",
            label: "SEO Settings",
            fields: [
              { type: "string", name: "title", label: "Page Title" },
              { type: "string", name: "description", label: "Meta Description", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "subheadline", label: "Subheadline" }
            ]
          },
          {
            type: "object",
            name: "contact",
            label: "Contact Information",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "subheadline", label: "Subheadline", ui: { component: "textarea" } },
              {
                type: "object",
                name: "details",
                label: "Contact Details",
                fields: [
                  {
                    type: "object",
                    name: "location",
                    label: "Location",
                    fields: [
                      { type: "string", name: "city", label: "City" },
                      { type: "string", name: "country", label: "Country" }
                    ]
                  },
                  { type: "string", name: "email", label: "Email Address" },
                  {
                    type: "object",
                    name: "responseTime",
                    label: "Response Time",
                    fields: [
                      { type: "string", name: "typical", label: "Typical Response" },
                      { type: "string", name: "hours", label: "Business Hours" }
                    ]
                  }
                ]
              },
              {
                type: "object",
                name: "quickLinks",
                label: "Quick Links",
                list: true,
                fields: [
                  { type: "string", name: "text", label: "Link Text" },
                  { type: "string", name: "link", label: "Link URL" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "form",
            label: "Contact Form",
            fields: [
              { type: "string", name: "headline", label: "Form Headline" }
            ]
          },
          {
            type: "object",
            name: "faqs",
            label: "FAQs Section",
            fields: [
              { type: "string", name: "headline", label: "Section Headline" },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                list: true,
                fields: [
                  { type: "string", name: "question", label: "Question" },
                  { type: "string", name: "answer", label: "Answer", ui: { component: "textarea" } }
                ]
              },
              { type: "string", name: "ctaText", label: "CTA Text" },
              { type: "string", name: "ctaButtonText", label: "CTA Button Text" },
              { type: "string", name: "ctaEmail", label: "CTA Email Link" }
            ]
          }
        ]
      },
      // Global Settings
      {
        name: "global",
        label: "Site Settings",
        path: "content/global",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          {
            type: "object",
            name: "branding",
            label: "Logo & Branding",
            description: "Upload your logo and configure site branding",
            fields: [
              {
                type: "image",
                name: "logo",
                label: "Logo Image",
                description: "Upload your logo (recommended: PNG or SVG, max height 50px)"
              },
              {
                type: "string",
                name: "logoAlt",
                label: "Logo Alt Text",
                description: "Accessibility text for the logo (e.g., 'Moonochew Logo')"
              },
              {
                type: "string",
                name: "siteName",
                label: "Site Name",
                description: "Displayed if no logo is uploaded"
              }
            ]
          },
          {
            type: "object",
            name: "contact",
            label: "Contact Information",
            fields: [
              { type: "string", name: "email", label: "Email Address" },
              { type: "string", name: "phone", label: "Phone Number" },
              { type: "string", name: "location", label: "Location" },
              { type: "string", name: "region", label: "Region/State" }
            ]
          },
          {
            type: "object",
            name: "product",
            label: "Product Details",
            fields: [
              { type: "number", name: "price", label: "Unit Price (AUD)" },
              { type: "string", name: "currency", label: "Currency Code" }
            ]
          },
          {
            type: "object",
            name: "seo",
            label: "Default SEO",
            fields: [
              { type: "string", name: "title", label: "Site Title" },
              { type: "string", name: "description", label: "Site Description", ui: { component: "textarea" } },
              { type: "image", name: "ogImage", label: "Social Share Image (1200x630px recommended)" }
            ]
          },
          {
            type: "object",
            name: "analytics",
            label: "Analytics & Tracking",
            description: "Configure your analytics and tracking services",
            fields: [
              {
                type: "string",
                name: "googleAnalyticsId",
                label: "Google Analytics ID",
                description: "Your Google Analytics 4 Measurement ID (e.g., G-XXXXXXXXXX). Leave empty to disable."
              }
            ]
          },
          {
            type: "object",
            name: "security",
            label: "Form Security (Cloudflare Turnstile)",
            description: "Spam protection for contact and order forms",
            fields: [
              {
                type: "string",
                name: "turnstileSiteKey",
                label: "Turnstile Site Key",
                description: "Get this from your Cloudflare dashboard. Leave empty to disable spam protection."
              }
            ]
          },
          {
            type: "object",
            name: "social",
            label: "Social Media Links",
            fields: [
              { type: "string", name: "facebook", label: "Facebook URL" },
              { type: "string", name: "instagram", label: "Instagram URL" },
              { type: "string", name: "linkedin", label: "LinkedIn URL" }
            ]
          }
        ]
      },
      // Testimonials
      {
        name: "testimonial",
        label: "Testimonials",
        path: "content/testimonials",
        format: "md",
        fields: [
          { type: "string", name: "quote", label: "Quote", required: true, ui: { component: "textarea" } },
          { type: "string", name: "author", label: "Author Name", required: true },
          { type: "string", name: "role", label: "Role/Title" },
          { type: "string", name: "location", label: "Location" },
          { type: "image", name: "avatar", label: "Author Photo" },
          { type: "boolean", name: "featured", label: "Featured on Homepage" },
          { type: "number", name: "order", label: "Display Order" }
        ]
      },
      // FAQs
      {
        name: "faq",
        label: "FAQs",
        path: "content/faqs",
        format: "md",
        fields: [
          { type: "string", name: "question", label: "Question", required: true },
          { type: "string", name: "answer", label: "Answer", required: true, ui: { component: "textarea" } },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["product", "shipping", "installation", "general"]
          },
          { type: "number", name: "order", label: "Display Order" }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
