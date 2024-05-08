import { BsStar, BsStarFill } from 'react-icons/bs';

const StarRating = ({ rating }: { rating: number }) => {
  const filledStars = Math.floor(rating);
  const hasPartialStar = rating % 1 !== 0;

  return (
    <div className="flex">
      {/* {hasPartialStar && (
        <span className="star-partial">
          <BsStar className="text-yellow-400" />
        </span>
      )}
      {[...Array(5 - filledStars - (hasPartialStar ? 1 : 0))].map(
        (_, index) => (
          <span key={index}>
            <BsStar className="text-yellow-400" />
          </span>
        ),
      )} */}
      {[...Array(rating)].map((_, index) => (
        <span key={index}>
          <BsStar className="text-yellow-400" />
        </span>
      ))}
    </div>
  );
};

export default StarRating;
