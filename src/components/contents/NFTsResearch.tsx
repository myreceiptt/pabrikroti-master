// /src/components/contents/NFTsResearch.tsx

// Components libraries
import FeatureGrid from "@/components/landing/FeatureGrid";
import HeroSlider from "@/components/landing/HeroSlider";
import ParagraphText from "@/components/landing/ParagraphText";
import VideoEmbed from "@/components/landing/VideoEmbed";
import VisualLeft from "@/components/landing/VisualLeft";
import VisualRight from "@/components/landing/VisualRight";

export default function NFTsResearch() {
  return (
    <main className="grid gap-4 place-items-center">
      <HeroSlider />
      <FeatureGrid />
      <ParagraphText />
      <VisualLeft />
      <VisualRight />
      <VideoEmbed />
    </main>
  );
}
