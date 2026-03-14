"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AlertCircle, CheckCircle, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  pinCode: string;
};

type LeadEventType = "draft" | "abandoned" | "completed";

type LeadSession = {
  leadId: string | null;
  startedAt: string | null;
};

type LeadPayload = {
  leadId: string;
  eventType: LeadEventType;
  startedAt: string;
  lastActivityAt: string;
  pageUrl: string;
  referrer?: string;
  countryCode: string;
  formData: Partial<FormData>;
  filledFields: Array<keyof FormData>;
  honeypot?: string;
};

const COUNTRY_CODES = [
  { code: "+91", iso: "IN", name: "India" },
  { code: "+1", iso: "US", name: "USA" },
  { code: "+1", iso: "CA", name: "Canada" },
  { code: "+44", iso: "GB", name: "UK" },
  { code: "+353", iso: "IE", name: "Ireland" },
  { code: "+971", iso: "AE", name: "UAE" },
  { code: "+61", iso: "AU", name: "Australia" },
  { code: "+65", iso: "SG", name: "Singapore" },
  { code: "+966", iso: "SA", name: "Saudi Arabia" },
  { code: "+974", iso: "QA", name: "Qatar" },
  { code: "+973", iso: "BH", name: "Bahrain" },
  { code: "+965", iso: "KW", name: "Kuwait" },
  { code: "+60", iso: "MY", name: "Malaysia" },
  { code: "+64", iso: "NZ", name: "New Zealand" },
  { code: "+49", iso: "DE", name: "Germany" },
  { code: "+31", iso: "NL", name: "Netherlands" },
] as const;

const EMPTY_FORM_DATA: FormData = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  pinCode: "",
};

const LEAD_STORAGE_KEYS = {
  leadId: "native360_partial_lead_id",
  startedAt: "native360_partial_lead_started_at",
} as const;

