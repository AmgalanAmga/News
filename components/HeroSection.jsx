import Image from "next/image";
import { HeroSectionLeft } from "./HeroSectionLeft";

export const HeroSection = () => {
  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <Image
        src={
          "https://cdn.discordapp.com/attachments/980521895487217687/1024688525922291843/brooke-cagle-cb4Dv50LN1Y-unsplash_1.jpg"
        }
        alt="heroImage"
        layout="fill"
        objectFit="cover"
      />
      <HeroSectionLeft />
    </div>
  );
};
