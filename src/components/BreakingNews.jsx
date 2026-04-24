import { Button } from '@heroui/react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='flex gap-3 bg-[#f3f3f3] container mx-auto p-4'>
            <Button variant='danger' className="rounded">Latest</Button>
            <Marquee pauseOnHover={true} speed={100}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptas atque iure voluptates, cum expedita vitae quaerat, minus amet quo ea. Id, aspernatur ratione dolore ad quis porro accusantium unde voluptatum! Veniam sint quo beatae deserunt totam illo cupiditate odit quaerat. Maxime ipsam, asperiores aperiam est repudiandae omnis consequuntur pariatur eaque soluta odio quaerat ullam facere cumque recusandae unde veniam cum quasi voluptates magnam quis? Repellat laborum est, nesciunt consequatur unde iure natus reprehenderit possimus deleniti sunt qui similique maiores! Recusandae illo dolor magnam itaque inventore? Quam, nesciunt rem aperiam ipsum, quo atque alias totam sapiente veniam impedit reprehenderit. Temporibus numquam illo beatae quia aut voluptatum consequatur quasi at, impedit dolores nobis, assumenda, minima debitis voluptas magni suscipit voluptatem expedita sunt corrupti soluta natus exercitationem quis laborum. Veniam distinctio deleniti explicabo. Asperiores ipsam vero sapiente soluta accusamus voluptatem minus consectetur assumenda officiis. Dolor eum eaque ipsum dolore, libero ea fugit voluptatum eos iste. Harum veritatis maiores fugiat omnis soluta reprehenderit magni distinctio quibusdam placeat architecto debitis deleniti, ipsa a! Perspiciatis rem harum ipsa quibusdam eius! Mollitia veniam nihil consequuntur ab delectus perspiciatis omnis nemo vel numquam explicabo maxime cumque cupiditate aspernatur similique libero, sint error quaerat quidem consectetur placeat ut.
            </Marquee>
        </div>
    );
};

export default BreakingNews;