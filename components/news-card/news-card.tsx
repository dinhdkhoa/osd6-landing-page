import { ChevronRight } from 'lucide-react';
import Image from 'next/image'

function NewsCard() {
    return (
        <div className="flex flex-col gap-3 shadow-sm hover:text-bosch_blue hover:cursor-pointer">
            <a href="#">
                <Image
                    src={'https://www.bosch.com.vn/media/vn/news/bosch_marks_10_consecutive_years_in_vietnam_s_top_100_best_workplaces/1920x1080_main1_res_800x450.webp'}
                    alt="Blog cover"
                    width={350}
                    height={200}
                    className="object-cover w-auto h-auto"
                    unoptimized
                />
            </a>
            <time className='text-xs'>02/12/2024</time>
            <p className='font-semibold text-xl'>Bosch 10 năm liên tiếp góp mặt trong danh sách Top 100 môi trường làm việc tốt nhất tại Việt Nam</p>
            <span className='flex'>Đọc thêm <ChevronRight size={16} className="ml-1 mt-1" /></span>
        </div>
    );
}

export default NewsCard