function getFlagUrl(iso: string) {
  return `https://flagcdn.com/w40/${iso.toLowerCase()}.png`;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function getPhoneDigits(phone: string) {
  return phone.replace(/\D/g, "");
}

function hasEligibleContactInfo(formData: FormData) {
  const phoneDigits = getPhoneDigits(formData.phone);
  return (
    isValidEmail(formData.email) ||
    (phoneDigits.length >= 6 && phoneDigits.length <= 15)
  );
}

function isFormComplete(formData: FormData) {
  return (
    !!formData.fullName.trim() &&
    isValidEmail(formData.email) &&
    hasEligibleContactInfo(formData) &&
    !!formData.address.trim() &&
    !!formData.pinCode.trim()
  );
}

function getFilledFields(formData: FormData) {
  return (Object.entries(formData) as Array<[keyof FormData, string]>)
    .filter(([, value]) => value.trim().length > 0)
    .map(([key]) => key);
}

function createLeadId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  return `lead_${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;
}

const BookingForm = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM_DATA);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);
  const draftTimeoutRef = useRef<number | null>(null);
  const formDataRef = useRef<FormData>(EMPTY_FORM_DATA);
  const selectedIdxRef = useRef(0);
  const honeypotRef = useRef("");
  const leadSessionRef = useRef<LeadSession>({ leadId: null, startedAt: null });
  const lastFingerprintRef = useRef<Record<LeadEventType, string | null>>({
    draft: null,
    abandoned: null,
    completed: null,
  });
  const completedRef = useRef(false);

  useEffect(() => {
    formDataRef.current = formData;
  }, [formData]);

  useEffect(() => {
    selectedIdxRef.current = selectedIdx;
  }, [selectedIdx]);

  useEffect(() => {
    honeypotRef.current = honeypot;
  }, [honeypot]);

  useEffect(() => {
    try {
      const leadId = sessionStorage.getItem(LEAD_STORAGE_KEYS.leadId);
      const startedAt = sessionStorage.getItem(LEAD_STORAGE_KEYS.startedAt);

      if (leadId && startedAt) {
        leadSessionRef.current = { leadId, startedAt };
      }
    } catch {
      // Ignore session storage access issues and continue with in-memory tracking.
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        void sendLeadEvent("abandoned", { useBeacon: true, keepalive: true });
      }
    };

    const handlePageHide = () => {
      void sendLeadEvent("abandoned", { useBeacon: true, keepalive: true });
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", handlePageHide);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", handlePageHide);
    };
  }, []);

  useEffect(() => {
    if (draftTimeoutRef.current) {
      window.clearTimeout(draftTimeoutRef.current);
      draftTimeoutRef.current = null;
    }

    if (!hasEligibleContactInfo(formData) || completedRef.current) {
      return;
    }

    draftTimeoutRef.current = window.setTimeout(() => {
      void sendLeadEvent("draft");
    }, 10000);

    return () => {
      if (draftTimeoutRef.current) {
        window.clearTimeout(draftTimeoutRef.current);
        draftTimeoutRef.current = null;
      }
    };
  }, [formData, selectedIdx]);

  function ensureLeadSession() {
    if (leadSessionRef.current.leadId && leadSessionRef.current.startedAt) {
      return leadSessionRef.current as { leadId: string; startedAt: string };
    }

    const nextSession = {
      leadId: createLeadId(),
      startedAt: new Date().toISOString(),
    };

    leadSessionRef.current = nextSession;

    try {
      sessionStorage.setItem(LEAD_STORAGE_KEYS.leadId, nextSession.leadId);
      sessionStorage.setItem(LEAD_STORAGE_KEYS.startedAt, nextSession.startedAt);
    } catch {
      // Ignore session storage access issues and continue with in-memory tracking.
    }

    return nextSession;
  }

  function clearLeadSession() {
    leadSessionRef.current = { leadId: null, startedAt: null };
    lastFingerprintRef.current = {
      draft: null,
      abandoned: null,
      completed: null,
    };

    try {
      sessionStorage.removeItem(LEAD_STORAGE_KEYS.leadId);
      sessionStorage.removeItem(LEAD_STORAGE_KEYS.startedAt);
    } catch {
      // Ignore session storage access issues and continue with in-memory tracking.
    }
  }

  function buildLeadPayload(eventType: LeadEventType): LeadPayload | null {
    const currentFormData = formDataRef.current;

    if (!hasEligibleContactInfo(currentFormData)) {
      return null;
    }

    if (
      eventType === "abandoned" &&
      (completedRef.current || isFormComplete(currentFormData))
    ) {
      return null;
    }

    const filledFields = getFilledFields(currentFormData);
    if (filledFields.length === 0) {
      return null;
    }

    const { leadId, startedAt } = ensureLeadSession();

    return {
      leadId,
      eventType,
      startedAt,
      lastActivityAt: new Date().toISOString(),
      pageUrl: window.location.href,
      referrer: document.referrer || undefined,
      countryCode: COUNTRY_CODES[selectedIdxRef.current].code,
      formData: {
        fullName: currentFormData.fullName.trim() || undefined,
        email: currentFormData.email.trim() || undefined,
        phone: currentFormData.phone.trim() || undefined,
        address: currentFormData.address.trim() || undefined,
        pinCode: currentFormData.pinCode.trim() || undefined,
      },
      filledFields,
      honeypot: honeypotRef.current.trim() || undefined,
    };
  }

  async function sendLeadEvent(
    eventType: LeadEventType,
    options?: { keepalive?: boolean; useBeacon?: boolean },
  ) {
    const payload = buildLeadPayload(eventType);

    if (!payload) {
      return false;
    }

    const fingerprint = JSON.stringify({
      eventType,
      countryCode: payload.countryCode,
      formData: payload.formData,
      filledFields: payload.filledFields,
      honeypot: payload.honeypot ?? "",
    });

    if (lastFingerprintRef.current[eventType] === fingerprint) {
      return true;
    }

    const body = JSON.stringify(payload);

    if (options?.useBeacon && typeof navigator !== "undefined" && "sendBeacon" in navigator) {
      const blob = new Blob([body], { type: "application/json" });
      const sent = navigator.sendBeacon("/api/leads/partial", blob);

      if (sent) {
        lastFingerprintRef.current[eventType] = fingerprint;
        return true;
      }
    }

    try {
      const response = await fetch("/api/leads/partial", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
        keepalive: options?.keepalive,
      });

      if (!response.ok) {
        return false;
      }

      lastFingerprintRef.current[eventType] = fingerprint;
      return true;
    } catch {
      return false;
    }
  }

  const selectedCountry = COUNTRY_CODES[selectedIdx];
  const countryCode = selectedCountry.code;

  const handleFirstInteraction = () => {
    ensureLeadSession();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFirstInteraction();

    const { name, value } = event.target;
    const fieldName = name as keyof FormData;

    if (status === "error") {
      setStatus("idle");
    }

    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const validateForm = () => {
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.pinCode
    ) {
      setErrorMessage("Please fill in all required fields");
      return false;
    }

    if (!isValidEmail(formData.email)) {
      setErrorMessage("Please enter a valid email address");
      return false;
    }

    const digitsOnly = getPhoneDigits(formData.phone);
    if (digitsOnly.length < 6 || digitsOnly.length > 15) {
      setErrorMessage("Please enter a valid phone number");
      return false;
    }

    return true;
  };

  const resetForm = () => {
    setFormData(EMPTY_FORM_DATA);
    formDataRef.current = EMPTY_FORM_DATA;
    setSelectedIdx(0);
    selectedIdxRef.current = 0;
    setHoneypot("");
    honeypotRef.current = "";
    setDropdownOpen(false);
    setStatus("idle");
    completedRef.current = false;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    handleFirstInteraction();
    setErrorMessage("");

    if (!validateForm()) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    if (draftTimeoutRef.current) {
      window.clearTimeout(draftTimeoutRef.current);
      draftTimeoutRef.current = null;
    }

    await new Promise((resolve) => window.setTimeout(resolve, 600));

    const message = `Hello Native360,\n\nI'm interested in your premium management and Concierge services. Here are my details:\n\nName: ${formData.fullName}\nPhone: ${countryCode} ${formData.phone}\nEmail: ${formData.email}\nAddress: ${formData.address}\nPin Code: ${formData.pinCode}\n\nPlease contact me soon.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918848748851?text=${encodedMessage}`;

    completedRef.current = true;
    await sendLeadEvent("completed", { keepalive: true });
    clearLeadSession();

    setStatus("success");

    window.setTimeout(() => {
      resetForm();
      window.location.href = whatsappUrl;
    }, 500);
  };

  return (
    <section id="booking" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Get Started Today
          </h2>
          <p className="text-lg text-foreground/70">
            Share your details and we&apos;ll connect with you soon to discuss
            your needs
          </p>
        </div>

        <Card className="border-border bg-card p-4 sm:p-8 md:p-10">
          <form
            onSubmit={handleSubmit}
            onFocusCapture={handleFirstInteraction}
            className="space-y-6"
          >
            <input
              type="text"
              name="companyName"
              value={honeypot}
              onChange={(event) => setHoneypot(event.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden opacity-0"
            />

            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                Full Name *
              </label>
              <Input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full"
                disabled={status === "loading"}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                Email Address *
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full"
                disabled={status === "loading"}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                Phone Number *
              </label>
              <div className="flex gap-2">
                <div className="relative w-36 shrink-0" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => {
                      handleFirstInteraction();
                      setDropdownOpen((open) => !open);
                    }}
                    disabled={status === "loading"}
                    className="flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    aria-label="Country code"
                    aria-expanded={dropdownOpen}
                  >
                    <span className="flex items-center gap-2">
                      <Image
                        src={getFlagUrl(selectedCountry.iso)}
                        alt={selectedCountry.name}
                        width={20}
                        height={15}
                        className="rounded-sm object-cover"
                        unoptimized
                      />
                      <span>{selectedCountry.code}</span>
                    </span>
                    <ChevronDown
                      className={`h-3.5 w-3.5 text-foreground/50 transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute left-0 top-full z-50 mt-1 max-h-60 w-52 overflow-y-auto rounded-md border border-input bg-card shadow-lg animate-in fade-in slide-in-from-top-1 duration-150">
                      {COUNTRY_CODES.map((country, idx) => (
                        <button
                          key={`${country.iso}-${country.code}`}
                          type="button"
                          onClick={() => {
                            handleFirstInteraction();
                            setSelectedIdx(idx);
                            selectedIdxRef.current = idx;
                            setDropdownOpen(false);
                          }}
                          className={`flex w-full items-center gap-3 px-3 py-2 text-sm transition-colors hover:bg-primary/10 ${
                            idx === selectedIdx ? "bg-primary/10 font-medium" : ""
                          }`}
                        >
                          <Image
                            src={getFlagUrl(country.iso)}
                            alt={country.name}
                            width={20}
                            height={15}
                            className="rounded-sm object-cover"
                            unoptimized
                          />
                          <span className="text-foreground/70">{country.iso}</span>
                          <span>{country.code}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="flex-1"
                  disabled={status === "loading"}
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                Full Address *
              </label>
              <Input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Street address"
                className="w-full"
                disabled={status === "loading"}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                Pin Code *
              </label>
              <Input
                type="text"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
                placeholder="680001"
                className="w-full"
                disabled={status === "loading"}
              />
            </div>

            <p className="rounded-lg border border-border/70 bg-muted/30 px-4 py-3 text-sm leading-relaxed text-foreground/70">
              If you enter your contact details and leave before submitting,
              Native360 may retain the information entered for follow-up. Learn
              more in our{" "}
              <Link
                href="/privacy"
                className="font-semibold text-primary underline underline-offset-4"
              >
                Privacy Policy
              </Link>
              .
            </p>

            {status === "error" && errorMessage && (
              <div className="flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
                <AlertCircle className="h-5 w-5 shrink-0 text-red-600" />
                <p className="text-sm text-red-600">{errorMessage}</p>
              </div>
            )}

            {status === "success" && (
              <div className="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 p-4">
                <CheckCircle className="h-5 w-5 shrink-0 text-green-600" />
                <p className="text-sm text-green-600">
                  Redirecting to WhatsApp. Please wait...
                </p>
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-primary py-6 text-lg font-semibold text-primary-foreground hover:bg-primary/90"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Submitting..." : "Submit Inquiry"}
            </Button>

            <p className="text-center text-sm text-foreground/60">
              For immediate assistance, please call{" "}
              <a
                href="tel:+918848748851"
                className="font-semibold text-primary hover:underline"
              >
                +91-8848748851
              </a>{" "}
              or email{" "}
              <a
                href="mailto:hello@native360.com"
                className="font-semibold text-primary hover:underline"
              >
                hello@native360.com
              </a>
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default BookingForm;
