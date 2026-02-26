import { FooterData } from "@/lib/responseType";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer({
  address,
  phone,
  brandName,
  email,
  description,
}: FooterData & { description?: string }) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "الرئيسية", href: "/#home", emoji: "🏠" },
      { name: "عن الشركة", href: "/#about", emoji: "📖" },
      { name: "خدماتنا", href: "/#services", emoji: "☕" },
      { name: "اتصل بنا", href: "/#contact", emoji: "📞" },
    ],
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: "#0D1B2A" }}>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        .float-animation {
          animation: float 4s ease-in-out infinite;
        }

        .footer-link {
          position: relative;
          transition: all 0.3s ease;
        }

        .footer-link::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #FF6B35;
          transition: width 0.3s ease;
        }

        .footer-link:hover::before {
          width: 100%;
        }

        .footer-link:hover {
          color: #FF6B35;
          transform: translateX(-3px);
        }

        .social-icon {
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          transform: scale(1.1) rotate(-5deg);
        }
      `}</style>

      {/* Wavy top border */}
      <div
        className="absolute top-0 left-0 w-full h-16"
        style={{
          background: "#FFF3E0",
          clipPath: "polygon(0 0, 100% 0, 100% 30%, 0 100%)",
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
        className="absolute text-5xl float-animation"
        style={{
          top: "8rem",
          right: "5%",
          animationDelay: "0.5s",
        }}>
        ☕
      </div>
      <div
        className="absolute text-4xl float-animation"
        style={{
          top: "12rem",
          left: "8%",
          animationDelay: "1s",
        }}>
        ✨
      </div>
      <div
        className="absolute text-3xl float-animation"
        style={{
          bottom: "8rem",
          right: "10%",
          animationDelay: "1.5s",
        }}>
        🎉
      </div>

      <div className="container mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16 pt-24" dir="rtl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              {/* Brand Logo/Name */}
              <div
                className="inline-flex items-center gap-3 mb-6 px-6 py-4 rounded-[25px]"
                style={{
                  background: "#FF6B35",
                  border: "3px solid white",
                  boxShadow: "6px 6px 0px #FFD93D",
                  transform: "rotate(-2deg)",
                }}>
                <span className="text-4xl">☕</span>
                <span className="text-2xl font-black text-black">
                  {brandName}
                </span>
              </div>

              <p
                className="mb-6 leading-relaxed text-base font-medium"
                style={{ color: "#FFF3E0", opacity: 0.9 }}>
                {description ||
                  "نصنع الذكريات بقطرة قهوة وابتسامة عريضة. خدمة استثنائية لمناسباتك الخاصة"}
              </p>

              {/* Social Icons */}
              <div className="flex gap-3">
                {["📸", "🐦", "💬"].map((emoji, index) => (
                  <a
                    key={index}
                    href="#"
                    className="social-icon w-12 h-12 rounded-full flex items-center justify-center text-xl"
                    style={{
                      background: "white",
                      border: "2px solid #0D1B2A",
                      boxShadow: "3px 3px 0px #00B8A9",
                    }}>
                    {emoji}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <div
                className="inline-block px-6 py-3 rounded-full mb-6 font-black text-lg"
                style={{
                  background: "#FFD93D",
                  border: "3px solid white",
                  boxShadow: "4px 4px 0px #00B8A9",
                  color: "#0D1B2A",
                }}>
                روابط سريعة 🔗
              </div>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="footer-link flex items-center gap-2 font-bold text-base"
                      style={{ color: "#FFF3E0" }}>
                      <span className="text-xl">{link.emoji}</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <div
                className="inline-block px-6 py-3 rounded-full mb-6 font-black text-black text-lg"
                style={{
                  background: "#00B8A9",
                  border: "3px solid white",
                  boxShadow: "4px 4px 0px #FF6B35",
                }}>
                تواصل معنا 📞
              </div>
              <ul className="space-y-4">
                {address && (
                  <li className="flex items-start gap-3 group">
                    <div
                      className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{
                        background: "#6B4c9a",
                        border: "2px solid white",
                        boxShadow: "2px 2px 0px #FFD93D",
                      }}>
                      <MapPin
                        className="w-5 h-5 text-white"
                        strokeWidth={2.5}
                      />
                    </div>
                    <span
                      className="font-medium text-sm leading-relaxed pt-2"
                      style={{ color: "#FFF3E0", opacity: 0.9 }}>
                      {address}
                    </span>
                  </li>
                )}
                {email && (
                  <li className="flex items-start gap-3 group">
                    <div
                      className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{
                        background: "#FFD93D",
                        border: "2px solid white",
                        boxShadow: "2px 2px 0px #FF6B35",
                      }}>
                      <Mail
                        className="w-5 h-5 text-[#0D1B2A]"
                        strokeWidth={2.5}
                      />
                    </div>
                    <a
                      href={`mailto:${email}`}
                      className="font-bold text-sm pt-2 hover:text-[#FF6B35] transition-colors"
                      style={{ color: "#FFF3E0" }}>
                      {email}
                    </a>
                  </li>
                )}
                {phone && (
                  <li className="flex items-start gap-3 group">
                    <div
                      className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{
                        background: "#FF6B35",
                        border: "2px solid white",
                        boxShadow: "2px 2px 0px #00B8A9",
                      }}>
                      <Phone className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </div>
                    <a
                      href={`tel:${phone}`}
                      className="font-bold text-sm pt-2 hover:text-[#FF6B35] transition-colors"
                      style={{ color: "#FFF3E0" }}
                      dir="ltr">
                      {phone}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center gap-4 my-12">
            <div
              className="flex-1 h-1 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, #FF6B35 50%, transparent 100%)",
              }}
            />
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
              style={{
                background: "#FFD93D",
                border: "3px solid white",
                boxShadow: "4px 4px 0px #00B8A9",
              }}>
              ☕
            </div>
            <div
              className="flex-1 h-1 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, #00B8A9 50%, transparent 100%)",
              }}
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: "2px solid rgba(255, 255, 255, 0.1)" }}>
          <div className="container mx-auto px-4 py-6" dir="rtl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <div
                className="inline-flex items-center mx-auto gap-2 px-4 py-2 rounded-full text-sm font-bold"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "2px solid rgba(255, 255, 255, 0.2)",
                  color: "#FFF3E0",
                }}>
                <span>©</span>
                <span>{currentYear}</span>
                <span>{brandName}</span>
                <span>•</span>
                <span>جميع الحقوق محفوظة</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
