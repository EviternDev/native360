import { z } from "zod";

export const LEAD_FORM_FIELDS = [
  "fullName",
  "email",
  "phone",
  "address",
  "pinCode",
] as const;

const emptyStringToUndefined = (value: unknown) => {
  if (typeof value !== "string") {
    return value;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
};

const optionalTrimmedString = (maxLength: number, pattern?: RegExp) =>
  z.preprocess(
    emptyStringToUndefined,
    pattern
      ? z.string().max(maxLength).regex(pattern).optional()
      : z.string().max(maxLength).optional(),
  );

const emailSchema = z.string().email().max(254);
const phoneSchema = z.string().max(32).regex(/^[\d\s()+-]+$/);

export const partialLeadPayloadSchema = z
  .object({
    leadId: z.string().min(8).max(128),
    eventType: z.enum(["draft", "abandoned", "completed"]),
    startedAt: z.string().datetime(),
    lastActivityAt: z.string().datetime(),
    pageUrl: z.string().url().max(2048),
    referrer: z.preprocess(
      emptyStringToUndefined,
      z.string().url().max(2048).optional(),
    ),
    countryCode: optionalTrimmedString(8, /^\+\d{1,4}$/),
    filledFields: z.array(z.enum(LEAD_FORM_FIELDS)).max(LEAD_FORM_FIELDS.length),
    honeypot: optionalTrimmedString(200),
    formData: z.object({
      fullName: optionalTrimmedString(120),
      email: z.preprocess(emptyStringToUndefined, emailSchema.optional()),
      phone: z.preprocess(emptyStringToUndefined, phoneSchema.optional()),
      address: optionalTrimmedString(500),
      pinCode: optionalTrimmedString(20, /^[a-zA-Z0-9\s-]+$/),
    }),
  })
  .superRefine((payload, ctx) => {
    if (payload.honeypot) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Bot submission detected.",
        path: ["honeypot"],
      });
    }

    const emailValid = !!payload.formData.email;
    const phoneDigits = payload.formData.phone?.replace(/\D/g, "") ?? "";
    const phoneValid = phoneDigits.length >= 6 && phoneDigits.length <= 15;

    if (!emailValid && !phoneValid) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "A valid email or phone number is required.",
        path: ["formData"],
      });
    }

    if (new Set(payload.filledFields).size !== payload.filledFields.length) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "filledFields contains duplicate entries.",
        path: ["filledFields"],
      });
    }
  });

export type PartialLeadPayload = z.infer<typeof partialLeadPayloadSchema>;

export function toWebhookPayload(
  payload: PartialLeadPayload,
  userAgent: string | null,
  secret: string,
) {
  return {
    secret,
    lead_id: payload.leadId,
    status: payload.eventType,
    first_seen_at: payload.startedAt,
    last_seen_at: payload.lastActivityAt,
    completed_at:
      payload.eventType === "completed" ? payload.lastActivityAt : undefined,
    page_url: payload.pageUrl,
    referrer: payload.referrer,
    country_code: payload.countryCode,
    full_name: payload.formData.fullName,
    email: payload.formData.email,
    phone: payload.formData.phone,
    address: payload.formData.address,
    pin_code: payload.formData.pinCode,
    filled_fields: payload.filledFields,
    user_agent: userAgent ?? undefined,
  };
}
