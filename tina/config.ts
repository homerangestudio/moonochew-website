import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      // Global Settings
      {
        name: "global",
        label: "Site Settings",
        path: "content/global",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "contact",
            label: "Contact Information",
            fields: [
              { type: "string", name: "email", label: "Email Address" },
              { type: "string", name: "phone", label: "Phone Number" },
              { type: "string", name: "location", label: "Location" },
              { type: "string", name: "region", label: "Region/State" },
            ],
          },
          {
            type: "object",
            name: "product",
            label: "Product Details",
            fields: [
              { type: "number", name: "price", label: "Unit Price (AUD)" },
              { type: "string", name: "currency", label: "Currency Code" },
            ],
          },
          {
            type: "object",
            name: "seo",
            label: "Default SEO",
            fields: [
              { type: "string", name: "title", label: "Site Title" },
              { type: "string", name: "description", label: "Site Description", ui: { component: "textarea" } },
            ],
          },
        ],
      },

      // Pages Collection
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Page Title",
            required: true,
            isTitle: true,
          },
          {
            type: "string",
            name: "seoTitle",
            label: "SEO Title",
          },
          {
            type: "string",
            name: "seoDescription",
            label: "SEO Description",
            ui: { component: "textarea" },
          },
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "string", name: "badge", label: "Badge Text" },
              { type: "string", name: "headline", label: "Main Headline" },
              { type: "string", name: "highlightedText", label: "Highlighted Text" },
              { type: "string", name: "subheadline", label: "Subheadline", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Hero Image" },
              { type: "string", name: "imageAlt", label: "Image Alt Text" },
              { type: "string", name: "primaryCta", label: "Primary CTA Text" },
              { type: "string", name: "primaryCtaLink", label: "Primary CTA Link" },
              { type: "string", name: "secondaryCta", label: "Secondary CTA Text" },
              { type: "string", name: "secondaryCtaLink", label: "Secondary CTA Link" },
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Page Content",
            isBody: true,
          },
        ],
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
          { type: "number", name: "order", label: "Display Order" },
        ],
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
            options: ["product", "shipping", "installation", "general"],
          },
          { type: "number", name: "order", label: "Display Order" },
        ],
      },
    ],
  },
});
