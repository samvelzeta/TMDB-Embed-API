import { Container } from "@cloudflare/containers";

export class TMDBEmbedContainer extends Container {
  defaultPort = 8787;
  sleepAfter = "10m";
  enableInternet = true;

  constructor(ctx, env) {
    super(ctx, env);
    this.envVars = {
      NODE_ENV: "production",
      API_PORT: "8787",
      BIND_HOST: "0.0.0.0",
      TMDB_API_KEY: env.TMDB_API_KEY || "",
    };
  }
}

export default {
  async fetch(request, _env, ctx) {
    const container = ctx.exports.TMDBEmbedContainer.getByName("main");
    return container.fetch(request);
  },
};
