interface Env {
  AXIOM_TOKEN: string;
  AXIOM_DATASET: string;
  AXIOM_API_URL?: string;
}

type GeoMetadata = {
  country: string | null;
  region: string | null;
  city: string | null;
};

type PageViewEvent = {
  _time: string;
  event: "page_view";
  path: string;
  status: number;
  duration_ms: number;
  geo: GeoMetadata;
};

export default {
  async fetch(request, env, context): Promise<Response> {
    const startedAt = Date.now();
    const response = await fetch(request);
    const contentType = response.headers.get("content-type") ?? "";

    if (request.method === "GET" && contentType.includes("text/html")) {
      const url = new URL(request.url);
      const cf = request.cf;

      // This event deliberately contains no IP address, user agent, referrer,
      // cookie, fingerprint, or stable/pseudonymous visitor identifier.
      const event: PageViewEvent = {
        _time: new Date().toISOString(),
        event: "page_view",
        path: url.pathname,
        status: response.status,
        duration_ms: Date.now() - startedAt,
        geo: {
          country: cf?.country ?? null,
          region: cf?.regionCode ?? null,
          city: cf?.city ?? null,
        },
      };

      context.waitUntil(sendToAxiom(event, env));
    }

    return response;
  },
} satisfies ExportedHandler<Env>;

async function sendToAxiom(event: PageViewEvent, env: Env): Promise<void> {
  const apiUrl = (env.AXIOM_API_URL ?? "https://api.axiom.co").replace(/\/$/, "");
  const endpoint = `${apiUrl}/v1/datasets/${encodeURIComponent(env.AXIOM_DATASET)}/ingest`;

  try {
    await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.AXIOM_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify([event]),
    });
  } catch {
    // Analytics must never affect delivery of the site. Observability and
    // invocation logs are disabled, so failures are intentionally discarded.
  }
}
