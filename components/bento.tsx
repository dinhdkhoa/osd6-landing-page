import React from 'react';
import { Button } from './ui/button';
import SectionHeader from './section-header';

const bentoItems = [
    {
        id: 1,
        // type: 'video',
        category: 'Integrated Logistics',
        date: '20 Aug 2025',
        description: 'Exploring the top logistics trends in the chemicals industry: supply chain diversification, supply chain visibility, IoT and more for 2025 and beyond.',
        author: 'Emma Kirsh',
        title: "Bosch 10 năm liên tiếp góp mặt trong danh sách Top 100 môi trường làm việc tốt nhất tại Việt Nam",
        videoIcon: false,
        image: "https://www.bosch.com.vn/media/vn/news/bosch_relies_on_its_strengths_as_a_technology_leader/1920x1080_main_res_400x225.webp"
    },
    {
        id: 2,
        type: 'article',
        category: 'Growth',
        date: '19 Aug 2025',
        title: 'Bosch Rexroth và Trung tâm Đổi mới sáng tạo Công nghiệp 4.0 (IIC) hợp tác kiến tạo nền tảng cho Nhà máy thông minh',
        description: null,
        image: 'https://www.bosch.com.vn/media/vn/news/smart_factories/1920x1080_main_res_400x225.webp',
        videoIcon: false,
    },
    {
        id: 3,
        type: 'article',
        category: 'Resilience',
        date: '16 Aug 2025',
        title: "Bosch Việt Nam chia sẻ những ứng dụng phát triển bền vững tại sự kiện GEFE 2024 ",
        description: null,
        image: 'https://www.bosch.com.vn/media/vn/news/gefe_2024/1920x1080_cover_res_400x225.webp',
        videoIcon: false,
    },
    {
        id: 4,
        type: 'article',
        category: 'Resilience',
        date: '14 Aug 2025',
        title: 'Tập đoàn Bosch tiếp tục khẳng định vị thế dẫn đầu công nghệ',
        description: null,
        image: 'https://www.bosch.com.vn/media/vn/news/bosch_marks_10_consecutive_years_in_vietnam_s_top_100_best_workplaces/1920x1080_main1_res_400x225.webp',
        videoIcon: false,
    },
];

// GridItem component to render each individual card
const GridItem = ({ item }: { item: any }) => {
    return (
        <div className={`
      relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-[1.01]
      ${item.id === 1 ? 'md:col-span-2 md:row-span-2 h-[48rem] md:h-full lg:row-span-2' : 'h-64'}
      ${item.id === 2 ? 'md:col-span-2 md:row-span-1 h-[48rem] md:h-full lg:row-span-1' : 'h-64'}
      bg-gray-900 flex flex-col justify-end p-6 group
      `}>
            {/* Background image */}
            <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-75 transition-transform duration-300 ease-in-out group-hover:scale-105"
            />

            {/* Overlay to create the gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/50 to-transparent z-10"></div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-start text-white h-full justify-end">
                {/* Category and date */}
                <span className={`
          inline-flex items-center gap-2 mb-2 px-3 py-1 text-xs font-semibold rounded-full
          bg-white/10 backdrop-blur-md border border-white/20
        `}>
                    {item.category} • {item.date}
                </span>

                {/* Title and description with hover effect */}
                <div className={`
            ${item.id === 1 ? 'relative mt-auto' : 'flex flex-col'}
            transform transition-all duration-500 ease-in-out
            ${item.description && 'group-hover:-translate-y-4'}
        `}>
                    <h3 className={`font-bold leading-tight ${item.id === 1 ? 'text-3xl lg:text-4xl' : 'text-xl'}`}>
                        {item.title}
                    </h3>

                    {item.description && (
                        <div className="mt-4 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                            <p>{item.description}</p>
                            <div className="mt-4 flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-gray-400"></div> {/* Placeholder for author image */}
                                <span className="font-semibold text-white">{item.author}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// Main App component
const BentoGrid = () => {
    return (
        <div className="font-sans bg-gray-900 text-gray-100 min-h-screen p-8 md:p-16 2xl:px-96 3xl:px-[40rem]" id="highlights">
            <div className="max-w-7xl mx-auto" >
                {/* Header section */}
                <div className="mb-12">
                    {/* <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-white leading-tight">Highlights of the month</h1> */}
                    <SectionHeader className='mb-10'>Highlights of the month</SectionHeader>

                    <div className='flex justify-between'>
                        <p className="text-lg text-gray-400 max-w-2xl">
                            Access the latest articles, trends and research to guide your strategy and keep you updated on what’s new in the supply chain world.
                        </p>
                        <Button variant={'secondary'} className=' bg-bosch_blue shadow-lg' >See all news</Button>
                    </div>

                </div>

                {/* Bento Grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-min lg:auto-rows-fr">
                    {bentoItems.map((item, i) => (
                        <GridItem key={i} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BentoGrid;
