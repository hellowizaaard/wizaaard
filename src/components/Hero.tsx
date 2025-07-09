'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Your Figma Headline
        </h1>
        <p className="text-gray-600 mb-6">
          Subheadline or hero description goes here. Match your Figma copy.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-cta">
          Get Started
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 mb-8 md:mb-0"
      >
        <Image
          src="/hero-image.png" // Replace with your Figma export
          alt="Hero"
          width={600}
          height={400}
          className="w-full h-auto"
        />
      </motion.div>
    </section>
  );
}
