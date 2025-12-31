"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "#services", label: "Services" },
        { href: "#pricing", label: "Pricing" },
        { href: "#how-it-works", label: "How It Works" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-white/60 backdrop-blur-md shadow-sm"
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto lg:px-8">
                <div className="flex items-center px-2 justify-between h-20">
                    <a
                        href="#"
                        className="text-3xl md:text-4xl font-bold text-foreground hover:opacity-80 transition-opacity"
                    >
                        Reelz<span className="text-amber-300 highlight">O</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <Button className="bg-amber-300 text-foreground/80 hover:bg-amber-400 font-semibold cursor-pointer">
                            Book a Shoot
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-foreground"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden animate-fade-in bg-white/60 backdrop-blur-md shadow-sm h-full py-4">
                        <div className="flex flex-col items-end gap-4 px-4 max-h-full">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <Button className="bg-amber-300 text-foreground/80 hover:bg-amber-400 font-semibold">
                                Book a Shoot
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
