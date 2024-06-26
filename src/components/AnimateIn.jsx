"use client";
import { motion } from "framer-motion";

export default function AnimateIn({ children, delayStart }) {
  return (
    <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: delayStart }}>
      {children}
    </motion.div>
  );
}
