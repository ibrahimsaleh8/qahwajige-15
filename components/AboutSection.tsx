import { AboutSectionData, WhyUsFeatureData } from "@/lib/responseType";
import { Coffee, Zap, ShieldCheck, Sparkles } from "lucide-react";

export default function AboutSection({
  description1,
  label,
  title,
  features,
  whyUsDescription,
}: AboutSectionData & {
  features?: WhyUsFeatureData[];
  whyUsDescription: string;
}) {
  return (
    <section id="about" className="py-24 bg-[#FFF3E0] border-y-4 border-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Visual Grid */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-[#FFD93D] rounded-full blur-3xl opacity-40" />
            <div className="grid grid-cols-2 gap-4 rotate-slight relative z-10">
              <div className="bg-[#FF6B35] h-48 rounded-2xl border-4 border-[#0D1B2A] shadow-[8px_8px_0px_#0D1B2A] relative overflow-hidden flex items-center justify-center text-6xl">
                <Coffee
                  className="w-16 h-16 text-white opacity-90"
                  strokeWidth={2.5}
                />
              </div>
              <div className="bg-[#00B8A9] h-48 rounded-2xl border-4 border-[#0D1B2A] shadow-[8px_8px_0px_#0D1B2A] mt-8 relative overflow-hidden flex items-center justify-center text-6xl">
                <Sparkles
                  className="w-16 h-16 text-[#0D1B2A] opacity-90"
                  strokeWidth={2.5}
                />
              </div>
              <div className="bg-[#FFF3E0] h-48 rounded-2xl border-4 border-[#0D1B2A] shadow-[8px_8px_0px_#0D1B2A] -mt-8 relative overflow-hidden flex items-center justify-center text-6xl">
                <ShieldCheck
                  className="w-16 h-16 text-black opacity-90"
                  strokeWidth={2.5}
                />
              </div>
              <div className="bg-[#0D1B2A] h-48 rounded-2xl border-4 border-[#0D1B2A] shadow-[8px_8px_0px_#FF6B35] relative overflow-hidden flex items-center justify-center text-6xl">
                <Zap className="w-20 h-20 text-[#FF6B35]" strokeWidth={3} />
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="order-1 lg:order-2 text-black">
            <span className="text-main-color px-4 py-2 rounded-md bg-black text-xl mb-1 flex w-fit font-bold">
              {label}
            </span>

            <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
              {title}
              <br />
            </h2>

            <div className="space-y-6">
              {features && features.length > 0
                ? features.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 shrink-0 flex items-center justify-center text-xl font-bold rounded-full shadow-[2px_2px_0px_#0D1B2A] border-2 ${
                          index === 0
                            ? "bg-[#FFD93D] border-[#0D1B2A]"
                            : index === 1
                              ? "bg-[#00B8A9] border-[#0D1B2A]"
                              : "bg-[#FF6B35] border-[#0D1B2A]"
                        }`}>
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))
                : null}

              {/* Optional description */}
              {description1 && (
                <p className="text-gray-700 text-lg">{description1}</p>
              )}
              {whyUsDescription && (
                <p className="text-gray-700 text-lg">{whyUsDescription}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
