// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const [githubOwner, repositoryName] = (process.env.GITHUB_REPOSITORY ?? "").split("/");
const isUserSite = repositoryName?.toLowerCase() === `${githubOwner?.toLowerCase()}.github.io`;

// https://astro.build/config
export default defineConfig({
  site: githubOwner ? `https://${githubOwner}.github.io` : undefined,
  base: repositoryName && !isUserSite ? `/${repositoryName}` : "/",
  vite: {
    plugins: [tailwindcss()],
  },
});
