// File: app/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";

const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-950 to-black min-h-screen text-white">
      {/* Navigation */}

      {/* Hero Section */}
      <section className="pt-32 pb-24 md:pt-44 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/80"></div>
          <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-blue-800/30 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            style={{ opacity, scale }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6 px-4 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400"
            >
              The Future of Cricket Fantasy Gaming
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Dominate the Pitch with Data-Driven Fantasy Cricket
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Build your dream team, compete with friends, and rise to the top
              with our advanced AI-powered analytics and real-time match
              insights.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md hover:opacity-90 transition-all transform hover:-translate-y-1 font-medium flex items-center justify-center gap-2">
                Get Started <ChevronRight size={16} />
              </button>
              <button className="px-8 py-4 bg-white/10 rounded-md hover:bg-white/20 transition-all transform hover:-translate-y-1 font-medium flex items-center justify-center gap-2 backdrop-blur-sm">
                Watch Demo <ArrowRight size={16} />
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-16 md:mt-24 relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30"></div>
            <div className="relative bg-gray-900 rounded-2xl p-2 overflow-hidden border border-blue-500/20">
              <div className="aspect-[16/9] w-full relative bg-gray-800 rounded-xl overflow-hidden">
                <Image
                  src="/images/ground.png"
                  alt="Cricket Fantasy App Dashboard"
                  width={1376}
                  height={768}
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="hidden md:block">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 0.6, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-blue-600/20 blur-xl"
          />
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 0.6, x: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-purple-600/20 blur-xl"
          />
        </div>
      </section>

      {/* Features Section */}

      <section
        id="features"
        className="py-10 lg:py-32 bg-gradient-to-br from-gray-900 to-blue-950/50 overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 relative">
          {/* Section Header */}
          <div className="text-center max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto mb-8 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 lg:mb-6 relative z-10">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Game-Changing Features
              </span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg px-1 sm:px-4 relative z-10">
              Our platform combines cutting-edge technology with your passion
              for cricket to create an unmatched fantasy sports experience.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 relative z-10">
            {[
              {
                icon: "TrendingUp",
                iconColor: "text-blue-400",
                title: "AI-Powered Predictions",
                description:
                  "Our advanced algorithms analyze player performance data, pitch conditions, and historical matchups to give you the edge.",
              },
              {
                icon: "Users",
                iconColor: "text-purple-400",
                title: "Live Social Experience",
                description:
                  "Connect with friends, join leagues, and chat in real-time as matches unfold. The excitement never stops.",
              },
              {
                icon: "Trophy",
                iconColor: "text-blue-400",
                title: "Weekly Tournaments",
                description:
                  "Compete in exclusive tournaments with massive prize pools and climb the global leaderboards.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-5 sm:p-6 lg:p-8 rounded-xl lg:rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all group"
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-blue-900/30 flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                  {/* Replace dynamic icons with static SVGs for better mobile performance */}
                  {feature.icon === "TrendingUp" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={feature.iconColor}
                    >
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                      <polyline points="17 6 23 6 23 12"></polyline>
                    </svg>
                  )}
                  {feature.icon === "Users" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={feature.iconColor}
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  )}
                  {feature.icon === "Trophy" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={feature.iconColor}
                    >
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                      <path d="M4 22h16"></path>
                      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                    </svg>
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Analytics Section */}
          <div className="mt-10 lg:mt-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div className="order-2 lg:order-1">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Real-Time Match Analytics
                  </span>
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-4 lg:mb-6">
                  Watch your fantasy points accumulate in real-time as players
                  perform on the field. Our dynamic dashboard gives you instant
                  insights into your team&apos;s performance.
                </p>
                <ul className="space-y-3">
                  {[
                    "Live player statistics",
                    "Performance predictions",
                    "Comparative analysis",
                    "Strategic recommendations",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-2 lg:mr-3 flex-shrink-0">
                        <svg
                          width="6"
                          height="6"
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-1.5 h-1.5 lg:w-2 lg:h-2"
                        >
                          <path
                            d="M3.5 6L6 3.5L3.5 1"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-sm sm:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="order-1 lg:order-2 relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl lg:rounded-2xl blur opacity-20 sm:opacity-30"></div>
                <div className="relative bg-gray-900 rounded-xl lg:rounded-2xl p-1 sm:p-2 overflow-hidden border border-blue-500/20">
                  <div className="aspect-video sm:aspect-[4/3] w-full relative bg-gray-800 rounded-lg overflow-hidden">
                    {/* Replaced img element with Image component */}
                    <Image
                      src="/images/dashboard.png"
                      alt="Real-time analytics dashboard"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Decorations - Reduced opacity for mobile */}
          <div className="absolute top-20 -left-32 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 -right-32 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-20 md:py-32 bg-gradient-to-br from-blue-950/50 to-gray-900"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                How It Works
              </span>
            </motion.h2>
            <p className="text-gray-300 text-lg">
              Getting started with Beast11 is simple. Follow these steps and
              you&apos;ll be competing in no time.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Create Account",
                  description:
                    "Sign up in seconds with your email or social accounts.",
                },
                {
                  step: "02",
                  title: "Build Your Team",
                  description:
                    "Select players within your budget using our intuitive team builder.",
                },
                {
                  step: "03",
                  title: "Join Contests",
                  description:
                    "Enter public leagues or create private ones with friends.",
                },
                {
                  step: "04",
                  title: "Win Rewards",
                  description:
                    "Track live scores and win based on real-world performances.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-blue-500/20 text-center relative z-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-6 text-white font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>

                  <div className="hidden md:block absolute top-12 left-1/2 w-6 h-6 rounded-full bg-black border-4 border-purple-500 transform -translate-x-1/2 z-20"></div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md hover:opacity-90 transition-all transform hover:-translate-y-1 font-medium inline-flex items-center justify-center gap-2">
              Start Your Fantasy Journey <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-20 md:py-32 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                What Players Are Saying
              </span>
            </motion.h2>
            <p className="text-gray-300 text-lg">
              Join thousands of cricket enthusiasts who&apos;ve transformed
              their game with our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul M.",
                role: "Fantasy Cricket Champion",
                quote:
                  "The AI predictions are scary accurate! I've won 3 major tournaments since switching to this platform.",
              },
              {
                name: "Sarah T.",
                role: "Cricket Enthusiast",
                quote:
                  "The live analytics make all the difference. I can make substitutions based on real data rather than just gut feeling.",
              },
              {
                name: "James P.",
                role: "League Administrator",
                quote:
                  "Managing our office league has never been easier. The tools for commissioners are intuitive and powerful.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-2xl border border-blue-500/20 backdrop-blur-sm"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-4">
                    <span className="font-bold text-white">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default HomePage;
