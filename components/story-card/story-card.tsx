import { ChevronRight } from 'lucide-react';
import Image from 'next/image'

function StoryCard() {
    return (
        <article className=" bg-gray-100 border border-slate-200 shadow-sm dark:bg-slate-950 dark:border-slate-800 hover:text-bosch_blue hover:cursor-pointer">
            <a href="#">
                <Image
                    src={'https://www.bosch.com.vn/media/vn/stories/20220627_cw_decoding_tomorrow/decoding_tomorrow_teaser_1920x1080_res_1280x720.webp'}
                    alt="Blog cover"
                    width={400}
                    height={250}
                    className=" object-cover w-full h-auto"
                    unoptimized
                />
            </a>
            <div className="p-5">
                <span className='text-xs'>Giải mã tương lai</span>
                <div>
                    <span className='"mb-3 font-bold text-xl flex'>Công nghệ Sáng tạo vì cuộc sống<ChevronRight size={16} className="ml-1 mt-2" /></span>
                </div>
            </div>
        </article>
    );
}

export default StoryCard