"use client";

import { FooterData } from "@/lib/responseType";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const mapEmbedSrc =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7247.733529263881!2d46.7653!3d24.731454!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f013bec0d4b7b%3A0xeb4d9048d7b13647!2z2YLZh9mI2KzZiiDZiNi12KjYp9io2YrZhiDZgtmH2YjYqSDYp9mE2LHZitin2LY!5e0!3m2!1sar!2str!4v1728329118756!5m2!1sar!2str";

export default function ContactSection({
  address,
  phone,
  email,
  whatsapp,
}: FooterData & { whatsapp: string }) {
  const contactItems = [
    {
      icon: Phone,
      label: "الهاتف",
      value: phone,
      href: `tel:${phone}`,
      color: "#FF6B35",
      emoji: "📞",
    },
    {
      icon: MessageCircle,
      label: "واتساب",
      value: whatsapp,
      href: `https://wa.me/${
        whatsapp.includes("+") ? whatsapp.split("+").join("") : whatsapp
      }?text=`,
      color: "#00B8A9",
      emoji: "💬",
    },
    {
      icon: Mail,
      label: "البريد الإلكتروني",
      value: email,
      href: `mailto:${email}`,
      color: "#000000",
      emoji: "✉️",
    },
    {
      icon: MapPin,
      label: "العنوان",
      value: address,
      href: null,
      color: "#6B4c9a",
      emoji: "📍",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "#FFF3E0" }}>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        .float-animation {
          animation: float 4s ease-in-out infinite;
        }

        .contact-card {
          background: white;
          border: 4px solid #0D1B2A;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .contact-card:hover {
          transform: translate(-4px, -4px) rotate(-1deg);
        }

        .map-container {
          border: 4px solid #0D1B2A;
          box-shadow: 8px 8px 0px #FF6B35;
          transition: all 0.3s ease;
        }

        .map-container:hover {
          box-shadow: 12px 12px 0px #00B8A9;
          transform: translate(-2px, -2px);
        }
      `}</style>

      {/* Background Pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(#00B8A9 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          opacity: 0.15,
        }}
      />

      {/* Floating decorations */}
      <div
        className="absolute text-5xl md:text-6xl float-animation"
        style={{
          top: "3rem",
          right: "5%",
          animationDelay: "0.5s",
        }}>
        📱
      </div>
      <div
        className="absolute text-5xl md:text-6xl float-animation"
        style={{
          bottom: "4rem",
          left: "8%",
          animationDelay: "1s",
        }}>
        📍
      </div>
      <div
        className="absolute text-4xl md:text-5xl float-animation"
        style={{
          top: "50%",
          left: "5%",
          animationDelay: "1.5s",
        }}>
        ☕
      </div>

      <div className="container mx-auto px-4 relative z-10" dir="rtl">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold mb-6"
            style={{
              background: "#FFD93D",
              border: "3px solid #0D1B2A",
              boxShadow: "4px 4px 0px #FF6B35",
            }}>
            <span className="text-2xl">📞</span>
            <span className="text-lg" style={{ color: "#0D1B2A" }}>
              تواصل معنا
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight"
            style={{ color: "#0D1B2A" }}>
            خل <span style={{ color: "#FF6B35" }}>الكلام بيننا</span> سهل! 💬
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl font-medium max-w-2xl mx-auto"
            style={{ color: "#6b7280" }}>
            نحن هنا لخدمتكم على مدار الساعة. اختر طريقة التواصل اللي تناسبك!
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="contact-card rounded-[30px] p-6"
                  style={{
                    boxShadow: `6px 6px 0px ${item.color}`,
                  }}>
                  <div className="flex items-start gap-4">
                    {/* Icon Box */}
                    <motion.div
                      className="shrink-0 relative"
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}>
                      <div
                        className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center relative"
                        style={{
                          background: item.color,
                          border: "3px solid #0D1B2A",
                          boxShadow: "4px 4px 0px #0D1B2A",
                        }}>
                        <Icon
                          className="w-8 h-8 md:w-10 md:h-10 text-white"
                          strokeWidth={2.5}
                        />
                      </div>
                      {/* Emoji badge */}
                      <div
                        className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-lg"
                        style={{
                          background: "#FFD93D",
                          border: "2px solid #0D1B2A",
                          boxShadow: "2px 2px 0px #0D1B2A",
                        }}>
                        {item.emoji}
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-xl md:text-2xl font-black mb-2"
                        style={{ color: "#0D1B2A" }}>
                        {item.label}
                      </h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block font-bold text-base md:text-lg wrap-break-word transition-all duration-300 hover:scale-105"
                          style={{
                            color: item.color,
                            textDecoration: "none",
                          }}
                          dir={
                            item.label === "الهاتف" || item.label === "واتساب"
                              ? "ltr"
                              : "rtl"
                          }>
                          {item.value}
                        </a>
                      ) : (
                        <p
                          className="font-medium text-base leading-relaxed"
                          style={{ color: "#6b7280" }}>
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="rounded-[30px] p-8 text-center"
              style={{
                background: "linear-gradient(135deg, #FF6B35 0%, #FFD93D 100%)",
                border: "4px solid #0D1B2A",
                boxShadow: "8px 8px 0px #00B8A9",
                transform: "rotate(-1deg)",
              }}>
              <p className="text-2xl md:text-3xl font-black mb-2 text-white">
                جاهزين لخدمتك! 🚀
              </p>
              <p className="text-base md:text-lg font-bold text-white opacity-90">
                اتصل الآن ونجهز لك كل شي بأسرع وقت
              </p>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative">
            {/* Map Badge */}
            <div
              className="absolute -top-4 right-6 z-10 px-6 py-3 rounded-full font-black text-lg"
              style={{
                background: "#00B8A9",
                border: "3px solid #0D1B2A",
                boxShadow: "4px 4px 0px #FFD93D",
                color: "white",
              }}>
              موقعنا على الخريطة 🗺️
            </div>

            <div
              className="map-container rounded-[40px] overflow-hidden"
              style={{
                minHeight: "500px",
                background: "#e5e7eb",
              }}>
              <iframe
                src={mapEmbedSrc}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع قهوجيين الرياض على الخريطة"
                className="w-full h-full border-0"
                style={{ minHeight: "500px" }}
              />
            </div>

            {/* Decorative corner element */}
            <motion.div
              className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full flex items-center justify-center text-4xl"
              style={{
                background: "#FFD93D",
                border: "3px solid #0D1B2A",
                boxShadow: "4px 4px 0px #FF6B35",
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}>
              📌
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
