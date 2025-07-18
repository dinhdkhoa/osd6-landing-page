import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero";
import News from "@/components/news";
import OurSolutions from "@/components/our-solution";
import OurStories from "@/components/our-stories";

export default function Home() {
  return (
    <>
      <Header />
      <div className="mb-10">
        <HeroSection />
      </div>
      <div className="px-4 md:px-6 xl:px-20 2xl:px-[40rem] py-0 md:py-2 xl:py-20">
        <OurSolutions />
      </div>
      <div className="px-4 md:px-6 lg:px-20 2xl:px-[40rem]  md:py-2 lg:py-20">
        <OurStories />
      </div>
      <div className="px-4 md:px-6 lg:px-20 2xl:px-[40rem] md:py-10">
        <News />
      </div>
      <ContactSection />
      <Footer />
    </>
  );
}
