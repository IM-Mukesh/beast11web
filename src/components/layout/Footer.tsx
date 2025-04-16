// components/Footer.tsx
"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { gsap } from "gsap";
import Image from "next/image";
const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const socialIconsRef = useRef<HTMLDivElement>(null);
  const year = new Date().getFullYear();

  useEffect(() => {
    // Animation for footer content
    if (footerRef.current) {
      const footerLinks = footerRef.current.querySelectorAll(".footer-animate");

      gsap.from(footerLinks, {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none none",
        },
      });
    }

    // Animation for social icons
    if (socialIconsRef.current) {
      const icons = socialIconsRef.current.querySelectorAll("a");

      gsap.from(icons, {
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "back.out(1.7)",
        delay: 0.3,
      });
    }
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-b from-gray-900 to-black text-white border-t border-gray-800 pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden relative"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-600 blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-purple-600 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Footer content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand section */}
          <div className="footer-animate">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full  flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Beast11
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              The ultimate fantasy cricket platform powered by cutting-edge AI
              and real-time analytics.
            </p>
            <div ref={socialIconsRef} className="flex space-x-4">
              {[
                { icon: <Facebook size={16} />, href: "#" },
                { icon: <Twitter size={16} />, href: "#" },
                { icon: <Linkedin size={16} />, href: "#" },
                { icon: <Instagram size={16} />, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                  aria-label={`Social media link ${index + 1}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links section */}
          <div className="footer-animate">
            <h4 className="font-bold text-lg mb-6 relative">
              <span className="relative z-10">Links</span>
              <span className="absolute bottom-0 left-0 w-10 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {[
                "Home",
                "Features",
                "How It Works",
                // "Testimonials",
                // "Pricing",
              ].map((item, index) => (
                <li
                  key={index}
                  className="transform hover:translate-x-2 transition-transform duration-300"
                >
                  <Link
                    href={
                      item === "Home"
                        ? "/"
                        : `#${item.toLowerCase().replace(/\s+/g, "-")}`
                    }
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources section */}
          <div className="footer-animate">
            <h4 className="font-bold text-lg mb-6 relative">
              <span className="relative z-10">Resources</span>
              <span className="absolute bottom-0 left-0 w-10 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {[
                "Blog",
                "Help Center",
                "Community",
                "API Documentation",
                "Cricket News",
              ].map((item, index) => (
                <li
                  key={index}
                  className="transform hover:translate-x-2 transition-transform duration-300"
                >
                  <Link
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe section */}
          <div className="footer-animate">
            <h4 className="font-bold text-lg mb-6 relative">
              <span className="relative z-10">Subscribe</span>
              <span className="absolute bottom-0 left-0 w-10 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated with the latest features, tournaments, and cricket
              news.
            </p>
            <form className="group">
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 border border-gray-700 rounded-t-md sm:rounded-l-md sm:rounded-r-none px-4 py-3 text-sm flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-b-md sm:rounded-r-md sm:rounded-l-none px-6 py-3 text-sm font-medium transform transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:translate-y-px"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0 footer-animate">
              © {year} Beast11. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 footer-animate">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item, index) => (
                  <Link
                    key={index}
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
