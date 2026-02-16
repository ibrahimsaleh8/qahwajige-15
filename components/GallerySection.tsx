"use client";
import { GalleryImageData } from "@/lib/responseType";
import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";

export function GallerySection({ gallery }: { gallery: GalleryImageData[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="gallery"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "#0D1B2A" }}>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        .float-animation {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }

        .wiggle-hover:hover {
          animation: wiggle 0.5s ease-in-out infinite;
        }

        .gallery-card {
          position: relative;
          background: white;
          border: 3px solid #0D1B2A;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .gallery-card:hover {
          transform: translate(-4px, -4px) rotate(1deg);
        }

        .gallery-card-even {
          transform: rotate(-2deg);
        }

        .gallery-card-odd {
          transform: rotate(2deg);
        }

        .gallery-card-even:hover {
          transform: translate(-4px, -4px) rotate(1deg);
        }

        .gallery-card-odd:hover {
          transform: translate(-4px, -4px) rotate(-1deg);
        }
      `}</style>

      {/* Wavy top border */}
      <div
        className="absolute top-0 left-0 w-full h-20"
        style={{
          background: "#FFF3E0",
          clipPath: "polygon(0 0, 100% 0, 100% 20%, 0 100%)",
        }}
      />

      {/* Background Pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(#FF6B35 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          opacity: 0.1,
        }}
      />

      {/* Floating decorations */}
      <div
        className="absolute text-5xl md:text-6xl float-animation"
        style={{
          top: "5rem",
          right: "5%",
          animationDelay: "0.3s",
        }}>
        📸
      </div>
      <div
        className="absolute text-5xl md:text-6xl float-animation"
        style={{
          bottom: "5rem",
          left: "5%",
          animationDelay: "0.8s",
        }}>
        🎉
      </div>
      <div
        className="absolute text-4xl md:text-5xl float-animation"
        style={{
          top: "40%",
          left: "10%",
          animationDelay: "1.2s",
        }}>
        ☕
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-12">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold mb-6"
            style={{
              background: "#FFD93D",
              border: "3px solid white",
              boxShadow: "4px 4px 0px #FF6B35",
            }}>
            <span className="text-2xl">📷</span>
            <span className="text-lg" style={{ color: "#0D1B2A" }}>
              معرض الأعمال
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight   text-white">
            من ذكريات <span style={{ color: "#FF6B35" }}>مناسباتنا</span> 🎊
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl font-medium max-w-2xl mx-auto"
            style={{ color: "#FFF3E0", opacity: 0.9 }}>
            لقطات حية من فعاليات ومناسبات قمنا بخدمتها في الرياض
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {gallery.map((image, index) => {
            const isEven = index % 2 === 0;
            const colors = ["#FF6B35", "#00B8A9", "#FFD93D", "#6B4c9a"];
            const shadowColor = colors[index % colors.length];

            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: isEven ? -5 : 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: isEven ? -2 : 2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`gallery-card ${isEven ? "gallery-card-even" : "gallery-card-odd"} cursor-pointer rounded-[30px] overflow-hidden`}
                style={{
                  boxShadow:
                    hoveredIndex === index
                      ? `12px 12px 0px ${shadowColor}`
                      : `8px 8px 0px ${shadowColor}`,
                }}>
                <div className="aspect-square relative">
                  <Image
                    src={image.url}
                    alt={image.alt ?? `صورة-${index + 1}`}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{
                      transform:
                        hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                    }}
                  />

                  {/* Overlay with border */}
                  <div
                    className="absolute inset-0 flex items-center justify-center transition-all duration-300 p-4"
                    style={{
                      background:
                        hoveredIndex === index
                          ? "rgba(13, 27, 42, 0.85)"
                          : "rgba(13, 27, 42, 0)",
                    }}>
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        className="text-center"
                        style={{
                          background: "#FFD93D",
                          border: "3px solid white",
                          borderRadius: "20px",
                          padding: "12px 20px",
                          boxShadow: "4px 4px 0px #FF6B35",
                          transform: "rotate(-2deg)",
                        }}>
                        <span
                          className="font-bold text-sm md:text-base  "
                          style={{ color: "#0D1B2A" }}>
                          {image.alt ?? `صورة-${index + 1}`}
                        </span>
                      </motion.div>
                    )}
                  </div>

                  {/* Decorative corner badge */}
                  <div
                    className="absolute top-3 right-3 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-xl md:text-2xl"
                    style={{
                      background: shadowColor,
                      border: "2px solid white",
                      boxShadow: "2px 2px 0px rgba(13, 27, 42, 0.3)",
                    }}>
                    {index % 4 === 0
                      ? "⭐"
                      : index % 4 === 1
                        ? "☕"
                        : index % 4 === 2
                          ? "🎉"
                          : "✨"}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
