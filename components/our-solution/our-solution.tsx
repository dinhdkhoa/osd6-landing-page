import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import SectionHeader from '../section-header'
import Mock from '@/lib/mock-data'
import { Button } from '../ui/button'
import { AppleCardsCarouselDemo } from '../hero/hero'

export interface SolutionProps {
    imageAlt?: string,
    img: string,
    title: string, 
    description: string
}

const SolutionFindOutMoreLink = () => {
    return (<a href="#" className='inline-flex text-bosch_blue hover:cursor-pointer' aria-label="Tìm hiểu về giải pháp thiết bị điện gia dụng của Bosch">
        <span className='mb-2 underline'>Tìm hiểu về giải pháp</span>&nbsp;<ExternalLink className='mt-1 size-4' />
    </a>)
}

const Solution = ({description, img, title, imageAlt} : SolutionProps) => {
    return <article className='flex flex-col gap-6 md:gap-8 lg:flex-row lg:items-center lg:justify-between even:lg:flex-row-reverse'>
        <Image
            alt={imageAlt ?? 'Bosch hydrogen energy solutions - clean energy for the future'}
            src={img}
            width={550}
            height={300}
            unoptimized
            className='w-full lg:flex-1 2xl:w-1/2 3xl:flex-1 shadow-lg'
        />
        <div className='flex flex-col gap-2 md:gap-6 md:px-12 lg:flex-1 lg:gap-8 lg:px-0 2xl:mb-0'>
            <div>
                <h3 className='text-2xl font-semibold tracking-wide'>{title}</h3>
                <h3 className='text-3xl font-semibold tracking-wide'>Transplan Hub Workshop</h3>
            </div>
            <p>{description}</p>
            {/* <SolutionFindOutMoreLink /> */}
            <Button variant={'secondary'} className='w-1/4 bg-bosch_blue/70 shadow-lg' >See all news</Button>
        </div>

    </article>
}

const OurSolutions = () => {
    
    return (
        <section className='flex flex-col ' aria-labelledby="solutions-heading">
            <div>
                <SectionHeader id="solutions-heading">Operational Excellence</SectionHeader>
            </div>
            {/* <div className='flex flex-col gap-12 lg:gap-20'>
                {Mock.Solutions.map((sol, i) => <Solution key={i} {...sol}/>)}
            </div> */}
            <AppleCardsCarouselDemo />

        </section>
    )
}

export default OurSolutions