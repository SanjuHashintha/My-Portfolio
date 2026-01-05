// src/components/About.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setStatus("idle");

    // ✅ Replace with your actual email handler (e.g., Formspree, Resend, etc.)
    // For now, simulate success
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setIsSubmitting(false);

      // Reset status after 3s
      setTimeout(() => setStatus("idle"), 3000);
    }, 800);
  };

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-10 md:py-20 text-center relative"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-cyan-100 leading-relaxed">
              I'm a passionate Full-Stack Developer with expertise in building
              scalable web applications using modern technologies like .NET, C#,
              TypeScript, and Angular.
            </p>
            <p className="text-lg text-cyan-100 leading-relaxed">
              When I'm not coding, you can find me exploring new tech trends,
              contributing to open-source projects, or stargazing in the quiet
              of the night.
            </p>
            <p className="text-lg text-cyan-100 leading-relaxed">
              I believe in clean code, user-centric design, and continuous
              learning. Let's build something amazing together!
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/30"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-cyan-200 mb-2">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-gray-900/70 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 font-bold rounded-lg transition-all duration-300 ${
                  isSubmitting
                    ? "bg-cyan-700 cursor-not-allowed"
                    : "bg-cyan-600 hover:bg-cyan-500"
                } text-white shadow-lg hover:shadow-cyan-500/30`}
              >
                {isSubmitting ? "Sending..." : "Contact Me"}
              </button>

              {/* Status Feedback */}
              {status === "success" && (
                <p className="text-green-400 text-center mt-2">
                  ✉️ Message sent! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-center mt-2">
                  ❌ Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
