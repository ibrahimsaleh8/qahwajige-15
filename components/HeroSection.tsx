import Image from "next/image";
import HeroLinks from "./AnimatedComponents/HeroLinks";
import { HeroSectionData } from "@/lib/responseType";

export default function HeroSection({
  headline,
  subheadline,
  whatsApp,
  image,
}: HeroSectionData & {
  image: string;
}) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-main-background">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern z-0" />

      {/* Blobs */}
      <div className="absolute top-10 sm:top-20 left-[-20%] sm:left-[-10%] w-72 sm:w-125 h-72 sm:h-125 bg-main-color opacity-20 blob-shape blur-3xl" />
      <div className="absolute bottom-10 sm:bottom-20 right-[-20%] sm:right-[-10%] w-96 sm:w-150 h-96 sm:h-150 bg-orange-500 opacity-20 blob-shape blur-3xl" />

      {/* Floating emojis */}
      <div className="absolute top-20 sm:top-32 left-5 sm:left-10 text-4xl sm:text-6xl floating animate-delay-500">
        ✨
      </div>
      <div className="absolute bottom-10 right-5 sm:right-10 text-4xl sm:text-6xl floating animate-delay-1000">
        🎉
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 grid grid-cols-1 mt-10 lg:mt-0 lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-20">
        {/* Text */}
        <div className="space-y-4 sm:space-y-10 text-center md:text-right">
          <div className="inline-block bg-yellow-400 px-3 sm:px-4 py-1 border-2 border-black rounded-full rotate-slight">
            <span className="font-bold text-black text-sm sm:text-base">
              🎊 أجواء احتفالية ١٠٠٪
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl text-black md:text-7xl lg:text-8xl font-black leading-tight">
            {headline}
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-black/80 font-medium leading-relaxed max-w-lg mx-auto md:mx-0">
            {subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <HeroLinks whatsApp={whatsApp} />
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full flex items-center justify-center mt-8 md:mt-0">
          <div className="relative w-full max-w-2xl aspect-square sm:aspect-square">
            <div className="absolute inset-0 bg-main-color blob-shape rotate-slight border-2 sm:border-4 border-black" />

            <div className="absolute inset-2 sm:inset-4 bg-orange-500 rounded-2xl sm:rounded-3xl rotate-slight-pos border-2 sm:border-4 border-black overflow-hidden">
              <Image
                src={image}
                alt="قهوجي الرياض"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Discount */}
            <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 bg-yellow-400 p-4 sm:p-6 border-2 sm:border-4 border-black rounded-full shadow-xl rotate-12 animate-bounce">
              <span className="text-lg sm:text-2xl font-black text-black text-center block">
                خصم
                <br />
                ٢٠٪
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
