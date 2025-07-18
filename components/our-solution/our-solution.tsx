import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import SectionHeader from '../section-header'


const Solution = () => {
    return <article className='flex flex-col gap-6 md:gap-8 even:lg:flex-row-reverse lg:flex-row'>
        <Image
            alt='bosch-hero-section'
            src={'https://assets.bosch.com/media/global/stories/topic_worlds/hydrogen_energy/hydrogen-stage_res_400x225.webp'}
            width={550}
            height={300}
            unoptimized
            className='w-full lg:w-1/2'
        />
        <div className='flex flex-col gap-2 md:gap-6 lg:gap-8 md:px-12 lg:px-0 lg:w-1/2'>
            <h3 className='font-semibold text-2xl md:text-3xl lg:text-4xl tracking-wide'>Thiết bị điện gia dụng</h3>
            <p>Là một thành viên của tập đoàn Bosch, Công ty TNHH Đồ Gia Dụng BSH (Việt Nam) phân phối chính hãng các thiết bị gia dụng chất lượng cao với công nghệ Chuẩn chất Đức. Mỗi sản phẩm của chúng tôi trước khi rời khỏi nhà máy đều được thử nghiệm và kiểm tra kỹ lưỡng, vì vậy người tiêu dùng có thể hoàn toàn tin tưởng về chất lượng cho cuộc sống hàng ngày.</p>
            <span className='inline-flex  text-bosch_blue hover:cursor-pointer'><span className='underline mb-2'>Tìm hiểu về giải pháp</span>&nbsp;<ExternalLink className='h-4 w-4 mt-1' /></span>
        </div>
      
    </article>
}

const OurSolutions = () => {
    return (
        <section className='flex flex-col gap-10 lg:gap-20'>
            <SectionHeader>Khám phá các giải pháp của chúng tôi</SectionHeader>
            <Solution />
            <Solution />
            <Solution />
            <Solution />
            <Solution />
        </section>
    )
}

export default OurSolutions