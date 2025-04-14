"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally connect to a newsletter service
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8 my-12"
    >
      <h3 className="text-2xl font-bold text-center mb-4">Stay Updated</h3>
      <p className="text-center text-muted-foreground mb-6">
        Get the latest articles and insights delivered directly to your inbox.
      </p>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center p-4 bg-primary/10 text-primary rounded-lg"
        >
          Thanks for subscribing! Check your inbox to confirm your email.
        </motion.div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-3 rounded-lg bg-card border border-input focus:outline-none focus:ring-2 focus:ring-primary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
      )}
    </motion.div>
  );
};
