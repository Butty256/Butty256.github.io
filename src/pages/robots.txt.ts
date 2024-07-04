import type { APIRoute } from "astro";
import { SITE_URL } from "../../src/consts";

const robots = `
User-agent: *
Allow: /
Sitemap: ${new URL("sitemap-index.xml", SITE_URL).href}
`.trim();

export const GET: APIRoute = () =>
	new Response(robots, {
		headers: { "Content-Type": "text/plain" },
	});
