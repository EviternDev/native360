"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { AlertCircle, CheckCircle, ChevronDown } from "lucide-react";
import Image from "next/image";

const COUNTRY_CODES = [
    { code: "+91",  iso: "IN", name: "India" },
    { code: "+1",   iso: "US", name: "USA" },
    { code: "+1",   iso: "CA", name: "Canada" },
    { code: "+44",  iso: "GB", name: "UK" },
    { code: "+353", iso: "IE", name: "Ireland" },
    { code: "+971", iso: "AE", name: "UAE" },
    { code: "+61",  iso: "AU", name: "Australia" },
    { code: "+65",  iso: "SG", name: "Singapore" },
    { code: "+966", iso: "SA", name: "Saudi Arabia" },
    { code: "+974", iso: "QA", name: "Qatar" },
    { code: "+973", iso: "BH", name: "Bahrain" },
    { code: "+965", iso: "KW", name: "Kuwait" },
    { code: "+60",  iso: "MY", name: "Malaysia" },
    { code: "+64",  iso: "NZ", name: "New Zealand" },
    { code: "+49",  iso: "DE", name: "Germany" },
    { code: "+31",  iso: "NL", name: "Netherlands" },
];

function getFlagUrl(iso: string) {
    return `https://flagcdn.com/w40/${iso.toLowerCase()}.png`;
}

const BookingForm = () => {
    const [selectedIdx, setSelectedIdx] = useState(0); // index into COUNTRY_CODES
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        pinCode: "",
    });

    const [status, setStatus] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");
    const [errorMessage, setErrorMessage] = useState("");

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const selectedCountry = COUNTRY_CODES[selectedIdx];
    const countryCode = selectedCountry.code;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
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

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            setErrorMessage("Please enter a valid email address");
            return false;
        }

        const digitsOnly = formData.phone.replace(/\D/g, "");
        if (digitsOnly.length < 6 || digitsOnly.length > 15) {
            setErrorMessage("Please enter a valid phone number");
            return false;
        }

        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage("");

        if (!validateForm()) {
            setStatus("error");
            return;
        }

        setStatus("loading");

        // Prepare WhatsApp message with form data
        setTimeout(() => {
            const message = `Hello Native360,\n\nI'm interested in your premium management and Concierge services. Here are my details:\n\nName: ${formData.fullName}\nPhone: ${countryCode} ${formData.phone}\nEmail: ${formData.email}\nAddress: ${formData.address}\nPin Code: ${formData.pinCode}\n\nPlease contact me soon.`;

            // Encode the message for URL
            const encodedMessage = encodeURIComponent(message);

            // Redirect to WhatsApp
            const whatsappUrl = `https://wa.me/918848748851?text=${encodedMessage}`;
            window.location.href = whatsappUrl;

            // Reset form
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                address: "",
                pinCode: "",
            });
            setSelectedIdx(0);

            // Reset status after redirect
            setTimeout(() => setStatus("idle"), 5000);
        }, 1500);
    };

    return (
        <section id="booking" className="py-16 md:py-24 bg-background">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Get Started Today
                    </h2>
                    <p className="text-foreground/70 text-lg">
                        Share your details and we&apos;ll connect with you soon to
                        discuss your needs
                    </p>
                </div>

                <Card className="p-4 sm:p-8 md:p-10 bg-card border-border">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
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

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
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

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                                Phone Number *
                            </label>
                            <div className="flex gap-2">
                                {/* Custom country code dropdown */}
                                <div className="relative w-36 shrink-0" ref={dropdownRef}>
                                    <button
                                        type="button"
                                        onClick={() => setDropdownOpen((v) => !v)}
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
                                        <ChevronDown className={`w-3.5 h-3.5 text-foreground/50 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                                    </button>

                                    {dropdownOpen && (
                                        <div className="absolute top-full left-0 z-50 mt-1 w-52 max-h-60 overflow-y-auto rounded-md border border-input bg-card shadow-lg animate-in fade-in slide-in-from-top-1 duration-150">
                                            {COUNTRY_CODES.map((c, idx) => (
                                                <button
                                                    key={idx}
                                                    type="button"
                                                    onClick={() => {
                                                        setSelectedIdx(idx);
                                                        setDropdownOpen(false);
                                                    }}
                                                    className={`flex w-full items-center gap-3 px-3 py-2 text-sm transition-colors hover:bg-primary/10 ${
                                                        idx === selectedIdx
                                                            ? "bg-primary/10 font-medium"
                                                            : ""
                                                    }`}
                                                >
                                                    <Image
                                                        src={getFlagUrl(c.iso)}
                                                        alt={c.name}
                                                        width={20}
                                                        height={15}
                                                        className="rounded-sm object-cover"
                                                        unoptimized
                                                    />
                                                    <span className="text-foreground/70">{c.iso}</span>
                                                    <span>{c.code}</span>
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

                        {/* Address */}
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
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

                        {/* Pin Code */}
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
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

                        {/* Error Message */}
                        {status === "error" && errorMessage && (
                            <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                                <p className="text-red-600 text-sm">
                                    {errorMessage}
                                </p>
                            </div>
                        )}

                        {/* Success Message */}
                        {status === "success" && (
                            <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <p className="text-green-600 text-sm">
                                    Redirecting to WhatsApp. Please wait...
                                </p>
                            </div>
                        )}

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-semibold"
                            disabled={status === "loading"}
                        >
                            {status === "loading"
                                ? "Submitting..."
                                : "Submit Inquiry"}
                        </Button>

                        <p className="text-center text-sm text-foreground/60">
                            For immediate assistance, please call{" "}
                            <a
                                href="tel:+918848748851"
                                className="text-primary font-semibold hover:underline"
                            >
                                +91-8848748851
                            </a>{" "}
                            or email{" "}
                            <a
                                href="mailto:hello@native360.com"
                                className="text-primary font-semibold hover:underline"
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
