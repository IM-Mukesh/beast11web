"use client";
import { useState } from "react";
import { Trophy, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/navigation";
import type { NextPage } from "next";
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
        <title>Beast11 - Build Your Dream Cricket Team using beast11</title>
        <meta
          name="description"
          content="Create your fantasy cricket team, compete with friends, and win prizes based on real cricket matches."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-blue-500/20">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                <Trophy size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Beast11
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  href={item.href}
                  key={item.name}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <button
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:opacity-90 transition-opacity text-white"
                onClick={() => router.push("/signup")}
              >
                Sign Up
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white p-2"
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
                className="md:hidden bg-gray-900 mt-2 rounded-lg overflow-hidden"
              >
                <div className="flex flex-col space-y-4 p-4">
                  {navItems.map((item) => (
                    <Link
                      href={item.href}
                      key={item.name}
                      className="text-gray-300 hover:text-white transition-colors py-1"
                      onClick={handleNavClick}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <button
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md hover:opacity-90 transition-opacity text-white"
                    onClick={() => {
                      handleNavClick();
                      router.push("/signup");
                    }}
                  >
                    Sign Up
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Content placeholder - your page content would go here */}
      <main className="pt-24 container mx-auto px-4 md:px-6">
        {/* Page content will be added here */}
      </main>
    </>
  );
};

export default Header;
