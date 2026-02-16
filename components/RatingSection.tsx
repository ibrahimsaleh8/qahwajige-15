"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Toast } from "@/app/(Dashboard)/_components/Toast";
import { APP_URL } from "@/lib/ProjectId";

const STORAGE_KEY = (projectId: string) => `rating_${projectId}`;

interface RatingSectionProps {
  projectId: string;
  averageRating: number;
  totalRatings: number;
}

export default function RatingSection({
  projectId,
  averageRating,
  totalRatings,
}: RatingSectionProps) {
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [submitted, setSubmitted] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY(projectId));
      if (stored) {
        const value = parseInt(stored, 10);
        if (value >= 1 && value <= 5) {
          setSubmitted(value);
        }
      }
    } catch {
      // localStorage not available
    }
    setMounted(true);
  }, [projectId]);

  const displayRating = hoverRating || selectedRating;

  const handleStarClick = async (value: number) => {
    if (submitted !== null) return;

    setSelectedRating(value);
    setIsLoading(true);

    try {
      const res = await fetch(`${APP_URL}/api/rating`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectId,
          stars: value,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(value);
        try {
          localStorage.setItem(STORAGE_KEY(projectId), String(value));
        } catch {
          // localStorage not available
        }
        Toast({ icon: "success", message: "شكراً لتقييمك!" });
      } else {
        setSelectedRating(0);
        Toast({
          icon: "error",
          message: data.message || data.error || "حدث خطأ في التقييم",
        });
      }
    } catch {
      setSelectedRating(0);
      Toast({ icon: "error", message: "حدث خطأ في التقييم" });
    } finally {
      setIsLoading(false);
    }
  };

  const renderStars = (value: number, interactive = false) => (
    <div className="flex justify-center gap-2" dir="rtl">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className="relative inline-block">
          {interactive ? (
            <motion.button
              type="button"
              disabled={isLoading || !mounted}
              onClick={() => handleStarClick(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="p-1.5 rounded-full transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35] focus-visible:ring-offset-2"
              aria-label={`تقييم ${star} من 5`}
              style={{
                background: star <= value ? "#FFD93D" : "transparent",
                border: "2px solid #0D1B2A",
                boxShadow: star <= value ? "3px 3px 0px #0D1B2A" : "none",
              }}
              whileTap={{ scale: 1.15, rotate: 15 }}
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}>
              <motion.span
                animate={
                  star <= value
                    ? { scale: [1, 1.3, 1], rotate: [0, 360, 0] }
                    : { scale: 1 }
                }
                transition={{
                  duration: star === value && interactive ? 0.5 : 0.2,
                  stiffness: 300,
                  damping: 15,
                }}>
                <Star
                  className={`w-8 h-8 md:w-10 md:h-10 transition-colors duration-200 ${
                    star <= value
                      ? "fill-[#FF6B35] text-[#FF6B35]"
                      : "fill-transparent text-[#0D1B2A]"
                  }`}
                  strokeWidth={3}
                />
              </motion.span>
            </motion.button>
          ) : (
            <div
              style={{
                background: star <= value ? "#FFD93D" : "white",
                border: "2px solid #0D1B2A",
                boxShadow: "3px 3px 0px #0D1B2A",
                borderRadius: "50%",
                padding: "6px",
              }}>
              <Star
                className={`w-8 h-8 md:w-10 md:h-10 transition-colors ${
                  star <= value
                    ? "fill-[#FF6B35] text-[#FF6B35]"
                    : "fill-transparent text-[#0D1B2A]"
                }`}
                strokeWidth={3}
              />
            </div>
          )}
        </span>
      ))}
    </div>
  );

  return (
    <section
      id="rating"
      className="py-20 md:py-28 relative overflow-hidden"
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

        @keyframes wiggle {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
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
          top: "2rem",
          right: "5%",
          animationDelay: "0.5s",
        }}>
        ⭐
      </div>
      <div
        className="absolute text-5xl md:text-6xl float-animation"
        style={{
          bottom: "3rem",
          left: "5%",
          animationDelay: "1s",
        }}>
        ✨
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-4xl" dir="rtl">
        {/* Main Card */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}>
          <div
            className="bg-white rounded-[40px] p-8 md:p-12 text-center relative"
            style={{
              border: "4px solid #0D1B2A",
              boxShadow: "12px 12px 0px #00B8A9",
              transform: "rotate(-1deg)",
            }}>
            {/* Decorative coffee cup */}
            <motion.div
              className="absolute text-6xl md:text-7xl"
              style={{
                top: "-30px",
                right: "-20px",
                transform: "rotate(15deg)",
              }}
              animate={{
                rotate: [15, 25, 15],
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}>
              ☕
            </motion.div>

            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold mb-6"
              style={{
                background: "#FFD93D",
                border: "3px solid #0D1B2A",
                boxShadow: "4px 4px 0px #0D1B2A",
              }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ type: "spring", stiffness: 400 }}>
              <span className="text-2xl">📣</span>
              <span className="text-lg" style={{ color: "#0D1B2A" }}>
                وش رأيك؟
              </span>
            </motion.div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight  "
              style={{ color: "#0D1B2A" }}>
              قيّم تجربتك معنا!
            </h2>
            <p
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-medium"
              style={{ color: "#6b7280" }}>
              رأيك يهمنا ويساعدنا نطور خدماتنا 💪
            </p>

            {/* Stats Display */}
            {(averageRating > 0 || totalRatings > 0) && (
              <motion.div
                className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}>
                {averageRating > 0 && (
                  <div
                    className="flex flex-col items-center gap-2 px-6 py-4 rounded-[25px]"
                    style={{
                      background:
                        "linear-gradient(135deg, #FF6B35 0%, #FFD93D 100%)",
                      border: "3px solid #0D1B2A",
                      boxShadow: "6px 6px 0px #0D1B2A",
                    }}>
                    <span className="text-4xl md:text-5xl font-black text-white  ">
                      {averageRating.toFixed(1)}
                    </span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= Math.round(averageRating)
                              ? "fill-white text-white"
                              : "fill-transparent text-white"
                          }`}
                          strokeWidth={2}
                        />
                      ))}
                    </div>
                  </div>
                )}
                {totalRatings > 0 && (
                  <div
                    className="flex flex-col items-center justify-center gap-1 px-6 py-4 rounded-[25px]"
                    style={{
                      background: "#00B8A9",
                      border: "3px solid #0D1B2A",
                      boxShadow: "6px 6px 0px #0D1B2A",
                    }}>
                    <span className="text-4xl md:text-5xl font-black text-white  ">
                      {totalRatings}
                    </span>
                    <span className="text-white font-bold text-sm">
                      {totalRatings === 1 ? "تقييم" : "تقييمات"}
                    </span>
                  </div>
                )}
              </motion.div>
            )}

            {/* Rating Display/Input */}
            {submitted !== null && mounted ? (
              <motion.div
                className="py-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}>
                {renderStars(submitted, false)}

                <motion.div
                  className="mt-8 inline-block px-8 py-4 rounded-[30px]"
                  style={{
                    background: "#FFD93D",
                    border: "3px solid #0D1B2A",
                    boxShadow: "6px 6px 0px #FF6B35",
                    transform: "rotate(1deg)",
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: [1, -1, 1] }}
                  transition={{
                    scale: { type: "spring", stiffness: 200, delay: 0.2 },
                    rotate: { duration: 0.5, delay: 0.4 },
                  }}>
                  <p
                    className="font-black text-2xl mb-2  "
                    style={{ color: "#0D1B2A" }}>
                    يعطيك العافية! 🎉
                  </p>
                  <p className="font-medium" style={{ color: "#0D1B2A" }}>
                    تقييمك يساعدنا نكون أفضل
                  </p>
                </motion.div>
              </motion.div>
            ) : (
              <div className="space-y-6">
                <div className="py-4">
                  {renderStars(displayRating || 0, true)}
                </div>

                <motion.p
                  className="font-bold text-lg"
                  style={{ color: "#6b7280" }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}>
                  {mounted && !isLoading && "اضغط على النجوم للتقييم 👆"}
                  {isLoading && (
                    <span className="flex items-center justify-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}>
                        ⭐
                      </motion.span>
                      جاري الإرسال...
                    </span>
                  )}
                </motion.p>

                {/* Motivational badges */}
                {displayRating > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-center gap-2 flex-wrap">
                    {displayRating >= 4 && (
                      <span
                        className="px-4 py-2 rounded-full font-bold text-sm"
                        style={{
                          background: "#00B8A9",
                          color: "white",
                          border: "2px solid #0D1B2A",
                          boxShadow: "3px 3px 0px #0D1B2A",
                        }}>
                        ممتاز! 🌟
                      </span>
                    )}
                    {displayRating === 5 && (
                      <span
                        className="px-4 py-2 rounded-full font-bold text-sm"
                        style={{
                          background: "#FF6B35",
                          color: "white",
                          border: "2px solid #0D1B2A",
                          boxShadow: "3px 3px 0px #0D1B2A",
                        }}>
                        رهيب! 🔥
                      </span>
                    )}
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
