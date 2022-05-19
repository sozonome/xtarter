const EXCLUDED: Array<string> = [
  "boilerplate",
  "boilerplate-template",
  "nextjs-boilerplate",
  "nextjs-template",
  "nextjs-starter",
  "remix-boilerplate",
  "remix-template",
  "starter-template",
  "pwa",
  "react",
  "typescript",
  "react-typescript",
  "sveltekit-template",
  "sveltekit-tailwind-template",
  "sveltekit-tailwindcss",
  "svelte",
  "remix-run",
  "template",
  "react-typescript-boilerplate",
];

export const filterTopics = (topics: Array<string>) => {
  return topics.filter((topic) => !EXCLUDED.includes(topic));
};
