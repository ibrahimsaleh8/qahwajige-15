"use client";
import {
  FaFacebookF,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
  FaPhone,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function FloatedIcons({
  whatsapp,
  telephone,
}: {
  whatsapp: string;
  telephone: string;
}) {
  const socialLinks = [
    {
      name: "whatsapp",
      icon: FaWhatsapp,
      href: `https://wa.me/${
        whatsapp.includes("+") ? whatsapp.split("+").join("") : whatsapp
      }?text=`,
      color: "#25d366",
      emoji: "💬",
      delay: 0,
    },

    // 📞 Telephone
    {
      name: "telephone",
      icon: FaPhone,
      href: `tel:${telephone}`,
      color: "#2563eb",
      emoji: "📞",
      delay: 0.1,
    },

    // 📸 Instagram
    {
      name: "instagram",
      icon: FaInstagram,
      href: "https://www.instagram.com/qahwajeyn",
      color: "#c13584",
      emoji: "📸",
      delay: 0.2,
    },

    {
      name: "tiktok",
      icon: FaTiktok,
      href: "https://www.tiktok.com/@user61719922769991",
      color: "#000000",
      emoji: "🎵",
      delay: 0.3,
    },
    {
      name: "facebook",
      icon: FaFacebookF,
      href: "https://www.facebook.com/SbabinAlkahwaa/?_rdr",
      color: "#1877f2",
      emoji: "👍",
      delay: 0.4,
    },
    {
      name: "twitter",
      icon: FaTwitter,
      href: "https://x.com/NghmAbw11703",
      color: "#1da1f2",
      emoji: "🐦",
      delay: 0.5,
    },
    {
      name: "youtube",
      icon: FaYoutube,
      href: "https://www.youtube.com/channel/UCProSRhVIgB-Bkn6_NPrMng",
      color: "#ff0000",
      emoji: "▶️",
      delay: 0.6,
    },
  ];

  return (
    <>
      <style>{`
        @keyframes bounce-in {
          0% {
            transform: scale(0) rotate(-180deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.2) rotate(10deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }

        .social-icon-container {
          animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .social-icon-button {
          position: relative;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .social-icon-button:hover {
          animation: wiggle 0.5s ease-in-out;
        }

        .social-icon-button::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 3px solid #0D1B2A;
          transition: all 0.3s ease;
        }

        .social-icon-button:hover::before {
          transform: translate(-4px, -4px);
        }

        .social-icon-button::after {
          content: attr(data-emoji);
          position: absolute;
          top: -8px;
          right: -8px;
          width: 24px;
          height: 24px;
          background: #FFD93D;
          border: 2px solid #0D1B2A;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          box-shadow: 2px 2px 0px #0D1B2A;
          transition: all 0.3s ease;
        }

        .social-icon-button:hover::after {
          transform: scale(1.2) rotate(15deg);
        }

        @media (max-width: 768px) {
          .social-icon-button::after {
            width: 20px;
            height: 20px;
            font-size: 10px;
            top: -6px;
            right: -6px;
          }
        }
      `}</style>

      <div className="fixed z-20 left-4 bottom-4 flex flex-col gap-4">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <motion.div
              key={social.name}
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{
                delay: social.delay,
                duration: 0.6,
                type: "spring",
                stiffness: 200,
              }}
              className="social-icon-container">
              <motion.a
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
                href={social.href}
                className="social-icon-button flex items-center justify-center md:w-16 md:h-16 w-14 h-14 rounded-full cursor-pointer"
                data-emoji={social.emoji}
                style={{
                  background: social.color,
                  boxShadow: "4px 4px 0px #0D1B2A",
                }}
                whileHover={{
                  scale: 1.15,
                  rotate: [0, -5, 5, 0],
                  boxShadow: "6px 6px 0px #0D1B2A",
                }}
                whileTap={{
                  scale: 0.95,
                  boxShadow: "2px 2px 0px #0D1B2A",
                }}>
                <Icon className="md:w-8 md:h-8 w-7 h-7 text-white relative z-10" />
              </motion.a>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
