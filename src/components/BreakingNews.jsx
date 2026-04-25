import { getNews } from '@/lib/data';
import { Button } from '@heroui/react';
import Marquee from 'react-fast-marquee';

const BreakingNews = async () => {

    const news = await getNews("01")

    return (
        <div className='flex gap-3 bg-[#f3f3f3] container mx-auto p-4'>
            <Button variant='danger' className="rounded">Latest</Button>
            <Marquee pauseOnHover={true} speed={100}>
                <ul>
                    {
                        news.map((n, idx) => (
                            <span key={idx} className='text-lg text-gray-800'>
                                {n.title}
                                <span className='mx-3 text-gray-600'>|</span>
                            </span>
                        ))
                    }
                </ul>
            </Marquee>
        </div>
    );
};

export default BreakingNews;