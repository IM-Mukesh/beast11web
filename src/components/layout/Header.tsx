"use client";

import { useState } from "react";
import { Trophy, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { NextPage } from "next";
import { Button } from "../ui/Button";
import Head from "next/head";
import Image from "next/image";

// SEO metadata
const SEO = {
  title: "Beast11 - Build Your Dream Cricket Team",
  description:
    "Create your fantasy cricket team, compete with friends, and win prizes based on real cricket matches.",
  keywords: "fantasy cricket, cricket team builder, online cricket game",
  ogImage: "/images/beast11-og.jpg",
  canonical: "https://beast11.com",
};

// Navigation item type definition
interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Features", href: "#features" },
  { name: "Blog", href: "/blog" },
  { name: "How It Works", href: "#how-it-works" },
];

const Header: NextPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close mobile menu when navigating
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <Head>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <meta name="keywords" content={SEO.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={SEO.canonical} />

        {/* Open Graph */}
        <meta property="og:title" content={SEO.title} />
        <meta property="og:description" content={SEO.description} />
        <meta property="og:image" content={SEO.ogImage} />
        <meta property="og:url" content={SEO.canonical} />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO.title} />
        <meta name="twitter:description" content={SEO.description} />
        <meta name="twitter:image" content={SEO.ogImage} />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background-900/20 border-b border-primary-600/20">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Trophy size={20} className="text-foreground" />
              </div>

              <span className="text-xl font-bold bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
                Beast11
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  href={item.href}
                  key={item.name}
                  className="text-foreground-300 hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Button
                onClick={() => router.push("/signup")}
                className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:opacity-90"
              >
                Sign Up
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-foreground p-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                id="mobile-menu"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden bg-background-800 mt-2 rounded-lg overflow-hidden"
              >
                <div className="flex flex-col space-y-4 p-4">
                  {navItems.map((item) => (
                    <Link
                      href={item.href}
                      key={item.name}
                      className="text-foreground-300 hover:text-foreground transition-colors py-1"
                      onClick={handleNavClick}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button
                    variant="primary"
                    className="bg-gradient-to-r from-primary-600 to-secondary-600"
                    onClick={() => {
                      handleNavClick();
                      router.push("/signup");
                    }}
                  >
                    Sign Up
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Main content area with proper spacing from header */}
      <main className="pt-24 container mx-auto px-4 md:px-6">
        {/* Page content will be added here */}
      </main>
    </>
  );
};

export default Header;
