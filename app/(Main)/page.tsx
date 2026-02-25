// app/page.tsx
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import { GallerySection } from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PremiumPackagesSection from "@/components/PremiumPackagesSection";
import { CurrentProjectId } from "@/lib/ProjectId";
import RatingSection from "@/components/RatingSection";
import PreventCopy from "@/components/PreventCopy";
import { FetchProjectData } from "@/lib/FetchProjectData";

export default async function HomePage() {
  const { data } = await FetchProjectData();

  return (
    <main className="overflow-x-hidden">
      <HeroSection {...data.hero} image={data.about.image ?? ""} />
      <AboutSection
        {...data.about}
        features={data.whyUs.features}
        whyUsDescription={data.whyUs.description ?? ""}
      />
      <PremiumPackagesSection
        packages={data.packages ?? []}
        whatsapp={data.hero?.whatsApp ?? ""}
      />
      <ServicesSection {...data.services} />
      <RatingSection
        projectId={CurrentProjectId}
        averageRating={data.rating?.averageRating ?? 0}
        totalRatings={data.rating?.totalRatings ?? 0}
      />
      <GallerySection gallery={data.gallery} />
      <PreventCopy />
      <ContactSection {...data.footer} whatsapp={data.hero?.whatsApp ?? ""} />
    </main>
  );
}
