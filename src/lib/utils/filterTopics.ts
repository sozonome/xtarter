const EXCLUDED: Array<string> = [
  "boilerplate",
  "boilerplate-template",
  "nextjs-boilerplate",
  "nextjs-template",
  "nextjs-starter",
  "pwa",
  "react",
  "react-typescript",
  "react-typescript-boilerplate",
  "remix-boilerplate",
  "remix-run",
  "remix-template",
  "starter-template",
  "sveltekit-template",
  "sveltekit-tailwind-template",
  "sveltekit-tailwindcss",
  "svelte",
  "tailwind",
  "template",
  "typescript",
];

export const filterTopics = (topics: Array<string>) => {
  return topics.filter((topic) => !EXCLUDED.includes(topic));
};
