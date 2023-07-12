import React from "react";
import { useRouter } from "next/router";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/Afcam",
  },
  docsRepositoryBase: "https://github.com/Afcam/wiki.afcampos.dev",
  faviconGlyph: "📚",
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s - A's wiki",
      };
    }
  },

  logo: <span>A's wiki</span>,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="What is this? - A's wiki" />
      <meta property="og:description" content="The next site builder" />
    </>
  ),
  editLink: {
    text: "Edit this page on GitHub →",
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start justify-end">
        <p className="mt-6 text-ms">© {new Date().getFullYear()} Afcam.</p>
      </div>
    ),
  },
};

export default config;
