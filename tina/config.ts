import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "article",
        label: "Artikler",
        path: "articles",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titel",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Kategori",
            required: true,
            options: [
              { value: "Tanker", label: "Tanker" },
              { value: "Digte", label: "Digte" },
              { value: "Teknologi", label: "Teknologi" },
              { value: "Livsstil", label: "Livsstil" },
              { value: "Rejser", label: "Rejser" },
            ],
          },
          {
            type: "string",
            name: "date",
            label: "Dato",
            required: true,
            ui: {
              description: "Format: DD-MM-ÅÅÅÅ",
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Indhold",
            isBody: true,
          },
        ],
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => {
              return `${(values?.title || "")
                .toLowerCase()
                .replace(/ /g, "-")
                .replace(/[^a-z0-9-]/g, "")}`;
            },
          },
        },
      },
    ],
  },
});

