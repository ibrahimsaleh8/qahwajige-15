"use client";
import { motion } from "motion/react";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function HeroLinks({
  whatsApp,
}: {
  whatsApp?: string | undefined;
}) {
  return (
    <div className="flex flex-wrap gap-10 md:gap-5 justify-center lg:justify-start">
      {whatsApp && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://wa.me/${whatsApp.replace(/\+/g, "")}?text=`}
            className="flex items-center gap-2 bg-white text-black border-2 border-black px-8 py-4 rounded-xl font-bold hover:bg-gray-50 shadow-[4px_4px_0px_#0D1B2A]  transition">
            اطلب الخدمة الآن
            <FaWhatsapp className="w-6 h-6" />
          </a>
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
        viewport={{ once: true }}>
        <Link
          href="#gallery"
          className="flex items-center bg-yellow-400 text-black border-2 border-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-500 transition shadow-[4px_4px_0px_#0D1B2A] ">
          عرض معرض الأعمال
        </Link>
      </motion.div>
    </div>
  );
}
