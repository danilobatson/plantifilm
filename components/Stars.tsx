import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface StarsProps {
  rating: number;
}
const Stars: React.FC<StarsProps> = ({ rating }) => {
  return (
    <div>
      {/* // Render the stars based on the rating */}
      {rating >= 0 && <AiFillStar className='fs-1 text-warning' />}
      {rating >= 2 && <AiFillStar className='fs-1 text-warning' />}
      {rating >= 3 && <AiFillStar className='fs-1 text-warning' />}
      {rating >= 4 && <AiFillStar className='fs-1 text-warning' />}
      {rating >= 5 && <AiFillStar className='fs-1 text-warning' />}
      {rating < 2 && <AiOutlineStar className='fs-1 text-warning' />}
      {rating < 3 && <AiOutlineStar className='fs-1 text-warning' />}
      {rating < 4 && <AiOutlineStar className='fs-1 text-warning' />}
      {rating < 5 && <AiOutlineStar className='fs-1 text-warning' />}
    </div>
  );
};

export default Stars;
