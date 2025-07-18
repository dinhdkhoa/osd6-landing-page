import NewsCard from "../news-card/news-card"
import SectionHeader from "../section-header"
import { Button } from "../ui/button"

const NewsGrid = () => {
    return <>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
        </div>
        <div className="mt-10 w-full flex justify-center">
            <Button variant="outline" className='border-bosch_blue text-bosch_blue rounded-none hover:text-bosch_blue hover:bg-blue-200'>Tải thêm</Button>
        </div>
    </>
}

const News = () => {
    return (
        <section>
            <SectionHeader className='mb-10'>Tin tức</SectionHeader>
            <NewsGrid />
        </section>
    )
}

export default News