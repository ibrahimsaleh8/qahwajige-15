"use client";

import { PackageData } from "@/lib/responseType";
import { Check, MessageCircle } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PremiumPackagesSection({
  whatsapp,
  packages,
}: {
  whatsapp: string;
  packages: PackageData[];
}) {
  const whatsappNumber = whatsapp.replace("+", "");
  const waLink = `https://wa.me/${whatsappNumber}?text=`;

  if (!packages?.length) return null;

  return (
    <section
      id="packages"
      style={{
        background: "linear-gradient(180deg, #FFF3E0 0%, white 100%)",
      }}
      className="relative py-24  border-y-4 border-[#0D1B2A] overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(#00B8A9 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          opacity: 0.15,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-4 drop-shadow-[4px_4px_0px_#c0c0c0]">
            باقاتنا المميزة
          </h2>
          <p className="text-xl text-black font-bold">
            اختر الباقة اللي تناسبك وخلي القهوة علينا ☕
          </p>
        </div>

        {/* Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative flex flex-col bg-white rounded-3xl border-2 border-[#0D1B2A]
              shadow-[6px_6px_0px_#0D1B2A] p-8 transition-all duration-300
              hover:-translate-y-2 hover:shadow-[10px_10px_0px_#0D1B2A]
              ${index === 1 ? "bg-[#FF6B35] text-white md:-mt-8" : ""}`}>
              {/* Badge */}
              <div className="absolute -top-5 right-6 bg-[#FFD93D] text-[#0D1B2A] px-4 py-1 rounded-full font-black border-2 border-[#0D1B2A] shadow-[2px_2px_0px_#0D1B2A]">
                الباقة {index + 1}
              </div>

              {/* Image */}
              {pkg.image && (
                <div className="relative mb-6 aspect-4/3 overflow-hidden rounded-2xl border-2 border-[#0D1B2A]">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Title */}
              <h3
                className={`text-2xl font-black mb-4 ${
                  index === 1 ? "text-white" : "text-[#0D1B2A]"
                }`}>
                {pkg.title}
              </h3>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features?.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className={`w-5 h-5 shrink-0 text-[#00B8A9]`} />
                    <span className="font-bold text-black">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto flex items-center justify-center gap-2 py-4 rounded-2xl font-black border-2 border-[#0D1B2A]
                shadow-[4px_4px_0px_#0D1B2A] transition-all duration-300
                ${
                  index === 1
                    ? "bg-white text-[#0D1B2A] hover:bg-[#FFD93D]"
                    : "bg-[#FFD93D] text-[#0D1B2A] hover:bg-[#FFEE7A]"
                }
                hover:-translate-y-1`}>
                <MessageCircle className="w-5 h-5" />
                اطلب الباقة
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
