import { Container, getContainer } from "@cloudflare/containers";
import { env } from "cloudflare:workers";

export class TMDBEmbedContainer extends Container {
  defaultPort = 8787;
  sleepAfter = "10m";
  enableInternet = true;

  envVars = {
    NODE_ENV: "production",
    API_PORT: "8787",
    BIND_HOST: "0.0.0.0",
    TMDB_API_KEY: env.TMDB_API_KEY || "",
  };
}

export default {
  async fetch(request, env) {
    const container = getContainer(env.TMDB_EMBED_CONTAINER, "main");
    return container.fetch(request);
  },
};
