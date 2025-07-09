'use client';

import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section id="features" className="px-8 py-16 bg-gray-50">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Our Features
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Example feature */}
        <motion.div
          whileHover={{ y: -5 }}
          className="p-6 bg-white rounded-lg shadow text-center"
        >
          <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
          <p className="text-gray-600">Description of feature 1.</p>
        </motion.div>
        <motion.div
          whileHover={{ y: -5 }}
          className="p-6 bg-white rounded-lg shadow text-center"
        >
          <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
          <p className="text-gray-600">Description of feature 2.</p>
        </motion.div>
        <motion.div
          whileHover={{ y: -5 }}
          className="p-6 bg-white rounded-lg shadow text-center"
        >
          <h3 className="text-xl font-semibold mb-2">Feature 3</h3>
          <p className="text-gray-600">Description of feature 3.</p>
        </motion.div>
      </div>
    </section>
  );
}
