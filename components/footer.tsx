import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { WHATSAPP_BOOK_NOW_URL } from "@/lib/constants";

const quickLinks = [
    { href: "/about", label: "About" },
    { href: "/pricing", label: "Pricing" },
    { href: "/#services", label: "Services" },
    { href: WHATSAPP_BOOK_NOW_URL, label: "Book Now", target: "_blank", rel: "noopener noreferrer" },
];

const Footer = () => {
    return (
        <footer className="relative bg-[#0B1D2E] text-white overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0EA5C4]/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1F4D7D]/8 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl pointer-events-none" />

            {/* Main footer content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-12">
                    {/* Brand column */}
                    <div className="md:col-span-5">
                        <div className="flex items-center">
                            <img
                                src="/native360-logo.png"
                                alt="Native360"
                                className="h-16 w-auto brightness-0 invert opacity-90"
                            />
                        </div>
                        <p className="text-sm text-white/50 leading-relaxed max-w-sm mb-6">
                            Your trusted partner for property management and
                            family care across Kerala. Global needs, local expertise.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-white/30">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>Kottayam &middot; Ernakulam &middot; Pathanamthitta</span>
                        </div>
                    </div>

                    {/* Quick Links + Contact row */}
                    <div className="grid grid-cols-2 md:contents gap-8">
                        {/* Quick Links column */}
                        <div className="md:col-span-3 md:col-start-6 flex flex-col items-start">
                            <div className="flex flex-col">
                                <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0EA5C4]/70 mb-4 w-full text-left">
                                    Quick Links
                                </h3>
                                <ul className="grid grid-cols-[auto_auto] gap-x-8 gap-y-1">
                                    {quickLinks.map(({ href, label, target, rel }) => (
                                        <li key={href}>
                                            <Link
                                                href={href}
                                                target={target}
                                                rel={rel}
                                                className="group flex items-center gap-1.5 py-1.5 text-sm text-white/60 hover:text-white transition-colors duration-200"
                                            >
                                                <span>{label}</span>
                                                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Contact column */}
                        <div className="md:col-span-4 md:col-start-10">
                            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0EA5C4]/70 mb-4">
                                Get in Touch
                            </h3>
                            <div className="space-y-3">
                                <a
                                    href="tel:+918848748851"
                                    className="group flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-200"
                                >
                                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 group-hover:bg-[#0EA5C4]/15 transition-colors duration-200">
                                        <Phone className="w-3.5 h-3.5" />
                                    </span>
                                    <span>+91-8848748851</span>
                                </a>
                                <a
                                    href="mailto:hello@native360.com"
                                    className="group flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-200"
                                >
                                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 group-hover:bg-[#0EA5C4]/15 transition-colors duration-200">
                                        <Mail className="w-3.5 h-3.5" />
                                    </span>
                                    <span>hello@native360.com</span>
                                </a>
                            </div>

                            {/* 24/7 badge */}
                            <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0EA5C4]/10 border border-[#0EA5C4]/15">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                                </span>
                                <span className="text-xs text-[#0EA5C4]/90 font-medium">24/7 Support Available</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/[0.06] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
                    <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3">
                        <p className="text-xs text-white/30">
                            &copy; {new Date().getFullYear()} Native360 &mdash; Global Needs, Local Expertise.
                        </p>
                        <span className="hidden md:inline text-white/15">&middot;</span>
                        <p className="text-xs text-white/20">
                            A unit of Verita Solutions
                        </p>
                    </div>
                    <Link
                        href="/terms"
                        className="text-xs text-white/30 hover:text-white/60 transition-colors duration-200 underline underline-offset-2 decoration-white/10 hover:decoration-white/30"
                    >
                        Terms &amp; Conditions
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
