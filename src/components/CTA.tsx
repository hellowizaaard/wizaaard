'use client';

import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="cta" className="px-8 py-16 text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl font-bold mb-4"
      >
        Ready to get started?
      </motion.h2>
      <p className="text-gray-600 mb-6">
        Sign up today and start using our awesome service.
      </p>
      <button className="bg-black text-white px-8 py-4 rounded-cta">
        Join Now
      </button>
    </section>
  );
}
