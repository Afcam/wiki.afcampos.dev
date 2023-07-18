import React from 'react';
import { useRouter } from 'next/router';
import { DocsThemeConfig } from 'nextra-theme-docs';
// const config: DocsThemeConfig = {
//   logo: {
//     src: '/nextjs-logo.svg',
//     href: 'https://nextjs.org/',
//   },
//   search: {
//     placeholder: 'Search docs...',
//   },
//   footer: {
//     logo: {
//       alt: 'Vercel Logo',
//       src: '/vercel.svg',
//       href: 'https://vercel.com',
//     },
//     links: [
//       {
//         title: 'Docs',
//         items: [
//           {
//             label: 'Next.js Documentation',
//             href: 'https://nextjs.org/docs',
//           },
//           {
//             label: 'Learn Next.js',
//             href: 'https://nextjs.org/learn',
//           },
//           {
//             label: 'GitHub',
//             href: 'https://github.com/vercel/next.js',
//           },
//         ],
//       },
//       {
//         title: 'Community',
//         items: [
//           {
//             label: 'Discord',
//             href: 'https://discord.gg/nextjs',
//           },
//           {
//             label: 'Twitter',
//             href: 'https://twitter.com/nextjs',
//           },
//           {
//             label: 'GitHub Discussions',
//             href: 'https://github.com/vercel/next.js/discussions',
//           },
//         ],
//       },
//       {
//         title: 'More',
//         items: [
//           {
//             label: 'Vercel',
//             href: 'https://vercel.com',
//           },
//           {
//             label: 'Blog',
//             href: 'https://vercel.com/blog',
//           },
//         ],
//       },
//     ],
//   },
// };

// export default config;

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/Afcam/wiki.afcampos.dev',
  },
  chat: {
    link: 'https://afcampos.dev',
    icon: (
      <img
        src="https://avatars.githubusercontent.com/u/21973765?v=4"
        alt="afcampos.dev"
        width="24"
        height="24"
      />
    ),
  },
  docsRepositoryBase: 'https://github.com/Afcam/wiki.afcampos.dev',
  faviconGlyph: '📚',
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
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
      <meta property="og:description" content="A's filed guide" />
    </>
  ),
  editLink: {
    text: 'Edit this page on GitHub →',
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback',
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
