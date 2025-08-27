'use client'
import { ChevronRight, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
const HeroSection = () => {
    return (
        <section>
            <div className="'flex flex-col gap-4 px-7 py-8 md:px-20 md:pb-14 2xl:px-96 3xl:px-[40rem]" >
                <h6 className="text-center text-2xl">Welcome To GS/OSD3 & GS/OSD6 Vietnam </h6>
          <h1 className='text-center text-3xl font-extralight tracking-tighter leading-3 hover:text-bosch_blue md:text-[4rem] md:mt-10'>
                    Global Service
                    {/* <ExternalLink className='md::h-12 -mt-4 md:w-12' /> */}
                </h1>
                <h1 className='text-center text-3xl font-extralight tracking-tighter leading-3 hover:text-bosch_blue md:text-[4rem] md:mt-12'>
            Operation Source To Deliver
                </h1>
            </div>
        <div className='flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-0 lg:grid-cols-4 lg:pr-10 xl:grid-cols-12 xl:gap-8 xl:pr-0 2xl:px-96 3xl:px-[40rem] mt-16'>
          <Image
            alt='bosch-hero-section'
            src={'https://assets.bosch.com/media/global/sustainability/strategy/values_and_responsibility/be-likabosch_res_1600x900.webp'}
            width={1600}
            height={900}
            className='md:col-span-1 lg:col-span-3 lg:shrink xl:col-span-7 xl:col-start-1 xl:w-full min-h-[25.5rem]'
            unoptimized

          />
          {/* <div className='flex flex-col items-center gap-3 md:ml-14 md:items-start md:gap-4 lg:col-start-4 lg:ml-0 xl:col-span-3 xl:col-start-8'>
                    <span className='mb-1 ml-3 inline-flex text-bosch_blue underline hover:cursor-pointer md:mb-2 md:ml-0'>Achivements <ChevronRight strokeWidth={1} /></span>
                    <span className='mb-1 ml-3 inline-flex text-bosch_blue underline hover:cursor-pointer md:mb-2 md:ml-0'>Hightlight of the month <ChevronRight strokeWidth={1} /></span>
                    <span className='mb-1 ml-3 inline-flex text-bosch_blue underline hover:cursor-pointer md:mb-2 md:ml-0'>OPEX <ChevronRight strokeWidth={1} /></span>
                </div> */}
          <BannerStackDemo />
        </div>

        </section>
    )
}

export default HeroSection


export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full">
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "",
    title: "Continuous Improvement",
    src: "/images/image.jfif",
    content: <DummyContent />,
  },
  {
    category: "",
    title: "Leadership",
    src: "/images/image-cH.jfif",
    content: <DummyContent />,
  },
  {
    category: "",
    title: "Transparency",
    src: "/images/image-bv.jfif",
    content: <DummyContent />,
  },

  {
    category: "",
    title: "Service Mindset",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "",
    title: "Accountability",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "",
    title: "Collaboration",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "",
    title: "Standardization",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "",
    title: "Process Orientation",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];


export type BannerItem = {
  title: string;
  imageUrl: string;
  href?: string;
  onClick?: () => void;
};

function BannerCard({ title, imageUrl, href, onClick }: BannerItem) {
  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    href ? (
      <a href={href} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-xl">
        {children}
      </a>
    ) : (
      <button
        type="button"
        onClick={onClick}
        className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-xl"
      >
        {children}
      </button>
    );

  return (
    <Wrapper>
      <div
        className="relative h-28 md:h-28 w-full overflow-hidden shadow-md group"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url(${imageUrl})` }} />
        {/* Dark overlay/gradient */}
        <div className="absolute inset-0 bg-black/40 backdrop-brightness-75 group-hover:bg-black/50 transition-colors" />

        <div className="relative z-10 flex h-full items-center justify-between px-4 md:px-6">
          <h3 className="text-white font-extrabold tracking-wide text-lg md:text-xl uppercase drop-shadow">
            {title}
          </h3>
          <ChevronRight className="text-white size-6 md:size-7 shrink-0 translate-x-0 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Wrapper>
  );
}

/**
 * Vertical stack that mirrors the provided screenshot.
 */
export function BannerStackDemo() {
  const items: BannerItem[] = [
    {
      title: "Achievements",
      imageUrl:
        "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1600&auto=format&fit=crop",
      href: "#achievements",
    },
    {
      title: "Highlights of the month",
      imageUrl:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1600&auto=format&fit=crop",
      href: "#highlights",
    },
    {
      title: "Operation Excellence",
      imageUrl:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop",
      href: "#opex",
    },
  ];

  return (
    <div className="mx-auto max-w-md md:min-w-[30rem] space-y-3 p-4 pt-0 bg-transparent">
      {items.map((item) => (
        <BannerCard key={item.title} {...item} />
      ))}
    </div>
  );
}

// ---- Optional: Export the building block for reuse in your app ----
export { BannerCard };