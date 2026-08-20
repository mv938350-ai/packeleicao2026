import { createFileRoute } from "@tanstack/react-router";
import { createHash } from "crypto";

const PIXEL_ID = "899610359213516";
const API_VERSION = "v21.0";

const sha256 = (v: string) =>
  createHash("sha256").update(v.trim().toLowerCase()).digest("hex");

type UserData = {
  email?: string;
  phone?: string;
  first_name?: string;
  last_name?: string;
  external_id?: string;
  fbp?: string;
  fbc?: string;
};

type EventPayload = {
  event_name: string;
  event_id?: string;
  event_source_url?: string;
  action_source?: string;
  user_data?: UserData;
  custom_data?: Record<string, unknown>;
};

export const Route = createFileRoute("/api/public/meta-capi")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const token = process.env.META_CAPI_ACCESS_TOKEN;
        if (!token) {
          return new Response(
            JSON.stringify({ error: "Missing META_CAPI_ACCESS_TOKEN" }),
            { status: 500, headers: { "Content-Type": "application/json" } },
          );
        }

        let body: EventPayload;
        try {
          body = (await request.json()) as EventPayload;
        } catch {
          return new Response(JSON.stringify({ error: "Invalid JSON" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        const ip =
          request.headers.get("cf-connecting-ip") ??
          request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
          undefined;
        const ua = request.headers.get("user-agent") ?? undefined;

        const u = body.user_data ?? {};
        const user_data: Record<string, unknown> = {
          ...(u.email && { em: [sha256(u.email)] }),
          ...(u.phone && { ph: [sha256(u.phone.replace(/\D/g, ""))] }),
          ...(u.first_name && { fn: [sha256(u.first_name)] }),
          ...(u.last_name && { ln: [sha256(u.last_name)] }),
          ...(u.external_id && { external_id: [sha256(u.external_id)] }),
          ...(u.fbp && { fbp: u.fbp }),
          ...(u.fbc && { fbc: u.fbc }),
          ...(ip && { client_ip_address: ip }),
          ...(ua && { client_user_agent: ua }),
        };

        const payload = {
          data: [
            {
              event_name: body.event_name,
              event_time: Math.floor(Date.now() / 1000),
              event_id: body.event_id,
              event_source_url: body.event_source_url,
              action_source: body.action_source ?? "website",
              user_data,
              custom_data: body.custom_data ?? {},
            },
          ],
        };

        const res = await fetch(
          `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${encodeURIComponent(token)}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          },
        );

        const data = await res.json().catch(() => ({}));
        return new Response(JSON.stringify(data), {
          status: res.status,
          headers: { "Content-Type": "application/json" },
        });
      },
    },
  },
});