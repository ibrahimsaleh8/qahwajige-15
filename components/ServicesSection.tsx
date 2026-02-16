import { ServicesSectionData } from "@/lib/responseType";
import { Coffee, Users, Heart, Building2, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Coffee,
  Users,
  Heart,
  Building2,
};

export default function ServicesSection({
  description,
  items,
  label,
  title,
}: ServicesSectionData) {
  return (
    <section
      id="services"
      className="py-20 bg-[#00B8A9] border-y-4 border-[#0D1B2A] relative overflow-hidden">
      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#fff 2px, transparent 2px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          {label && <p className="text-white font-bold mb-2">{label}</p>}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white drop-shadow-[4px_4px_0px_#0D1B2A] mb-4">
            {title}
          </h2>
          <p className="text-lg sm:text-xl text-white font-bold max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
          {items?.map((card, index) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap] || Coffee;

            const isFeatured = index === 1;

            return (
              <div
                key={card.title}
                className={`relative p-8 rounded-3xl border-2 border-[#0D1B2A] shadow-[8px_8px_0px_#0D1B2A] transition-transform duration-300
                ${
                  isFeatured
                    ? "bg-[#FFD93D] rotate-slight-pos lg:-mt-8 z-10"
                    : "bg-white rotate-slight hover:rotate-0"
                }`}>
                {/* Featured badge */}
                {isFeatured && (
                  <div className="absolute -top-6 -left-6 text-black bg-white border-2 border-[#0D1B2A] px-4 py-1 rounded-full font-bold shadow-[2px_2px_0px_#0D1B2A]">
                    الأكثر طلباً ⭐
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-full border-2 border-[#0D1B2A] flex items-center justify-center mb-6 shadow-[4px_4px_0px_#0D1B2A]
                  ${
                    isFeatured
                      ? "bg-white text-[#FF6B35]"
                      : "bg-[#FFD93D] text-[#0D1B2A]"
                  }`}>
                  <Icon className="w-8 h-8" strokeWidth={2.5} />
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-black mb-3 text-[#0D1B2A]`}>
                  {card.title}
                </h3>

                {/* Description */}
                <p
                  className={`font-medium ${
                    isFeatured ? "text-gray-800" : "text-gray-600"
                  }`}>
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
