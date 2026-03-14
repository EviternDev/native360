import { NextResponse } from "next/server";

import {
  partialLeadPayloadSchema,
  toWebhookPayload,
} from "@/lib/partial-leads";

export async function POST(request: Request) {
  const webhookUrl = process.env.PARTIAL_LEADS_WEBHOOK_URL;
  const webhookSecret = process.env.PARTIAL_LEADS_WEBHOOK_SECRET;

  if (!webhookUrl || !webhookSecret) {
    console.error("Partial lead webhook env vars are not configured.");

    return NextResponse.json(
      { error: "Lead capture is not configured." },
      { status: 503 },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  const parsedPayload = partialLeadPayloadSchema.safeParse(body);

  if (!parsedPayload.success) {
    return NextResponse.json(
      {
        error: "Invalid lead payload.",
        issues: parsedPayload.error.flatten(),
      },
      { status: 400 },
    );
  }

  const webhookPayload = toWebhookPayload(
    parsedPayload.data,
    request.headers.get("user-agent"),
    webhookSecret,
  );

  try {
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
      body: JSON.stringify(webhookPayload),
      cache: "no-store",
    });

    if (!webhookResponse.ok) {
      const responseText = await webhookResponse.text();
      console.error("Partial lead webhook failed:", webhookResponse.status, responseText);

      return NextResponse.json(
        { error: "Lead forwarding failed." },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Partial lead webhook request failed:", error);

    return NextResponse.json(
      { error: "Lead forwarding failed." },
      { status: 502 },
    );
  }

  return new NextResponse(null, {
    status: 202,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
