import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import addClasses from "rehype-add-classes";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), tailwind(), react()],
  markdown: {
    // extendDefaultPlugins: true,
    // rehypePlugins: [
    //   addClasses,
    //   {
    //     h1: "text-4xl font-bold font-suse",
    //     h2: "text-2xl font-bold font-suse",
    //     h3: "text-xl font-bold font-suse",
    //     h4: "text-lg font-bold font-suse",
    //     h5: "font-bold font-suse",
    //     h6: "font-bold font-suse",
    //     img: "border border-slate-300 dark:border-zinc-700 rounded-xl mb-6",
    //     p: "mb-6",
    //     a: "underline underline-offset-2 hover:text-orange-500 decoration-orange-500 text-xl",
    //   },
    // ],
  },
});
