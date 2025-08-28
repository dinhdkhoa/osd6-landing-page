import BoschStats from "@/components/achivements";
import BentoGrid from "@/components/bento";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero";
import News from "@/components/news";
import OurSolutions from "@/components/our-solution";
import OurStories from "@/components/our-stories";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GS/OSD6 | Bosch tại Việt Nam",
  description: "Khám phá những công nghệ tiên tiến và giải pháp đáng tin cậy từ Bosch. Chúng tôi tạo ra công nghệ có ích cho cuộc sống tại Việt Nam.",
  keywords: "Bosch, Việt Nam, công nghệ, sáng tạo, đáng tin cậy, automotive, mobility, industrial technology, consumer goods, energy",
  openGraph: {
    title: "Công nghệ sáng tạo và đáng tin cậy | Bosch tại Việt Nam",
    description: "Khám phá những công nghệ tiên tiến và giải pháp đáng tin cậy từ Bosch. Chúng tôi tạo ra công nghệ có ích cho cuộc sống tại Việt Nam.",
    images: [
      {
        url: "https://www.bosch.com.vn/media/like_a_bosch/20230508_live_likeabosch/07_live_likeabosch_teaser_1920x1080_res_992x558.webp",
        width: 1920,
        height: 1080,
        alt: "Bosch Vietnam - Live Like A Bosch",
      },
    ],
    type: "website",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Công nghệ sáng tạo và đáng tin cậy | Bosch tại Việt Nam",
    description: "Khám phá những công nghệ tiên tiến và giải pháp đáng tin cậy từ Bosch. Chúng tôi tạo ra công nghệ có ích cho cuộc sống tại Việt Nam.",
    images: ["https://www.bosch.com.vn/media/like_a_bosch/20230508_live_likeabosch/07_live_likeabosch_teaser_1920x1080_res_992x558.webp"],
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="mb-10">
          <HeroSection />
        </div>
        <div className="px-4 md:px-6 md:py-2 lg:p-20  2xl:px-96 3xl:px-[40rem]" id='achievements'>
          {/* <OurStories /> */}
          <BoschStats />
        </div>
        {/* <div className="px-4 md:px-6 md:py-10 lg:px-20 2xl:px-96 3xl:px-[40rem]">
          <News />
        </div> */}
        <BentoGrid />
        <div className="px-4 py-0 md:px-6 md:py-2 xl:p-20 2xl:px-96 3xl:px-[40rem]" id='opex'>
          <OurSolutions />
        </div>
        {/* <ContactSection /> */}
      </main>
      <Footer />
    </>
  );
}
