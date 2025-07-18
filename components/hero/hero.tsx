import { ChevronRight, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <section>
            <div className="md:mt-5 xl:mt-20 px-7 md:px-20 py-12 md:py-14 2xl:px-[10rem] cursor-pointer" >
                <h1 className='font-extrabold text-3xl md:text-[4rem] hover:text-bosch_blue leading-3 inline-flex'>
                    Live #LikeABosch 
                    <ExternalLink className='md::h-12 md:w-12 -mt-4'/>
                </h1>
            </div>
            <div className='flex flex-col gap-6 md:gap-0 md:grid md:grid-cols-2 xl:grid-cols-3 2xl:px-[10rem]'>
                <Image 
                    alt='bosch-hero-section' 
                    src={'https://www.bosch.com.vn/media/like_a_bosch/20230508_live_likeabosch/07_live_likeabosch_teaser_1920x1080_res_992x558.webp'} 
                    width={800} 
                    height={450}
                    className='md:col-span-1 xl:col-span-2'
                    unoptimized
                />
                <div className='flex flex-col items-center md:items-start gap-3 md:gap-4 md:ml-14 '>
                    <Image
                        alt='bosch-hero-section'
                        src={'https://assets.bosch.com/media/global/stories/topic_worlds/hydrogen_energy/hydrogen-stage_res_400x225.webp'}
                        width={350}
                        height={200}
                        unoptimized
                    />
                    
                    <span className='inline-flex text-lg hover:cursor-pointer font-bold ml-3 md:ml-0 md:mb-4'>Hydrogen — energy for the future&nbsp;<ExternalLink className='h-5 w-5 mt-1' /></span>
                    <span className='inline-flex underline text-bosch_blue hover:cursor-pointer ml-3 md:ml-0 mb-1 md:mb-2'>Khám phá các giải pháp của chúng tôi <ChevronRight strokeWidth={1} /></span>
                    <span className='inline-flex underline text-bosch_blue hover:cursor-pointer ml-3 md:ml-0 mb-1 md:mb-2'>Nghề nghiệp <ChevronRight strokeWidth={1} /></span>
                    <span className='inline-flex underline text-bosch_blue hover:cursor-pointer ml-3 md:ml-0 mb-1 md:mb-2'>Liên hệ <ChevronRight strokeWidth={1} /></span>
                </div>
            </div>
        </section>
    )
}

export default HeroSection