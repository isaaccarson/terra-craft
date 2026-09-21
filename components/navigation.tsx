"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link
            href="/"
            className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight"
          >
            Isaac Carson
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/guitar-shop"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Guitar Shop
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/photography"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Photography
            </Link>
            <Link
              href="/resume"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Resume
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-foreground transition-all ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-foreground transition-all ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-foreground transition-all ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-3 bg-background/95 backdrop-blur-md border-b border-border">
          <Link
            href="/guitar-shop"
            className="block text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Guitar Shop
          </Link>
          <Link
            href="/projects"
            className="block text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/photography"
            className="block text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Photography
          </Link>
          <Link
            href="/resume"
            className="block text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Resume
          </Link>
          <Link
            href="/contact"
            className="block text-base font-medium bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
