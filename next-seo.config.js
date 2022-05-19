/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "starter templates",
  titleTemplate: "%s | xtarter",
  defaultTitle: "xtarter",
  description: "Starter templates to quickly launch your projects",
  canonical: "https://xtarter.sznm.dev",
  openGraph: {
    url: "https://xtarter.sznm.dev",
    title: "xtarter",
    description: "starter templates",
    images: [
      {
        url: "https://og-image.sznm.dev/**xtarter**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "xtarter.sznm.dev og-image",
      },
    ],
    site_name: "xtarter",
  },
  twitter: {
    handle: "@sozonome",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
