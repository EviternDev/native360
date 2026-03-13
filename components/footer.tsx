import Link from "next/link";
import { Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-6 pb-5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-5">
                    {/* Contact Info — full width on mobile */}
                    <div className="col-span-2 md:col-span-1">
                        <h3 className="text-sm font-semibold uppercase tracking-wider opacity-60 mb-2">
                            Contact Us
                        </h3>
                        <a
                            href="tel:+918848748851"
                            className="flex items-center gap-2 py-1 text-sm hover:opacity-80 active:opacity-60 transition-opacity"
                        >
                            <Phone className="w-4 h-4 shrink-0" />
                            <span>+91-8848748851</span>
                        </a>
                        <a
                            href="mailto:hello@native360.com"
                            className="flex items-center gap-2 py-1 text-sm hover:opacity-80 active:opacity-60 transition-opacity"
                        >
                            <Mail className="w-4 h-4 shrink-0" />
                            <span>hello@native360.com</span>
                        </a>
                        <div className="flex items-center gap-2 py-1 text-sm opacity-70">
                            <Clock className="w-4 h-4 shrink-0" />
                            <span>24/7 Support</span>
                        </div>
                    </div>

                    {/* Service Areas */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider opacity-60 mb-2">
                            Service Areas
                        </h3>
                        <ul className="text-sm space-y-0">
                            {[
                                "Kottayam",
                                "Ernakulam",
                                "Pathanamthitta",
                            ].map((area) => (
                                <li key={area}>
                                    <a
                                        href="#districts"
                                        className="block py-1 hover:opacity-80 active:opacity-60 transition-opacity"
                                    >
                                        {area}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider opacity-60 mb-2">
                            Quick Links
                        </h3>
                        <ul className="text-sm space-y-0">
                            {[
                                ["#home", "Home"],
                                ["#about", "About"],
                                ["#services", "Services"],
                                ["#booking", "Book Now"],
                                ["/terms", "Terms & Conditions"],
                            ].map(([href, label]) => (
                                <li key={href}>
                                    <a
                                        href={href}
                                        className="block py-1 hover:opacity-80 active:opacity-60 transition-opacity"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-amber-500 via-amber-400 to-teal-500 mb-4" />
                <div className="flex flex-col items-center gap-1 text-center md:flex-row md:text-left md:justify-between">
                    <div>
                        <p className="text-sm font-bold">Native360</p>
                        <p className="text-xs opacity-50">Native 360 is a unit of Verita Solutions</p>
                    </div>
                    <div className="flex flex-col items-center md:items-end gap-1">
                        <p className="text-xs opacity-60">
                            &copy; 2025 Native360 &mdash; Global Needs, Local Expertise.
                        </p>
                        <Link href="/terms" className="text-xs opacity-50 hover:opacity-80 transition-opacity underline underline-offset-2">
                            Terms &amp; Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
